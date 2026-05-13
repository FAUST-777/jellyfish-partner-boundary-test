"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import fpPromise from "@fingerprintjs/fingerprintjs";
import { MOCK_QUESTIONS, calculateResult } from "@/lib/questions";

export default function SurveyApp() {
  const [lang, setLang] = useState<"zh" | "en" | "ja">("zh");
  const [step, setStep] = useState<"loading" | "welcome" | "gender" | "question" | "submitting" | "result" | "error">("loading");
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [gender, setGender] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [resultData, setResultData] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const t = {
    zh: { 
      title: "伴侶邊界感測試", 
      desc: "【測驗角度】測試「您自己」對伴侶各種行為的邊界容許度\n看看您的底線到底在哪裡！\n\n【本測驗用法】請把分數跟伴侶或朋友去比較\n高低差太多，容易觀念不合吵架", 
      start: "來啊!測就測!",
      hint: "約1分鐘 / 共12題 / 方便大家吵架",
      genderTitle: "我的性別：",
      male: "男性",
      female: "女性",
      other: "其他",
      viewStats: "查看全體統計資料"
    },
    en: { 
      title: "Partner Boundaries Test", 
      desc: "【Perspective】Test *your own* tolerance for your partner's boundaries.\nLet's see where your bottom line really is!\n\n【How to use】Compare your score with your partner or friends.\nA huge score gap means you're likely to clash over core values.", 
      start: "Bring it on! Let's test!",
      hint: "About 1 min / 12 questions / Warning: may cause arguments",
      genderTitle: "My Gender:",
      male: "Male",
      female: "Female",
      other: "Other",
      viewStats: "View Global Statistics"
    },
    ja: { 
      title: "恋人境界線テスト", 
      desc: "【視点】「自分自身」が恋人の行動をどこまで許せるかの境界線テストです。\nあなたの本当の限界ラインを測ります！\n\n【使い方】結果の点数を恋人や友達と比べてみてください。\n点数差が大きすぎる場合、価値観の違いで喧嘩になりやすいです。", 
      start: "かかってこい！テスト開始",
      hint: "約1分 / 全12問 / ※喧嘩注意",
      genderTitle: "私の性別：",
      male: "男性",
      female: "女性",
      other: "その他",
      viewStats: "全体の統計データを見る"
    }
  };

  useEffect(() => {
    // 進入時直接設為 welcome，允許重複填寫
    setStep("welcome");
  }, [lang]);

  const handleStart = () => {
    if (!gender) {
      alert(lang === "en" ? "Please select your gender first!" : lang === "ja" ? "性別を選択してください！" : "請先選擇性別！");
      return;
    }
    setStep("question");
  };

  const handleAnswer = async (optId: string, score: number) => {
    const newAnswers = [...answers, optId];
    setAnswers(newAnswers);
    const newScore = totalScore + score;
    setTotalScore(newScore);

    if (currentQIndex + 1 < MOCK_QUESTIONS.length) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      // 完成所有題目，準備送出
      setStep("submitting");
      await submitSurvey(newAnswers, newScore);
    }
  };

  const handleBack = () => {
    if (currentQIndex > 0) {
      const newAnswers = answers.slice(0, -1);
      setAnswers(newAnswers);
      setCurrentQIndex(currentQIndex - 1);
      let newScore = 0;
      newAnswers.forEach((ansId, index) => {
        const q = MOCK_QUESTIONS[index];
        const opt = q.options.find(o => o.id === ansId);
        if (opt) newScore += opt.score;
      });
      setTotalScore(newScore);
    } else {
      setStep("welcome");
      setAnswers([]);
      setTotalScore(0);
    }
  };

  const submitSurvey = async (finalAnswers: string[], finalScore: number) => {
    try {
      // 獲取裝置指紋
      const fp = await fpPromise.load();
      const result = await fp.get();
      const visitorId = result.visitorId;

      // 呼叫 API 送出資料
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: finalAnswers, score: finalScore, gender, visitorId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Error");
        setStep("error");
        return;
      }

      // 成功，顯示結果 (可重複填寫)
      setResultData(calculateResult(finalScore));
      setStep("result");
    } catch (err) {
      console.error(err);
      setErrorMsg("Network Error");
      setStep("error");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* 多語系切換器 (Language Switcher) */}
        <div className={styles.langSwitcher}>
          <button className={`${styles.langBtn} ${lang === "zh" ? styles.active : ""}`} onClick={() => setLang("zh")}>繁</button>
          <button className={`${styles.langBtn} ${lang === "en" ? styles.active : ""}`} onClick={() => setLang("en")}>EN</button>
          <button className={`${styles.langBtn} ${lang === "ja" ? styles.active : ""}`} onClick={() => setLang("ja")}>JP</button>
        </div>

        {step === "loading" && <div className={styles.loading}>LOADING...</div>}

        {step === "welcome" && (
          <>
            <img src="/images/real_cat.png" alt="Judge Cat" className={styles.heroImage} />
            <h1 className={styles.title}>{t[lang].title}</h1>
            <p className={styles.desc}>{t[lang].desc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
            
            <div style={{ marginTop: '20px', marginBottom: '20px', width: '100%' }}>
              <h3 style={{ marginBottom: '15px', color: '#dad4c6', fontSize: '18px' }}>{t[lang].genderTitle}</h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  className={`${styles.optionBtn} ${gender === 'female' ? styles.activeGender : ''}`} 
                  onClick={() => setGender('female')}
                  style={{ flex: 1, padding: '12px 10px', minHeight: 'auto' }}
                >
                  A. {t[lang].female}
                </button>
                <button 
                  className={`${styles.optionBtn} ${gender === 'male' ? styles.activeGender : ''}`} 
                  onClick={() => setGender('male')}
                  style={{ flex: 1, padding: '12px 10px', minHeight: 'auto' }}
                >
                  B. {t[lang].male}
                </button>
                <button 
                  className={`${styles.optionBtn} ${gender === 'other' ? styles.activeGender : ''}`} 
                  onClick={() => setGender('other')}
                  style={{ flex: 1, padding: '12px 10px', minHeight: 'auto' }}
                >
                  C. {t[lang].other}
                </button>
              </div>
            </div>

            <button className={styles.startButton} onClick={handleStart}>
              {t[lang].start}
            </button>
            <p className={styles.hint}>{t[lang].hint}</p>
          </>
        )}

        {step === "question" && (
          <>
            <div className={styles.progressContainer}>
              <div style={{ marginBottom: '15px', textAlign: 'left' }}>
                <button onClick={handleBack} style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '14px', padding: '0', display: 'flex', alignItems: 'center', opacity: 0.8, fontWeight: 'bold' }}>
                  ◀ {lang === 'en' ? 'Back' : lang === 'ja' ? '戻る' : '回上一頁重填'}
                </button>
              </div>
              <div className={styles.progressInfo}>
                <span>Question {currentQIndex + 1} / {MOCK_QUESTIONS.length}</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${(currentQIndex / MOCK_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <h2 className={styles.questionText}>{MOCK_QUESTIONS[currentQIndex].text[lang]}</h2>
            <div className={styles.options} key={`q-${currentQIndex}`}>
              {MOCK_QUESTIONS[currentQIndex].options.map((opt) => (
                <button
                  key={opt.id}
                  className={styles.optionBtn}
                  onClick={() => handleAnswer(opt.id, opt.score)}
                >
                  {opt.text[lang]}
                </button>
              ))}
            </div>
          </>
        )}

        {step === "submitting" && (
          <div className={styles.loading}>ANALYZING DATA...</div>
        )}

        {step === "result" && resultData && (
          <>
            <h2 className={styles.resultTitle} style={{ marginBottom: '10px', fontSize: '24px', fontWeight: 'bold' }}>{resultData.name[lang]}</h2>
            <div style={{ marginBottom: '20px', fontSize: '18px', color: '#ffb700', fontWeight: 'bold' }}>
              {lang === "zh" ? "邊界指數: " : lang === "en" ? "Boundary Index: " : "境界線指数: "} {totalScore}
            </div>
            <img src={resultData.image} alt={resultData.name[lang]} className={styles.heroImage} style={{ marginBottom: '25px', boxShadow: '0 0 15px rgba(255, 140, 0, 0.2)' }} />
            <div className={styles.resultDesc} style={{ textAlign: 'left', lineHeight: '1.8' }}>
              {resultData.desc[lang].split('\n').map((line: string, i: number) => <span key={i}>{line}<br/><br/></span>)}
            </div>
            
            <button className={styles.startButton} onClick={() => window.location.href = '/stats'} style={{ marginTop: '30px', textAlign: 'center' }}>
              {t[lang].viewStats}
            </button>
            <button className={styles.startButton} onClick={() => window.location.reload()} style={{ marginTop: '15px', textAlign: 'center' }}>
              {lang === "en" ? "Retake Test" : lang === "ja" ? "もう一度テストする" : "再測一次"}
            </button>
          </>
        )}

        {step === "error" && (
          <div className={styles.errorMsg}>{errorMsg}</div>
        )}
      </div>
      
      <div className={styles.footer}>製作者: WL_Doge</div>
    </div>
  );
}
