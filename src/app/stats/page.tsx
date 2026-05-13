"use client";

import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './stats.module.css';
import { MOCK_QUESTIONS } from "@/lib/questions";

const COLORS = ['#d1cbc1', '#8c877d', '#55524c', '#33312d', '#1a1917', '#000000'];

export default function StatsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(resData => {
        if (resData.error) throw new Error(resData.error);
        setData(resData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className={styles.loading}>LOADING DATA...</div>;
  if (error) return <div className={styles.error}>ERROR: {error}</div>;
  if (!data || data.totalRespondents === 0) return <div className={styles.container}><h1>尚無數據 (NO DATA)</h1></div>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => window.location.href='/'}>◀ 返回測驗</button>
        <h1 className={styles.title}>統計數據 SYSTEM STATS</h1>
      </header>

      <div className={styles.grid}>
        {/* 總人數與性別比例 */}
        <div className={styles.card}>
          <h2>總填寫人數: {data.totalRespondents}</h2>
          <div style={{ marginBottom: '15px', color: '#dad4c6', fontSize: '16px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {data.genderStats.map((g: any, i: number) => (
              <span key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '4px' }}>
                {g.name}: {g.value} 人 ({((g.value / data.totalRespondents) * 100).toFixed(1)}%)
              </span>
            ))}
          </div>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data.genderStats}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                >
                  {data.genderStats.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#dad4c6', color: '#1a1a1a' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 每一題的長條圖 */}
        {Object.keys(data.questionStats).map((qKey, index) => {
          const qData = data.questionStats[qKey];
          if (!qData || qData.length === 0) return null;
          
          const questionInfo = MOCK_QUESTIONS[index];
          const questionTitle = questionInfo ? questionInfo.text["zh"] : `Question ${index + 1}`;
          
          // 將選項 ID 轉換為實際文字，並加上選擇人數
          const formattedData = qData.map((d: any) => {
            let optionText = d.name;
            if (questionInfo) {
               const foundOpt = questionInfo.options.find(o => o.id === d.name);
               if (foundOpt) {
                 optionText = foundOpt.text["zh"];
               }
            }
            return {
              ...d,
              displayName: `${optionText} (${d.value}人)`
            };
          });
          
          return (
            <div key={qKey} className={styles.card} style={{ gridColumn: "1 / -1" }}>
              <h2>Q{index + 1}: {questionTitle}</h2>
              <div className={styles.chartContainer} style={{ height: "300px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={formattedData} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="displayName" type="category" width={300} tick={{ fill: '#dad4c6', fontSize: 14 }} />
                    <Tooltip cursor={{ fill: 'rgba(255,255,255,0.1)' }} contentStyle={{ backgroundColor: '#1a1a1a', color: '#dad4c6' }} />
                    <Bar dataKey="value" fill="#d1cbc1" radius={[0, 4, 4, 0]}>
                      {formattedData.map((entry: any, i: number) => (
                        <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
