/* ============================================================
   InToday Landing Page — i18n + Language Switcher
   ============================================================ */

const translations = {
    en: {
        flag: '🇬🇧',
        label: 'EN',
        nav_cta: 'Start for free',
        hero_title: 'Give things<br>a place first',
        hero_sub: 'Keep small things from getting lost in<br>notes, reminders, and to-do lists',
        hero_cta: 'Start for free',
        f1_label: 'Organize by time periods',
        f1_title: 'No need for calendar slots or mental notes',
        f1_desc: 'Small things can easily go into the right time block',
        f2_label: 'Instant access',
        f2_title: 'Every item leads you to the next step',
        f2_desc: 'Easily add links, locations, files, and text – open them anytime in a clearer, more readable form',
        f3_label: 'Keep it simple',
        f3_title: 'Everything for today, all on one page.',
        f3_desc: 'Your day stays in one place - easy to see , easy to adjust as things change',
        uc1_title: 'Work follow-ups',
        uc1_desc: 'Keep handoffs, follow-ups, and post-meeting tasks in one place – not scattered across notes, chats, and to-do lists.',
        uc2_title: 'Between classes and homework',
        uc2_desc: 'Things to submit, materials to read, messages to reply, tasks for later... no exact time needed, just place them in the right part of your day.',
        uc3_title: 'For days that keep shifting',
        uc3_desc: 'Groceries, trips, city walks, or busy multi-tasking days – things can move easily, and your plans stay clear.',
        quote: '“No longer bound by cluttered lists and exact schedules”',
        quote_attr: 'The InToday Philosophy',
        cta_title: 'Starting today, give things a place.',
        cta_btn: 'Start for free',
        footer_help: 'Help / Feedback',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms of Service',
        footer_copy: '© 2026 InToday. All rights reserved.',
        privacy_title: 'Privacy Policy',
        privacy_intro: 'Your privacy is important to us. Here is how we handle your data.',
        privacy_sec1_title: 'Information We Collect',
        privacy_sec1_desc: 'InToday is designed to be local-first. We do not store your personal notes or schedules on our servers.',
        privacy_sec2_title: 'How We Use Data',
        privacy_sec2_desc: 'Any data collected is used solely to improve the app experience and is never shared with third parties.',
    },
    zh: {
        flag: '🇨🇳',
        label: '中文',
        nav_cta: '免费开始',
        hero_title: '让事情<br>先有个位置',
        hero_sub: '不让小事继续迷失在笔记、提醒和待办清单中',
        hero_cta: '免费开始',
        f1_label: '按时间段安排',
        f1_title: '不必塞进日历 也不用再怕忘记',
        f1_desc: '任何小事 都能轻松放进合适的时间段里',
        f2_label: '一键直达',
        f2_title: '每条事项 都能通往下一步',
        f2_desc: '链接 地点 文件和文字都能轻松输入 自动整理成可读内容 随时直接打开。',
        f3_label: '保持简单',
        f3_title: '今天的事 都留在同一页里',
        f3_desc: '你的一天集中在一处 清晰可见 也能顺着变化随时调整',
        uc1_title: '工作上的后续事项',
        uc1_desc: '将交接 跟进和会后要处理的小事留在一处 不再散落在笔记 聊天和待办里',
        uc2_title: '课后和作业之间的小事',
        uc2_desc: '要交的东西 要看的资料 要回的消息 晚点要完成的任务等等 不用设定时间 只需放入合适的时段',
        uc3_title: '会不断变化的一天',
        uc3_desc: '买菜 去商店 旅行 城市散步 或忙碌又多变的一天里 事情都能随时移动 安排也依然清楚',
        quote: '“不再被冗杂的任务清单和精确的时间设定束缚”',
        quote_attr: 'InToday 的理念',
        cta_title: '从今天开始 让事情先有个位置！',
        cta_btn: '免费开始',
        footer_help: '帮助与反馈',
        footer_privacy: '隐私政策',
        footer_terms: '服务条款',
        footer_copy: '© 2026 InToday. 版权所有。',
        privacy_title: '隐私政策',
        privacy_intro: '我们非常重视您的隐私。以下是我们的数据处理方式。',
        privacy_sec1_title: '收集的信息',
        privacy_sec1_desc: 'InToday 采用本地优先设计。我们不会在服务器上存储您的个人笔记或日程表。',
        privacy_sec2_title: '我们如何使用数据',
        privacy_sec2_desc: '收集的任何数据仅用于改进应用体验，绝不会与第三方共享。',
    },
    ms: {
        flag: '🇲🇾',
        label: 'MY',
        nav_cta: 'Mulakan percuma',
        hero_title: 'Beri setiap perkara<br>tempat terlebih dahulu',
        hero_sub: 'Jangan biar perkara kecil terus hilang dalam nota, peringatan, dan senarai tugasan',
        hero_cta: 'Mulakan percuma',
        f1_label: 'Susun mengikut slot masa',
        f1_title: 'Tak perlu sesakkan kalendar, tak perlu lagi takut lupa',
        f1_desc: 'Apa sahaja perkara kecil boleh diletakkan dalam slot masa yang sesuai dengan mudah',
        f2_label: 'Akses terus',
        f2_title: 'Setiap item membawa anda ke langkah seterusnya',
        f2_desc: 'Pautan, lokasi, fail dan teks – semuanya mudah dimasukkan dan disusun menjadi kandungan yang senang dibaca, sedia dibuka bila-bila masa.',
        f3_label: 'Kekalkan kesederhanaan',
        f3_title: 'Hal hari ini, semuanya di satu halaman sahaja',
        f3_desc: 'Hari anda tertumpu di satu tempat, jelas kelihatan dan boleh dilaraskan mengikut perubahan',
        uc1_title: 'Tindakan susulan kerja',
        uc1_desc: 'Simpan serahan, tindakan susulan dan tugasan selepas mesyuarat di satu tempat – tidak lagi bersepah dalam nota, sembang atau senarai tugasan.',
        uc2_title: 'Antara waktu sekolah dan kerja sekolah',
        uc2_desc: 'Barang untuk dihantar, bahan bacaan, mesej untuk dibalas, tugasan kemudian hari... tidak perlu tetapkan masa tepat, cukup sekadar masukkan ke dalam slot yang sesuai.',
        uc3_title: 'Untuk hari yang sentiasa berubah',
        uc3_desc: 'Membeli-belah, melancong, bersiar-siar di bandar, atau hari yang sibuk dan berubah-ubah – segalanya mudah dialihkan dan rancangan tetap jelas.',
        quote: '“Tidak lagi terikat dengan senarai tugasan yang berselirat dan penetapan masa yang kaku”',
        quote_attr: 'Falsafah InToday',
        cta_title: 'Bermula hari ini, beri setiap perkara tempat terlebih dahulu！',
        cta_btn: 'Mulakan percuma',
        footer_help: 'Bantuan / Maklum Balas',
        footer_privacy: 'Dasar Privasi',
        footer_terms: 'Syarat Perkhidmatan',
        footer_copy: '© 2026 InToday. Hak cipta terpelihara.',
        privacy_title: 'Dasar Privasi',
        privacy_intro: 'Privasi anda adalah penting bagi kami. Berikut ialah cara kami mengendalikan data anda.',
        privacy_sec1_title: 'Maklumat yang Kami Kumpul',
        privacy_sec1_desc: 'InToday direka bentuk mengutamakan simpanan tempatan. Kami tidak menyimpan nota peribadi atau jadual anda pada pelayan kami.',
        privacy_sec2_title: 'Cara Kami Menggunakan Data',
        privacy_sec2_desc: 'Sebarang data yang dikumpul digunakan semata-mata untuk menambah baik pengalaman aplikasi dan tidak pernah dikongsi dengan pihak ketiga.',
    },
    ja: {
        flag: '🇯🇵',
        label: '日本語',
        nav_cta: '無料で始める',
        hero_title: 'やることに、<br>まず居場所を',
        hero_sub: '小さな用事がメモやリマインダー、ToDoリストに埋もれないように',
        hero_cta: '無料で始める',
        f1_label: '時間帯で整理する',
        f1_title: 'カレンダーに入れなくていい。<br>忘れる心配もいらない。',
        f1_desc: '小さなことでも、合う時間帯にさっと置けます。',
        f2_label: 'すぐに開ける',
        f2_title: 'すべての項目が、次の一歩につながる',
        f2_desc: 'リンク、場所、ファイル、テキストも簡単に追加でき、読みやすく整理されて、必要なときにすぐ開けます。',
        f3_label: 'シンプルに保つ',
        f3_title: '今日のことは、<br>一ページにまとめておける',
        f3_desc: '一日の流れをひと目で見渡せて、予定が変わってもそのまま調整できます。',
        uc1_title: '仕事のフォローアップ',
        uc1_desc: '引き継ぎやフォローアップ、会議後のタスクを一箇所に。メモやチャット、ToDoリストに散らばりません。',
        uc2_title: '授業や課題の合間に',
        uc2_desc: '提出するもの、読む資料、返信、あとでやること。正確な時間を決めなくても、合う時間帯に入れるだけ。',
        uc3_title: '変わり続ける一日に',
        uc3_desc: '買い物や旅行、街歩き、予定が変わりやすい日でも、流れに合わせて動かせて、見通しも保てます。',
        quote: '“煩雑なリストや、正確すぎる時間に縛られないために。”',
        quote_attr: 'InToday のフィロソフィー',
        cta_title: '今日から、やることに居場所を。',
        cta_btn: '無料で始める',
        footer_help: 'ヘルプ / フィードバック',
        footer_privacy: 'プライバシーポリシー',
        footer_terms: '利用規約',
        footer_copy: '© 2026 InToday. 全著作権所有。',
        privacy_title: 'プライバシーポリシー',
        privacy_intro: 'お客様のプライバシーは私たちにとって重要です。データの取り扱いについては以下の通りです。',
        privacy_sec1_title: '収集する情報',
        privacy_sec1_desc: 'InTodayはローカルファーストで設計されています。お客様の個人的なメモやスケジュールをサーバーに保存することはありません。',
        privacy_sec2_title: 'データの利用方法',
        privacy_sec2_desc: '収集されたデータはアプリ体験の向上のみに使用され、第三者と共有されることはありません。',
    },
    th: {
        flag: '🇹🇭',
        label: 'ไทย',
        nav_cta: 'เริ่มต้นฟรี',
        hero_title: 'ให้ทุกเรื่อง<br>มีที่ของมันก่อน',
        hero_sub: 'อย่าให้เรื่องเล็กน้อยหายไปในโน้ต การเตือน และรายการสิ่งที่ต้องทำ',
        hero_cta: 'เริ่มต้นฟรี',
        f1_label: 'จัดระเบียบตามช่วงเวลา',
        f1_title: 'ไม่ต้องเบียดเสียดในปฏิทิน และไม่ต้องกลัวลืมอีกต่อไป',
        f1_desc: 'เรื่องเล็กๆ น้อยๆ ก็วางลงในชว่งเวลาที่เหมาะสมได้ง่ายๆ',
        f2_label: 'เข้าถึงได้ทันที',
        f2_title: 'ให้ทุกรายการ นำคุณไปสู่ขั้นตอนต่อไป',
        f2_desc: 'ลิงก์ สถานที่ ไฟล์ และข้อความ — ทุกอย่างถูกบันทึกและจัดระเบียบให้อ่านง่าย พร้อมเปิดใช้ทุกเมื่อ',
        f3_label: 'เรียบง่ายที่สุด',
        f3_title: 'ทุกเรื่องของวันนี้ รวมอยู่ในหน้าเดียว',
        f3_desc: 'รวมวันของคุณไว้ที่เดียว เห็นภาพชัดเจน และปรับเปลี่ยนได้ตามสถานการณ์',
        uc1_title: 'การติดตามงาน',
        uc1_desc: 'รวมการส่งต่องาน การติดตาม และสิ่งที่ต้องทำหลังประชุมไว้ในที่เดียว ไม่ต้องกระจัดกระจายอยู่ในโน้ต แชท หรือรายการสิ่งที่ต้องทำ',
        uc2_title: 'ระหว่างคาบเรียนและการบ้าน',
        uc2_desc: 'สิ่งที่ต้องส่ง ข้อมูลที่ต้องอ่าน ข้อความที่ต้องตอบ งานที่ต้องทำภายหลัง... ไม่ต้องกำหนดเวลา แค่วางลงในชว่งเวลาที่ใช่',
        uc3_title: 'สำหรับวันที่เปลี่ยนแปลงตลอดเวลา',
        uc3_desc: 'ไปซื้อของ ทริป เดินเล่นในเมือง หรือในวันที่ยุ่งและไม่แน่นอน — ทุกอย่างเคลื่อนย้ายได้ง่ายและแผนงานยังคงชัดเจน',
        quote: '“ไม่ต้องถูกพันธนาการด้วยรายการงานที่วุ่นวายและการกำหนดเวลาที่เคร่งครัด”',
        quote_attr: 'ปรัชญาของ InToday',
        cta_title: 'เริ่มตั้งแต่วันนี้ ให้ทุกเรื่องมีที่ของมันก่อน！',
        cta_btn: 'เริ่มต้นฟรี',
        footer_help: 'ช่วยเหลือ / ข้อเสนอแนะ',
        footer_privacy: 'นโยบายความเป็นส่วนตัว',
        footer_terms: 'เงื่อนไขการให้บริการ',
        footer_copy: '© 2026 InToday. สงวนลิขสิทธิ์ทั้งหมด',
        privacy_title: 'นโยบายความเป็นส่วนตัว',
        privacy_intro: 'ความเป็นส่วนตัวของคุณเป็นสิ่งสำคัญสำหรับเรา นี่คือวิธีที่เราจัดการข้อมูลของคุณ',
        privacy_sec1_title: 'ข้อมูลที่เรารวบรวม',
        privacy_sec1_desc: 'InToday ได้รับการออกแบบให้เน้นการประมวลผลในเครื่องก่อน เราไม่จัดเก็บโน้ตส่วนตัวหรือตารางเวลาของคุณไว้บนเซิร์ฟเวอร์ของเรา',
        privacy_sec2_title: 'วิธีที่เราใช้ข้อมูล',
        privacy_sec2_desc: 'ข้อมูลใดๆ ที่รวบรวมจะถูกใช้เพื่อปรับปรุงประสบการณ์การใช้งานแอปเท่านั้น และจะไม่ถูกแชร์กับบุคคลที่สาม',
    },
};

let currentLang = 'en';

function applyLanguage(lang) {
    if (!translations[lang]) return; // Check if translation exists
    const t = translations[lang];

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update lang button display
    document.getElementById('lang-label').textContent = t.label;

    // Update html lang attribute
    document.documentElement.lang = lang;

    currentLang = lang;
    localStorage.setItem('intoday_lang', lang); // Save language preference
    closeLangMenu();
}

function closeLangMenu() {
    const menu = document.getElementById('lang-menu');
    const btn = document.getElementById('lang-btn');
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
}

function toggleLangMenu() {
    const menu = document.getElementById('lang-menu');
    const btn = document.getElementById('lang-btn');
    const isOpen = menu.classList.contains('open');
    menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(!isOpen));
}

// Theme Switcher Logic
function initTheme() {
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = document.getElementById('theme-icon');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    function setIcon(isDark) {
        if(themeIcon) {
            themeIcon.src = isDark ? 'assets/sun.png' : 'assets/moon.png';
        }
    }

    // Set initial state
    const isInitialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    if (isInitialDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    setIcon(isInitialDark);

    // Handle toggle click
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setIcon(false);
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIcon(true);
            }
        });
    }
}

// Header Scroll Logic
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('border-brand-border/40', 'dark:border-dark-border/40');
            header.classList.remove('border-transparent');
        } else {
            header.classList.remove('border-brand-border/40', 'dark:border-dark-border/40');
            header.classList.add('border-transparent');
        }
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Theme
    initTheme();

    // Initialize Header Scroll
    initHeaderScroll();

    // Toggle dropdown
    document.getElementById('lang-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLangMenu();
    });

    // Select language
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            applyLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Close on outside click
    document.addEventListener('click', () => closeLangMenu());
 
    // Check saved language or default to English
    const savedLang = localStorage.getItem('intoday_lang');
    if (savedLang && translations[savedLang]) {
        applyLanguage(savedLang);
    }
});
