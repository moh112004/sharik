// Shared video lists (same URLs for AR and EN with bilingual titles)
const VIDS = {
  smrc: [
    { src: "https://drive.google.com/file/d/1aoDU9kkf2n7_B0aht_rxzJX5kPxiq6xe/preview", title: { ar: "فيلم المسؤولية المجتمعية", en: "CSR Documentary" } ,ratio:"16/9"},
  ],
  unicef: [
    { src: "https://drive.google.com/file/d/1ZXedinBb2pItP7p57198wheuF8iwRT5n/preview", title: { ar: "مشروع التعليم الالكتروني", en: "E-Learning Project" },ratio:"16/9" },
  ],
  moda: [
    { src: "https://drive.google.com/file/d/1ylNJ85jJNdjBZ9Uo_uOmkicAU1JW_1md/preview", title: { ar: "اغنية مودا معانا", en: "Moda Anthem" }  },
    { src: "https://drive.google.com/file/d/1BOj8OX5UQcd1479io9LVGXPl_XO-01PD/preview", title: { ar: "مودا - اعلان", en: "Moda - Ad" } },
    { src: "https://drive.google.com/file/d/1vWjMdjr0lNPSdxUrig1huw5eA08RCQxD/preview", title: { ar: "حملة تحدي الثبات 1", en: "Resilience Challenge 1" } },
    { src: "https://drive.google.com/file/d/105NxVUQgEyvumyC5a6911TvBbMDqNgc1/preview", title: { ar: "حملة تحدي الثبات 2", en: "Resilience Challenge 2" } },
    { src: "https://drive.google.com/file/d/1NVS21Tvhyedne97hFYZf-fCBVr7mSsbE/preview", title: { ar: "حملة تحدي الثبات 3", en: "Resilience Challenge 3" } },
    { src: "https://drive.google.com/file/d/1ZvufFu-rUFMVopAGfgjmMfNWOzIf7IWW/preview", title: { ar: "حملة تحدي الثبات 4", en: "Resilience Challenge 4" } },
    { src: "https://drive.google.com/file/d/1WSvdchKyKIJGsvKPeKCKt6-Aa57dQkOI/preview", title: { ar: "حملة تحدي الثبات 5", en: "Resilience Challenge 5" } },
    { src: "https://drive.google.com/file/d/1J-Aa81-RysDkD37v_unW0KcQoDQZRn4t/preview", title: { ar: "حملة تحدي الثبات 6", en: "Resilience Challenge 6" } },
    { src: "https://drive.google.com/file/d/1N-PCLUluKw6sU2nvJpLmTgDFv11PPxQW/preview", title: { ar: "حملة تحدي الثبات 7", en: "Resilience Challenge 7" } },
    { src: "https://drive.google.com/file/d/1cCgzQkTpniUhOxc_0615ETT065NNp9nH/preview", title: { ar: "حملة تحدي الثبات 8", en: "Resilience Challenge 8" } },
  ],
  oneSudan: [
    { src: "https://drive.google.com/file/d/1tHO6W1g38GN-vaVGFfRliJ8iE2Mpjda6/preview", title: { ar: "وان سودان", en: "One Sudan" } ,ratio:"16/9"},
  ],
  sadagaat: [
    { src: "https://drive.google.com/file/d/1BZ0fWC1jmuJfiU3m0kI2K4FtpUXagU0I/preview", title: { ar: "صدقات - يلا نتعلم", en: "Sadagaat - Yalla Net'allam" },ratio:"16/9" },
  ],
  fadcnc: [
    { src: "https://drive.google.com/file/d/1jnXcAkNek5FYQFLiJr8t3-cipBP94C-F/preview", title: { ar: "FAD CNC 1", en: "FAD CNC 1" } },
    { src: "https://drive.google.com/file/d/1G0uLRPLCdEZj6waUzlC40w-NtqVQtB54/preview", title: { ar: "FAD CNC 2", en: "FAD CNC 2" } },
    { src: "https://drive.google.com/file/d/1Z-US6U7Y5hRa9wEyE9s_ue1KZq87rWsm/preview", title: { ar: "FAD CNC 3", en: "FAD CNC 3" } },
    { src: "https://drive.google.com/file/d/1q_z5DBnf7ps2AB5NPY89lkYI0vEbtOHC/preview", title: { ar: "FAD CNC 4", en: "FAD CNC 4" } },
    { src: "https://drive.google.com/file/d/12wJH7T8jNrYHL00Wh9FXRb9r4m5nX7zD/preview", title: { ar: "FAD CNC 5", en: "FAD CNC 5" } },
  ],
  tawseel: [
    { src: "https://drive.google.com/file/d/1lA0BtIzGBq_Mv4mnXmHUnvxmkDRB4ths/preview", title: { ar: "Tawseel 1", en: "Tawseel 1" } },
    { src: "https://drive.google.com/file/d/1SrHKP9gARwrmVRNxfRU-rELqH-tk6skz/preview", title: { ar: "Tawseel 2", en: "Tawseel 2" } },
    { src: "https://drive.google.com/file/d/1EcTUVMvvnflLCGCWH83p2_AGZVS-SsQN/preview", title: { ar: "Tawseel 3", en: "Tawseel 3" } },
  ],
  nileBank: [
    { src: "https://drive.google.com/file/d/1oCuvzOlxvxexXPjpK5wU_vHTQSJcDdRY/preview", title: { ar: "بنك النيل 1", en: "Al Nile Bank 1" } },
    { src: "https://drive.google.com/file/d/1s662yKWmOSfuhNqaCSuomARZ8mpiOS9L/preview", title: { ar: "بنك النيل 2", en: "Al Nile Bank 2" } },
    { src: "https://drive.google.com/file/d/1e2wRq18k-SZUHMxt9DxaNXxZIvPibSVV/preview", title: { ar: "بنك النيل 3", en: "Al Nile Bank 3" } },
    { src: "https://drive.google.com/file/d/1273dbC_N3Gw5qXBv-VYTVaQpUbZtwDvz/preview", title: { ar: "بنك النيل 4", en: "Al Nile Bank 4" } },
  ],
  sapa:[
    { src: "https://youtube.com/embed/6WfAELAJ86w", title: { ar: "مشروع عودة العافية | مستشفى بحري", en: "The Return to Wellness Project | Bahri Hospital" } ,ratio:"16/9"},

  ]
};

const pickVideos = (list, lang) => (list || []).map(v => ({ src: v.src, title: v.title[lang] ,ratio:v.ratio}));

function buildProjects(lang) {
  if (lang === 'ar') {
    return [
      { title: "وزارة التعليم الوطني - حملة مدرستي أولاً - 2026", desc: "قامت شارك كريتفز بتشغيل وتنفيذ حملة كاملة لوزارة التعليم، بدءاً من إطلاق منصات التواصل الاجتماعي للوزارة وإنتاج جميع المنتجات الرقمية والفيديوهات والصور الثابتة والأخبار.", category: "governmental", videos: [] },
      { title: "الشركة السودانية للموارد المعدنية - فيلم وثائقي 2024", desc: "فيلم وثائقي شامل يبرز مبادرات المسؤولية الاجتماعية عبر القطاعات الشرقية والشمالية والوسطى.", category: "governmental", videos: pickVideos(VIDS.smrc, 'ar') },
      { title: "اليونسيف - مشروع التعليم الإلكتروني", desc: "تغطية إعلامية شاملة لزيارة المدير الإقليمي لمركز التعليم الإلكتروني في الإسكان، بورتسودان.", category: "humanitarian", videos: pickVideos(VIDS.unicef, 'ar') },
      { title: "مركز الملك سلمان للإغاثة - مشروع دعم الأمن الغذائي 2024", desc: "إنتاج فيديو إطلاق رسمي لمشروع دعم الأمن الغذائي في السودان.", category: "humanitarian", videos: [] },
      { title: "مصنع مودا للصلب - الهوية التجارية والحضور الرقمي", desc: "بناء حضور رقمي قوي ومتسق للعلامة التجارية من خلال حملة علامة تجارية استراتيجية.", category: "private", videos: pickVideos(VIDS.moda, 'ar') },
      { title: "صناعات سيف الدولة الغذائية - إدارة وسائل التواصل الاجتماعي", desc: "إدارة شاملة لمنصات وسائل التواصل الاجتماعي وتنفيذ حملات إعلانية مستهدفة.", category: "private", videos: [] },
      { title: "برايم ديزل - مقابلات شركات", desc: "إنتاج سلسلة من المقابلات المهنية مع مديري الشركة.", category: "private", videos: [] },
      { title: "وان سودان - إعلان رسمي للشركة", desc: "تنفيذ إعلان رسمي مصقول لوان سودان.", category: "private", videos: pickVideos(VIDS.oneSudan, 'ar') },
      { title: "منظمة صدقات - وثائقي مشروع التعليم الإلكتروني", desc: "تم تصوير الفيلم بعدد من مناطق البحر الأحمر أبرزها : اسوتريبا - سلوم - أُدوان.", category: "humanitarian", videos: pickVideos(VIDS.sadagaat, 'ar') },
      { title: "FAD CNC - حملة العلامة التجارية الصناعية", desc: "هوية بصرية حديثة وحملة ترويجية لفاد سي ان سي.", category: "private", videos: pickVideos(VIDS.fadcnc, 'ar') },
      { title: "توصيل - حضور العلامة التجارية في اللوجستيات", desc: "تصميم علامة تجارية رقمية استراتيجية لتوصيل.", category: "private", videos: pickVideos(VIDS.tawseel, 'ar') },
      { title: "بنك النيل - حملة خدمات مالية", desc: "حملة متميزة لبنك النيل تركز على الخدمات المصرفية الرقمية.", category: "private", videos: pickVideos(VIDS.nileBank, 'ar') },
      { title: "شركة خالد دقاش الطبية - الهوية التجارية والحضور الرقمي", desc: "تطوير هوية تجارية شاملة وحضور رقمي للشركة الطبية.", category: "private", videos: [] },
      { title: "رابطة الأطباء السودانيين الأمريكيين (سابا)", desc: "تغطية عودة مستشفى بحري التعليمي للعمل.", category: "humanitarian", videos: pickVideos(VIDS.sapa, 'ar') },
    ];
  }
  return [
    { title: "Ministry of National Education - Madrasati Awlan campaign - 2026", desc: "Sharik Creatives ran and executed a full campaign for the ministry of education.", category: "governmental", videos: [] },
    { title: "SMRC - Documentary Film – CSR 2024", desc: "A comprehensive documentary highlighting social responsibility initiatives.", category: "governmental", videos: pickVideos(VIDS.smrc, 'en') },
    { title: "UNICEF – E-Learning Project", desc: "Comprehensive media coverage of the Regional Director's visit to the E-Learning Center.", category: "humanitarian", videos: pickVideos(VIDS.unicef, 'en') },
    { title: "King Salman Humanitarian Aid – Food Security 2024", desc: "Production of an official launch video for the Food Security Support Project in Sudan.", category: "humanitarian", videos: [] },
    { title: "Moda Steel Factory – Brand Identity & Digital Presence", desc: "Building a strong and consistent digital presence for the brand.", category: "private", videos: pickVideos(VIDS.moda, 'en') },
    { title: "Saif Al-Dawla Food Industries – Social Media Management", desc: "Comprehensive management of social media platforms.", category: "private", videos: [] },
    { title: "Prime Diesel – Corporate Interviews", desc: "Production of a series of professional interviews with company directors.", category: "private", videos: [] },
    { title: "One Sudan – Official Company Advertisement", desc: "Execution of a polished official advertisement for One Sudan.", category: "private", videos: pickVideos(VIDS.oneSudan, 'en') },
    { title: "Sadagaat – Humanitarian Support Campaign", desc: "Documentary covering Red Sea State - Asotriba, Salom, Udwan regions.", category: "humanitarian", videos: pickVideos(VIDS.sadagaat, 'en') },
    { title: "FAD CNC – Industrial Branding Campaign", desc: "A modern visual identity and promotional campaign for FAD CNC.", category: "private", videos: pickVideos(VIDS.fadcnc, 'en') },
    { title: "Tawseel – Logistics Brand Presence", desc: "Strategic brand and digital design for Tawseel.", category: "private", videos: pickVideos(VIDS.tawseel, 'en') },
    { title: "Al Nile Bank – Financial Services Campaign", desc: "A premium campaign for Al Nile Bank focusing on digital banking services.", category: "private", videos: pickVideos(VIDS.nileBank, 'en') },
    { title: "Khalid Daqash Medical Company - Brand Identity", desc: "Developing a comprehensive brand identity and digital presence.", category: "private", videos: [] },
    { title: "Sudanese American Physicians Association (SAPA)", desc: "Coverage of the return of the Bahri Teaching Hospital to operation.", category: "humanitarian", videos: pickVideos(VIDS.sapa, 'en') },
  ];
}

export const projectsByLang = { ar: buildProjects('ar'), en: buildProjects('en') };
