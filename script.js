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
        pp_title: 'Privacy Policy of IntoDay',
        pp_effective: 'Effective Date: @2026/3/12',
        pp_intro: 'IntoDay (“we,” “us,” or “our”) respects your privacy. This Privacy Policy explains what information we collect, how we use it, and what choices you have when using IntoDay.',
        pp_desc: 'IntoDay is a tool for organizing tasks, reminders, follow-ups, and small plans into time blocks throughout the day.',
        pp_contact_intro: 'If you have any questions about this Privacy Policy, you can contact us at: contact.intoday@gmail.com',
        pp_s1_title: '1. Who We Are',
        pp_s1_desc: 'IntoDay is the provider of the IntoDay app and related website. If you have questions about privacy or data handling, you can contact us at: contact.intoday@gmail.com',
        pp_s2_title: '2. Information We Collect',
        pp_s2_desc: 'We collect only the information necessary to provide and improve IntoDay.',
        pp_s2_1_title: '2.1 Account Information',
        pp_s2_1_desc: 'If you sign in with Google, we may receive basic account information such as:',
        pp_s2_1_list: '<li>your email address</li><li>your Google account identifier</li><li>your name or profile image, if provided through your login permissions</li>',
        pp_s2_1_meta: 'We use this information to create and manage your account and let you sign in securely.',
        pp_s2_2_title: '2.2 Content You Add to IntoDay',
        pp_s2_2_desc: 'When you use IntoDay, we may store the content you choose to add, such as tasks, reminders, notes, links, locations, file-related references, and other task-related text you enter into the app.',
        pp_s2_2_meta: 'We use this information to provide the core functionality of IntoDay, including displaying, organizing, and syncing your content.',
        pp_s2_3_title: '2.3 Technical and Usage Data',
        pp_s2_3_desc: 'When you use IntoDay, we may automatically collect certain technical information, such as:',
        pp_s2_3_list: '<li>device and browser information</li><li>IP address</li><li>log data</li><li>usage analytics and product interaction data</li>',
        pp_s2_3_meta: 'We use this information to keep the service running securely, understand app performance, fix bugs, and improve the product experience.',
        pp_s3_title: '3. How We Use Your Information',
        pp_s3_desc: 'We use your information to provide and maintain IntoDay, enable secure login, store and display your tasks and content, support syncing and account-related functions, monitor stability, performance, and security, and improve the app over time.',
        pp_s4_title: '4. Third-Party Services We Use',
        pp_s4_desc: 'We use trusted third-party service providers to operate IntoDay.',
        pp_s4_1_title: '4.1 Supabase',
        pp_s4_1_desc: 'We use Supabase for authentication, database, and backend-related services. Supabase may store your account data and the content you add to IntoDay as needed to provide the service.',
        pp_s4_2_title: '4.2 Google Sign-In',
        pp_s4_2_desc: 'If you choose to log in with Google, Google provides the authentication process and may share basic account information with us, depending on the permissions you grant.',
        pp_s4_3_title: '4.3 Vercel',
        pp_s4_3_desc: 'We use Vercel to host and deliver the IntoDay website and web app. Vercel may process technical information such as IP address, browser/device details, and request logs for hosting, delivery, and security purposes.',
        pp_s5_title: '5. How We Share Information',
        pp_s5_desc: 'We do not sell your personal information. We may share your information only with service providers that help us operate IntoDay, when required by law, or when necessary to protect the security, rights, or integrity of IntoDay and its users.',
        pp_s6_title: '6. Data Retention',
        pp_s6_desc: 'We keep your information only for as long as it is needed to provide IntoDay and operate the service. If you delete your account or request deletion, we will make reasonable efforts to delete your personal data within a reasonable period, unless we are required to keep certain information for legal, security, or operational reasons.',
        pp_s7_title: '7. Data Security',
        pp_s7_desc: 'We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, misuse, or disclosure. However, no system is completely secure, and we cannot guarantee absolute security.',
        pp_s8_title: '8. Your Choices and Rights',
        pp_s8_desc: 'Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or request deletion of your data. To make a request, contact us at: contact.intoday@gmail.com',
        pp_s9_title: '9. Children’s Privacy',
        pp_s9_desc: 'IntoDay is not intended for children under the age required by applicable law to use such services without parental consent. We do not knowingly collect personal information from children in violation of applicable law.',
        pp_s10_title: '10. Changes to This Privacy Policy',
        pp_s10_desc: 'We may update this Privacy Policy from time to time. If we make material changes, we will update the “Effective Date” at the top of this page and, where appropriate, provide additional notice.',
        pp_s11_title: '11. Contact',
        pp_s11_desc: 'If you have any questions, feedback, or privacy-related requests, you can contact us at: contact.intoday@gmail.com',
        ts_title: 'Terms of Service of IntoDay',
        ts_effective: 'Effective Date: @2026/3/12',
        ts_intro: 'These Terms of Service (“Terms”) govern your access to and use of IntoDay (“IntoDay,” “we,” “us,” or “our”).',
        ts_agree: 'By accessing or using IntoDay, you agree to these Terms. If you do not agree, please do not use IntoDay.',
        ts_s1_title: '1. About IntoDay',
        ts_s1_desc: 'IntoDay is a tool for organizing tasks, reminders, follow-ups, and small plans into time blocks throughout the day. IntoDay is currently provided as an early-stage product / beta service. Some features may change, be updated, or be removed over time.',
        ts_s2_title: '2. Eligibility',
        ts_s2_desc: 'You may use IntoDay only if you can legally enter into a binding agreement under the laws that apply to you.',
        ts_s3_title: '3. Your Account',
        ts_s3_intro: 'You may sign in to IntoDay using Google authentication. You are responsible for:',
        ts_s3_list: '<li>maintaining the security of your account</li><li>keeping your login credentials safe</li><li>all activity that occurs under your account</li>',
        ts_s3_contact: 'If you believe your account has been accessed without authorization, please contact us at: contact.intoday@gmail.com',
        ts_s4_title: '4. Your Content',
        ts_s4_desc: 'You may add content to IntoDay, including tasks, reminders, notes, links, locations, file-related references, and other text. You retain ownership of the content you submit to IntoDay. You grant us a limited right to store, process, and display your content only as necessary to operate and provide the service. You are responsible for the content you add and for ensuring that you have the right to use and submit it.',
        ts_s5_title: '5. Acceptable Use',
        ts_s5_intro: 'You agree not to:',
        ts_s5_list: '<li>use IntoDay for unlawful purposes</li><li>upload or submit harmful, abusive, infringing, or misleading content</li><li>interfere with the security or operation of the service</li><li>attempt to access data that does not belong to you</li><li>reverse engineer, copy, or misuse the service beyond normal permitted use</li>',
        ts_s5_footer: 'We may suspend or terminate access if we reasonably believe you have violated these Terms.',
        ts_s6_title: '6. Service Availability',
        ts_s6_desc: 'IntoDay is provided on an “as is” and “as available” basis. We may update, change, suspend, or discontinue parts of the service at any time, especially during the beta stage. We do not guarantee that IntoDay will always be available, error-free, or uninterrupted.',
        ts_s7_title: '7. Beta Status',
        ts_s7_desc: 'Because IntoDay is in an early stage, features may change frequently. You understand that some features may be incomplete, bugs or interruptions may occur, and product behavior may change over time. We appreciate feedback, but we are not obligated to implement any suggestions.',
        ts_s8_title: '8. Privacy',
        ts_s8_desc: 'Your use of IntoDay is also governed by our Privacy Policy. Please review the Privacy Policy to understand how we collect, use, and handle your information.',
        ts_s9_title: '9. Termination',
        ts_s9_desc: 'You may stop using IntoDay at any time. We may suspend or terminate your access to IntoDay at any time if you violate these Terms, if we need to protect the service, users, or our systems, or if we decide to discontinue the beta or service.',
        ts_s10_title: '10. Disclaimers',
        ts_s10_desc: 'IntoDay is a productivity tool only. It does not provide legal, medical, financial, or professional advice. We are not responsible for missed tasks, lost data, scheduling outcomes, or decisions made based on the use of IntoDay.',
        ts_s11_title: '11. Limitation of Liability',
        ts_s11_desc: 'To the maximum extent permitted by law, IntoDay and its operators will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, profits, or business opportunities resulting from your use of or inability to use the service.',
        ts_s12_title: '12. Changes to These Terms',
        ts_s12_desc: 'We may update these Terms from time to time. If we make material changes, we will update the Effective Date above. Your continued use of IntoDay after the updated Terms take effect means you agree to the revised Terms.',
        ts_s13_title: '13. Contact',
        ts_s13_desc: 'If you have questions about these Terms, you can contact us at: contact.intoday@gmail.com',
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
        pp_title: 'IntoDay 隐私政策',
        pp_effective: '生效日期：2026/3/12',
        pp_intro: 'IntoDay（“我们”、“我们的”）尊重您的隐私。本隐私政策解释了我们在您使用 IntoDay 时收集哪些信息、我们如何使用这些信息以及您有哪些选择。',
        pp_desc: 'IntoDay 是一款将任务、提醒、跟进和微计划组织到全天时间块中的工具。',
        pp_contact_intro: '如果您对本隐私政策有任何疑问，可以通过以下方式联系我们：contact.intoday@gmail.com',
        pp_s1_title: '1. 我们是谁',
        pp_s1_desc: 'IntoDay 是 IntoDay 应用程序及相关网站的提供商。如果您对隐私或数据处理有任何疑问，可以通过以下方式联系我们：contact.intoday@gmail.com',
        pp_s2_title: '2. 我们收集的信息',
        pp_s2_desc: '我们仅收集提供及改进 IntoDay 所必需的信息。',
        pp_s2_1_title: '2.1 账户信息',
        pp_s2_1_desc: '如果您使用 Google 登录，我们可能会收到基本账户信息，例如：',
        pp_s2_1_list: '<li>您的电子邮件地址</li><li>您的 Google 账户标识符</li><li>您的姓名或个人资料图片（如果在登录权限中提供）</li>',
        pp_s2_1_meta: '我们使用这些信息来创建和管理您的账户，并让您安全登录。',
        pp_s2_2_title: '2.2 您添加到 IntoDay 的内容',
        pp_s2_2_desc: '当您使用 IntoDay 时，我们可能会存储您选择添加的内容，例如任务、提醒、笔记、链接、位置、文件相关引用以及您在应用中输入的其他任务相关文本。',
        pp_s2_2_meta: '我们使用这些信息来提供 IntoDay 的核心功能，包括显示、组织和同步您的内容。',
        pp_s2_3_title: '2.3 技术和使用数据',
        pp_s2_3_desc: '当您使用 IntoDay 时，我们可能会自动收集某些技术信息，例如：',
        pp_s2_3_list: '<li>设备和浏览器信息</li><li>IP 地址</li><li>日志数据</li><li>使用情况分析和产品交互数据</li>',
        pp_s2_3_meta: '我们使用这些信息来保持服务的安全运行、了解应用性能、修复漏洞并改进产品体验。',
        pp_s3_title: '3. 我们如何使用您的信息',
        pp_s3_desc: '我们使用您的信息来提供和维护 IntoDay、启用安全登录、存储和显示您的任务和内容、支持同步和账户相关功能、监控稳定性、性能和安全性，并随着时间的推移改进应用。',
        pp_s4_title: '4. 我们使用的第三方服务',
        pp_s4_desc: '我们使用值得信赖的第三方服务提供商来运营 IntoDay。',
        pp_s4_1_title: '4.1 Supabase',
        pp_s4_1_desc: '我们使用 Supabase 提供身份验证、数据库和后端相关服务。Supabase 可能会根据提供服务的需要存储您的账户数据和您添加到 IntoDay 的内容。',
        pp_s4_2_title: '4.2 Google 登录',
        pp_s4_2_desc: '如果您选择使用 Google 登录，Google 将提供身份验证过程，并可能根据您授予的权限与我们共享基本账户信息。',
        pp_s4_3_title: '4.3 Vercel',
        pp_s4_3_desc: '我们使用 Vercel 来托管和分发 IntoDay 网站和 Web 应用。Vercel 可能会处理技术信息（如 IP 地址、浏览器/设备详细信息和请求日志），用于托管、分发和安全目的。',
        pp_s5_title: '5. 我们如何分享信息',
        pp_s5_desc: '我们不会出售您的个人信息。我们仅在以下情况下共享您的信息：与帮助我们运营 IntoDay 的服务提供商共享；法律要求时；或为了保护 IntoDay 及其用户的安全、权利或完整性所必需时。',
        pp_s6_title: '6. 数据保留',
        pp_s6_desc: '我们保留您的信息的时间仅限于提供 IntoDay 和运营服务所需的时间。如果您注销账户或请求删除，我们将尽合理努力在合理期限内删除您的个人数据，除非法律、安全或运营原因要求我们保留某些信息。',
        pp_s7_title: '7. 数据安全',
        pp_s7_desc: '我们采取合理的各类技术和组织措施，保护您的信息免受未经授权的访问、丢失、误用或泄露。然而，没有任何系统是绝对安全的，我们无法保证绝对的安全。',
        pp_s8_title: '8. 您的选择和权利',
        pp_s8_desc: '根据您所在的地区，您可能拥有与个人数据相关的权利，包括访问、更正或请求删除数据的权利。如需提出请求，请联系：contact.intoday@gmail.com',
        pp_s9_title: '9. 儿童隐私',
        pp_s9_desc: 'IntoDay 不适用于未满适用法律要求的年龄且未经父母同意使用此类服务的儿童。我们不会在违反适用法律的情况下故意收集儿童的个人信息。',
        pp_s10_title: '10. 本隐私政策的变更',
        pp_s10_desc: '我们可能会不时更新本隐私政策。如果我们做出重大变更，我们将更新页面顶部的“生效日期”，并在适当时提供额外通知。',
        pp_s11_title: '11. 联系方式',
        pp_s11_desc: '如果您有任何问题、反馈或与隐私相关的请求，可以通过以下方式联系我们：contact.intoday@gmail.com',
        ts_title: 'IntoDay 服务条款',
        ts_effective: '生效日期：2026/3/12',
        ts_intro: '本服务条款（“条款”）约束您对比 IntoDay（“IntoDay”、“我们”、“我们的”）的访问和使用。',
        ts_agree: '访问或使用 IntoDay 即表示您同意这些条款。如果您不同意，请勿使用 IntoDay。',
        ts_s1_title: '1. 关于 IntoDay',
        ts_s1_desc: 'IntoDay 是一款将任务、提醒、跟进和微计划组织到全天时间块中的工具。IntoDay 目前作为早期阶段产品 / Beta 服务提供。某些功能可能会随时间变化、更新或移除。',
        ts_s2_title: '2. 适用性',
        ts_s2_desc: '只有当您可以在适用于您的法律下合法签署具有约束力的协议时，您才可以使用 IntoDay。',
        ts_s3_title: '3. 您的账户',
        ts_s3_intro: '您可以使用 Google 身份验证登录 IntoDay。您负责：',
        ts_s3_list: '<li>维护您的账户安全</li><li>妥善保管您的登录凭证</li><li>账户下发生的所有活动</li>',
        ts_s3_contact: '如果您认为您的账户在未经授权的情况下被访问，请联系我们：contact.intoday@gmail.com',
        ts_s4_title: '4. 您的内容',
        ts_s4_desc: '您可以向 IntoDay 添加内容，包括任务、提醒、笔记、链接、位置、文件相关引用和其他文本。您保留对提交给 IntoDay 的内容的所有权。您授予我们有限的权利，仅在操作和提供服务所必需的情况下存储、处理和显示您的内容。您对所添加的内容负责，并确保您有权使用和提交该内容。',
        ts_s5_title: '5. 可接受的使用方式',
        ts_s5_intro: '您同意不：',
        ts_s5_list: '<li>将 IntoDay 用于非法目的</li><li>上传或提交有害、辱骂性、侵权或误导性的内容</li><li>干扰服务的安全或运营</li><li>试图访问不属于您的数据</li><li>进行逆向工程、复制或在正常允许范围之外滥用服务</li>',
        ts_s5_footer: '如果我们合理认为您违反了这些条款，我们可能会暂停或终止您的访问权限。',
        ts_s6_title: '6. 服务可用性',
        ts_s6_desc: 'IntoDay 按“现状”和“可用性”基础提供。我们可能会随时更新、更改、暂停或中断部分服务，特别是在 Beta 阶段。我们不保证 IntoDay 始终可用、无错误或不中断。',
        ts_s7_title: '7. Beta 状态',
        ts_s7_desc: '由于 IntoDay 处于早期阶段，功能可能会频繁更改。您理解某些功能可能不完整，可能会出现错误或中断，且产品行为可能会随时间变化。我们感谢反馈，但没有义务实施任何建议。',
        ts_s8_title: '8. 隐私',
        ts_s8_desc: '您对 IntoDay 的使用也受我们的隐私政策约束。请查看隐私政策以了解我们如何收集、使用和处理您的信息。',
        ts_s9_title: '9. 终止',
        ts_s9_desc: '您可以随时停止使用 IntoDay。如果我们认为您违反了这些条款、我们需要保护服务、用户或我们的系统，或我们决定终止 Beta 或服务，我们可能会随时暂停或终止您对 IntoDay 的访问权限。',
        ts_s10_title: '10. 免责声明',
        ts_s10_desc: 'IntoDay 仅作为生产力工具。它不提供法律、医学、财务或专业建议。对于错过的任务、丢失的数据、调度结果或基于使用 IntoDay 做出的决定，我们概不负责。',
        ts_s11_title: '11. 责任限制',
        ts_s11_desc: '在法律允许的最大范围内，IntoDay 及其运营商不对因使用或无法使用服务而导致的任何间接、附带、特别、后果性或惩罚性损害赔偿，或任何数据、利润或业务机会的损失负责。',
        ts_s12_title: '12. 本条款的变更',
        ts_s12_desc: '我们可能会不时更新这些条款。如果我们做出重大变更，我们将更新上方的有效日期。在更新后的条款生效后继续使用 IntoDay 即表示您同意修订后的条款。',
        ts_s13_title: '13. 联系方式',
        ts_s13_desc: '如果您对这些条款有疑问，可以通过以下方式联系：contact.intoday@gmail.com',
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
