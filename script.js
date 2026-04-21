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
      pageTitle: "IntoDay — Organize context for better AI work",
      pageDescription: "Turn scattered notes, links, and ideas into clear AI-ready context. Organize everything in one place and export it when you need it.",
      tryDemo: "Start for free",
      previewLeftTitle: "Competitor_Report.pdf",
      previewLeftBody: "Captured into the workspace and pinned as reusable context.",
      previewRightTitle: "Market context, saved once.",
      previewRightBody: "Notes, sources, and links stay grouped instead of scattered across tabs.",
      problemLabel: "THE PROBLEM",
      problemTitle: 'The "Context Gap" is the new workflow bottleneck.',
      problemBody:
        "We waste 30% of our AI interactions just trying to paste the right links, upload the right files, and explain the background. Information is scattered across bookmarks, local files, and Slack threads.",
      problemFootnote: "When you start with messy context, you get generic results.",
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
      feature3Title: "AI-ready Export",
      feature3Body: "Copy or export your packs into formats that work better with ChatGPT, Claude, and other AI tools.",
      feature4Title: "Local-first",
      feature4Body: "Your files and research stay in your workspace until you choose to copy or export them.",
      ctaLabel: "GET STARTED",
      ctaTitleMain: "Your context,",
      ctaTitleAccent: "distilled.",
      ctaCopy:
        "Join 12,000+ researchers, engineers, and designers who spend less time copy-pasting and more time creating.",
      ctaPrimary: "Get Started for Free",
      ctaSecondary: "Request Enterprise",
      footerHelp: "Help / Feedback",
      footerPrivacy: "Privacy Policy",
      footerTerms: "Terms of Service",
      footerCopyright: "\u00a9 2026 IntoDay. All rights reserved."
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
      pageTitle: "IntoDay \u2014 \u4e3a AI \u5de5\u4f5c\u6574\u7406\u4e0a\u4e0b\u6587",
      pageDescription: "\u5c06\u96f6\u6563\u7684\u7b14\u8bb0\u3001\u94fe\u63a5\u548c\u60f3\u6cd5\u8f6c\u5316\u4e3a\u6e05\u6670\u7684 AI \u5c31\u7d22\u4e0a\u4e0b\u6587\u3002\u5728\u4e00\u5904\u7ba1\u7406\u6240\u6709\u5185\u5bb9\uff0c\u5e76\u5728\u9700\u8981\u65f6\u5bfc\u51fa\u3002",
      tryDemo: "\u514d\u8d39\u5f00\u59cb",
      previewLeftTitle: "Competitor_Report.pdf",
      previewLeftBody:
        "\u5df2\u6355\u6349\u5230\u5de5\u4f5c\u533a\uff0c\u5e76\u56fa\u5b9a\u4e3a\u53ef\u590d\u7528\u7684\u4e0a\u4e0b\u6587\u7d20\u6750\u3002",
      previewRightTitle: "\u5e02\u573a\u4e0a\u4e0b\u6587\uff0c\u4e00\u6b21\u4fdd\u5b58\u3002",
      previewRightBody:
        "\u7b14\u8bb0\u3001\u6765\u6e90\u4e0e\u94fe\u63a5\u4fdd\u6301\u6210\u7ec4\uff0c\u4e0d\u518d\u6563\u843d\u5728\u4e0d\u540c\u6807\u7b7e\u9875\u91cc\u3002",
      problemLabel: "\u95ee\u9898\u6240\u5728",
      problemTitle: "\u201c\u4e0a\u4e0b\u6587\u7f3a\u53e3\u201d\u6b63\u5728\u6210\u4e3a\u65b0\u7684\u5de5\u4f5c\u6d41\u74f6\u9888\u3002",
      problemBody:
        "\u6211\u4eec\u4e0e AI \u7684\u5f88\u591a\u4ea4\u4e92\u65f6\u95f4\uff0c\u90fd\u82b1\u5728\u7c98\u8d34\u6b63\u786e\u94fe\u63a5\u3001\u4e0a\u4f20\u6b63\u786e\u6587\u4ef6\u548c\u89e3\u91ca\u80cc\u666f\u4fe1\u606f\u4e0a\u3002\u4fe1\u606f\u6563\u843d\u5728\u4e66\u7b7e\u3001\u672c\u5730\u6587\u4ef6\u548c Slack \u7ebf\u7a0b\u91cc\u3002",
      problemFootnote:
        "\u5f53\u4e0a\u4e0b\u6587\u51cc\u4e71\u65f6\uff0c\u4f60\u5f97\u5230\u7684\u7ed3\u679c\u901a\u5e38\u4e5f\u4f1a\u5f88\u6cdb\u3002",
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
      feature3Title: "AI \u5c31\u7eea\u5bfc\u51fa",
      feature3Body:
        "\u590d\u5236\u6216\u5bfc\u51fa\u6210\u66f4\u9002\u5408 ChatGPT\u3001Claude \u53ca\u5176\u4ed6 AI \u5de5\u5177\u4f7f\u7528\u7684\u683c\u5f0f\u3002",
      feature4Title: "\u672c\u5730\u4f18\u5148",
      feature4Body:
        "\u4f60\u7684\u6587\u4ef6\u548c\u7814\u7a76\u8d44\u6599\u4f1a\u4fdd\u7559\u5728\u5de5\u4f5c\u533a\u4e2d\uff0c\u76f4\u5230\u4f60\u4e3b\u52a8\u590d\u5236\u6216\u5bfc\u51fa\u3002",
      ctaLabel: "\u5f00\u59cb\u4f7f\u7528",
      ctaTitleMain: "\u8ba9\u4f60\u7684\u4e0a\u4e0b\u6587\uff0c",
      ctaTitleAccent: "\u66f4\u7eaf\u7cb9\u3002",
      ctaCopy:
        "\u52a0\u5165 12,000+ \u4f4d\u7814\u7a76\u8005\u3001\u5de5\u7a0b\u5e08\u4e0e\u8bbe\u8ba1\u5e08\uff0c\u7528\u66f4\u5c11\u65f6\u95f4\u590d\u5236\u7c98\u8d34\uff0c\u7528\u66f4\u591a\u65f6\u95f4\u771f\u6b63\u521b\u9020\u3002",
      ctaPrimary: "\u514d\u8d39\u5f00\u59cb",
      ctaSecondary: "\u8054\u7cfb\u4f01\u4e1a\u65b9\u6848",
      footerHelp: "\u5e2e\u52a9 / \u53cd\u9988",
      footerPrivacy: "\u9690\u79c1\u653f\u7b56",
      footerTerms: "\u670d\u52a1\u6761\u6b3e",
      footerCopyright: "\u00a9 2026 IntoDay\u3002\u4fdd\u7559\u6240\u6709\u6743\u5229\u3002"
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
      pageTitle: "IntoDay \u2014 AI \u30ef\u30fc\u30af\u306e\u305f\u3081\u306e\u6587\u8108\u6574\u7406",
      pageDescription: "\u6563\u3089\u3070\u3063\u305f\u30ce\u30fc\u30c8\u3001\u30ea\u30f3\u30af\u3001\u30a2\u30a4\u30c7\u30a2\u3092 AI \u30d5\u30ec\u30f3\u30c9\u30ea\u30fc\u306a\u6587\u8108\u306b\u5909\u63db\u3002\u3059\u3079\u3066\u3092 1 \u30ab\u6240\u306b\u307e\u3068\u3081\u3001\u5fc5\u8981\u306a\u6642\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3002",
      tryDemo: "\u7121\u6599\u3067\u59cb\u3081\u308b",
      previewLeftTitle: "Competitor_Report.pdf",
      previewLeftBody:
        "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u53d6\u308a\u8fbc\u307f\u3001\u518d\u5229\u7528\u3067\u304d\u308b\u6587\u8108\u3068\u3057\u3066\u56fa\u5b9a\u4fdd\u5b58\u3002",
      previewRightTitle: "\u5e02\u5834\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u3001\u4e00\u5ea6\u3067\u4fdd\u5b58\u3002",
      previewRightBody:
        "\u30ce\u30fc\u30c8\u3001\u60c5\u5831\u6e90\u3001\u30ea\u30f3\u30af\u3092\u3072\u3068\u307e\u3068\u307e\u308a\u306b\u4fdd\u3061\u3001\u30bf\u30d6\u306b\u6563\u3089\u3070\u3089\u305b\u307e\u305b\u3093\u3002",
      problemLabel: "\u8ab2\u984c",
      problemTitle:
        "\u201cContext Gap\u201d \u304c\u65b0\u3057\u3044\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u30dc\u30c8\u30eb\u30cd\u30c3\u30af\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",
      problemBody:
        "AI \u3068\u306e\u3084\u308a\u53d6\u308a\u306e\u591a\u304f\u306f\u3001\u9069\u5207\u306a\u30ea\u30f3\u30af\u3092\u8cbc\u308a\u3001\u6b63\u3057\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u80cc\u666f\u3092\u8aac\u660e\u3059\u308b\u3053\u3068\u306b\u8cbb\u3084\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u60c5\u5831\u306f\u30d6\u30c3\u30af\u30de\u30fc\u30af\u3001\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u3001Slack \u30b9\u30ec\u30c3\u30c9\u306b\u6563\u5728\u3057\u3066\u3044\u307e\u3059\u3002",
      problemFootnote:
        "\u6587\u8108\u304c\u6574\u7406\u3055\u308c\u3066\u3044\u306a\u3044\u3068\u3001\u7d50\u679c\u3082\u6c4e\u7528\u7684\u306b\u306a\u308a\u304c\u3061\u3067\u3059\u3002",
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
      feature3Title: "AI \u5411\u3051\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",
      feature3Body:
        "ChatGPT\u3001Claude\u3001\u305d\u306e\u4ed6\u306e AI \u30c4\u30fc\u30eb\u3067\u4f7f\u3044\u3084\u3059\u3044\u5f62\u5f0f\u306b\u30b3\u30d4\u30fc\u307e\u305f\u306f\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002",
      feature4Title: "\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30fc\u30b9\u30c8",
      feature4Body:
        "\u30d5\u30a1\u30a4\u30eb\u3084\u8abf\u67fb\u5185\u5bb9\u306f\u3001\u3042\u306a\u305f\u304c\u30b3\u30d4\u30fc\u307e\u305f\u306f\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u307e\u3067\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306b\u4fdd\u305f\u308c\u307e\u3059\u3002",
      ctaLabel: "\u306f\u3058\u3081\u308b",
      ctaTitleMain: "\u3042\u306a\u305f\u306e\u6587\u8108\u3092\u3001",
      ctaTitleAccent: "\u3088\u308a\u6d17\u7df4\u3055\u308c\u305f\u5f62\u3078\u3002",
      ctaCopy:
        "12,000 \u4eba\u4ee5\u4e0a\u306e\u30ea\u30b5\u30fc\u30c1\u30e3\u30fc\u3001\u30a8\u30f3\u30b8\u30cb\u30a2\u3001\u30c7\u30b6\u30a4\u30ca\u30fc\u304c\u3001\u30b3\u30d4\u30da\u306e\u6642\u9593\u3092\u6e1b\u3089\u3057\u3001\u5275\u9020\u306e\u6642\u9593\u3092\u5897\u3084\u3057\u3066\u3044\u307e\u3059\u3002",
      ctaPrimary: "\u7121\u6599\u3067\u59cb\u3081\u308b",
      ctaSecondary: "\u6cd5\u4eba\u5411\u3051\u76f8\u8ac7",
      footerHelp: "\u30d8\u30eb\u30d7 / \u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af",
      footerPrivacy: "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",
      footerTerms: "\u5229\u7528\u898f\u7d04",
      footerCopyright: "\u00a9 2026 IntoDay. All rights reserved."
    }
  };

  const labels = {
    en: "EN",
    zh: "\u4e2d\u6587",
    ja: "\u65e5\u672c\u8a9e"
  };

  const storageKey = "intoday-language";
  const i18nNodes = document.querySelectorAll("[data-i18n]");
  const summary = document.querySelector(".language-summary");
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

    document.documentElement.lang = nextLanguage;
    document.title = copy.pageTitle || copy.brand;

    if (description) {
      description.setAttribute("content", copy.pageDescription || copy.heroCopy);
    }

    // Update OG/Twitter tags dynamically for SPA-like feel
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');

    if (ogTitle) ogTitle.setAttribute("content", copy.pageTitle || copy.brand);
    if (ogDesc) ogDesc.setAttribute("content", copy.pageDescription || copy.heroCopy);
    if (twitterTitle) twitterTitle.setAttribute("content", copy.pageTitle || copy.brand);
    if (twitterDesc) twitterDesc.setAttribute("content", copy.pageDescription || copy.heroCopy);

    if (summary) {
      summary.textContent = labels[nextLanguage];
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
