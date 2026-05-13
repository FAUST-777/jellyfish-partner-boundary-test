import { NextResponse } from "next/server";
import { createPool } from '@vercel/postgres';

export const revalidate = 0; // Disable cache for stats

export async function GET() {
  try {
    const dbUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.STORAGE_URL || process.env.NEON_DATABASE_URL;

    if (!dbUrl) {
      // Mock data fallback for local development
      return NextResponse.json({
        totalRespondents: 152,
        genderStats: [
          { name: '男性', value: 45 },
          { name: '女性', value: 98 },
          { name: '其他', value: 9 }
        ],
        questionStats: {
          q1: [ { name: 'a1', value: 90 }, { name: 'a2', value: 40 }, { name: 'a3', value: 22 } ],
          q2: [ { name: 'b1', value: 50 }, { name: 'b2', value: 60 }, { name: 'b3', value: 30 }, { name: 'b4', value: 12 } ],
          q3: [ { name: 'c1', value: 30 }, { name: 'c2', value: 80 }, { name: 'c3', value: 20 }, { name: 'c4', value: 22 } ],
          q4: [ { name: 'd1', value: 10 }, { name: 'd2', value: 100 }, { name: 'd3', value: 15 }, { name: 'd4', value: 27 } ],
          q5: [ { name: 'e1', value: 40 }, { name: 'e2', value: 60 }, { name: 'e3', value: 30 }, { name: 'e4', value: 22 } ],
          q6: [ { name: 'f1', value: 20 }, { name: 'f2', value: 90 }, { name: 'f3', value: 10 }, { name: 'f4', value: 32 } ],
          q7: [ { name: 'g1', value: 15 }, { name: 'g2', value: 85 }, { name: 'g3', value: 20 }, { name: 'g4', value: 32 } ],
          q8: [ { name: 'h1', value: 25 }, { name: 'h2', value: 75 }, { name: 'h3', value: 30 }, { name: 'h4', value: 22 } ],
          q9: [ { name: 'i1', value: 35 }, { name: 'i2', value: 80 }, { name: 'i3', value: 37 } ],
          q10: [ { name: 'j1', value: 5 }, { name: 'j2', value: 110 }, { name: 'j3', value: 15 }, { name: 'j4', value: 10 }, { name: 'j5', value: 12 } ],
          q11: [ { name: 'k1', value: 20 }, { name: 'k2', value: 60 }, { name: 'k3', value: 40 }, { name: 'k4', value: 32 } ],
          q12: [ { name: 'l1', value: 5 }, { name: 'l2', value: 130 }, { name: 'l3', value: 8 }, { name: 'l4', value: 4 }, { name: 'l5', value: 3 }, { name: 'l6', value: 2 } ],
        }
      });
    }

    const pool = createPool({ connectionString: dbUrl });

    // 1. Fetch all rows
    const res = await pool.sql`SELECT gender, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12 FROM survey_responses`;
    const rows = res.rows;
    const totalRespondents = rows.length;

    if (totalRespondents === 0) {
      return NextResponse.json({ totalRespondents: 0, genderStats: [], questionStats: {} });
    }

    // 2. Aggregate data in memory
    const genderMap: Record<string, number> = { male: 0, female: 0, other: 0, unknown: 0 };
    const qCols = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12'];
    const qStatsMap: Record<string, Record<string, number>> = {};
    qCols.forEach(q => qStatsMap[q] = {});

    rows.forEach(row => {
      // Gender aggregation
      const g = row.gender || 'unknown';
      genderMap[g] = (genderMap[g] || 0) + 1;

      // Answers aggregation
      qCols.forEach(q => {
        const ans = row[q];
        if (ans) {
          qStatsMap[q][ans] = (qStatsMap[q][ans] || 0) + 1;
        }
      });
    });

    const genderStats = [
      { name: '男性', value: genderMap.male || 0 },
      { name: '女性', value: genderMap.female || 0 },
      { name: '其他', value: (genderMap.other || 0) + (genderMap.unknown || 0) }
    ].filter(g => g.value > 0);

    const questionStats: Record<string, any[]> = {};
    for (const q of qCols) {
      questionStats[q] = Object.keys(qStatsMap[q]).map(opt => ({
        name: opt,
        value: qStatsMap[q][opt]
      })).sort((a, b) => b.value - a.value); // Sort by popularity
    }

    return NextResponse.json({
      totalRespondents,
      genderStats,
      questionStats
    });

  } catch (err) {
    console.error("Stats API Error:", err);
    return NextResponse.json({ error: "伺服器錯誤" }, { status: 500 });
  }
}
