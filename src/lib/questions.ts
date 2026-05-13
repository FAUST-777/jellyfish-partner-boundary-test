export type LocalizedText = {
  zh: string;
  en: string;
  ja: string;
};

export type Question = {
  id: string;
  text: LocalizedText;
  options: { id: string; text: LocalizedText; score: number }[];
};

export const MOCK_QUESTIONS: Question[] = [
  {
    id: "q1",
    text: {
      zh: "能否接受另一半，單獨跟異性去吃飯？",
      en: "Can you accept your partner having a one-on-one meal with someone of the opposite sex?",
      ja: "恋人が異性と二人きりで食事に行くことを許せますか？"
    },
    options: [
      { id: "a1", text: { zh: "可以", en: "Yes, it's fine.", ja: "許せる" }, score: 0 },
      { id: "a2", text: { zh: "不行", en: "No, absolutely not.", ja: "許せない" }, score: 1 },
      { id: "a3", text: { zh: "看是誰，認識知道絕對不會怎樣的才可以", en: "It depends on who it is, only if I know them and trust them.", ja: "相手による。絶対に何も起きないとわかっている知り合いならOK" }, score: 0.5 },
    ]
  },
  {
    id: "q2",
    text: {
      zh: "能否接受另一半，單獨跟異性逛街 / 看電影？",
      en: "Can you accept your partner going shopping or watching a movie alone with someone of the opposite sex?",
      ja: "恋人が異性と二人きりで買い物や映画に行くことを許せますか？"
    },
    options: [
      { id: "b1", text: { zh: "可以啊 我超佛", en: "Yes, I'm super chill about it.", ja: "全然OK。私は超寛大だから" }, score: 0 },
      { id: "b2", text: { zh: "不行找死！", en: "No way, that's a death wish!", ja: "絶対ダメ、死にたいの！？" }, score: 4 },
      { id: "b3", text: { zh: "看是誰，認識知道絕對不會怎樣的才可以", en: "Depends on who it is, only if I know them and trust nothing will happen.", ja: "相手による。絶対に何も起きないとわかっている知り合いならOK" }, score: 2 },
      { id: "b4", text: { zh: "可以，但我會一樣找異性做同樣的事", en: "Yes, but I'll do the exact same thing with someone of the opposite sex.", ja: "いいよ、でも私も同じように他の異性と同じことをするけどね" }, score: 1 },
    ]
  },
  {
    id: "q3",
    text: {
      zh: "能否接受另一半，單獨跟異性坐機車後座或是載人？",
      en: "Can you accept your partner riding on the back of a scooter with someone of the opposite sex, or giving them a ride?",
      ja: "恋人が異性とバイクに二人乗りすること（後ろに乗る、または乗せる）を許せますか？"
    },
    options: [
      { id: "c1", text: { zh: "可以啊", en: "Yes, no problem.", ja: "全然OK" }, score: 0 },
      { id: "c2", text: { zh: "不行！我來載 或我叫UBER", en: "No way! I'll give them a ride or call an Uber.", ja: "絶対ダメ！私が乗せるか、Uberを呼ぶ！" }, score: 3 },
      { id: "c3", text: { zh: "看是誰，認識知道絕對不會怎樣的才可以", en: "Depends on who it is, only if I know them and trust nothing will happen.", ja: "相手による。絶対に何も起きないとわかっている知り合いならOK" }, score: 1.5 },
      { id: "c4", text: { zh: "可以，但是坐後座要抓手把 / 載人禁止對方環抱", en: "Yes, but they must hold the grab rail on the back / No hugging if giving a ride.", ja: "いいけど、後ろに乗るならグリップを握ること。乗せる場合は相手が抱きつくのは禁止" }, score: 2 },
    ]
  },
  {
    id: "q4",
    text: {
      zh: "能否接受另一半，對其他異性秒讀/秒讚/每則都留言回？",
      en: "Can you accept your partner instantly replying, liking, or commenting on every post of someone of the opposite sex?",
      ja: "恋人が特定の異性のメッセージに即レスしたり、すべての投稿に即いいねやコメントをすることを許せますか？"
    },
    options: [
      { id: "d1", text: { zh: "可以", en: "Yes, it's fine.", ja: "許せる" }, score: 0 },
      { id: "d2", text: { zh: "不行", en: "No, absolutely not.", ja: "許せない" }, score: 3 },
      { id: "d3", text: { zh: "看是誰，認識知道絕對不會怎樣的才可以", en: "Depends on who it is, only if I know them and trust nothing will happen.", ja: "相手による。絶対に何も起きないとわかっている知り合いならOK" }, score: 1.5 },
      { id: "d4", text: { zh: "偶爾可以 / 太頻繁絕對有鬼", en: "Occasionally is fine, but if it's too frequent, there's definitely something suspicious going on.", ja: "たまにならいいけど、頻繁すぎるのは絶対に怪しい" }, score: 2 },
    ]
  },
  {
    id: "q5",
    text: {
      zh: "能否接受另一半，跟異性講電話講很久？",
      en: "Can you accept your partner having long phone conversations alone with someone of the opposite sex?",
      ja: "恋人が異性と長電話をすることを許せますか？"
    },
    options: [
      { id: "e1", text: { zh: "可以", en: "Yes, it's fine.", ja: "許せる" }, score: 0 },
      { id: "e2", text: { zh: "不行", en: "No, absolutely not.", ja: "許せない" }, score: 3 },
      { id: "e3", text: { zh: "看是誰，認識知道絕對不會怎樣的才可以", en: "Depends on who it is, only if I know them and trust nothing will happen.", ja: "相手による。絶対に何も起きないとわかっている知り合いならOK" }, score: 1.5 },
      { id: "e4", text: { zh: "通常不行，除非討論公事 且要在身邊聽內容", en: "Usually no, unless it's strictly for work AND they let me hear the conversation.", ja: "基本ダメ。仕事の話で、かつ私のそばで内容を聞かせるならOK" }, score: 2.5 },
    ]
  },
  {
    id: "q6",
    text: {
      zh: "能否接受另一半，跟異性肢體接觸：摸頭/捏臉/搭肩？",
      en: "Can you accept your partner having physical contact with someone of the opposite sex (patting their head, pinching their cheek, or putting an arm around their shoulder)?",
      ja: "恋人が異性とスキンシップを取ること（頭をなでる、ほっぺを引っ張る、肩を組むなど）を許せますか？"
    },
    options: [
      { id: "f1", text: { zh: "可以", en: "Yes, it's fine.", ja: "許せる" }, score: 0 },
      { id: "f2", text: { zh: "不行", en: "No, absolutely not.", ja: "許せない" }, score: 4 },
      { id: "f3", text: { zh: "看是誰，認識知道絕對不會怎樣的才可以", en: "Depends on who it is, only if I know them and trust nothing will happen.", ja: "相手による。絶対に何も起きないとわかっている知り合いならOK" }, score: 2 },
      { id: "f4", text: { zh: "看場合，偶爾幾次可以 太頻繁就是有鬼", en: "Depends on the situation. Once in a while is okay, but if it's too frequent, it's suspicious.", ja: "状況による。たまにならいいけど、頻繁すぎるのは絶対に怪しい" }, score: 2.5 },
    ]
  },
  {
    id: "q7",
    text: {
      zh: "能否接受另一半，對異性的要求「隨 Call 隨到」？",
      en: "Can you accept your partner being at the beck and call of someone of the opposite sex (going to them whenever they call)?",
      ja: "恋人が異性から呼び出されたら、いつでもすぐ駆けつけることを許せますか？"
    },
    options: [
      { id: "g1", text: { zh: "可以", en: "Yes, it's fine.", ja: "許せる" }, score: 0 },
      { id: "g2", text: { zh: "不行", en: "No, absolutely not.", ja: "許せない" }, score: 4 },
      { id: "g3", text: { zh: "看是誰，認識知道絕對不會怎樣的才可以", en: "Depends on who it is, only if I know them and trust nothing will happen.", ja: "相手による。絶対に何も起きないとわかっている知り合いならOK" }, score: 2 },
      { id: "g4", text: { zh: "如果是生命垂危一次那可以，其他都有鬼", en: "If it's a life-or-death emergency just once, fine. Anything else is definitely suspicious.", ja: "命に関わる緊急事態が一度だけならいいけど、それ以外は絶対に怪しい" }, score: 3 },
    ]
  },
  {
    id: "q8",
    text: {
      zh: "能否接受另一半，跟某些異性有「彼此才知道的秘密」？",
      en: "Can you accept your partner having secrets that only they and someone of the opposite sex know about?",
      ja: "恋人と特定の異性の間だけで共有している秘密があることを許せますか？"
    },
    options: [
      { id: "h1", text: { zh: "可以", en: "Yes, it's fine.", ja: "許せる" }, score: 0 },
      { id: "h2", text: { zh: "不行 / 在一起就要坦誠說", en: "No, we should be completely honest with each other.", ja: "許せない。付き合っているなら正直に話すべき" }, score: 4 },
      { id: "h3", text: { zh: "看是誰，認識知道絕對不會怎樣的才可以", en: "Depends on who it is, only if I know them and trust nothing will happen.", ja: "相手による。絶対に何も起きないとわかっている知り合いならOK" }, score: 2 },
      { id: "h4", text: { zh: "看是什麼秘密，一起殺人那種可以不用說，跟誰有一腿那種一定要說", en: "Depends on the secret. If they murdered someone together, they don't have to tell me. If they're sleeping around, they definitely must tell me.", ja: "秘密の内容による。一緒に人を殺したとかなら言わなくていいけど、誰かと浮気したとかなら絶対に言うべき" }, score: 3 },
    ]
  },
  {
    id: "q9",
    text: {
      zh: "能否接受另一半，單獨跟異性去喝酒/看夜景/失戀喝酒？",
      en: "Can you accept your partner going drinking, watching the night view, or drinking to get over a breakup alone with someone of the opposite sex?",
      ja: "恋人が異性と二人きりで飲みに行ったり、夜景を見に行ったり、失恋のやけ酒に付き合うことを許せますか？"
    },
    options: [
      { id: "i1", text: { zh: "可以", en: "Yes, it's fine.", ja: "許せる" }, score: 0 },
      { id: "i2", text: { zh: "不行", en: "No, absolutely not.", ja: "許せない" }, score: 3 },
      { id: "i3", text: { zh: "看是誰，認識知道絕對不會怎樣的才可以", en: "Depends on who it is, only if I know them and trust nothing will happen.", ja: "相手による。絶対に何も起きないとわかっている知り合いならOK" }, score: 1 },
    ]
  },
  {
    id: "q10",
    text: {
      zh: "能否接受另一半，單獨跟異性同一房間過夜(出差/出去玩)？",
      en: "Can you accept your partner staying overnight in the same room alone with someone of the opposite sex (e.g., business trip or traveling)?",
      ja: "恋人が異性と二人きりで同じ部屋に泊まること（出張や旅行など）を許せますか？"
    },
    options: [
      { id: "j1", text: { zh: "可以", en: "Yes, it's fine.", ja: "許せる" }, score: -3 },
      { id: "j2", text: { zh: "不行，這太誇張了喔", en: "No, that's way too much.", ja: "許せない、それはやりすぎ" }, score: 5 },
      { id: "j3", text: { zh: "看是誰，認識知道絕對不會怎樣的才可以", en: "Depends on who it is, only if I know them and trust nothing will happen.", ja: "相手による。絶対に何も起きないとわかっている知り合いならOK" }, score: 0 },
      { id: "j4", text: { zh: "對方是同性戀才可以", en: "Only if the other person is homosexual.", ja: "相手が同性愛者ならOK" }, score: 1 },
      { id: "j5", text: { zh: "好啊～要全程直播才可以", en: "Sure, but they have to livestream the entire time.", ja: "いいよ、でも一晩中ライブ配信するならね" }, score: 2 },
    ]
  },
  {
    id: "q11",
    text: {
      zh: "能否接受另一半，單獨跟異性去商業社交？(類似直銷/業務/保險...)",
      en: "Can you accept your partner having one-on-one business networking with someone of the opposite sex (e.g., MLM, sales, insurance) in private or public spaces?",
      ja: "恋人が異性と二人きりでビジネスの付き合い（営業や保険など、個室や公共の場を問わず）をすることを許せますか？"
    },
    options: [
      { id: "k1", text: { zh: "可以", en: "Yes, it's fine.", ja: "許せる" }, score: -1 },
      { id: "k2", text: { zh: "不行", en: "No, absolutely not.", ja: "許せない" }, score: 3 },
      { id: "k3", text: { zh: "不太可以，很可能發生什麼事不知道，但不想阻止工作", en: "Not really, because you never know what might happen, but I don't want to get in the way of their work.", ja: "あまり許せない。何が起きるか分からないから。でも相手の仕事の邪魔はしたくない" }, score: 2 },
      { id: "k4", text: { zh: "絕對不行！換工作或是我養妳(你)", en: "Absolutely not! Change jobs, or I'll support you financially.", ja: "絶対ダメ！転職して！でなきゃ私が養う！" }, score: 4 },
    ]
  },
  {
    id: "q12",
    text: {
      zh: "能否接受另一半，單獨跟異性去親密行為？",
      en: "Can you accept your partner having sex with someone of the opposite sex?",
      ja: "恋人が異性と肉体関係を持つこと（セックス）を許せますか？"
    },
    options: [
      { id: "l1", text: { zh: "可以，我開放式關係", en: "Yes, we are in an open relationship.", ja: "許せる、私たちはオープン・リレーションシップだから" }, score: -5 },
      { id: "l2", text: { zh: "不行！！！", en: "No way!!!", ja: "絶対ダメ！！！" }, score: 10 },
      { id: "l3", text: { zh: "有收錢分我就可以", en: "Only if they get paid and share the money with me.", ja: "お金をもらって私に分けてくれるならOK" }, score: 0 },
      { id: "l4", text: { zh: "我有加入就可以", en: "Only if I can join in.", ja: "私も参加できるならOK" }, score: 0.5 },
      { id: "l5", text: { zh: "可以，我們有經營成人內容平台是日常工作", en: "Yes, we run an OnlyFans account together, it's just business.", ja: "許せる、一緒にOnlyFansを運営してるから日常業務だよ" }, score: -1 },
      { id: "l6", text: { zh: "可以，我有特殊癖好喜歡在旁邊看", en: "Yes, I have a specific fetish and like to watch.", ja: "許せる、特殊な性癖があって横で見るのが好きだから" }, score: -2 },
    ]
  }
];

const OUTCOMES = [
  {
    min: -99, max: -7,
    image: "/images/jellyfish_01.png",
    name: { zh: "海月水母 (Moon Jellyfish)", en: "Moon Jellyfish", ja: "ミズクラゲ" },
    desc: {
      zh: "【無害 / 佛系 / 包容型】\n特性：透明柔軟，毒性極低對人幾乎無害。適應力極強。\n象徵：溫柔、透明度高、沒有心機，對伴侶的界線像水一樣包容。",
      en: "【Harmless & Chill】\nTrait: Transparent and soft, virtually harmless.\nSymbol: Gentle and extremely forgiving. Your boundaries are as fluid as water.",
      ja: "【無害・仏系・包容型】\n特徴：透明で柔らかく、無害。\n象徴：優しくて計算高くなく、水のように全てを包み込む。"
    }
  },
  {
    min: -6, max: -4,
    image: "/images/jellyfish_02.png",
    name: { zh: "蛋黃水母 (Fried Egg Jellyfish)", en: "Fried Egg Jellyfish", ja: "サムクラゲ" },
    desc: {
      zh: "【無害 / 佛系 / 包容型】\n特性：外觀就像一顆漂浮在海裡的荷包蛋，常慵懶地在淺海曬太陽。\n象徵：隨性、慵懶，對什麼事都看得很開，覺得「有什麼關係嘛」。",
      en: "【Harmless & Chill】\nTrait: Looks like a floating fried egg, sunbathing lazily.\nSymbol: Casual and relaxed. You easily shrug off boundaries.",
      ja: "【無害・仏系・包容型】\n特徴：目玉焼きのように見え、浅瀬でのんびりしている。\n象徴：適当で怠け者。「まあいいか」とすべてを受け入れる。"
    }
  },
  {
    min: -3, max: -2,
    image: "/images/jellyfish_03.png",
    name: { zh: "燈塔水母 (Immortal Jellyfish)", en: "Immortal Jellyfish", ja: "ベニクラゲ" },
    desc: {
      zh: "【無害 / 佛系 / 包容型】\n特性：唯一能「返老還童」的生物，理論上壽命無限。\n象徵：無限的包容力與再生能力，吵完架也能立刻回到最初的熱戀狀態。",
      en: "【Harmless & Chill】\nTrait: Can revert to its polyp stage, theoretically immortal.\nSymbol: Infinite forgiveness. You bounce back from any argument instantly.",
      ja: "【無害・仏系・包容型】\n特徴：不老不死と呼ばれる生物。\n象徴：無限の包容力と再生能力。喧嘩してもすぐに熱愛状態に戻れる。"
    }
  },
  {
    min: -1, max: 0,
    image: "/images/jellyfish_04.png",
    name: { zh: "櫛水母 (Comb Jelly)", en: "Comb Jelly", ja: "クシクラゲ" },
    desc: {
      zh: "【無害 / 佛系 / 包容型】\n特性：無毒，靠身上的纖毛折射出彩虹般的夢幻光芒。\n象徵：和平主義者，毫無攻擊性與威脅感，充滿浪漫幻想。",
      en: "【Harmless & Chill】\nTrait: Non-toxic, reflects rainbow light through its cilia.\nSymbol: Pacifist, romantic, and completely unthreatening.",
      ja: "【無害・仏系・包容型】\n特徴：無毒で、虹色に輝く。\n象徴：平和主義者で、攻撃性がなく、ロマンチックな幻想に満ちている。"
    }
  },
  {
    min: 1, max: 3,
    image: "/images/jellyfish_05.png",
    name: { zh: "倒立水母 (Upside-down Jellyfish)", en: "Upside-down Jellyfish", ja: "サカサクラゲ" },
    desc: {
      zh: "【無害 / 佛系 / 包容型】\n特性：不愛游動，喜歡倒立在海底曬太陽，自得其樂。\n象徵：特立獨行，有自己的舒適圈，不太管世俗的眼光。",
      en: "【Harmless & Chill】\nTrait: Likes to rest upside-down on the sea floor.\nSymbol: Independent and quirky. You stay in your comfort zone and ignore societal norms.",
      ja: "【無害・仏系・包容型】\n特徴：海底で逆立ちして日光浴をする。\n象徴：我が道を行くタイプ。自分の快適な空間を重視する。"
    }
  },
  {
    min: 4, max: 6,
    image: "/images/jellyfish_06.png",
    name: { zh: "桃花水母 (Peach Blossom Jellyfish)", en: "Peach Blossom Jellyfish", ja: "マミズクラゲ" },
    desc: {
      zh: "【獨特 / 敏感 / 挑剔型】\n特性：珍貴的淡水水母，對「水質」要求極度嚴苛。\n象徵：具有精神潔癖，一旦環境或關係變質就會立刻消失。",
      en: "【Sensitive & Picky】\nTrait: Rare freshwater jellyfish, strictly requires clean water.\nSymbol: Emotional mysophobia. You easily vanish if the relationship turns slightly toxic.",
      ja: "【敏感・潔癖型】\n特徴：水質に極めて厳しい淡水クラゲ。\n象徴：精神的な潔癖症。関係が悪化するとすぐに姿を消す。"
    }
  },
  {
    min: 7, max: 9,
    image: "/images/jellyfish_07.png",
    name: { zh: "珍珠水母 (White-spotted Jellyfish)", en: "White-spotted Jellyfish", ja: "タコクラゲ" },
    desc: {
      zh: "【獨特 / 敏感 / 挑剔型】\n特性：身上佈滿白色圓點，外觀像撒了珍珠般華麗，毒性微弱。\n象徵：可愛討喜、注重外在與儀式感，但不帶有強烈攻擊性。",
      en: "【Sensitive & Picky】\nTrait: Covered in white spots like pearls, mildly venomous.\nSymbol: Cute and elegant. You value aesthetics and rituals without being aggressive.",
      ja: "【敏感・潔癖型】\n特徴：真珠のような白い斑点を持つ。\n象徴：可愛らしく、外見や儀式を重視するが、攻撃性は低い。"
    }
  },
  {
    min: 10, max: 12,
    image: "/images/jellyfish_08.png",
    name: { zh: "砲彈水母 (Cannonball Jellyfish)", en: "Cannonball Jellyfish", ja: "キャノンボールクラゲ" },
    desc: {
      zh: "【獨特 / 敏感 / 挑剔型】\n特性：外表圓滾滾像砲彈，幾乎沒有觸手。\n象徵：看似直接粗暴，其實沒有什麼心眼，直來直往。",
      en: "【Sensitive & Picky】\nTrait: Round like a cannonball, almost no tentacles.\nSymbol: Direct and blunt, but actually straightforward with no hidden agenda.",
      ja: "【敏感・潔癖型】\n特徴：大砲の弾のような丸い形で触手が少ない。\n象徴：乱暴に見えて、実は裏表がない直球タイプ。"
    }
  },
  {
    min: 13, max: 15,
    image: "/images/jellyfish_09.png",
    name: { zh: "十字水母 (Stalked Jellyfish)", en: "Stalked Jellyfish", ja: "ジュウモンジクラゲ" },
    desc: {
      zh: "【獨特 / 敏感 / 挑剔型】\n特性：不像一般水母四處漂游，而是緊緊附著在岩石或海藻上。\n象徵：極度專一、固執，認定了就不喜歡變動與漂泊。",
      en: "【Sensitive & Picky】\nTrait: Attaches to rocks or seaweed instead of drifting.\nSymbol: Extremely loyal and stubborn. Once you commit, you hate change.",
      ja: "【敏感・潔癖型】\n特徴：岩や海藻に固着して生活する。\n象徴：非常に一途で頑固。一度決めたら変化を嫌う。"
    }
  },
  {
    min: 16, max: 18,
    image: "/images/jellyfish_10.png",
    name: { zh: "藍眼淚水母 (Crystal Jelly)", en: "Crystal Jelly", ja: "オワンクラゲ" },
    desc: {
      zh: "【獨特 / 敏感 / 挑剔型】\n特性：平常透明，但只要「受到刺激」就會發出美麗的螢光。\n象徵：心思極度敏感，只要輕輕踩到線，就會立刻給出情緒反應。",
      en: "【Sensitive & Picky】\nTrait: Transparent, but glows beautifully when stimulated.\nSymbol: Highly sensitive. Step on your boundaries even slightly, and you instantly react.",
      ja: "【敏感・潔癖型】\n特徴：刺激を受けると美しく光る。\n象徴：非常に敏感。少しでも境界線を越えられると、即座に感情的な反応を示す。"
    }
  },
  {
    min: 19, max: 21,
    image: "/images/jellyfish_11.png",
    name: { zh: "太平洋黃金水母 (Pacific Sea Nettle)", en: "Pacific Sea Nettle", ja: "パシフィックシーネットル" },
    desc: {
      zh: "【強勢 / 防禦 / 距離感型】\n特性：擁有華麗迷人的外表，但長長的觸手會帶來明顯刺痛。\n象徵：充滿魅力但帶有危險，有明確的自我底線，碰了會痛。",
      en: "【Defensive & Distant】\nTrait: Gorgeous appearance but long, stinging tentacles.\nSymbol: Charming but dangerous. You have clear boundaries, and crossing them hurts.",
      ja: "【強気・防衛・距離感型】\n特徴：華やかだが、長い触手には強い毒がある。\n象徴：魅力的だが危険。明確な境界線があり、触れると痛い目を見る。"
    }
  },
  {
    min: 22, max: 24,
    image: "/images/jellyfish_12.png",
    name: { zh: "花笠水母 (Flower Hat Jelly)", en: "Flower Hat Jelly", ja: "ハナガサクラゲ" },
    desc: {
      zh: "【強勢 / 防禦 / 距離感型】\n特性：像戴著花冠，平時隱藏在海底，受驚才游動。\n象徵：外表艷麗且神祕，平常不動聲色，但藏有隱形的刺。",
      en: "【Defensive & Distant】\nTrait: Looks like it's wearing a flower hat. Hides and stings when startled.\nSymbol: Beautiful and mysterious. You stay quiet but have hidden thorns.",
      ja: "【強気・防衛・距離感型】\n特徴：花笠のような形。普段は隠れているが、驚くと動く。\n象徴：派手でミステリアス。普段は大人しいが、見えない棘を隠し持っている。"
    }
  },
  {
    min: 25, max: 27,
    image: "/images/jellyfish_13.png",
    name: { zh: "冠水母 (Crown Jellyfish)", en: "Crown Jellyfish", ja: "カンムリクラゲ" },
    desc: {
      zh: "【強勢 / 防禦 / 距離感型】\n特性：傘體形狀像皇冠，遇到危險時會主動發光嚇退敵人。\n象徵：自尊心極高、防禦性極強，不容許任何人侵犯自己的領地。",
      en: "【Defensive & Distant】\nTrait: Crown-shaped. Emits light to scare off predators.\nSymbol: High self-esteem and very defensive. You tolerate zero trespassing.",
      ja: "【強気・防衛・距離感型】\n特徴：冠の形。危険を感じると光って威嚇する。\n象徴：プライドが高く防衛的。自分の領域を侵されることを絶対に許さない。"
    }
  },
  {
    min: 28, max: 30,
    image: "/images/jellyfish_14.png",
    name: { zh: "紅色紙燈籠水母 (Bloodybelly Comb Jelly)", en: "Bloodybelly Comb", ja: "ブラッディベリー" },
    desc: {
      zh: "【強勢 / 防禦 / 距離感型】\n特性：呈現血紅色，利用深海物理特性完美隱藏自己。\n象徵：保護色極重，極度注重隱私，不讓伴侶輕易看透自己的所有。",
      en: "【Defensive & Distant】\nTrait: Blood-red color for perfect deep-sea camouflage.\nSymbol: Extremely guarded. You value privacy and never let your partner see everything.",
      ja: "【強気・防衛・距離感型】\n特徴：血のような赤色で、深海で完全に身を隠す。\n象徴：警戒心が強く、プライバシーを重視。恋人にも全てを見せない。"
    }
  },
  {
    min: 31, max: 33,
    image: "/images/jellyfish_15.png",
    name: { zh: "藍色水母 (Blue Jellyfish)", en: "Blue Jellyfish", ja: "ブルージェリーフィッシュ" },
    desc: {
      zh: "【強勢 / 防禦 / 距離感型】\n特性：深邃的藍色，螫傷會帶來火辣辣的刺痛感。\n象徵：冷靜、理智，劃清界線時會毫不留情地給予對方刺痛的警告。",
      en: "【Defensive & Distant】\nTrait: Deep blue color. Its sting causes burning pain.\nSymbol: Cold and rational. You ruthlessly sting those who cross your sharp boundaries.",
      ja: "【強気・防衛・距離感型】\n特徴：深い青色で、刺されると焼けるような痛みがある。\n象徴：冷静沈着。境界線を引くときは、容赦なく相手に警告を与える。"
    }
  },
  {
    min: 34, max: 36,
    image: "/images/jellyfish_16.png",
    name: { zh: "獅鬃水母 (Lion's Mane Jellyfish)", en: "Lion's Mane Jellyfish", ja: "キタユウレイクラゲ" },
    desc: {
      zh: "【極度危險 / 控制狂型】\n特性：體型巨大，觸手長達30公尺，像獅子的鬃毛，毒性強烈。\n象徵：掌控慾極強，控制範圍就像30公尺的觸手，無死角監控。",
      en: "【Dangerous Control Freak】\nTrait: Massive with 30m long tentacles. Highly venomous.\nSymbol: Ultimate control freak. Your monitoring reaches everywhere like giant tentacles.",
      ja: "【超危険・支配型】\n特徴：巨大で触手は30mにもなる。猛毒。\n象徴：支配欲が異常に強い。30mの触手のように相手を監視し続ける。"
    }
  },
  {
    min: 37, max: 39,
    image: "/images/jellyfish_17.png",
    name: { zh: "澳洲箱形水母 (Box Jellyfish)", en: "Box Jellyfish", ja: "オーストラリアウンバチクラゲ" },
    desc: {
      zh: "【極度危險 / 控制狂型】\n特性：海洋中最致命的生物，含有劇烈神經毒素，觸碰幾乎斃命。\n象徵：零容忍地雷區！踩線就直接分手，毫無轉圜餘地。",
      en: "【Dangerous Control Freak】\nTrait: Deadliest marine creature, killing instantly upon touch.\nSymbol: Zero tolerance. Cross the line and the relationship is dead on the spot.",
      ja: "【超危険・支配型】\n特徴：猛毒を持つ世界で最も危険なクラゲの一つ。\n象徴：絶対に許されない地雷。一線を超えたら即別れ、妥協は一切ない。"
    }
  },
  {
    min: 40, max: 42,
    image: "/images/jellyfish_18.png",
    name: { zh: "僧帽水母 (Portuguese Man o' War)", en: "Man o' War", ja: "カツオノエボシ" },
    desc: {
      zh: "【極度危險 / 控制狂型】\n特性：致命的多生物共生體，偽裝成美麗藍色氣球。\n象徵：極具欺騙性與危險，誰敢越界，絕對會被整得很慘。",
      en: "【Dangerous Control Freak】\nTrait: A deadly colony of organisms disguised as a pretty blue balloon.\nSymbol: Deceptive and extremely dangerous. Trespassers will be severely punished.",
      ja: "【超危険・支配型】\n特徴：美しい青い風船に偽装した、致命的な群体生物。\n象徴：欺瞞に満ちた危険な存在。境界線を越える者には徹底的な報復を。"
    }
  },
  {
    min: 43, max: 45,
    image: "/images/jellyfish_19.png",
    name: { zh: "紫紋海刺水母 (Purple-striped Jellyfish)", en: "Purple-striped Jellyfish", ja: "パープルストライプドジェリー" },
    desc: {
      zh: "【極度危險 / 控制狂型】\n特性：帶有高貴的紫色條紋，攻擊性強，會主動捕食其他水母。\n象徵：唯我獨尊的霸道總裁，毫不留情地消滅伴侶身邊的威脅。",
      en: "【Dangerous Control Freak】\nTrait: Noble purple stripes. Aggressive and eats other jellies.\nSymbol: Dominant and territorial. You actively eliminate any romantic threats.",
      ja: "【超危険・支配型】\n特徴：高貴な紫色の縞模様。攻撃的で他のクラゲを食べる。\n象徴：唯我独尊の支配者。恋人の周りの脅威を容赦なく排除する。"
    }
  },
  {
    min: 46, max: 99,
    image: "/images/jellyfish_20.png",
    name: { zh: "幽靈水母 (Giant Phantom Jelly)", en: "Giant Phantom Jelly", ja: "ダイオウクラゲ" },
    desc: {
      zh: "【極度危險 / 控制狂型】\n特性：沒有觸手只有巨大黑袍般的口腕，能將人吞噬的深海幽靈。\n象徵：深不可測的壓迫感，不發脾氣則已，一發脾氣就像深淵吞噬對方。",
      en: "【Dangerous Control Freak】\nTrait: Deep-sea phantom with massive dark arms instead of tentacles.\nSymbol: Unfathomable pressure. Your anger acts like a dark abyss swallowing everything.",
      ja: "【超危険・支配型】\n特徴：深海の巨大な幽霊のような姿。触手ではなく巨大な口腕を持つ。\n象徴：底知れぬ圧迫感。一度怒れば、相手を深淵のように飲み込む。"
    }
  }
];

export function calculateResult(totalScore: number) {
  for (const outcome of OUTCOMES) {
    if (totalScore >= outcome.min && totalScore <= outcome.max) {
      return outcome;
    }
  }
  return OUTCOMES[0];
}
