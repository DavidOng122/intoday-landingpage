document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      brand: "IntoDay",
      navHow: "How it works",
      navFeatures: "Features",
      navDemo: "Demo",
      startFree: "Start free",
      heroTitleMain: "Bring scattered project context",
      heroTitleAccent: "into one place",
      heroCopy:
        "helps teams and individuals collect notes, links, files, and references, then organize them into reusable packs for AI workflows.",
      tryDemo: "Start for free",
      previewLeftTitle: "Competitor_Report.pdf",
      previewLeftBody: "Captured into the workspace and pinned as reusable context.",
      previewRightTitle: "Market context, saved once.",
      previewRightBody: "Notes, sources, and links stay grouped instead of scattered across tabs.",
      problemLabel: "THE PROBLEM",
      problemTitle:
        "Fragmented context slows down AI work.",
      problemBody:
        "As projects grow, notes, files, links, and references become harder to keep together. Before AI can help, you still have to gather and reorganize the right context again and again.",
      problemFootnote:
        "Without clear context, AI results are hard to trust.",
      assetTitle: "Scattered Assets",
      assetBody: "Links, PDFs, Snippets, Notes",
      problemStage: "PRIMING AGENT...",
      problemOutcome: "Optimal AI Performance",
      howLabel: "HOW IT WORKS",
      howStep1Title: "Collect",
      howStep1Body: "Save notes, links, files, screenshots, and references in one workspace.",
      howStep2Title: "Group",
      howStep2Body: "Organize related items into packs so your working context stays together and easy to reuse.",
      howStep3Title: "Copy or Export",
      howStep3Body: "Send your pack into ChatGPT, Claude, or your preferred AI workflow with less setup friction.",
      featuresLabel: "FEATURES",
      featuresTitle: "Built for context before AI",
      feature1Title: "Visual Canvas",
      feature1Body: "A spatial workspace for arranging notes, files, links, and references before they go into AI.",
      feature2Title: "Pack Bundles",
      feature2Body: "Group related items into one reusable context pack and keep them ready for reuse or export.",
      feature3Title: "File to Markdown",
      feature3Body:
        "Convert PDFs and Word files into Markdown that works better with AI, reducing manual cleanup and copy-paste work.",
      feature4Title: "Local-first",
      feature4Body: "Your files and research stay in your workspace until you choose to copy or export them.",
      ctaLabel: "GET STARTED",
      ctaTitleMain: "End manual moving,",
      ctaTitleAccent: "start creating for real",
      ctaCopy:
        "Join 12,000+ researchers and engineers. Stop endless copy-paste and turn every project material into AI-ready context assets.",
      ctaPrimary: "Start for free",
      ctaSecondary: "Request Enterprise",
      footerHelp: "Help / Feedback",
      footerPrivacy: "Privacy Policy",
      footerTerms: "Terms of Service",
      footerCopyright: "\u00a9 2026 IntoDay. All rights reserved.",
      help_hero_label: "Support & Resources",
      help_hero_title: "Help & Feedback",
      help_hero_desc:
        "Questions, bugs, or ideas \u2014 we'd love to hear from you. We build IntoDay based on how you plan your life.",
      help_card1_title: "Share feedback",
      help_card1_desc:
        "Tell us what feels useful, confusing, or missing. Your insights shape the future of the app.",
      help_card1_cta: "Send feedback",
      help_card2_title: "Report a bug",
      help_card2_desc:
        "Something not working as expected? Let us know so we can fix it and smooth out your experience.",
      help_card2_cta: "Report a bug",
      help_card3_title: "Ask for help",
      help_card3_desc:
        "Need help using IntoDay or understanding how a specific feature works? We're here for you.",
      help_card3_cta: "Get help",
      faq_title: "Frequently asked questions",
      faq_q1: "What is IntoDay?",
      faq_a1:
        "IntoDay is a workspace for collecting scattered project notes, links, files, and references, then organizing them into reusable context packs for AI workflows.",
      faq_q2: "Who is IntoDay for?",
      faq_a2:
        "IntoDay is for people who work on projects with lots of scattered materials and want a better way to prepare context before using AI.",
      faq_q3: "What is a context pack?",
      faq_a3:
        "A context pack is a reusable group of related project materials. It keeps the right notes, links, files, and references together before you copy or export them into AI tools.",
      faq_q4: "What can I add to a pack?",
      faq_a4:
        "You can add notes, links, screenshots, PDFs, Word documents, references, and other working materials into a pack.",
      faq_q5: "Can I use IntoDay with ChatGPT or Claude?",
      faq_a5:
        "Yes. IntoDay is designed to help you prepare better project context before using tools like ChatGPT, Claude, and other AI workflows.",
      faq_q6: "Can I copy or export my packs?",
      faq_a6:
        "Yes. You can copy or export your packs in formats that are easier to use with AI, including structured text and bundled files.",
      help_contact_label: "Still need assistance?",
      modal_feedback_label: "Share feedback",
      modal_feedback_title: "What's on your mind?",
      modal_feedback_sub:
        "Your thoughts help us shape IntoDay's future.",
      modal_feedback_q1: "What would you like to share?",
      modal_feedback_e1: "Please share something with us.",
      modal_feedback_q2: "What were you trying to do?",
      modal_optional: "Optional",
      modal_feedback_q3: "Your email",
      modal_feedback_e3: "Please enter a valid email.",
      modal_feedback_q4: "Screenshot",
      modal_feedback_p4: "Attach a screenshot",
      modal_form_error: "Something went wrong.",
      modal_feedback_btn: "Send feedback",
      modal_feedback_s_title:
        "Thanks - this helps us improve IntoDay.",
      modal_feedback_s_desc:
        "We read every message. If you left your email, we'll follow up soon.",
      modal_done: "Done",
      modal_bug_label: "Report a bug",
      modal_bug_title: "What went wrong?",
      modal_bug_sub:
        "The more detail you share, the faster we can fix it.",
      modal_bug_q1: "What happened?",
      modal_bug_e1: "Please describe what happened.",
      modal_bug_q2: "What did you expect?",
      modal_bug_e2: "Please describe what you expected.",
      modal_bug_q3: "Device / browser",
      modal_bug_q4: "Your email",
      modal_bug_q5: "Screenshot",
      modal_bug_p5: "Attach a screenshot",
      modal_bug_btn: "Report a bug",
      modal_bug_s_title: "Got it - we'll take a look.",
      modal_bug_s_desc:
        "Thanks for taking the time to report this. It genuinely helps us improve IntoDay.",
      modal_help_label: "Ask for help",
      modal_help_title: "How can we help?",
      modal_help_sub:
        "We reply personally to every request. Talk soon.",
      modal_help_q1: "What do you need help with?",
      modal_help_e1: "Please tell us what you need help with.",
      modal_help_q2: "Your email",
      modal_help_e2: "Please enter a valid email.",
      modal_help_q3: "Screenshot",
      modal_help_p3: "Attach a screenshot",
      modal_help_btn: "Get help",
      modal_help_s_title: "Thanks for reaching out.",
      modal_help_s_desc:
        "We'll reply to your email as soon as we can - usually within a day or two.",
      modal_feedback_p1:
        "Tell us what feels useful, confusing, or missing...",
      modal_feedback_p2:
        "e.g. Setting up my morning routine",
      modal_feedback_p3: "so we can follow up",
      modal_bug_p1: "Describe the issue...",
      modal_bug_p2: "What should have happened...",
      modal_bug_p3: "e.g. iPhone, Chrome",
      modal_bug_p4: "so we can update you",
      modal_help_p1: "Describe your question...",
      modal_help_p2: "your@email.com"
    },
    zh: {
      brand: "IntoDay",
      navHow: "\u5982\u4f55\u8fd0\u4f5c",
      navFeatures: "\u529f\u80fd",
      navDemo: "\u6f14\u793a",
      startFree: "\u514d\u8d39\u5f00\u59cb",
      heroTitleMain: "\u628a\u96f6\u6563\u7684\u9879\u76ee\u4e0a\u4e0b\u6587",
      heroTitleAccent: "\u6574\u7406\u5230\u4e00\u4e2a\u5730\u65b9",
      heroCopy:
        "\u5e2e\u52a9\u56e2\u961f\u548c\u4e2a\u4eba\u6536\u96c6\u7b14\u8bb0\u3001\u94fe\u63a5\u3001\u6587\u4ef6\u4e0e\u53c2\u8003\u8d44\u6599\uff0c\u518d\u628a\u5b83\u4eec\u6574\u7406\u6210\u53ef\u590d\u7528\u7684 AI \u5de5\u4f5c\u6d41\u4e0a\u4e0b\u6587\u5305\u3002",
      tryDemo: "\u514d\u8d39\u5f00\u59cb",
      previewLeftTitle: "Competitor_Report.pdf",
      previewLeftBody:
        "\u5df2\u6355\u6349\u5230\u5de5\u4f5c\u533a\uff0c\u5e76\u56fa\u5b9a\u4e3a\u53ef\u590d\u7528\u7684\u4e0a\u4e0b\u6587\u7d20\u6750\u3002",
      previewRightTitle: "\u5e02\u573a\u4e0a\u4e0b\u6587\uff0c\u4e00\u6b21\u4fdd\u5b58\u3002",
      previewRightBody:
        "\u7b14\u8bb0\u3001\u6765\u6e90\u4e0e\u94fe\u63a5\u4fdd\u6301\u6210\u7ec4\uff0c\u4e0d\u518d\u6563\u843d\u5728\u4e0d\u540c\u6807\u7b7e\u9875\u91cc\u3002",
      problemLabel: "\u95ee\u9898\u6240\u5728",
      problemTitle:
        "\u8d44\u6599\u788e\u7247\u5316\uff0c\u6b63\u5728\u62d6\u6162\u4f60\u4e0e AI \u7684\u534f\u4f5c\u6548\u7387\u3002",
      problemBody:
        "\u9879\u76ee\u5468\u671f\u8d8a\u957f\uff0c\u8d44\u6599\u8d8a\u5bb9\u6613\u5206\u6563\u5728\u7f51\u9875\u3001PDF\u3001\u7b14\u8bb0\u548c\u4e0d\u540c\u5de5\u5177\u91cc\u3002\u6bcf\u6b21\u8981\u501f\u52a9 AI \u63a8\u8fdb\u5de5\u4f5c\u65f6\uff0c\u4f60\u90fd\u5f97\u91cd\u65b0\u642c\u8fd0\u3001\u8865\u5145\u3001\u6574\u7406\u80cc\u666f\u4fe1\u606f\uff0c\u6700\u540e\u8ba9\u672c\u8be5\u9ad8\u6548\u7684\u534f\u4f5c\uff0c\u53d8\u6210\u91cd\u590d\u53c8\u4f4e\u6548\u7684\u51c6\u5907\u52b3\u52a8\u3002",
      problemFootnote:
        "\u6ca1\u6709\u6e05\u695a\u7684\u4e0a\u4e0b\u6587\uff0cAI \u7684\u7ed3\u679c\u5c31\u5f88\u96be\u771f\u6b63\u53ef\u9760\u3002",
      assetTitle: "\u5206\u6563\u7684\u7d20\u6750",
      assetBody: "\u94fe\u63a5\u3001PDF\u3001\u7247\u6bb5\u3001\u7b14\u8bb0",
      problemStage: "\u51c6\u5907 AI \u4e0a\u4e0b\u6587...",
      problemOutcome: "\u83b7\u5f97\u66f4\u4f18\u7684 AI \u8f93\u51fa",
      howLabel: "\u5de5\u4f5c\u65b9\u5f0f",
      howStep1Title: "\u6536\u96c6",
      howStep1Body:
        "\u628a\u7b14\u8bb0\u3001\u94fe\u63a5\u3001\u6587\u4ef6\u3001\u622a\u56fe\u548c\u53c2\u8003\u8d44\u6599\u4fdd\u5b58\u5728\u540c\u4e00\u4e2a\u5de5\u4f5c\u533a\u3002",
      howStep2Title: "\u5f52\u7ec4",
      howStep2Body:
        "\u628a\u76f8\u5173\u5185\u5bb9\u6574\u7406\u6210\u4e0a\u4e0b\u6587\u5305\uff0c\u8ba9\u5de5\u4f5c\u80cc\u666f\u59cb\u7ec8\u4fdd\u6301\u5b8c\u6574\u4e14\u53ef\u590d\u7528\u3002",
      howStep3Title: "\u590d\u5236\u6216\u5bfc\u51fa",
      howStep3Body:
        "\u628a\u4f60\u7684\u4e0a\u4e0b\u6587\u5305\u53d1\u9001\u5230 ChatGPT\u3001Claude \u6216\u4f60\u504f\u597d\u7684 AI \u5de5\u4f5c\u6d41\u4e2d\uff0c\u51cf\u5c11\u51c6\u5907\u963b\u529b\u3002",
      featuresLabel: "\u529f\u80fd",
      featuresTitle: "\u4e3a AI \u4e4b\u524d\u7684\u4e0a\u4e0b\u6587\u800c\u6784\u5efa",
      feature1Title: "\u53ef\u89c6\u5316\u753b\u5e03",
      feature1Body:
        "\u7528\u4e00\u4e2a\u7a7a\u95f4\u5316\u5de5\u4f5c\u533a\u6574\u7406\u7b14\u8bb0\u3001\u6587\u4ef6\u3001\u94fe\u63a5\u548c\u53c2\u8003\u8d44\u6599\uff0c\u518d\u9001\u5165 AI\u3002",
      feature2Title: "\u4e0a\u4e0b\u6587\u5305",
      feature2Body:
        "\u628a\u76f8\u5173\u5185\u5bb9\u5f52\u4e3a\u4e00\u4e2a\u53ef\u590d\u7528\u7684\u4e0a\u4e0b\u6587\u5305\uff0c\u968f\u65f6\u4fdd\u7559\u5f85\u590d\u7528\u6216\u5bfc\u51fa\u3002",
      feature3Title: "\u6587\u4ef6\u8f6c Markdown",
      feature3Body:
        "\u5c06 PDF \u548c Word \u8f6c\u6210\u66f4\u9002\u5408 AI \u4f7f\u7528\u7684 Markdown\uff0c\u51cf\u5c11\u624b\u52a8\u6574\u7406\u548c\u590d\u5236\u7c98\u8d34\u3002",
      feature4Title: "\u672c\u5730\u4f18\u5148",
      feature4Body:
        "\u4f60\u7684\u6587\u4ef6\u548c\u7814\u7a76\u8d44\u6599\u4f1a\u4fdd\u7559\u5728\u5de5\u4f5c\u533a\u4e2d\uff0c\u76f4\u5230\u4f60\u4e3b\u52a8\u590d\u5236\u6216\u5bfc\u51fa\u3002",
      ctaLabel: "\u5f00\u59cb\u4f7f\u7528",
      ctaTitleMain: "\u7ec8\u7ed3\u624b\u52a8\u642c\u8fd0\uff0c",
      ctaTitleAccent: "\u5f00\u59cb\u771f\u6b63\u521b\u9020",
      ctaCopy:
        "\u52a0\u5165 12,000+ \u4f4d\u7814\u7a76\u8005\u4e0e\u5de5\u7a0b\u5e08\u7684\u884c\u5217\u3002\u544a\u522b\u65e0\u4f11\u6b62\u7684\u590d\u5236\u7c98\u8d34\uff0c\u8ba9\u6bcf\u4e00\u4efd\u9879\u76ee\u8d44\u6599\u90fd\u6210\u4e3a AI \u89e6\u624b\u53ef\u53ca\u7684\u4e0a\u4e0b\u6587\u8d44\u4ea7\u3002",
      ctaPrimary: "\u514d\u8d39\u5f00\u59cb\u4f7f\u7528",
      ctaSecondary: "\u8054\u7cfb\u4f01\u4e1a\u65b9\u6848",
      footerHelp: "\u5e2e\u52a9 / \u53cd\u9988",
      footerPrivacy: "\u9690\u79c1\u653f\u7b56",
      footerTerms: "\u670d\u52a1\u6761\u6b3e",
      footerCopyright: "\u00a9 2026 IntoDay\u3002\u4fdd\u7559\u6240\u6709\u6743\u5229\u3002",
      help_hero_label: "\u652f\u6301\u4e0e\u8d44\u6e90",
      help_hero_title: "\u5e2e\u52a9\u4e0e\u53cd\u9988",
      help_hero_desc:
        "\u6709\u95ee\u9898\u3001\u53d1\u73b0 bug \u6216\u6709\u60f3\u6cd5\uff1f\u6b22\u8fce\u544a\u8bc9\u6211\u4eec\u3002IntoDay \u4f1a\u6839\u636e\u4f60\u7684\u771f\u5b9e\u4f7f\u7528\u65b9\u5f0f\u6301\u7eed\u6539\u8fdb\u3002",
      help_card1_title: "\u53d1\u9001\u53cd\u9988",
      help_card1_desc:
        "\u544a\u8bc9\u6211\u4eec\u54ea\u4e9b\u5730\u65b9\u597d\u7528\u3001\u56f0\u60d1\u6216\u7f3a\u5931\u3002\u4f60\u7684\u53cd\u9988\u4f1a\u76f4\u63a5\u5f71\u54cd\u4ea7\u54c1\u65b9\u5411\u3002",
      help_card1_cta: "\u53d1\u9001\u53cd\u9988",
      help_card2_title: "\u62a5\u544a bug",
      help_card2_desc:
        "\u9047\u5230\u529f\u80fd\u5f02\u5e38\uff1f\u8ba9\u6211\u4eec\u77e5\u9053\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4fee\u590d\u5e76\u4f18\u5316\u4f53\u9a8c\u3002",
      help_card2_cta: "\u62a5\u544a bug",
      help_card3_title: "\u83b7\u53d6\u5e2e\u52a9",
      help_card3_desc:
        "\u9700\u8981\u4f7f\u7528\u5e2e\u52a9\uff0c\u6216\u5bf9\u67d0\u4e2a\u529f\u80fd\u6709\u7591\u95ee\uff1f\u6211\u4eec\u5728\u8fd9\u91cc\u652f\u6301\u4f60\u3002",
      help_card3_cta: "\u8054\u7cfb\u652f\u6301",
      faq_title: "\u5e38\u89c1\u95ee\u9898",
      faq_q1: "IntoDay \u662f\u4ec0\u4e48\uff1f",
      faq_a1:
        "IntoDay \u662f\u4e00\u4e2a\u5de5\u4f5c\u533a\uff0c\u7528\u6765\u6536\u96c6\u5206\u6563\u7684\u9879\u76ee\u7b14\u8bb0\u3001\u94fe\u63a5\u3001\u6587\u4ef6\u548c\u53c2\u8003\u8d44\u6599\uff0c\u5e76\u5c06\u5b83\u4eec\u6574\u7406\u6210\u53ef\u590d\u7528\u7684 AI \u4e0a\u4e0b\u6587\u5305\u3002",
      faq_q2: "IntoDay \u9002\u5408\u8c01\uff1f",
      faq_a2:
        "IntoDay \u9002\u5408\u90a3\u4e9b\u9879\u76ee\u8d44\u6599\u5206\u6563\u3001\u5e76\u5e0c\u671b\u5728\u4f7f\u7528 AI \u524d\u66f4\u9ad8\u6548\u51c6\u5907\u4e0a\u4e0b\u6587\u7684\u4eba\u3002",
      faq_q3: "\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587\u5305\uff1f",
      faq_a3:
        "\u4e0a\u4e0b\u6587\u5305\u662f\u4e00\u7ec4\u53ef\u590d\u7528\u7684\u9879\u76ee\u6750\u6599\u96c6\u5408\u3002\u5b83\u4f1a\u5728\u4f60\u590d\u5236\u6216\u5bfc\u51fa\u5230 AI \u5de5\u5177\u4e4b\u524d\uff0c\u628a\u6b63\u786e\u7684\u7b14\u8bb0\u3001\u94fe\u63a5\u3001\u6587\u4ef6\u548c\u53c2\u8003\u8d44\u6599\u653e\u5728\u4e00\u8d77\u3002",
      faq_q4: "\u4e00\u4e2a\u5305\u91cc\u53ef\u4ee5\u52a0\u4ec0\u4e48\uff1f",
      faq_a4:
        "\u4f60\u53ef\u4ee5\u52a0\u5165\u7b14\u8bb0\u3001\u94fe\u63a5\u3001\u622a\u56fe\u3001PDF\u3001Word \u6587\u6863\u3001\u53c2\u8003\u8d44\u6599\u4ee5\u53ca\u5176\u4ed6\u5de5\u4f5c\u6750\u6599\u3002",
      faq_q5: "\u53ef\u4ee5\u914d\u5408 ChatGPT \u6216 Claude \u4f7f\u7528\u5417\uff1f",
      faq_a5:
        "\u53ef\u4ee5\u3002IntoDay \u5c31\u662f\u4e3a\u5728\u4f7f\u7528 ChatGPT\u3001Claude \u53ca\u5176\u4ed6 AI \u5de5\u4f5c\u6d41\u4e4b\u524d\uff0c\u66f4\u597d\u5730\u51c6\u5907\u9879\u76ee\u4e0a\u4e0b\u6587\u800c\u8bbe\u8ba1\u7684\u3002",
      faq_q6: "\u6211\u53ef\u4ee5\u590d\u5236\u6216\u5bfc\u51fa\u4e0a\u4e0b\u6587\u5305\u5417\uff1f",
      faq_a6:
        "\u53ef\u4ee5\u3002\u4f60\u53ef\u4ee5\u628a\u4e0a\u4e0b\u6587\u5305\u590d\u5236\u6216\u5bfc\u51fa\u4e3a\u66f4\u9002\u5408 AI \u4f7f\u7528\u7684\u5f62\u5f0f\uff0c\u5305\u62ec\u7ed3\u6784\u5316\u6587\u672c\u548c\u6253\u5305\u6587\u4ef6\u3002",
      help_contact_label: "\u8fd8\u9700\u8981\u5e2e\u52a9\uff1f",
      modal_feedback_label: "\u53d1\u9001\u53cd\u9988",
      modal_feedback_title: "\u4f60\u60f3\u5206\u4eab\u4ec0\u4e48\uff1f",
      modal_feedback_sub:
        "\u4f60\u7684\u60f3\u6cd5\u4f1a\u5e2e\u52a9\u6211\u4eec\u6301\u7eed\u6539\u8fdb IntoDay\u3002",
      modal_feedback_q1: "\u4f60\u60f3\u53cd\u9988\u54ea\u4e9b\u5185\u5bb9\uff1f",
      modal_feedback_e1: "\u8bf7\u7559\u4e0b\u4f60\u7684\u53cd\u9988\u5185\u5bb9\u3002",
      modal_feedback_q2: "\u4f60\u5f53\u65f6\u5728\u5c1d\u8bd5\u505a\u4ec0\u4e48\uff1f",
      modal_optional: "\u53ef\u9009",
      modal_feedback_q3: "\u4f60\u7684\u90ae\u7bb1",
      modal_feedback_e3: "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1\u3002",
      modal_feedback_q4: "\u622a\u56fe",
      modal_feedback_p4: "\u4e0a\u4f20\u622a\u56fe",
      modal_form_error: "\u53d1\u751f\u4e86\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
      modal_feedback_btn: "\u53d1\u9001\u53cd\u9988",
      modal_feedback_s_title:
        "\u611f\u8c22\u4f60\u7684\u53cd\u9988\uff0c\u8fd9\u5bf9\u6211\u4eec\u6539\u8fdb IntoDay \u5f88\u6709\u5e2e\u52a9\u3002",
      modal_feedback_s_desc:
        "\u6211\u4eec\u4f1a\u8ba4\u771f\u9605\u8bfb\u6bcf\u4e00\u6761\u53cd\u9988\u3002\u5982\u679c\u4f60\u7559\u4e0b\u4e86\u90ae\u7bb1\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u56de\u590d\u3002",
      modal_done: "\u5b8c\u6210",
      modal_bug_label: "\u62a5\u544a bug",
      modal_bug_title: "\u51fa\u4e86\u4ec0\u4e48\u95ee\u9898\uff1f",
      modal_bug_sub:
        "\u4f60\u63d0\u4f9b\u7684\u7ec6\u8282\u8d8a\u591a\uff0c\u6211\u4eec\u4fee\u590d\u5c31\u8d8a\u5feb\u3002",
      modal_bug_q1: "\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f",
      modal_bug_e1: "\u8bf7\u63cf\u8ff0\u53d1\u751f\u7684\u95ee\u9898\u3002",
      modal_bug_q2: "\u4f60\u671f\u671b\u53d1\u751f\u4ec0\u4e48\uff1f",
      modal_bug_e2: "\u8bf7\u63cf\u8ff0\u4f60\u7684\u9884\u671f\u7ed3\u679c\u3002",
      modal_bug_q3: "\u8bbe\u5907 / \u6d4f\u89c8\u5668",
      modal_bug_q4: "\u4f60\u7684\u90ae\u7bb1",
      modal_bug_q5: "\u622a\u56fe",
      modal_bug_p5: "\u4e0a\u4f20\u622a\u56fe",
      modal_bug_btn: "\u63d0\u4ea4 bug",
      modal_bug_s_title: "\u5df2\u6536\u5230\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u67e5\u770b\u3002",
      modal_bug_s_desc:
        "\u611f\u8c22\u4f60\u82b1\u65f6\u95f4\u53cd\u9988\u95ee\u9898\uff0c\u8fd9\u5bf9\u6211\u4eec\u6539\u8fdb IntoDay \u975e\u5e38\u6709\u5e2e\u52a9\u3002",
      modal_help_label: "\u83b7\u53d6\u5e2e\u52a9",
      modal_help_title: "\u6211\u4eec\u53ef\u4ee5\u5982\u4f55\u5e2e\u4f60\uff1f",
      modal_help_sub:
        "\u6211\u4eec\u4f1a\u8ba4\u771f\u56de\u590d\u6bcf\u4e00\u6761\u6c42\u52a9\u6d88\u606f\u3002",
      modal_help_q1: "\u4f60\u9700\u8981\u4ec0\u4e48\u5e2e\u52a9\uff1f",
      modal_help_e1: "\u8bf7\u544a\u8bc9\u6211\u4eec\u4f60\u9700\u8981\u7684\u5e2e\u52a9\u3002",
      modal_help_q2: "\u4f60\u7684\u90ae\u7bb1",
      modal_help_e2: "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1\u3002",
      modal_help_q3: "\u622a\u56fe",
      modal_help_p3: "\u4e0a\u4f20\u622a\u56fe",
      modal_help_btn: "\u83b7\u53d6\u5e2e\u52a9",
      modal_help_s_title: "\u611f\u8c22\u4f60\u7684\u8054\u7cfb\u3002",
      modal_help_s_desc:
        "\u6211\u4eec\u4f1a\u5c3d\u5feb\u901a\u8fc7\u90ae\u7bb1\u56de\u590d\u4f60\uff0c\u901a\u5e38\u5728 1-2 \u5929\u5185\u3002",
      modal_feedback_p1:
        "\u544a\u8bc9\u6211\u4eec\u54ea\u4e9b\u5730\u65b9\u597d\u7528\u3001\u56f0\u60d1\u6216\u7f3a\u5931\u2026\u2026",
      modal_feedback_p2:
        "\u4f8b\u5982\uff1a\u8bbe\u7f6e\u6211\u7684\u65e9\u6668\u5de5\u4f5c\u6d41\u7a0b",
      modal_feedback_p3: "\u65b9\u4fbf\u6211\u4eec\u540e\u7eed\u56de\u590d",
      modal_bug_p1: "\u8bf7\u63cf\u8ff0\u95ee\u9898\u2026\u2026",
      modal_bug_p2: "\u4f60\u671f\u671b\u7684\u7ed3\u679c\u662f\u2026\u2026",
      modal_bug_p3: "\u4f8b\u5982\uff1aiPhone\u3001Chrome",
      modal_bug_p4: "\u65b9\u4fbf\u6211\u4eec\u5411\u4f60\u540c\u6b65\u8fdb\u5c55",
      modal_help_p1: "\u8bf7\u63cf\u8ff0\u4f60\u7684\u95ee\u9898\u2026\u2026",
      modal_help_p2: "\u4f60\u7684\u90ae\u7bb1@example.com"
    },
    ja: {
      brand: "IntoDay",
      navHow: "\u4ed5\u7d44\u307f",
      navFeatures: "\u6a5f\u80fd",
      navDemo: "\u30c7\u30e2",
      startFree: "\u7121\u6599\u3067\u59cb\u3081\u308b",
      heroTitleMain: "\u6563\u3089\u3070\u3063\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u6587\u8108\u3092",
      heroTitleAccent: "\u3072\u3068\u3064\u306b\u307e\u3068\u3081\u308b",
      heroCopy:
        "\u30ce\u30fc\u30c8\u3001\u30ea\u30f3\u30af\u3001\u30d5\u30a1\u30a4\u30eb\u3001\u53c2\u8003\u60c5\u5831\u3092\u96c6\u3081\u3001AI \u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3067\u518d\u5229\u7528\u3057\u3084\u3059\u3044\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30d1\u30c3\u30af\u3068\u3057\u3066\u6574\u7406\u3067\u304d\u307e\u3059\u3002",
      tryDemo: "\u7121\u6599\u3067\u59cb\u3081\u308b",
      previewLeftTitle: "Competitor_Report.pdf",
      previewLeftBody:
        "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u53d6\u308a\u8fbc\u307f\u3001\u518d\u5229\u7528\u3067\u304d\u308b\u6587\u8108\u3068\u3057\u3066\u56fa\u5b9a\u4fdd\u5b58\u3002",
      previewRightTitle: "\u5e02\u5834\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u3001\u4e00\u5ea6\u3067\u4fdd\u5b58\u3002",
      previewRightBody:
        "\u30ce\u30fc\u30c8\u3001\u60c5\u5831\u6e90\u3001\u30ea\u30f3\u30af\u3092\u3072\u3068\u307e\u3068\u307e\u308a\u306b\u4fdd\u3061\u3001\u30bf\u30d6\u306b\u6563\u3089\u3070\u3089\u305b\u307e\u305b\u3093\u3002",
      problemLabel: "\u8ab2\u984c",
      problemTitle:
        "\u8cc7\u6599\u306e\u65ad\u7247\u5316\u3068\u6587\u8108\u4e0d\u8db3\u304c\u3001AI\u3068\u306e\u5354\u50cd\u3092\u975e\u52b9\u7387\u306b\u3057\u3066\u3044\u307e\u3059",
      problemBody:
        "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u671f\u9593\u304c\u9577\u304f\u306a\u308b\u307b\u3069\u3001\u8cc7\u6599\u306fWeb\u30da\u30fc\u30b8\u3001PDF\u3001\u30ce\u30fc\u30c8\u3001\u3055\u307e\u3056\u307e\u306a\u30c4\u30fc\u30eb\u306b\u6563\u3089\u3070\u3063\u3066\u3044\u304d\u307e\u3059\u3002AI\u3092\u4f7f\u3063\u3066\u4f5c\u696d\u3092\u9032\u3081\u308b\u305f\u3073\u306b\u3001\u80cc\u666f\u60c5\u5831\u3092\u96c6\u3081\u76f4\u3057\u3001\u6574\u7406\u3057\u76f4\u3059\u5fc5\u8981\u304c\u3042\u308a\u3001\u672c\u6765\u306f\u52b9\u7387\u7684\u3067\u3042\u308b\u306f\u305a\u306e\u4f5c\u696d\u304c\u3001\u7e70\u308a\u8fd4\u3057\u306e\u6e96\u5099\u8ca0\u62c5\u306b\u5909\u308f\u3063\u3066\u3057\u307e\u3044\u307e\u3059",
      problemFootnote:
        "\u660e\u78ba\u306a\u6587\u8108\u304c\u306a\u3051\u308c\u3070\u3001AI\u306e\u7d50\u679c\u306f\u672c\u5f53\u306b\u4fe1\u983c\u3057\u306b\u304f\u304f\u306a\u308a\u307e\u3059\u3002",
      assetTitle: "\u6563\u5728\u3059\u308b\u30a2\u30bb\u30c3\u30c8",
      assetBody: "\u30ea\u30f3\u30af\u3001PDF\u3001\u30b9\u30cb\u30da\u30c3\u30c8\u3001\u30ce\u30fc\u30c8",
      problemStage: "AI \u306b\u6587\u8108\u3092\u6e96\u5099\u4e2d...",
      problemOutcome: "\u3088\u308a\u826f\u3044 AI \u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",
      howLabel: "\u4f7f\u3044\u65b9",
      howStep1Title: "\u96c6\u3081\u308b",
      howStep1Body:
        "\u30ce\u30fc\u30c8\u3001\u30ea\u30f3\u30af\u3001\u30d5\u30a1\u30a4\u30eb\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3001\u53c2\u8003\u60c5\u5831\u3092\u3072\u3068\u3064\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002",
      howStep2Title: "\u307e\u3068\u3081\u308b",
      howStep2Body:
        "\u95a2\u9023\u3059\u308b\u9805\u76ee\u3092\u30d1\u30c3\u30af\u5316\u3057\u3001\u4f5c\u696d\u6587\u8108\u3092\u307e\u3068\u307e\u308a\u306e\u3042\u308b\u518d\u5229\u7528\u53ef\u80fd\u306a\u72b6\u614b\u306b\u4fdd\u3061\u307e\u3059\u3002",
      howStep3Title: "\u30b3\u30d4\u30fc / \u30a8\u30af\u30b9\u30dd\u30fc\u30c8",
      howStep3Body:
        "ChatGPT\u3001Claude\u3001\u307e\u305f\u306f\u597d\u307f\u306e AI \u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3078\u9001\u308a\u3001\u6e96\u5099\u306e\u624b\u9593\u3092\u6e1b\u3089\u3057\u307e\u3059\u3002",
      featuresLabel: "\u6a5f\u80fd",
      featuresTitle: "AI \u306b\u6e21\u3059\u524d\u306e\u6587\u8108\u306e\u305f\u3081\u306b\u8a2d\u8a08",
      feature1Title: "\u30d3\u30b8\u30e5\u30a2\u30eb\u30ad\u30e3\u30f3\u30d0\u30b9",
      feature1Body:
        "\u30ce\u30fc\u30c8\u3001\u30d5\u30a1\u30a4\u30eb\u3001\u30ea\u30f3\u30af\u3001\u53c2\u8003\u60c5\u5831\u3092 AI \u306b\u6e21\u3059\u524d\u306b\u7a7a\u9593\u7684\u306b\u6574\u7406\u3067\u304d\u308b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3067\u3059\u3002",
      feature2Title: "\u30d1\u30c3\u30af\u30d0\u30f3\u30c9\u30eb",
      feature2Body:
        "\u95a2\u9023\u3059\u308b\u9805\u76ee\u3092\u518d\u5229\u7528\u53ef\u80fd\u306a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30d1\u30c3\u30af\u306b\u307e\u3068\u3081\u3001\u3044\u3064\u3067\u3082\u518d\u5229\u7528\u30fb\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002",
      feature3Title: "\u30d5\u30a1\u30a4\u30eb\u3092Markdown\u306b",
      feature3Body:
        "PDF\u3068Word\u3092AI\u3067\u4f7f\u3044\u3084\u3059\u3044Markdown\u306b\u5909\u63db\u3057\u3001\u624b\u4f5c\u696d\u306e\u6574\u7406\u3068\u30b3\u30d4\u30da\u3092\u6e1b\u3089\u3057\u307e\u3059\u3002",
      feature4Title: "\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30fc\u30b9\u30c8",
      feature4Body:
        "\u30d5\u30a1\u30a4\u30eb\u3084\u8abf\u67fb\u5185\u5bb9\u306f\u3001\u3042\u306a\u305f\u304c\u30b3\u30d4\u30fc\u307e\u305f\u306f\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u307e\u3067\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306b\u4fdd\u305f\u308c\u307e\u3059\u3002",
      ctaLabel: "\u306f\u3058\u3081\u308b",
      ctaTitleMain: "\u624b\u4f5c\u696d\u306e\u79fb\u3057\u66ff\u3048\u3092\u7d42\u308f\u3089\u305b\u3001",
      ctaTitleAccent: "\u672c\u5f53\u306e\u5275\u9020\u3078",
      ctaCopy:
        "12,000\u4eba\u4ee5\u4e0a\u306e\u7814\u7a76\u8005\u3068\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u53c2\u52a0\u3057\u3066\u3044\u307e\u3059\u3002\u7d42\u308f\u308a\u306e\u306a\u3044\u30b3\u30d4\u30da\u304b\u3089\u96e2\u308c\u3001\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8cc7\u6599\u3092AI\u304c\u5373\u5ea7\u306b\u4f7f\u3048\u308b\u6587\u8108\u8cc7\u7523\u306b\u5909\u3048\u307e\u3057\u3087\u3046\u3002",
      ctaPrimary: "\u7121\u6599\u3067\u59cb\u3081\u308b",
      ctaSecondary: "\u6cd5\u4eba\u5411\u3051\u76f8\u8ac7",
      footerHelp: "\u30d8\u30eb\u30d7 / \u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af",
      footerPrivacy: "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",
      footerTerms: "\u5229\u7528\u898f\u7d04",
      footerCopyright: "\u00a9 2026 IntoDay. All rights reserved.",
      help_hero_label: "\u30b5\u30dd\u30fc\u30c8\u3068\u30ea\u30bd\u30fc\u30b9",
      help_hero_title: "\u30d8\u30eb\u30d7\u3068\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af",
      help_hero_desc:
        "\u8cea\u554f\u3001\u30d0\u30b0\u3001\u30a2\u30a4\u30c7\u30a2\u306a\u3069\u3092\u304a\u805e\u304b\u305b\u304f\u3060\u3055\u3044\u3002IntoDay \u306f\u3001\u7686\u3055\u3093\u306e\u4f7f\u3044\u65b9\u3092\u3082\u3068\u306b\u6539\u5584\u3092\u7d9a\u3051\u3066\u3044\u307e\u3059\u3002",
      help_card1_title: "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u308b",
      help_card1_desc:
        "\u4fbf\u5229\u3060\u3063\u305f\u70b9\u3001\u5206\u304b\u308a\u306b\u304f\u3044\u70b9\u3001\u8db3\u308a\u306a\u3044\u70b9\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002\u3042\u306a\u305f\u306e\u58f0\u304c\u4eca\u5f8c\u306e IntoDay \u3092\u4f5c\u308a\u307e\u3059\u3002",
      help_card1_cta: "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u308b",
      help_card2_title: "\u30d0\u30b0\u3092\u5831\u544a",
      help_card2_desc:
        "\u671f\u5f85\u901a\u308a\u306b\u52d5\u304b\u306a\u3044\u3068\u304d\u306f\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u65e9\u6025\u306b\u4fee\u6b63\u3057\u3001\u4f53\u9a13\u3092\u6539\u5584\u3057\u307e\u3059\u3002",
      help_card2_cta: "\u30d0\u30b0\u3092\u5831\u544a",
      help_card3_title: "\u30d8\u30eb\u30d7\u3092\u4f9d\u983c",
      help_card3_desc:
        "IntoDay \u306e\u4f7f\u3044\u65b9\u3084\u6a5f\u80fd\u306b\u3064\u3044\u3066\u4e0d\u660e\u70b9\u304c\u3042\u308c\u3070\u3001\u304a\u624b\u4f1d\u3044\u3057\u307e\u3059\u3002",
      help_card3_cta: "\u30d8\u30eb\u30d7\u3092\u53d7\u3051\u308b",
      faq_title: "\u3088\u304f\u3042\u308b\u8cea\u554f",
      faq_q1: "IntoDay \u3068\u306f\u4f55\u3067\u3059\u304b\uff1f",
      faq_a1:
        "IntoDay \u306f\u3001\u5206\u6563\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30ce\u30fc\u30c8\u3001\u30ea\u30f3\u30af\u3001\u30d5\u30a1\u30a4\u30eb\u3001\u53c2\u8003\u8cc7\u6599\u3092\u96c6\u3081\u3001AI \u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u7528\u306e\u518d\u5229\u7528\u53ef\u80fd\u306a\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30d1\u30c3\u30af\u306b\u6574\u7406\u3059\u308b\u305f\u3081\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3067\u3059\u3002",
      faq_q2: "IntoDay \u306f\u3069\u3093\u306a\u4eba\u5411\u3051\u3067\u3059\u304b\uff1f",
      faq_a2:
        "\u8cc7\u6599\u304c\u591a\u304f\u5206\u6563\u3057\u304c\u3061\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f5c\u696d\u3057\u3066\u304a\u308a\u3001AI \u3092\u4f7f\u3046\u524d\u306e\u6587\u8108\u6e96\u5099\u3092\u3088\u308a\u826f\u304f\u3057\u305f\u3044\u4eba\u306b\u5411\u3044\u3066\u3044\u307e\u3059\u3002",
      faq_q3: "\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30d1\u30c3\u30af\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f",
      faq_a3:
        "\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30d1\u30c3\u30af\u306f\u3001\u95a2\u9023\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8cc7\u6599\u3092\u307e\u3068\u3081\u305f\u518d\u5229\u7528\u53ef\u80fd\u306a\u30bb\u30c3\u30c8\u3067\u3059\u3002AI \u30c4\u30fc\u30eb\u306b\u30b3\u30d4\u30fc\u307e\u305f\u306f\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u524d\u306b\u3001\u5fc5\u8981\u306a\u30ce\u30fc\u30c8\u3001\u30ea\u30f3\u30af\u3001\u30d5\u30a1\u30a4\u30eb\u3001\u53c2\u8003\u8cc7\u6599\u3092\u3072\u3068\u3064\u306b\u307e\u3068\u3081\u307e\u3059\u3002",
      faq_q4: "\u30d1\u30c3\u30af\u306b\u306f\u4f55\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u304b\uff1f",
      faq_a4:
        "\u30ce\u30fc\u30c8\u3001\u30ea\u30f3\u30af\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3001PDF\u3001Word \u6587\u66f8\u3001\u53c2\u8003\u8cc7\u6599\u306a\u3069\u3001\u4f5c\u696d\u306b\u5fc5\u8981\u306a\u7d20\u6750\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002",
      faq_q5: "ChatGPT \u3084 Claude \u3068\u4e00\u7dd2\u306b\u4f7f\u3048\u307e\u3059\u304b\uff1f",
      faq_a5:
        "\u306f\u3044\u3002IntoDay \u306f\u3001ChatGPT\u3001Claude\u3001\u305d\u306e\u4ed6\u306e AI \u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u4f7f\u3046\u524d\u306b\u3001\u3088\u308a\u826f\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u6587\u8108\u3092\u6e96\u5099\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002",
      faq_q6: "\u30d1\u30c3\u30af\u306e\u30b3\u30d4\u30fc\u3084\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",
      faq_a6:
        "\u306f\u3044\u3002\u69cb\u9020\u5316\u30c6\u30ad\u30b9\u30c8\u3084\u307e\u3068\u3081\u305f\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u3001AI \u3067\u4f7f\u3044\u3084\u3059\u3044\u5f62\u5f0f\u3067\u30b3\u30d4\u30fc\u307e\u305f\u306f\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002",
      help_contact_label: "\u307e\u3060\u30b5\u30dd\u30fc\u30c8\u304c\u5fc5\u8981\u3067\u3059\u304b\uff1f",
      modal_feedback_label: "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u308b",
      modal_feedback_title: "\u3069\u3093\u306a\u3053\u3068\u3067\u3059\u304b\uff1f",
      modal_feedback_sub:
        "\u3042\u306a\u305f\u306e\u58f0\u304c IntoDay \u3092\u3088\u308a\u826f\u304f\u3057\u307e\u3059\u3002",
      modal_feedback_q1: "\u4f55\u3092\u5171\u6709\u3057\u305f\u3044\u3067\u3059\u304b\uff1f",
      modal_feedback_e1: "\u5185\u5bb9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
      modal_feedback_q2: "\u305d\u306e\u3068\u304d\u4f55\u3092\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u307e\u3057\u305f\u304b\uff1f",
      modal_optional: "\u4efb\u610f",
      modal_feedback_q3: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",
      modal_feedback_e3: "\u6709\u52b9\u306a\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
      modal_feedback_q4: "\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",
      modal_feedback_p4: "\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u6dfb\u4ed8",
      modal_form_error: "\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002",
      modal_feedback_btn: "\u9001\u4fe1\u3059\u308b",
      modal_feedback_s_title:
        "\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002IntoDay \u306e\u6539\u5584\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002",
      modal_feedback_s_desc:
        "\u3044\u305f\u3060\u3044\u305f\u5185\u5bb9\u306f\u3059\u3079\u3066\u78ba\u8a8d\u3057\u307e\u3059\u3002\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u3044\u305f\u3060\u3044\u305f\u5834\u5408\u306f\u8fd4\u4fe1\u3057\u307e\u3059\u3002",
      modal_done: "\u5b8c\u4e86",
      modal_bug_label: "\u30d0\u30b0\u3092\u5831\u544a",
      modal_bug_title: "\u3069\u3093\u306a\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u304b\uff1f",
      modal_bug_sub:
        "\u8a73\u3057\u304f\u6559\u3048\u3066\u3044\u305f\u3060\u304f\u307b\u3069\u3001\u65e9\u304f\u4fee\u6b63\u3067\u304d\u307e\u3059\u3002",
      modal_bug_q1: "\u4f55\u304c\u8d77\u304d\u307e\u3057\u305f\u304b\uff1f",
      modal_bug_e1: "\u767a\u751f\u3057\u305f\u5185\u5bb9\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
      modal_bug_q2: "\u672c\u6765\u3069\u3046\u306a\u308b\u3079\u304d\u3067\u3057\u305f\u304b\uff1f",
      modal_bug_e2: "\u671f\u5f85\u3057\u3066\u3044\u305f\u52d5\u4f5c\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
      modal_bug_q3: "\u7aef\u672b / \u30d6\u30e9\u30a6\u30b6",
      modal_bug_q4: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",
      modal_bug_q5: "\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",
      modal_bug_p5: "\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u6dfb\u4ed8",
      modal_bug_btn: "\u30d0\u30b0\u3092\u9001\u4fe1",
      modal_bug_s_title: "\u53d7\u4ed8\u3057\u307e\u3057\u305f\u3002\u78ba\u8a8d\u3057\u307e\u3059\u3002",
      modal_bug_s_desc:
        "\u5831\u544a\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002IntoDay \u306e\u6539\u5584\u306b\u3068\u3066\u3082\u5f79\u7acb\u3061\u307e\u3059\u3002",
      modal_help_label: "\u30d8\u30eb\u30d7\u3092\u4f9d\u983c",
      modal_help_title: "\u3069\u306e\u3088\u3046\u306b\u304a\u624b\u4f1d\u3044\u3067\u304d\u307e\u3059\u304b\uff1f",
      modal_help_sub:
        "\u3059\u3079\u3066\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u306b\u500b\u5225\u306b\u304a\u8fd4\u4e8b\u3057\u307e\u3059\u3002",
      modal_help_q1: "\u3069\u3093\u306a\u30d8\u30eb\u30d7\u304c\u5fc5\u8981\u3067\u3059\u304b\uff1f",
      modal_help_e1: "\u5185\u5bb9\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
      modal_help_q2: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",
      modal_help_e2: "\u6709\u52b9\u306a\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
      modal_help_q3: "\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",
      modal_help_p3: "\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u6dfb\u4ed8",
      modal_help_btn: "\u30d8\u30eb\u30d7\u3092\u53d7\u3051\u308b",
      modal_help_s_title: "\u3054\u9023\u7d61\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002",
      modal_help_s_desc:
        "\u3067\u304d\u308b\u3060\u3051\u65e9\u304f\u30e1\u30fc\u30eb\u3067\u3054\u8fd4\u4fe1\u3057\u307e\u3059\u3002\u901a\u5e38\u306f1\u301c2\u65e5\u4ee5\u5185\u3067\u3059\u3002",
      modal_feedback_p1:
        "\u4f7f\u3044\u3084\u3059\u3044\u70b9\u3001\u308f\u304b\u308a\u306b\u304f\u3044\u70b9\u3001\u4e0d\u8db3\u3057\u3066\u3044\u308b\u70b9\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u2026",
      modal_feedback_p2:
        "\u4f8b\uff1a\u671d\u306e\u30eb\u30fc\u30c6\u30a3\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",
      modal_feedback_p3: "\u5f8c\u3067\u3054\u9023\u7d61\u3059\u308b\u305f\u3081",
      modal_bug_p1: "\u554f\u984c\u306e\u5185\u5bb9\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\u2026",
      modal_bug_p2: "\u672c\u6765\u306e\u52d5\u4f5c\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\u2026",
      modal_bug_p3: "\u4f8b\uff1aiPhone\u3001Chrome",
      modal_bug_p4: "\u9032\u6357\u3092\u304a\u77e5\u3089\u305b\u3059\u308b\u305f\u3081",
      modal_help_p1: "\u8cea\u554f\u5185\u5bb9\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\u2026",
      modal_help_p2: "your@email.com"
    }
  };

  const labels = {
    en: "EN",
    zh: "\u4e2d\u6587",
    ja: "\u65e5\u672c\u8a9e"
  };

  const storageKey = "intoday-language";
  const i18nNodes = document.querySelectorAll("[data-i18n]");
  const i18nPlaceholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
  const summary = document.querySelector(".language-summary");
  const legacyLangLabel = document.querySelector("#lang-label");
  const menu = document.querySelector(".language-menu");
  const controls = document.querySelectorAll(".language-list [data-lang]");
  const description = document.querySelector('meta[name="description"]');

  function applyLanguage(language) {
    const nextLanguage = translations[language] ? language : "en";
    const copy = translations[nextLanguage];

    i18nNodes.forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(copy, key)) {
        node.textContent = copy[key];
      }
    });

    i18nPlaceholderNodes.forEach((node) => {
      const key = node.getAttribute("data-i18n-placeholder");
      if (key && Object.prototype.hasOwnProperty.call(copy, key)) {
        node.setAttribute("placeholder", copy[key]);
      }
    });

    document.documentElement.lang = nextLanguage;
    document.title = copy.brand;

    if (description) {
      description.setAttribute("content", copy.heroCopy);
    }

    if (summary) {
      summary.textContent = labels[nextLanguage];
    }

    // Support pages still using the old dropdown label id.
    if (legacyLangLabel) {
      legacyLangLabel.textContent = labels[nextLanguage];
    }

    controls.forEach((control) => {
      const isActive = control.getAttribute("data-lang") === nextLanguage;
      control.classList.toggle("is-active", isActive);
      control.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try {
      localStorage.setItem(storageKey, nextLanguage);
    } catch (error) {
      // Ignore storage failures in restricted environments.
    }
  }

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      applyLanguage(control.getAttribute("data-lang") || "en");
      if (menu) {
        menu.removeAttribute("open");
      }
    });
  });

  let initialLanguage = "en";

  try {
    initialLanguage = localStorage.getItem(storageKey) || "en";
  } catch (error) {
    initialLanguage = "en";
  }

  applyLanguage(initialLanguage);
});
