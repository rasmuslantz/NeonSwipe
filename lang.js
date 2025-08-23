// Toggle this to true after you add Spanish badge images:
//   /img/badge-appstore-es.png  and  /img/badge-google-es.png
window.locales = window.locales || {};
window.locales.es_has_badges = false;

const L = {
  en: {
    nav_functions:"Functions",
    nav_features:"Features",
    nav_support:"Support",
    kicker:"Photo cleaner • iOS & Android",
    h1:"Clean photos with a swipe.",
    sub:"Keep your best shots and delete the rest—duplicates, screenshots, bursts & blurry pics. See GB freed in real time.",
    metric_saved:"Space saved",
    metric_safe:"Review & Undo safe",
    metric_fast:"Lightning-fast swiping",
    tag_timeline:"Timeline",
    fx_title:"Functions — see it in action",
    fx_sub:"Tap a function to preview how Neon Swipe helps you clean faster and safer.",
    fx_dup:"Duplicates", fx_ss:"Screenshots", fx_blur:"Blurry", fx_burst:"Bursts", fx_month:"Monthly Blitz", fx_safety:"Review & Undo",
    fx_learn:"Learn more",
    fx_hint:"Tip: use ← → to switch functions",
    feat_title:"Why you’ll love Neon Swipe",
    feat_sub:"Built for speed, safety, and satisfaction—cleanup that actually feels good.",
    // features (cards)
    f1_t:"Swipe to keep/delete", f1_d:"Lightning-fast triage that makes cleanup fun.",
    f2_t:"Smart queues", f2_d:"Duplicates & similars, screenshots, bursts, and blurry shots.",
    f3_t:"Review & Undo", f3_d:"Confirm before trash—your memories stay safe.",
    f4_t:"Space meter", f4_d:"Watch MB/GB freed climb in real time.",
    how_title:"How it works", how_sub:"Three quick steps—no cloud access, no risk.",
    h_t1:"1) Open & allow Photos", h_d1:"We never touch your cloud—works on-device.",
    h_t2:"2) Swipe right/left", h_d2:"Right to keep, left to delete—simple.",
    h_t3:"3) Review & reclaim space", h_d3:"Empty “Recently Deleted” to free storage instantly.",
    footer_support:"Support", footer_privacy:"Privacy",
    // Support page
    nav_home:"Home",
    s_title:"Support",
    s_intro:"We’re here to help. Email us and we’ll reply within 1–2 business days.",
    sq1_t:"Can’t access Photos?",sq1_d:"iOS: Settings → Privacy & Security → Photos → Neon Swipe → Allow “All Photos”.",
    sq2_t:"Undo a deletion?",sq2_d:"Open Photos → Albums → Recently Deleted (available ~30 days).",
    sq3_t:"Storage not changing?",sq3_d:"After a cleanup, empty “Recently Deleted” to reclaim storage immediately.",
    sq4_t:"Restore purchases",sq4_d:"Open Neon Swipe → Settings → Restore Purchases.",
    s_priv:"Neon Swipe processes your photos on-device. See our privacy policy on the App Store."
  },
  es: {
    nav_functions:"Funciones",
    nav_features:"Funciones clave",
    nav_support:"Soporte",
    kicker:"Limpieza de fotos • iOS y Android",
    h1:"Limpia tus fotos con un swipe.",
    sub:"Conserva lo mejor y borra el resto—duplicados, capturas, ráfagas y borrosas. Mira los GB liberados en tiempo real.",
    metric_saved:"Espacio liberado",
    metric_safe:"Revisión y Deshacer seguras",
    metric_fast:"Deslizamiento ultrarrápido",
    tag_timeline:"Cronología",
    fx_title:"Funciones — míralo en acción",
    fx_sub:"Toca una función para ver cómo Neon Swipe te ayuda a limpiar más rápido y con seguridad.",
    fx_dup:"Duplicados", fx_ss:"Capturas", fx_blur:"Borrosas", fx_burst:"Ráfagas", fx_month:"Blitz mensual", fx_safety:"Revisión y Deshacer",
    fx_learn:"Más información",
    fx_hint:"Sugerencia: usa ← → para cambiar",
    feat_title:"Por qué te encantará Neon Swipe",
    feat_sub:"Velocidad, seguridad y satisfacción—una limpieza que apetece hacer.",
    f1_t:"Desliza para conservar/borrar", f1_d:"Triage rapidísimo que hace la limpieza divertida.",
    f2_t:"Colas inteligentes", f2_d:"Duplicados y similares, capturas, ráfagas y borrosas.",
    f3_t:"Revisión y Deshacer", f3_d:"Confirma antes de borrar: tus recuerdos, a salvo.",
    f4_t:"Medidor de espacio", f4_d:"Mira subir los MB/GB liberados en tiempo real.",
    how_title:"Cómo funciona", how_sub:"Tres pasos—sin nube, sin riesgos.",
    h_t1:"1) Abre y permite acceso a Fotos", h_d1:"No tocamos tu nube: todo se hace en el dispositivo.",
    h_t2:"2) Desliza derecha/izquierda", h_d2:"Derecha para conservar, izquierda para borrar.",
    h_t3:"3) Revisa y recupera espacio", h_d3:"Vacía “Eliminado recientemente” para liberar espacio al instante.",
    footer_support:"Soporte", footer_privacy:"Privacidad",
    nav_home:"Inicio",
    s_title:"Soporte",
    s_intro:"Estamos para ayudarte. Respondemos en 1–2 días laborables.",
    sq1_t:"¿Sin acceso a Fotos?",sq1_d:"iOS: Ajustes → Privacidad y seguridad → Fotos → Neon Swipe → “Todas las fotos”.",
    sq2_t:"¿Deshacer un borrado?",sq2_d:"Fotos → Álbumes → Eliminado recientemente (≈30 días).",
    sq3_t:"¿El espacio no cambia?",sq3_d:"Después de limpiar, vacía “Eliminado recientemente” para recuperar espacio.",
    sq4_t:"Restaurar compras",sq4_d:"Neon Swipe → Ajustes → Restaurar compras.",
    s_priv:"Neon Swipe procesa tus fotos en el dispositivo. Consulta la política de privacidad en App Store."
  }
};

// --- Interactive content data for the Functions stage ---
const FX = {
  duplicates: {
    title: {en:"Find and clear duplicates", es:"Detecta y quita duplicados"},
    desc: {
      en:"Groups near-identical shots so you keep the best and remove the rest in seconds.",
      es:"Agrupa tomas casi idénticas para que conserves la mejor y elimines el resto en segundos."
    },
    points: {
      en:["Smart detection of similar shots","Swipe right to keep, left to delete","Watch the GB freed counter rise"],
      es:["Detección inteligente de fotos similares","Desliza derecha para conservar, izquierda para borrar","Mira subir el contador de GB"]
    },
    shot:"img/screen-1.png"
  },
  screenshots: {
    title:{en:"Nuke screenshots in bulk", es:"Elimina capturas en lote"},
    desc:{
      en:"All your screenshots in one queue—clear the clutter fast.",
      es:"Todas tus capturas en una cola—quita el ruido en minutos."
    },
    points:{
      en:["One tap into the screenshots queue","Swipe through and clear quickly","Safe review before removal"],
      es:["Cola específica de capturas","Desliza y limpia rápido","Revisión segura antes de borrar"]
    },
    shot:"img/screen-2.png"
  },
  blurry: {
    title:{en:"Kill blurry mistakes", es:"Elimina fotos borrosas"},
    desc:{
      en:"Surface the blurry misses so your gallery stays sharp.",
      es:"Aflora las tomas borrosas para que tu galería quede nítida."
    },
    points:{
      en:["Find and remove out-of-focus shots","Keep only crisp memories","Satisfying cleanup in seconds"],
      es:["Detecta y elimina fotos desenfocadas","Quédate solo con recuerdos nítidos","Limpieza satisfactoria en segundos"]
    },
    shot:"img/screen-4.png"
  },
  bursts: {
    title:{en:"Handle burst fails", es:"Gestiona ráfagas fallidas"},
    desc:{
      en:"Bursts often hide duplicates—keep the winner and ditch the rest.",
      es:"Las ráfagas esconden duplicados—conserva la mejor y descarta el resto."
    },
    points:{
      en:["Review a set at full size","Pick the keeper with a swipe","Instantly reclaim space"],
      es:["Revisa el conjunto a pantalla completa","Elige la mejor con un swipe","Recupera espacio al instante"]
    },
    shot:"img/screen-4.png"
  },
  month: {
    title:{en:"Monthly Blitz mode", es:"Modo Blitz mensual"},
    desc:{
      en:"Clean a whole month at once with a progress ring that makes finishing addictive.",
      es:"Limpia un mes entero con un anillo de progreso que engancha."
    },
    points:{
      en:["Focus on one time range","Feel progress with the ring","Form a quick daily habit"],
      es:["Enfócate en un periodo","Siente el progreso con el anillo","Crea un hábito rápido diario"]
    },
    shot:"img/hero.png"
  },
  safety: {
    title:{en:"Review & Undo safety", es:"Seguridad con Revisión y Deshacer"},
    desc:{
      en:"Confirm before removal and undo any step. Photos go to Recently Deleted for ~30 days.",
      es:"Confirma antes de borrar y deshaz cualquier paso. Las fotos van a Eliminado recientemente (~30 días)."
    },
    points:{
      en:["Confirm screen before trash","Undo anytime","Nothing leaves your device"],
      es:["Pantalla de confirmación","Deshacer en cualquier momento","Nada sale de tu dispositivo"]
    },
    shot:"img/screen-3.png"
  }
};

function $(q,scope=document){ return scope.querySelector(q); }
function $all(q,scope=document){ return Array.from(scope.querySelectorAll(q)); }

function setLocale(loc){
  const dict = L[loc] || L.en;
  $all("[data-i18n]").forEach(el=>{ const k=el.dataset.i18n; if (dict[k]!==undefined){ el.innerHTML = dict[k]; }});
  const enBtn=$("#lang-en"), esBtn=$("#lang-es");
  if(enBtn) enBtn.setAttribute("aria-pressed", loc==="en");
  if(esBtn) esBtn.setAttribute("aria-pressed", loc==="es");
  localStorage.setItem("locale", loc);

  // Localize badge images (falls back to EN)
  const iosImg=$("#badge-ios"), andImg=$("#badge-android");
  if(iosImg){
    if(loc==="es" && window.locales && window.locales.es_has_badges){
      iosImg.src="img/badge-appstore-es.png"; iosImg.alt="Descárgalo en el App Store";
    } else { iosImg.src="img/badge-appstore-en.png"; iosImg.alt="Download on the App Store"; }
  }
  if(andImg){
    if(loc==="es" && window.locales && window.locales.es_has_badges){
      andImg.src="img/badge-google-es.png"; andImg.alt="Disponible en Google Play";
    } else { andImg.src="img/badge-google-en.png"; andImg.alt="Get it on Google Play"; }
  }

  // Update current function texts to the locale
  const current = document.querySelector(".pill.is-active")?.dataset.key || "duplicates";
  renderFunction(current, loc);
}

function renderFunction(key, loc){
  const locale = (loc || localStorage.getItem("locale") || "en");
  const data = FX[key] || FX.duplicates;
  $("#stageShot").src = data.shot;
  $("#fxTitle").textContent = data.title[locale] || data.title.en;
  $("#fxDesc").textContent = data.desc[locale] || data.desc.en;
  const ul = $("#fxPoints"); ul.innerHTML = "";
  (data.points[locale] || data.points.en).forEach(p=>{
    const li=document.createElement("li"); li.textContent=p; ul.appendChild(li);
  });
}

function countUp(el, to=1.24, secs=2){
  const start = performance.now(); const from = parseFloat(el.textContent)||0;
  function tick(t){
    const k = Math.min(1,(t-start)/(secs*1000));
    const val = from + (to-from)*(0.5-0.5*Math.cos(Math.PI*k)); // ease
    el.textContent = val.toFixed(2);
    if(k<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

(function init(){
  const userLang = (navigator.language||"en").toLowerCase();
  const defaultLoc = localStorage.getItem("locale") || (userLang.startsWith("es") ? "es" : "en");
  setLocale(defaultLoc);

  // Lang buttons
  $("#lang-en")?.addEventListener("click", ()=>setLocale("en"));
  $("#lang-es")?.addEventListener("click", ()=>setLocale("es"));

  // Year
  $("#year").textContent = new Date().getFullYear();

  // Prefer likely store button visually
  const isIOS = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
  const iosBtn=$("#btn-ios"), andBtn=$("#btn-android");
  if(isIOS&&iosBtn&&andBtn){ iosBtn.style.order=0; andBtn.style.order=1; }
  if(!isIOS&&iosBtn&&andBtn){ iosBtn.style.order=1; andBtn.style.order=0; }

  // TODO: set real store links
  if(iosBtn) iosBtn.href="https://apps.apple.com/app/your-app-id";
  if(andBtn) andBtn.href="https://play.google.com/store/apps/details?id=your.package";

  // Functions pill interactions
  $all(".pill").forEach(p=>{
    p.addEventListener("click", ()=>{
      $all(".pill").forEach(x=>x.classList.remove("is-active"));
      p.classList.add("is-active");
      renderFunction(p.dataset.key);
    });
  });
  // Keyboard ← →
  document.addEventListener("keydown", (e)=>{
    const keys=["ArrowLeft","ArrowRight"]; if(!keys.includes(e.key)) return;
    const pills=$all(".pill"); const i=pills.findIndex(x=>x.classList.contains("is-active"));
    const next = e.key==="ArrowRight" ? (i+1)%pills.length : (i-1+pills.length)%pills.length;
    pills[next].click();
  });

  // Count-up when hero enters
  const gb = $("#gbCount");
  const io = new IntersectionObserver((ent)=>{ if(ent[0].isIntersecting){ countUp(gb, 1.24, 2.2); io.disconnect(); }},{threshold:0.4});
  io.observe(gb);

  // Reveal cards on scroll
  const ro = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); ro.unobserve(e.target);} });
  },{threshold:0.25});
  $all(".card.reveal").forEach(c=>ro.observe(c));

  // Simple parallax on hero device
  const wrap = document.getElementById("deviceWrap");
  if(wrap){
    wrap.addEventListener("mousemove", (e)=>{
      const r = wrap.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width/2)) / r.width;
      const dy = (e.clientY - (r.top + r.height/2)) / r.height;
      wrap.querySelector(".iphone").style.transform = `rotateX(${dy*-4}deg) rotateY(${dx*6}deg) translateZ(0)`;
    });
    wrap.addEventListener("mouseleave", ()=>{ wrap.querySelector(".iphone").style.transform=""; });
  }
})();
