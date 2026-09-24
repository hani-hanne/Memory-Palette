// -------------------------------------------------------------
// DATA TRANSLATIONS & STORY STEPS
// -------------------------------------------------------------
let currentLang = 'th';
let stepIndex = 0;
let scores = { c1:0, c2:0, c3:0, c4:0, c5:0, c6:0, c7:0, c8:0, c9:0, c10:0 };

// ข้อมูลแปลสำหรับหน้าปกและหน้าเตือน Memory Palette
const coverTranslations = {
  th: {
    navTitle: "✨ Memory Palette",
    smallTitle: "MEMORY PALETTE",
    title: "จานสีแห่งความทรงจำ",
    subtitle: "บางความรู้สึกไม่ได้หายไป<br>เพียงเพราะเวลาเดินต่อ",
    startBtn: "เข้าสู่เรื่องราว",
    note: "A little journey through time & seasons",
    
    aboutBookLabel: "ABOUT THE BOOK",
    aboutBookTitle: "แรงบันดาลใจจากหนังสือ",
    aboutBookDesc: 'เรื่องราวต่อไปนี้ได้รับแรงบันดาลใจมาจากหนังสือของคุณโมนา หรือ Mona Jung ชื่อหนังสือ <strong style="color: var(--accent);">"시계의 세계와 계절의 색 โลกของนาฬิกาและสีของฤดู"</strong> เป็นหนังสือสองภาษาไทยและเกาหลีที่จัดทำขึ้นจำนวนจำกัด สามารถสั่งซื้อได้ที่',
    aboutBookNextBtn: "ถัดไป",
    aboutBookBackBtn: "← กลับไปหน้าแรก",

    warningLabel: "BEFORE YOU BEGIN",
    warningTitle: "ก่อนที่คุณจะเดินทาง",
    warningIntro: "เรื่องราวต่อจากนี้อาจพาคุณ<br>กลับไปพบกับบางความรู้สึกที่เคยเก็บไว้",
    warn1Title: "ความทรงจำ",
    warn1Desc: "บางคำถามอาจทำให้นึกถึงเหตุการณ์ ผู้คน หรือช่วงเวลาบางอย่างในอดีต",
    warn2Title: "ความรู้สึก",
    warn2Desc: "ไม่มีคำตอบที่ถูกหรือผิด เลือกสิ่งที่ตรงกับความรู้สึกของคุณที่สุด",
    warn3Title: "ใช้เวลาของคุณ",
    warn3Desc: "ไม่จำเป็นต้องรีบตอบ ค่อย ๆ อ่าน และปล่อยให้เรื่องราวพาคุณไป",
    warningBtnText: "ฉันพร้อมแล้ว",
    warningBackBtn: "← กลับหน้าแนะนำหนังสือ",

    readQuestionText: "อ่านคำถาม",
    backToStoryText: "← อ่านเนื้อเรื่องอีกครั้ง",
    creditsBtnText: "ดูเครดิตผู้จัดทำ ✨",
    specialThanksText: "ผู้เล่นทุกคนที่ร่วมเล่นแบบทดสอบ ✨",
    restartBtnText: "กลับไปหน้าแรก"
  },
  ko: {
    navTitle: "✨ Memory Palette",
    smallTitle: "MEMORY PALETTE",
    title: "시계의 세계와<br><span>계절의 색</span>",
    subtitle: "시간이 흘러도<br>어떤 감정은 사라지지 않아요",
    startBtn: "이야기 시작하기",
    note: "A little journey through time & seasons",
    
    aboutBookLabel: "ABOUT THE BOOK",
    aboutBookTitle: "도서 소개 및 영감",
    aboutBookDesc: '이 이야기들은 모나(Mona Jung) 작가님의 저서 <strong style="color: var(--accent);">"시계의 세계와 계절의 색"</strong>에서 영감을 받았습니다. 한국어와 태국어 이중 언어로 소량 제작된 도서이며, 아래 링크에서 구입하실 수 있습니다.',
    aboutBookNextBtn: "다음",
    aboutBookBackBtn: "← 첫 페이지로 돌아가기",

    warningLabel: "BEFORE YOU BEGIN",
    warningTitle: "여정을 시작하기 전에",
    warningIntro: "이 이야기들은 어쩌면 당신의 마음속 깊은 곳에<br>잠들어 있던 감정들을 마주하게 할지도 몰라요.",
    warn1Title: "기억",
    warn1Desc: "어떤 질문은 지나간 순간이나 사람들을 떠올리게 할 수 있어요.",
    warn2Title: "감정",
    warn2Desc: "정답은 없어요. 당신의 마음이 향하는 선택을 해보세요.",
    warn3Title: "천천히",
    warn3Desc: "서두르지 말고 여유롭게 이야기를 따라가 보세요.",
    warningBtnText: "준비되었어요",
    warningBackBtn: "← 도서 소개로 돌아가기",

    readQuestionText: "질문 보기",
    backToStoryText: "← 이야기 다시 읽기",
    creditsBtnText: "제작진 크레딧 보기 ✨",
    specialThanksText: "함께해 주신 모든 플레이어분들께 ✨",
    restartBtnText: "처음으로 돌아가기"
  },
  en: {
    navTitle: "✨ Memory Palette",
    smallTitle: "MEMORY PALETTE",
    title: "The World of Time<br><span>and Colors of Seasons</span>",
    subtitle: "Some feelings don't fade away<br>just because time moves on",
    startBtn: "Enter Story",
    note: "A little journey through time & seasons",
    
    aboutBookLabel: "ABOUT THE BOOK",
    aboutBookTitle: "Inspiration",
    aboutBookDesc: 'The following story is inspired by the book <strong style="color: var(--accent);">"The World of Time and Colors of Seasons"</strong> by Mona Jung. It is a bilingual book (Thai & Korean) available in limited quantities. You can purchase it here:',
    aboutBookNextBtn: "Next",
    aboutBookBackBtn: "← Back to Home",

    warningLabel: "BEFORE YOU BEGIN",
    warningTitle: "Before You Begin",
    warningIntro: "The story ahead may gently guide you<br>back to some feelings you've kept inside.",
    warn1Title: "Memories",
    warn1Desc: "Some questions may bring back past events, people, or moments.",
    warn2Title: "Feelings",
    warn2Desc: "There are no right or wrong answers. Choose what resonates most.",
    warn3Title: "Take Your Time",
    warn3Desc: "No need to rush. Read slowly and let the story carry you.",
    warningBtnText: "I'm Ready",
    warningBackBtn: "← Back to Book Info",

    readQuestionText: "View Question",
    backToStoryText: "← Read Story Again",
    creditsBtnText: "View Credits ✨",
    specialThanksText: "To all players who joined this journey ✨",
    restartBtnText: "Back to Home"
  },
  ja: {
    navTitle: "✨ Memory Palette",
    smallTitle: "MEMORY PALETTE",
    title: "時間の世界と<br><span>季節の色</span>",
    subtitle: "時間が進んでも<br>消えない感情がある",
    startBtn: "物語に入る",
    note: "A little journey through time & seasons",
    
    aboutBookLabel: "ABOUT THE BOOK",
    aboutBookTitle: "本について",
    aboutBookDesc: 'この物語は、モナ（Mona Jung）様の著書 <strong style="color: var(--accent);">「時間の世界と季節の色」</strong> からインスピレーションを受けています。タイ語と韓国語のバイリンガル書籍として数量限定で制作されており、こちらからご購入いただけます：',
    aboutBookNextBtn: "次へ",
    aboutBookBackBtn: "← ホームに戻る",

    warningLabel: "BEFORE YOU BEGIN",
    warningTitle: "旅を始める前に",
    warningIntro: "この物語は、あなたの心の中にそっとしまっていた<br>感情を呼び覚ますかもしれません。",
    warn1Title: "記憶",
    warn1Desc: "いくつかの質問は、過去の出来事や人、瞬間を思い起こさせるでしょう。",
    warn2Title: "感情",
    warn2Desc: "正解も不正解もありません。自分の心にしっくりくるものを選んでください。",
    warn3Title: "あなたのペースで",
    warn3Desc: "急ぐ必要はありません。ゆっくりと読み進めてください。",
    warningBtnText: "準備完了",
    warningBackBtn: "← 紹介に戻る",

    readQuestionText: "質問を見る",
    backToStoryText: "← 物語をもう一度読む",
    creditsBtnText: "クレジットを見る ✨",
    specialThanksText: "一緒に旅をしてくれたすべてのプレイヤーへ ✨",
    restartBtnText: "ホームに戻る"
  }
};

const stepsData = [
  // STEP 1: Intro (Clock World)
  {
    image: "img/01.png",
    season: { th: "บทนำ: โลกของเวลา", ko: "프롤로그: 시계의 세계", en: "Prologue: World of Time", ja: "プロローグ: 時間の世界" },
    story: {
      th: "ในโลกของเวลา... เข็มนาทีมองดูต้นไม้ด้วยความกังวล\nมันขอให้เข็มวินาทีหยุดหมุนด้วยหวังว่าจะยับยั้งความเปลี่ยนแปลง\nแต่เวลายังคงต้องหมุนต่อไป เพื่อให้ต้นไม้เติบโตผ่านฤดูกาล...",
      ko: "시계의 세계에서 분침은 나무를 바라보며 불안해했습니다.\n변화를 막고자 초침에게 멈춰달라고 부탁했지만,\n나무가 계절을 지나 성장하기 위해서는 시간이 계속 흘러가야만 했습니다...",
      en: "In the world of time, the minute hand watched the tree with anxiety.\nIt asked the second hand to stop, hoping to freeze change.\nBut time must flow for the tree to grow through seasons...",
      ja: "時間の世界で、長針は木を見つめて不安になりました。\n変化を止めようと秒針に止まるよう頼みましたが、\n木が季節を経て成長するためには、時間は流れ続けなければなりませんでした..."
    },
    question: {
      th: "ในเช้าวันที่นาฬิกาในห้องหยุดเดินกะทันหัน ความรู้สึกแรกของคุณคืออะไร?",
      ko: "방 안의 시계가 갑자기 멈춰버린 아침, 당신이 가장 먼저 느낀 감정은 무엇인가요?",
      en: "On a morning when the clock in your room suddenly stops, what is your first feeling?",
      ja: "部屋の時計が突然止まった朝、あなたが最初に感じた感情は何ですか？"
    },
    options: [
      { text: { th: "อยากหยุดเวลานี้ไว้ตลอดไป จะได้ไม่ต้องพบความเปลี่ยนแปลง", ko: "변화를 겪지 않도록 이대로 시간을 멈추고 싶다", en: "Want to freeze time forever to avoid facing change", ja: "変化に直面しないよう、このまま時間を止めたい" }, card: "c1", pts: 2 },
      { text: { th: "ตกใจนิดหน่อย แต่ก็ตระหนักว่าเวลาในใจเรายังเดินต่อไป", ko: "조금 놀랐지만 내 마음속 시간은 계속 흘러감을 깨닫는다", en: "Slightly surprised, but realize time inside still flows", ja: "少し驚いたが、心の中の時間は流れ続けていると気づく" }, card: "c9", pts: 2 },
      { text: { th: "รู้สึกดีใจ เพราะชั่วขณะนี้ไม่มีใครมาเร่งรัดเราได้อีก", ko: "아무도 나를 독촉할 수 없는 이 순간이 안도스럽다", en: "Relieved that for a moment, no one can rush me", ja: "誰も自分を急かすことができないこの瞬間、ホッとする" }, card: "c4", pts: 1 },
      { text: { th: "รีบเปลี่ยนถ่าน เพื่อให้นาฬิกากลับมาหมุนตามจังหวะเดิม", ko: "원래의 제자리를 찾도록 서둘러 건전지를 교체한다", en: "Quickly replace the battery to restore the rhythm", ja: "元のリズムを取り戻すために急いで電池を交換する" }, card: "c8", pts: 1 }
    ]
  },
  // STEP 2: Spring
  {
    image: "img/02.png",
    season: { th: "ฤดูใบไม้ผลิ: การพบกันและการจากลา", ko: "봄: 만남과 이별", en: "Spring: Encounter & Farewell", ja: "春: 出会いとお別れ" },
    story: {
      th: "ฤดูใบไม้ผลิมาถึงพร้อมกับความสุขของการมองดูสิ่งที่รักเติบโต\nเหมือนดอกไม้ผลิบาน ทว่ามันก็เตือนเราด้วยว่า ไม่มีสิ่งใดคงอยู่ตลอดไป\nและการจากลาจะทำให้เรามองเห็นสิ่งที่สำคัญชัดขึ้น...",
      ko: "봄은 피어나는 꽃처럼 사랑하는 것이 성장하는 기쁨과 함께 찾아옵니다.\n하지만 영원한 것은 없으며, 이별은 우리에게 진정 중요한 것을 더 명확히 보게 해줍니다...",
      en: "Spring arrives with the joy of watching loved ones grow like blooming flowers.\nYet it reminds us nothing lasts forever, and farewells make what matters clearest...",
      ja: "春は咲く花のように愛するものが成長する喜びとともに訪れます。\nしかし永久なものはなく、別れは本当に大切なものをより明確に見せてくれます..."
    },
    question: {
      th: "เมื่อมองเห็นต้นไม้เริ่มเปลี่ยนสีใบและเตรียมผลัดใบเข้าสู่ฤดูกาลใหม่ คุณคิดอย่างไร?",
      ko: "나무가 잎의 색을 바꾸며 새로운 계절을 준비하는 모습을 볼 때 어떤 생각이 드나요?",
      en: "Seeing a tree change color and prepare to shed leaves for a new season, what do you think?",
      ja: "木が葉の色を変え、新しい季節の準備をしているのを見て、どう思いますか？"
    },
    options: [
      { text: { th: "รู้สึกใจหาย เพราะความงามในวันเก่ากำลังจะร่วงโรยไป", ko: "지난날의 아름다움이 시들어가는 것 같아 마음이 아프다", en: "Feel nostalgic, as past beauty fades away", ja: "過去の美しさが枯れていくようで切ない" }, card: "c1", pts: 2 },
      { text: { th: "มองดูการเติบโตด้วยยิ้ม เข้าใจว่าทุกอย่างงดงามตามกาลเวลา", ko: "모든 것은 때에 맞게 아름답다는 것을 이해하며 미소 짓는다", en: "Smile at the growth, understanding beauty in every time", ja: "すべてのものは時に応じて美しいと理解し微笑む" }, card: "c8", pts: 2 },
      { text: { th: "คิดว่าธรรมชาติฉลาดที่รู้จักผลัดใบเพื่อเอาตัวรอด", ko: "살아남기 위해 잎을 떨어뜨리는 자연의 지혜라고 생각한다", en: "Think nature is wise to shed leaves to survive winter", ja: "生き残るために葉を落とす自然の智慧だと思う" }, card: "c9", pts: 1 },
      { text: { th: "ปล่อยให้มันเป็นไป เพราะมันเป็นเรื่องธรรมดาของชีวิต", ko: "삶의 자연스러운 순리이므로 그저 담담히 받아들인다", en: "Accept it calmly, as it is a natural part of life", ja: "人生の自然な流れとして、淡々と受け入れる" }, card: "c10", pts: 1 }
    ]
  },
  // STEP 3: Summer
  {
    image: "img/03.png",
    season: { th: "ฤดูร้อน: แสงสว่าง ฝนโปรย และความจริง", ko: "여름: 빛, 여우비, 그리고 진실", en: "Summer: Sunlight, Sunshower & Truth", ja: "夏: 光、狐の嫁入り、そして真実" },
    story: {
      th: "แดดฤดูร้อนส่องสว่าง เสียงเปียโนสีเทาดังขึ้นท่ามกลางบ้านที่ไร้ผู้คน\nทันใดนั้นฝนเล็ดเกร็ดแดด ก็โปรยลงมา\nราวกับจะบอกเราว่า 'สิ่งที่จะเกิด ย่อมต้องเกิด... หากคิดแล้วหนักใจ ก็อย่าไปคิดมัน'...",
      ko: "뜨거운 여름 햇살 아래, 빈집에서 은은한 피아노 소리가 들려옵니다.\n이내 내리는 여우비는 우리에게 말해줍니다.\n'일어날 일은 일어난다... 마음을 갉아먹는 생각이라면 하지 마라'...",
      en: "Summer sun shines bright. A grey piano melody echoes in an empty home.\nSuddenly a sunshower falls, whispering:\n'What will happen will happen... if a thought weighs on your heart, let it go'...",
      ja: "夏の強い日差しの中、誰もいない家からピアノの音が聞こえます。\nやがて降る狐の嫁入りは教えてくれます。\n「起こることは起こる... 心をすり減らす考えなら、しなければいい」..."
    },
    question: {
      th: "ขณะที่คุณเดินท่ามกลางแดดจัด แล้วจู่ๆ ฝนก็โปรยปรายลงมา คุณจะทำอย่างไร?",
      ko: "맑은 햇살 아래를 걷다가 갑자기 여우비가 내린다면 당신은 어떻게 하겠습니까?",
      en: "Walking under clear sunlight when suddenly a sunshower falls, what do you do?",
      ja: "快晴の下を歩いているとき、突然天気雨が降ってきたらどうしますか？"
    },
    options: [
      { text: { th: "ยืนกอดตัวเอง ยอมรับว่าสิ่งที่คาดเดาไม่ได้มักเกิดขึ้นเสมอ", ko: "예상치 못한 일은 늘 일어남을 인정하며 가만히 서 있는다", en: "Stand still, accepting that unpredictable things always happen", ja: "予測できないことは常に起こると受け入れ、佇む" }, card: "c4", pts: 2 },
      { text: { th: "ยิ้มรับสายฝนและความเย็น คิดว่าฝนตกแดดออกก็สวยดี", ko: "비와 햇살이 함께하는 풍경도 아름답다고 생각하며 미소 짓는다", en: "Smile, finding beauty in rain and sunshine together", ja: "雨と光が共存する風景も美しいと微笑む" }, card: "c6", pts: 1 },
      { text: { th: "รีบวิ่งหาที่หลบฝน เพราะไม่อยากให้ตัวเองเปียกปอน", ko: "몸이 젖지 않도록 서둘러 비를 피할 곳을 찾는다", en: "Quickly seek shelter to avoid getting wet", ja: "濡れないように急いで雨宿りできる場所を探す" }, card: "c8", pts: 1 },
      { text: { th: "บอกตัวเองว่า 'เดี๋ยวฝนก็ซา และแดดก็จะกลับมาเอง'", ko: "곧 비가 그치고 다시 햇살이 비출 것이라고 스스로에게 말한다", en: "Tell yourself 'The rain will pass and sun will return'", ja: "「すぐ雨はやみ、また光が差し込む」と自分に言い聞かせる" }, card: "c10", pts: 1 }
    ]
  },
  // STEP 4: Autumn
  {
    image: "img/04.png",
    season: { th: "ฤดูใบไม้ร่วง: หนังสือปกเทา และดาวกลางวัน", ko: "가을: 회색 책과 낮에 떠 있는 별", en: "Autumn: Grey Book & Day Stars", ja: "秋: 灰色の本と昼の星" },
    story: {
      th: "ใบไม้สีส้มทองร่วงโรย สมุดบันทึกที่ถูกเขียนด้วยหมึกปากกาไม่อาจแก้ไขได้\nทำได้เพียงมองย้อนกลับไปอ่าน ในยามกลางวันที่แสงแดดจ้า\nบางครั้งเราอาจลืมตระหนักไปว่า... มี 'ดาวสองดวง' คอยส่องสว่างเคียงข้างเราอยู่เสมอ...",
      ko: "펜으로 적힌 기록은 지울 수 없어 그저 돌아볼 뿐입니다.\n햇살이 너무 눈부신 낮에는 나를 항상 지켜주던 '두 개의 별'이 옆에 있다는 사실조차 잊고 살아가곤 합니다...",
      en: "Pages written in pen cannot be erased, only reread.\nUnder bright daylight, we often forget that 'two stars' are constantly shining right beside us...",
      ja: "ペンで書かれた過去は消せないため、ただ振り返るだけです。\n陽光が眩しい昼間には、いつも傍で見守ってくれる「2つの星」の存在すら忘れてしまいがちです..."
    },
    question: {
      th: "ในยามกลางวันที่แสงแดดสว่างจ้าจนมองไม่เห็นดวงดาว คุณนึกถึงสิ่งใด?",
      ko: "햇살이 너무 강해 별이 보이지 않는 한낮, 당신은 무엇을 떠올립니까?",
      en: "In broad daylight when sun hides the stars, what do you reflect upon?",
      ja: "日差しが強すぎて星が見えない真っ昼間、あなたは何を思い浮かべますか？"
    },
    options: [
      { text: { th: "หวั่นใจว่า ในวันที่สว่างที่สุด เราอาจลืมมองคนใกล้ตัว", ko: "가장 밝은 날, 오히려 가까운 사람을 잊고 사는 건 아닌지 걱정된다", en: "Worry that on brightest days, we forget those closest", ja: "最も明るい日、逆に身近な人を見落としていないか心配になる" }, card: "c7", pts: 2 },
      { text: { th: "ตระหนักว่า แม้จะมองไม่เห็น แต่ดาว (คนสำคัญ) ก็ยังอยู่ตรงนั้น", ko: "보이지 않더라도 별(소중한 사람)은 항상 그 자리에 있음을 깨닫는다", en: "Realize that though unseen, stars (loved ones) are always there", ja: "見えなくても星（大切な人）は常にそこにいると気づく" }, card: "c7", pts: 2 },
      { text: { th: "ย้อนมองบันทึกในอดีตที่แก้ไขไม่ได้ แต่เป็นส่วนหนึ่งของเรา", ko: "수정할 수 없지만 나 자신인 과거의 기록들을 돌아본다", en: "Look back on unerasable memories that formed who I am", ja: "修正できないが自分自身である過去の記録を振り返る" }, card: "c2", pts: 2 },
      { text: { th: "เฝ้ารอคอยยามค่ำคืน เพื่อจะได้เห็นแสงดาวส่องสว่างอีกครั้ง", ko: "다시 별빛이 빛날 밤이 찾아오기를 조용히 기다린다", en: "Quietly await the night when stars will shine clear again", ja: "再び星が輝く夜が訪れるのを静かに待つ" }, card: "c9", pts: 1 }
    ]
  },
  // STEP 5: Winter
  {
    image: "img/05.png",
    season: { th: "ฤดูหนาว: หุ่นไล่กา และดาวที่เรียกว่าเรา", ko: "겨울: 허수아비와 '우리'라는 별", en: "Winter: Scarecrow & Star Called 'Us'", ja: "冬: かかしと「私」という星" },
    story: {
      th: "ฤดูหนาวอันหนาวเหน็บมาถึง หุ่นไล่กาเฝ้าคุ้มครองต้นอ่อนอย่างเงียบงัน\nความอบอุ่นในฤดูนี้ไม่ได้มาจากแดดจ้า แต่มาจากคนที่อยู่เคียงข้าง\nและในที่สุดเราก็เข้าใจว่า... แสงที่งดงามที่สุด คือแสงที่เปล่งออกมาจากภายในตัวเราเอง...",
      ko: "추운 겨울, 허수아비는 조용히 새싹을 지킵니다.\n이 계절의 온기는 온전히 곁을 지켜주는 사람으로부터 오며, 마침내 깨닫게 됩니다.\n가장 아름다운 빛은 우리 자신 내부에서 나온다는 것을...",
      en: "Cold winter arrives. Scarecrows silently guard small sprouts.\nWarmth comes from those who stay by our side, and we finally learn:\nthe most beautiful light is the one shining from within ourselves...",
      ja: "寒い冬、かかしは静かに新芽を守ります。\nこの季節の温もりは傍にいてくれる人から訪れ、ついに気づきます。\n最も美しい光は自分自身の内側から放たれるものだということに..."
    },
    question: {
      th: "หากมีคนถามคุณว่า 'แสงแบบไหนที่คุณคิดว่างดงามที่สุด?' คุณจะตอบว่าอย่างไร?",
      ko: "누군가 당신에게 '어떤 빛이 가장 아름답다고 생각하나요?'라고 묻는다면?",
      en: "If someone asks you 'What kind of light is most beautiful?', how would you answer?",
      ja: "誰かがあなたに「どんな光が最も美しいと思いますか？」と尋ねたら何と答えますか？"
    },
    options: [
      { text: { th: "แสงที่ไม่ได้สว่างจ้าที่สุด แต่เป็นแสงที่เปล่งจากภายในตัวเรา", ko: "가장 밝진 않더라도 내 안에서 스스로 빛나는 은은한 빛", en: "Not the brightest, but the gentle light radiating from within", ja: "最も眩しくなくても、自分の中から輝く静かな光" }, card: "c10", pts: 2 },
      { text: { th: "แสงจากการปกป้องเงียบๆ ของคนที่รักเราโดยไม่หวังผล", ko: "대가 없이 묵묵히 나를 지켜주는 사랑의 빛", en: "The quiet, unconditional protective light of those who love us", ja: "見返りを求めず静かに見守ってくれる愛の光" }, card: "c5", pts: 2 },
      { text: { th: "แสงแห่งความอบอุ่นที่ส่องผ่านในค่ำคืนที่หนาวเหน็บ", ko: "춥고 어두운 밤을 따뜻하게 비춰주는 온기의 빛", en: "The warm light that pierces through a cold, dark night", ja: "寒く暗い夜を温かく照らすぬくもりの光" }, card: "c3", pts: 1 },
      { text: { th: "แสงสว่างของวันใหม่ ที่ให้โอกาสเราเริ่มต้นเดินอีกครั้ง", ko: "다시 시작할 수 있는 기회를 주는 새로운 아침의 빛", en: "The dawn light of a new day, giving us a fresh start", ja: "やり直す機会を与えてくれる新しい朝の光" }, card: "c8", pts: 1 }
    ]
  }
];

const cardsData = {
  c1: {
    img: "img-card/card1.jpg",
    title: { th: "เข็มนาฬิกา", ko: "시계 바늘", en: "Clock Hand", ja: "時計の針" },
    quote: { th: "“ต่างคนต่างมีหน้าที่และจังหวะของตัวเอง เพื่อให้เวลายังคงเดินต่อไป”", ko: "“각자의 속도와 역할이 있기에 시간은 흘러간다”", en: "“Each has their own rhythm so that time continues forward”", ja: "「それぞれの速度と役割があるからこそ、時間は流れていく」" },
    desc: { th: "คุณเคารพในจังหวะชีวิตของตนเองและผู้อื่น เดินหน้าด้วยความมั่นคงโดยไม่เปรียบเทียบใคร", ko: "당신은 자신과 타인의 삶의 속도를 존중하며, 흔들림 없이 자신만의 길을 걸어가는 사람입니다.", en: "You respect your own pace and that of others, walking your unique path steadily.", ja: "あなたは自分と他人の人生の速度を尊重し、ブレずに自分だけの道を歩む人です。" }
  },
  c2: {
    img: "img-card/card2.jpg",
    title: { th: "เปียโนสีเทา", ko: "회색 피아노", en: "Grey Piano", ja: "灰色のピアノ" },
    quote: { th: "“หดหู่แต่อ่อนโยน อ้างว้างแต่อบอุ่น”", ko: "“쓸쓸하지만 다정하고, 외롭지만 따뜻하다”", en: "“Melancholy yet gentle, lonely yet warm”", ja: "「切ないが優しく、寂しいが温かい」" },
    desc: { th: "คุณมีสุนทรียภาพในหัวใจ มองเห็นความงามแม้ในยามเศร้า และเปลี่ยนความอ้างว้างเป็นความอบอุ่นได้", ko: "당신은 슬픔 속에서도 아름다움을 발견하며, 외로움을 따스함으로 승화시키는 감성을 지녔습니다.", en: "You possess deep artistic sensitivity, finding beauty in sadness and warmth in solitude.", ja: "あなたは悲しみの中にも美しさを見出し、寂しさを温かさに昇華させる感性を持っています。" }
  },
  c3: {
    img: "img-card/card3.jpg",
    title: { th: "สมุดหมึกปากกา", ko: "펜과 일기장", en: "Ink Pen Journal", ja: "インクペンとノート" },
    quote: { th: "“อดีตถูกเขียนด้วยหมึกปากกา ไม่อาจลบเลื่อน มีเพียงการมองย้อนกลับไป”", ko: "“지울 수 없는 펜으로 적힌 과거, 그저 돌아볼 뿐이다”", en: "“Past written in pen cannot be erased, only reflected upon”", ja: "「消せないペンで書かれた過去、ただ振り返るだけ」" },
    desc: { th: "คุณให้ความสำคัญกับบทเรียนและอดีต แม้จะแก้ไขไม่ได้ แต่ทุกหน้าที่ผ่านไปคือตัวตนที่ทำให้คุณงดงามในวันนี้", ko: "당신은 지난 경험을 귀중히 여깁니다. 수정할 수는 없지만 그 모든 페이지가 지금의 당신을 만들었습니다.", en: "You treasure past experiences. Unchangeable as they are, every page shaped who you are today.", ja: "あなたは過去の経験を大切にします。修正はできませんが、そのすべてのページが現在のあなたを作りました。" }
  },
  c4: {
    img: "img-card/card4.jpg",
    title: { th: "ดวงดาวกลางวัน", ko: "낮에 뜨는 별", en: "Day Star", ja: "昼の星" },
    quote: { th: "“เพียงเพราะแสงแดดจ้า จึงลืมตระหนักว่ามีดาวคอยส่องสว่างอยู่ข้างๆ”", ko: "“햇살이 밝아 곁에서 빛나는 별을 잠시 잊었을 뿐”", en: "“Only because sun is bright did we forget stars shine beside us”", ja: "「日差しが眩しく、傍で輝く星を一時忘れていただけ」" },
    desc: { th: "คุณเป็นคนที่ตระหนักถึงคุณค่าของคนใกล้ตัว และพร้อมจะแลกเปลี่ยนความหวังดีให้แก่กันเสมอ", ko: "당신은 소중한 사람들의 존재를 깨닫고 그 마음을 귀히 여길 줄 아는 따뜻한 사람입니다.", en: "You appreciate the presence of loved ones, holding close relationship as true treasures.", ja: "あなたは大切な人々の存在に気づき、その心を尊ぶことができる温かい人です。" }
  },
  c5: {
    img: "img-card/card5.jpg",
    title: { th: "ต้นไม้ผลัดใบ", ko: "낙엽이 지는 나무", en: "Shedding Tree", ja: "落葉する木" },
    quote: { th: "“หากไม่ทิ้งใบเก่าในวันนี้ ไม่อาจเติบโตและอยู่รอดในฤดูถัดไป”", ko: "“오늘 옛 잎을 떨어뜨리지 않으면 다음 계절을 살아낼 수 없다”", en: "“Without shedding old leaves today, one cannot thrive next season”", ja: "「今日古い葉を落とさなければ、次の季節を生き抜くことはできない」" },
    desc: { th: "คุณมีความเด็ดเดี่ยว กล้าที่จะละทิ้งสิ่งเดิมๆ เพื่อเปิดรับการเติบโตและการเริ่มต้นใหม่", ko: "당신은 용기 있게 과거를 내려놓고 새로운 성장을 향해 나아갈 줄 아는 결단력 있는 사람입니다.", en: "You possess courage to let go of old ways, stepping bravely toward new growth.", ja: "あなたは勇気を持って過去を手放し、新しい成長に向かって進む決断力のある人です。" }
  },
  c6: {
    img: "img-card/card6.jpg",
    title: { th: "หุ่นไล่กาผู้เฝ้ามอง", ko: "지켜보는 허수아비", en: "Watchful Scarecrow", ja: "見守るかかし" },
    quote: { th: "“ความรักและการปกป้องที่เงียบงัน ไม่จำเป็นต้องเอื้อนเอ่ยคำใด”", ko: "“침묵 속의 사랑과 보호는 말로 표현될 필요가 없다”", en: "“Silent love and protection need no words”", ja: "「沈黙の中の愛と保護は言葉で表現される必要はない」" },
    desc: { th: "คุณเป็นผู้ให้อย่างแท้จริง คอยดูแลและสนับสนุนคนที่คุณรักอยู่หลังฉากอย่างเงียบๆ เสมอ", ko: "당신은 묵묵히 곁을 지키며 사랑하는 이들을 뒤에서 응원해주는 든든한 사람입니다.", en: "You are a quiet giver, always supporting and guarding your loved ones from behind.", ja: "あなたは静かに傍で見守り、愛する人々を陰から応援する頼もしい人です。" }
  },
  c7: {
    img: "img-card/card7.jpg",
    title: { th: "ฤดูใบไม้ผลิ", ko: "봄", en: "Spring", ja: "春" },
    quote: { th: "“รอยยิ้มของใครบางคน อาจไม่ได้แปลว่ามีความสุขเสมอไป”", ko: "“누군가의 미소가 항상 행복만을 의미하지는 않는다”", en: "“Someone's smile doesn't always mean they are happy”", ja: "「誰かの笑顔が必ずしも幸せを意味するとは限らない」" },
    desc: { th: "คุณเป็นคนที่ละเอียดอ่อน ลึกซึ้ง และแคร์ความรู้สึกของผู้คนรอบข้าง คุณเข้าใจดีว่าการจากลาเป็นส่วนหนึ่งของการเติบโต", ko: "당신은 섬세하고 깊은 마음을 가진 사람입니다. 이별 또한 성장의 일부임을 잘 이해하고 있습니다.", en: "You have a delicate and deep heart, understanding that farewells are a part of growing up.", ja: "あなたは繊細で深い心を持つ人です。別れも成長の一部であることをよく理解しています。" }
  },
  c8: {
    img: "img-card/card8.jpg",
    title: { th: "ฤดูร้อน", ko: "여름", en: "Summer", ja: "夏" },
    quote: { th: "“สถานที่ยังคงเดิม แต่คนบางคนได้กลายเป็นความทรงจำไปแล้ว”", ko: "“장소는 그대로지만, 누군가는 추억이 되었다”", en: "“The place remains, but someone has turned into a memory”", ja: "「場所はそのままだが、誰かは思い出になった」" },
    desc: { th: "คุณเป็นคนทุ่มเทให้ความรัก ผูกพันกับสถานที่และความทรงจำอันอบอุ่นที่เคยเกิดขึ้น", ko: "당신은 사랑에 진심이며, 따뜻했던 장소와 기억을 깊이 간직하는 사람입니다.", en: "You give your heart sincerely, holding deep affection for places and warm memories.", ja: "あなたは愛に真実であり、温かかった場所と記憶を深く大切にする人です。" }
  },
  c9: {
    img: "img-card/card9.jpg",
    title: { th: "ฤดูใบไม้ร่วง", ko: "가을", en: "Autumn", ja: "秋" },
    quote: { th: "“อะไรจะเกิดก็ต้องเกิด... หากคิดแล้วหนักใจ ก็แค่อย่าไปคิดมัน”", ko: "“일어날 일은 일어난다... 마음이 힘들다면 생각하지 마라”", en: "“What will happen will happen... if it weighs on you, don't overthink”", ja: "「起こることは起こる... 心が重いなら考えないことだ」" },
    desc: { th: "คุณมีจิตใจที่รู้จักปล่อยวาง ยอมรับความไม่แน่นอนของชีวิตด้วยความสงบและความเข้าใจ", ko: "당신은 내려놓을 줄 아는 마음을 가졌으며, 삶의 불확실성을 의연하게 받아들입니다.", en: "You possess a graceful mindset of letting go, accepting life's uncertainties calmly.", ja: "あなたは手放す心を持っており、人生の不確実性を穏やかに受け入れます。" }
  },
  c10: {
    img: "img-card/card10.jpg",
    title: { th: "ฤดูหนาว", ko: "겨울", en: "Winter", ja: "冬" },
    quote: { th: "“แสงที่งดงามที่สุด คือแสงที่เปล่งออกมาจากภายในตัวเราเอง”", ko: "“가장 아름다운 빛은 우리 내면에서 나오는 빛이다”", en: "“The most beautiful light is the one radiating from within”", ja: "「最も美しい光は私たちの内面から放たれる光だ」" },
    desc: { th: "คุณค้นพบคุณค่าและความงดงามในตัวเอง ตระหนักว่าคุณคือแสงสว่างที่อบอุ่นและมีชีวิตชีวา", ko: "당신은 자신 내부의 가치와 아름다움을 아는 사람이며, 스스로 빛나는 귀한 존재입니다.", en: "You recognize your intrinsic value and beauty, shining brightly as your authentic self.", ja: "あなたは自分の内面の価値と美しさを知る人であり、自ら輝く貴い存在です。" }
  }
};

// -------------------------------------------------------------
// NAVIGATION & PAGE SWITCHING LOGIC
// -------------------------------------------------------------
function showPage(pageId) {
  // ซ่อนทุกหน้าก่อน
  document.querySelectorAll('.page-view').forEach(el => {
    el.classList.remove('active');
    el.style.display = 'none';
  });
  
  // แสดงเฉพาะหน้าที่ต้องการ
  const target = document.getElementById(pageId);
  if (target) {
    target.style.display = 'block';
    setTimeout(() => {
      target.classList.add('active');
    }, 10);
  }
}
// About Book page texts
    const aboutBookLabel = document.getElementById('aboutBookLabel');
    if (aboutBookLabel) aboutBookLabel.innerText = t.aboutBookLabel;

    const aboutBookTitle = document.getElementById('aboutBookTitle');
    if (aboutBookTitle) aboutBookTitle.innerText = t.aboutBookTitle;

    const aboutBookDesc = document.getElementById('aboutBookDesc');
    if (aboutBookDesc) aboutBookDesc.innerHTML = t.aboutBookDesc;

    const aboutBookNextBtn = document.getElementById('aboutBookNextBtn');
    if (aboutBookNextBtn) aboutBookNextBtn.innerText = t.aboutBookNextBtn;

    const aboutBookBackBtn = document.getElementById('aboutBookBackBtn');
    if (aboutBookBackBtn) aboutBookBackBtn.innerText = t.aboutBookBackBtn;

function renderStep() {
  const step = stepsData[stepIndex];
  
  // Update Season Badge Title & Story
  document.getElementById('seasonTitle').innerText = step.season[currentLang];
  document.getElementById('storyText').innerText = step.story[currentLang];
  document.getElementById('questionText').innerText = step.question[currentLang];
  // แสดงรูปภาพ
  document.getElementById('storyImageContainer').innerHTML = `<img src='${step.image}' alt='ภาพประกอบ' style='width:100%; max-height:220px; object-fit:cover; border-radius:15px; margin-bottom: 15px;'>`;

  // แสดงข้อความเนื้อเรื่องปกติ (ใช้ innerText ธรรมดาได้เลย เพราะไม่มีแท็ก HTML ปนแล้ว)
  document.getElementById('storyText').innerText = step.story[currentLang];

  // Auto Theme Switch according to Story Season
  if (stepIndex === 0) changeTheme('winter', false);
  if (stepIndex === 1) changeTheme('spring', false);
  if (stepIndex === 2) changeTheme('summer', false);
  if (stepIndex === 3) changeTheme('autumn', false);
  if (stepIndex === 4) changeTheme('winter', false);

  // Render Options
  const btnGroup = document.getElementById('btnGroup');
  btnGroup.innerHTML = '';

  step.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'btn-option';
    btn.innerText = opt.text[currentLang];
    btn.onclick = () => selectOption(opt.card, opt.pts);
    btnGroup.appendChild(btn);
  });

  showPage('storyPage');
}

function startTest() {
  stepIndex = 0;
  scores = { c1: 0, c2: 0, c3: 0, c4: 0, c5: 0, c6: 0, c7: 0, c8: 0, c9: 0, c10: 0 };
  
  const warning = document.getElementById("page-warning");
  const story = document.getElementById("storyPage");

  if (warning) {
    warning.classList.remove("active");
    warning.style.display = "none";
  }

  if (story) {
    story.style.display = "block";
    setTimeout(() => {
      story.classList.add("active");
    }, 10);
  }

  renderStep();
}

function restartTest() {
  stepIndex = 0;
  scores = { c1:0, c2:0, c3:0, c4:0, c5:0, c6:0, c7:0, c8:0, c9:0, c10:0 };
  showPage('page-cover');
}

function goToQuestion() {
  showPage('questionPage');
}

function backToStory() {
  showPage('storyPage');
}

function selectOption(cardKey, pts) {
  scores[cardKey] += pts;
  stepIndex++;
  
  if (stepIndex < stepsData.length) {
    renderStep();
  } else {
    showFinalCard();
  }
}

function showFinalCard() {
  let maxCard = 'c1';
  let maxPts = -1;
  for (let key in scores) {
    if (scores[key] > maxPts) {
      maxPts = scores[key];
      maxCard = key;
    }
  }

  const card = cardsData[maxCard];
  
  const titleMap = {
    th: 'การ์ดประจำตัวคุณ',
    ko: '당신의 카드',
    en: 'Your Personality Card',
    ja: 'あなたのカード'
  };
  
  document.getElementById('seasonTitle').innerText = titleMap[currentLang];

  const cardResult = document.getElementById('cardResult');
  cardResult.innerHTML = `
    <img src="${card.img}" alt="Result Card">
    <div class="card-title">${card.title[currentLang]}</div>
    <div class="card-quote">${card.quote[currentLang]}</div>
    <div class="story-text" style="font-size: 1rem; line-height: 1.7; margin-bottom: 0;">
      ${card.desc[currentLang]}
    </div>
  `;

  showPage('resultPage');
}

function changeTheme(themeName, updateSelect = true) {
  document.body.setAttribute('data-theme', themeName);
  if (updateSelect) {
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) themeSelect.value = themeName;
  }
}

function changeLang(lang) {
  currentLang = lang;

  // อัปเดตข้อความหน้าปกและหน้าเตือนทั้งหมดตามภาษาที่เลือก
  const t = coverTranslations[currentLang];
  if (t) {
    const navTitleEl = document.getElementById('navTitle');
    if (navTitleEl) navTitleEl.innerText = t.navTitle;

    const coverSmallTitle = document.getElementById('coverSmallTitle');
    if (coverSmallTitle) coverSmallTitle.innerText = t.smallTitle;

    const coverTitle = document.getElementById('coverTitle');
    if (coverTitle) coverTitle.innerHTML = t.title;

    const coverSubtitle = document.getElementById('coverSubtitle');
    if (coverSubtitle) coverSubtitle.innerHTML = t.subtitle;

    const coverStartBtn = document.getElementById('coverStartBtn');
    if (coverStartBtn) coverStartBtn.innerText = t.startBtn;

    const coverNote = document.getElementById('coverNote');
    if (coverNote) coverNote.innerText = t.note;

    // --- ย้ายโค้ดหน้าแนะนำหนังสือมาไว้ตรงนี้ ---
    const aboutBookLabel = document.getElementById('aboutBookLabel');
    if (aboutBookLabel) aboutBookLabel.innerText = t.aboutBookLabel;

    const aboutBookTitle = document.getElementById('aboutBookTitle');
    if (aboutBookTitle) aboutBookTitle.innerText = t.aboutBookTitle;

    const aboutBookDesc = document.getElementById('aboutBookDesc');
    if (aboutBookDesc) aboutBookDesc.innerHTML = t.aboutBookDesc;

    const aboutBookNextBtn = document.getElementById('aboutBookNextBtn');
    if (aboutBookNextBtn) aboutBookNextBtn.innerText = t.aboutBookNextBtn;

    const aboutBookBackBtn = document.getElementById('aboutBookBackBtn');
    if (aboutBookBackBtn) aboutBookBackBtn.innerText = t.aboutBookBackBtn;
    // ------------------------------------

    // Warning page texts
    const warningLabel = document.getElementById('warningLabel');
    if (warningLabel) warningLabel.innerText = t.warningLabel;

    const warningTitle = document.getElementById('warningTitle');
    if (warningTitle) warningTitle.innerText = t.warningTitle;

    const warningIntro = document.getElementById('warningIntro');
    if (warningIntro) warningIntro.innerHTML = t.warningIntro;

    const warn1Title = document.getElementById('warn1Title');
    if (warn1Title) warn1Title.innerText = t.warn1Title;

    const warn1Desc = document.getElementById('warn1Desc');
    if (warn1Desc) warn1Desc.innerText = t.warn1Desc;

    const warn2Title = document.getElementById('warn2Title');
    if (warn2Title) warn2Title.innerText = t.warn2Title;

    const warn2Desc = document.getElementById('warn2Desc');
    if (warn2Desc) warn2Desc.innerText = t.warn2Desc;

    const warn3Title = document.getElementById('warn3Title');
    if (warn3Title) warn3Title.innerText = t.warn3Title;

    const warn3Desc = document.getElementById('warn3Desc');
    if (warn3Desc) warn3Desc.innerText = t.warn3Desc;

    const warningBtnText = document.getElementById('warningBtnText');
    if (warningBtnText) warningBtnText.innerText = t.warningBtnText;

    const warningBackBtn = document.getElementById('warningBackBtn');
    if (warningBackBtn) warningBackBtn.innerText = t.warningBackBtn;

    // Button labels inside quiz
    const readQuestionText = document.getElementById('readQuestionText');
    if (readQuestionText) readQuestionText.innerText = t.readQuestionText;

    const backToStoryText = document.getElementById('backToStoryText');
    if (backToStoryText) backToStoryText.innerText = t.backToStoryText;

    const creditsBtnText = document.getElementById('creditsBtnText');
    if (creditsBtnText) creditsBtnText.innerText = t.creditsBtnText;

    const specialThanksText = document.getElementById('specialThanksText');
    if (specialThanksText) specialThanksText.innerText = t.specialThanksText;

    const restartBtnText = document.getElementById('restartBtnText');
    if (restartBtnText) restartBtnText.innerText = t.restartBtnText;
  }

  // อัปเดตเนื้อหาบททดสอบ (ถ้าอยู่ในหน้าเล่น)
  if (stepIndex < stepsData.length) {
    const step = stepsData[stepIndex];
    document.getElementById('seasonTitle').innerText = step.season[currentLang];
    document.getElementById('storyText').innerText = step.story[currentLang];
    document.getElementById('questionText').innerText = step.question[currentLang];
    
    const btnGroup = document.getElementById('btnGroup');
    btnGroup.innerHTML = '';
    step.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'btn-option';
      btn.innerText = opt.text[currentLang];
      btn.onclick = () => selectOption(opt.card, opt.pts);
      btnGroup.appendChild(btn);
    });
  } else {
    showFinalCard();
  }
}