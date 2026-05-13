import { NextResponse } from "next/server";
import { createPool } from '@vercel/postgres';

// Fallback for local memory storage (if DB is not yet connected)
const localVisitors = new Set<string>();

export async function POST(req: Request) {
  try {
    const { answers, score, gender, visitorId } = await req.json();

    if (!visitorId) {
      return NextResponse.json({ error: "Missing visitor ID" }, { status: 400 });
    }
    
    const dbUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.STORAGE_URL || process.env.NEON_DATABASE_URL;

    // Check if Postgres is configured
    if (!dbUrl) {
      console.warn("Database URL is not set. Falling back to in-memory storage.");
      localVisitors.add(visitorId);
      return NextResponse.json({ success: true, message: "Saved to local memory (Upsert)" });
    }

    const pool = createPool({ connectionString: dbUrl });

    // 1. Create table if not exists
    await pool.sql`
      CREATE TABLE IF NOT EXISTS survey_responses (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        visitor_id VARCHAR(255) UNIQUE NOT NULL,
        gender VARCHAR(50),
        total_score INT,
        q1 VARCHAR(50), q2 VARCHAR(50), q3 VARCHAR(50), q4 VARCHAR(50), q5 VARCHAR(50), q6 VARCHAR(50),
        q7 VARCHAR(50), q8 VARCHAR(50), q9 VARCHAR(50), q10 VARCHAR(50), q11 VARCHAR(50), q12 VARCHAR(50),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Upsert data (Insert or Update if visitor_id exists)
    await pool.sql`
      INSERT INTO survey_responses (
        visitor_id, gender, total_score, 
        q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12
      ) VALUES (
        ${visitorId}, ${gender || 'unknown'}, ${score},
        ${answers[0] || null}, ${answers[1] || null}, ${answers[2] || null}, ${answers[3] || null}, 
        ${answers[4] || null}, ${answers[5] || null}, ${answers[6] || null}, ${answers[7] || null}, 
        ${answers[8] || null}, ${answers[9] || null}, ${answers[10] || null}, ${answers[11] || null}
      )
      ON CONFLICT (visitor_id) DO UPDATE SET
        gender = EXCLUDED.gender,
        total_score = EXCLUDED.total_score,
        q1 = EXCLUDED.q1, q2 = EXCLUDED.q2, q3 = EXCLUDED.q3, q4 = EXCLUDED.q4,
        q5 = EXCLUDED.q5, q6 = EXCLUDED.q6, q7 = EXCLUDED.q7, q8 = EXCLUDED.q8,
        q9 = EXCLUDED.q9, q10 = EXCLUDED.q10, q11 = EXCLUDED.q11, q12 = EXCLUDED.q12,
        created_at = CURRENT_TIMESTAMP;
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("API Error:", error);
    if (error.code === '23505') { // Unique violation in Postgres
       return NextResponse.json({ error: "您已經填寫過此問卷！" }, { status: 403 });
    }
    return NextResponse.json({ error: "伺服器錯誤" }, { status: 500 });
  }
}
