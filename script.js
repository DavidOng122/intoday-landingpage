/* ============================================================
   InToday Landing Page — i18n + Language Switcher
   ============================================================ */

const translations = {
    en: {
        flag: '🇬🇧',
        label: 'EN',
        nav_cta: 'Start for free',
        hero_title: 'A clearer<br>rhythm for your day',
        hero_sub: 'Keep small things from getting lost in notes, reminders, and to-do lists',
        hero_cta: 'Start for free',
        f1_label: 'Organize by time of day',
        f1_title: 'Place things where they belong',
        f1_desc: 'No need to figure out the exact time, just place it into your day.',
        f2_label: 'Adapt as you go',
        f2_title: 'Flexible by design',
        f2_desc: 'When your plans change, just move things and keep going.',
        f3_label: 'Keep it simple',
        f3_title: 'One page for your day',
        f3_desc: 'Your day stays in one place, easy to see, adjust, and move on.',
        uc1_title: 'For work follow-ups',
        uc1_desc: 'Keep handoffs and follow-ups in one clear place – instead of leaving them in notes or chat.',
        uc2_title: 'For plans without exact times',
        uc2_desc: "Buying groceries, going to a shop... you know you need to do, but don't have an exact time for yet.",
        uc3_title: 'For days that keep changing',
        uc3_desc: 'Trips, city walks, and busy days with changing plans and timing - keep things visible and easy to move.',
        quote: '"Your day isn\'t a list of chores.<br class="hidden md:block"> It\'s a rhythm of moments."',
        quote_attr: 'The InToday Philosophy',
        cta_title: 'Bring more rhythm into your day',
        cta_btn: 'Start for free',
        footer_copy: '© 2026 InToday. All rights reserved.',
    },
    zh: {
        flag: '🇨🇳',
        label: '中文',
        nav_cta: '免费开始',
        hero_title: '让每一天<br>更有节奏感',
        hero_sub: '不让小事迷失在笔记、提醒和待办清单中',
        hero_cta: '免费开始',
        f1_label: '按时间段安排',
        f1_title: '把事情放在它该在的位置',
        f1_desc: '无需确定精确时间，只需将它放入你的一天。',
        f2_label: '随时调整',
        f2_title: '灵活是设计的核心',
        f2_desc: '当计划改变时，移动事项，继续前行。',
        f3_label: '保持简单',
        f3_title: '一页搞定你的一天',
        f3_desc: '你的一天集中在一处，清晰可见，随时调整，轻松前行。',
        uc1_title: '工作跟进',
        uc1_desc: '将交接和跟进事项集中在一处，不再散落在笔记或聊天记录里。',
        uc2_title: '没有确切时间的计划',
        uc2_desc: '买菜、去商店……你知道要做，但还没有确切的时间。',
        uc3_title: '计划不断变化的一天',
        uc3_desc: '旅行、城市散步、忙碌且多变的一天——让事项可见、易于移动。',
        quote: '"你的一天不是一张琐事清单。<br class="hidden md:block">它是一段段时刻组成的旋律。"',
        quote_attr: 'InToday 的理念',
        cta_title: '让你的每一天更有节奏',
        cta_btn: '免费开始',
        footer_copy: '© 2026 InToday. 版权所有。',
    },
    ms: {
        flag: '🇲🇾',
        label: 'MY',
        nav_cta: 'Mulakan percuma',
        hero_title: 'Irama yang lebih jelas<br>untuk harian anda',
        hero_sub: 'Jangan biar perkara kecil hilang dalam nota, peringatan, dan senarai tugasan',
        hero_cta: 'Mulakan percuma',
        f1_label: 'Susun mengikut waktu',
        f1_title: 'Letak sesuatu di tempat yang sepatutnya',
        f1_desc: 'Tidak perlu tahu masa tepat — letakkan sahaja dalam hari anda.',
        f2_label: 'Sesuaikan sepanjang masa',
        f2_title: 'Fleksibel dari segi reka bentuk',
        f2_desc: 'Apabila rancangan berubah, alihkan sahaja dan teruskan.',
        f3_label: 'Kekalkan kesederhanaan',
        f3_title: 'Satu halaman untuk hari anda',
        f3_desc: 'Hari anda kekal di satu tempat, mudah dilihat, diubah suai, dan diteruskan.',
        uc1_title: 'Untuk tindak lanjut kerja',
        uc1_desc: 'Simpan serahan dan tindak lanjut di satu tempat yang jelas — bukan dalam nota atau sembang.',
        uc2_title: 'Untuk rancangan tanpa masa tepat',
        uc2_desc: 'Beli barang dapur, pergi kedai... anda tahu perlu buat, tapi belum ada masa yang ditetapkan.',
        uc3_title: 'Untuk hari yang sentiasa berubah',
        uc3_desc: 'Perjalanan, jalan-jalan bandar, hari sibuk yang berubah-ubah — kekalkan semuanya kelihatan dan mudah dialih.',
        quote: '"Hari anda bukan senarai tugasan.<br class="hidden md:block"> Ia adalah irama saat-saat kehidupan."',
        quote_attr: 'Falsafah InToday',
        cta_title: 'Bawa lebih banyak irama ke dalam hari anda',
        cta_btn: 'Mulakan percuma',
        footer_copy: '© 2026 InToday. Hak cipta terpelihara.',
    },
    ja: {
        flag: '🇯🇵',
        label: '日本語',
        nav_cta: '無料で始める',
        hero_title: '毎日に<br>もっとリズムを',
        hero_sub: '小さなことがメモやリマインダー、ToDoリストに埋もれないようにしましょう',
        hero_cta: '無料で始める',
        f1_label: '時間帯で整理する',
        f1_title: 'ものごとをあるべき場所に',
        f1_desc: '正確な時間を決めなくていい。ただ、あなたの一日の中に置くだけ。',
        f2_label: '状況に合わせて調整',
        f2_title: '柔軟に設計されている',
        f2_desc: '予定が変わったら、動かすだけ。そのまま続ければいい。',
        f3_label: 'シンプルに保つ',
        f3_title: '一日を一ページに',
        f3_desc: 'あなたの一日はひとつの場所にまとまっています。見やすく、調整しやすく、前へ進みやすい。',
        uc1_title: '仕事のフォローアップに',
        uc1_desc: '引き継ぎやフォローアップをノートやチャットに残さず、一か所に整理しましょう。',
        uc2_title: '時間が決まっていない予定に',
        uc2_desc: '買い物や店に行くことなど、やらなければならないとわかっているけど、まだ時間が決まっていないこと。',
        uc3_title: '変化し続ける一日に',
        uc3_desc: '旅行、街歩き、変わり続ける予定の忙しい日——すべてを見えやすく、動かしやすく。',
        quote: '"あなたの一日は、雑用のリストではない。<br class="hidden md:block"> それは、瞬間のリズムだ。"',
        quote_attr: 'InToday のフィロソフィー',
        cta_title: '毎日にもっとリズムを取り込もう',
        cta_btn: '無料で始める',
        footer_copy: '© 2026 InToday. 全著作権所有。',
    },
    th: {
        flag: '🇹🇭',
        label: 'ไทย',
        nav_cta: 'เริ่มต้นฟรี',
        hero_title: 'จังหวะที่ชัดเจนขึ้น<br>สำหรับวันของคุณ',
        hero_sub: 'อย่าให้สิ่งเล็กน้อยหายไปในโน้ต การเตือน และรายการสิ่งที่ต้องทำ',
        hero_cta: 'เริ่มต้นฟรี',
        f1_label: 'จัดระเบียบตามช่วงเวลา',
        f1_title: 'วางทุกอย่างให้ถูกที่',
        f1_desc: 'ไม่ต้องกำหนดเวลาแน่ชัด แค่วางมันไว้ในวันของคุณ',
        f2_label: 'ปรับได้ตลอดเวลา',
        f2_title: 'ออกแบบให้ยืดหยุ่น',
        f2_desc: 'เมื่อแผนเปลี่ยน ย้ายสิ่งต่างๆ แล้วก้าวต่อไป',
        f3_label: 'เรียบง่ายที่สุด',
        f3_title: 'หนึ่งหน้าสำหรับวันของคุณ',
        f3_desc: 'วันของคุณอยู่ในที่เดียว ดูง่าย ปรับง่าย ก้าวต่อได้ง่าย',
        uc1_title: 'สำหรับการติดตามงาน',
        uc1_desc: 'เก็บการส่งต่อและการติดตามงานไว้ในที่เดียวที่ชัดเจน แทนที่จะทิ้งไว้ในโน้ตหรือแชท',
        uc2_title: 'สำหรับแผนที่ยังไม่มีเวลาแน่ชัด',
        uc2_desc: 'ซื้อของ ไปร้าน... คุณรู้ว่าต้องทำ แต่ยังไม่มีเวลาที่แน่นอน',
        uc3_title: 'สำหรับวันที่เปลี่ยนแปลงตลอดเวลา',
        uc3_desc: 'ทริป เดินในเมือง วันที่ยุ่งและเปลี่ยนแปลงไม่หยุด — ทำให้ทุกอย่างมองเห็นได้และย้ายได้ง่าย',
        quote: '"วันของคุณไม่ใช่รายการงานที่น่าเบื่อ<br class="hidden md:block"> มันคือจังหวะของช่วงเวลา"',
        quote_attr: 'ปรัชญาของ InToday',
        cta_title: 'นำจังหวะที่มากขึ้นมาสู่วันของคุณ',
        cta_btn: 'เริ่มต้นฟรี',
        footer_copy: '© 2026 InToday. สงวนลิขสิทธิ์ทั้งหมด',
    },
};

let currentLang = 'en';

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

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

    // Detect browser language and auto-apply
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    const supportedLangs = ['en', 'zh', 'ms', 'ja', 'th'];
    if (supportedLangs.includes(browserLang)) {
        applyLanguage(browserLang);
    }
});
