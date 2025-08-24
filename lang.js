// Badge localization (ES images exist)
window.locales = window.locales || {};
window.locales.es_has_badges = true;

// Pricing table (informational only)
const PRICING = {
  EUR: { monthly: 2.99, annual: 19.99, symbol: "€", per_m: "/month", per_y: "/year" },
  USD: { monthly: 3.99, annual: 29.99, symbol: "$", per_m: "/month", per_y: "/year" }
};

const L = {
  en: {
    nav_support:"Support",
    kicker:"Photo cleaner • iOS & Android",
    h1:"Clean photos with a swipe.",
    sub:"Swipe right to keep, left to delete. Sort by screenshots, videos or photos. See your queue and progress. Undo & recover from “Recently Deleted”.",
    metric_saved:"Space saved",
    metric_safe:"Undo & recovery safe",
    metric_sort:"Sort: screenshots • videos • photos",

    // Feature rail
    feat_title:"What you can do",
    feat_sub:"A focused toolkit for fast, safe cleanup — with clear progress and full control.",
    f_start_t:"Start or continue a session",
    f_start_d:"Pick up where you left off or start fresh. Premium lets you continue across sessions without losing progress.",
    f_progress_t:"See progress as you go",
    f_progress_d:"A clear progress view helps you finish confidently and build a quick daily habit.",
    f_recover_t:"Inspect & recover from the queue",
    f_recover_d:"Review before removal, undo any step, and recover from “Recently Deleted” for ~30 days.",
    f_swipe_t:"Swipe to keep or delete",
    f_swipe_d:"Right to keep, left to delete. Full-screen review so every decision is easy.",
    f_info_t:"See info, share, and favorite",
    f_info_d:"Open details for photos & videos, share, or mark favorites without leaving the flow.",
    f_sort_t:"Sort by type",
    f_sort_d:"Focus on screenshots, videos, or just photos to clear clutter faster.",
    f_zoom_t:"Zoom & play",
    f_zoom_d:"Pinch to zoom into photos, or play videos inline to choose the best moments.",
    f_timeline_t:"Timeline or random",
    f_timeline_d:"Work newest-to-oldest for momentum — or switch to random mode for a fresh mix.",

    // Premium
    pro_title:"Go Premium — remove ads & keep your session",
    pro_sub:"The app shows ads by default. Premium removes ads and lets you continue a session so you never lose progress — plus access to future features.",
    pro_freeboost:"Tip:",
    pro_freeboost2:"Get 3 hours of Premium twice a day by watching two long ads.",
    pro_monthly:"Monthly",
    pro_annual:"Annual",
    per_month:"/month",
    per_year:"/year",
    pro_noads:"No ads — cleaner, faster experience",
    pro_session:"Continue session so you don’t lose progress",
    pro_future:"Access to future features as they roll out",
    pro_legal:"Prices shown for your region. Upgrades are made inside the app via App Store / Google Play. Cancel anytime. Taxes may apply.",

    // Support / Privacy nav
    nav_home:"Home",
    footer_support:"Support",
    footer_privacy:"Privacy",

    // Support page (already used)
    s_title:"Support",
    s_intro:"We’re here to help. Email us and we’ll reply within 1–2 business days.",
    sq1_t:"Can’t access Photos?",sq1_d:"iOS: Settings → Privacy & Security → Photos → Neon Swipe → Allow “All Photos”.",
    sq2_t:"Undo a deletion?",sq2_d:"Open Photos → Albums → Recently Deleted (available ~30 days).",
    sq3_t:"Storage not changing?",sq3_d:"After a cleanup, empty “Recently Deleted” to reclaim storage immediately.",
    sq4_t:"Restore purchases",sq4_d:"Open Neon Swipe → Settings → Restore Purchases.",
    s_priv:"Neon Swipe processes your photos on-device. See our privacy policy.",

    // Privacy page (expanded)
    p_title:"Privacy Policy",
    p_intro:"Neon Swipe is designed to respect your privacy. This page explains what we do — and what we don’t.",
    p_local_t:"On-device processing",
    p_local_d:"Your photos and videos are processed locally on your device. We do not upload, view, or store your library on our servers.",
    p_perm_t:"Permissions",
    p_perm_d:"The app requests access to your Photos library solely to display, organize, and remove items at your direction. You can change permission anytime in system settings.",
    p_ads_t:"Ads & connectivity",
    p_ads_d:"The app uses an internet connection to load ads. Photo or video content is never sent with ads. Ad providers may receive device identifiers necessary to deliver and measure ads, per their policies.",
    p_iap_t:"In-app purchases",
    p_iap_d:"Subscriptions and purchases are processed by Apple or Google. They may store necessary purchase metadata in accordance with their privacy policies. We do not receive your full payment details.",
    p_data_t:"Data we do not collect",
    p_data_d:"We do not collect or store your photo/video content, albums, or your library’s structure on our servers.",
    p_ret_t:"Data retention",
    p_ret_d:"If you contact support, your email and message are used only to resolve your request and then retained as required by law.",
    p_child_t:"Children’s privacy",
    p_child_d:"Neon Swipe is not directed to children under 13 (or the minimum age in your jurisdiction).",
    p_changes_t:"Changes",
    p_changes_d:"We may update this policy from time to time. Material changes will be reflected here with a new effective date.",
    p_contact_t:"Contact",
    p_contact_d:"Questions? Email <a href=\"mailto:support@neonswipe.app\">support@neonswipe.app</a>."
  },
  es: {
    nav_support:"Soporte",
    kicker:"Limpieza de fotos • iOS y Android",
    h1:"Limpia tus fotos con un swipe.",
    sub:"Desliza a la derecha para conservar y a la izquierda para borrar. Ordena por capturas, vídeos o fotos. Mira tu cola y progreso. Deshaz y recupera desde «Eliminado recientemente».",
    metric_saved:"Espacio liberado",
    metric_safe:"Deshacer y recuperación seguras",
    metric_sort:"Ordenar: capturas • vídeos • fotos",

    // Feature rail
    feat_title:"Qué puedes hacer",
    feat_sub:"Un conjunto de herramientas enfocado para limpiar rápido y con seguridad — con progreso claro y control total.",
    f_start_t:"Inicia o continúa una sesión",
    f_start_d:"Retoma donde lo dejaste o empieza de cero. Con Premium continúas entre sesiones sin perder progreso.",
    f_progress_t:"Ve el progreso mientras avanzas",
    f_progress_d:"Una vista de progreso clara te ayuda a terminar con confianza y crear un hábito diario.",
    f_recover_t:"Inspecciona y recupera desde la cola",
    f_recover_d:"Revisa antes de eliminar, deshaz cualquier paso y recupera desde «Eliminado recientemente» (~30 días).",
    f_swipe_t:"Desliza para conservar o borrar",
    f_swipe_d:"Derecha para conservar, izquierda para borrar. Revisión a pantalla completa para decidir fácil.",
    f_info_t:"Ver info, compartir y favoritos",
    f_info_d:"Abre detalles de fotos y vídeos, comparte o marca como favorito sin salir del flujo.",
    f_sort_t:"Ordena por tipo",
    f_sort_d:"Enfócate en capturas, vídeos o solo fotos para limpiar más rápido.",
    f_zoom_t:"Zoom y reproducción",
    f_zoom_d:"Acércate con gesto a las fotos o reproduce vídeos para elegir los mejores momentos.",
    f_timeline_t:"Cronología o aleatorio",
    f_timeline_d:"Trabaja de lo más nuevo a lo más antiguo o cambia a modo aleatorio para variar.",

    // Premium
    pro_title:"Hazte Premium — sin anuncios y con sesión guardada",
    pro_sub:"La app muestra anuncios por defecto. Con Premium eliminas los anuncios y puedes continuar una sesión sin perder progreso — además de acceso a funciones futuras.",
    pro_freeboost:"Truco:",
    pro_freeboost2:"Obtén 3 horas de Premium dos veces al día viendo dos anuncios largos.",
    pro_monthly:"Mensual",
    pro_annual:"Anual",
    per_month:"/mes",
    per_year:"/año",
    pro_noads:"Sin anuncios — experiencia más limpia y rápida",
    pro_session:"Continúa la sesión para no perder tu progreso",
    pro_future:"Acceso a funciones futuras a medida que salgan",
    pro_legal:"Precios según tu región. La mejora se realiza dentro de la app (App Store / Google Play). Cancela cuando quieras. Pueden aplicarse impuestos.",

    nav_home:"Inicio",
    footer_support:"Soporte",
    footer_privacy:"Privacidad",

    // Support (existing)
    s_title:"Soporte",
    s_intro:"Estamos para ayudarte. Respondemos en 1–2 días laborables.",
    sq1_t:"¿Sin acceso a Fotos?",sq1_d:"iOS: Ajustes → Privacidad y seguridad → Fotos → Neon Swipe → “Todas las fotos”.",
    sq2_t:"¿Deshacer un borrado?",sq2_d:"Fotos → Álbumes → Eliminado recientemente (≈30 días).",
    sq3_t:"¿El espacio no cambia?",sq3_d:"Tras limpiar, vacía “Eliminado recientemente” para recuperar espacio.",
    sq4_t:"Restaurar compras",sq4_d:"Neon Swipe → Ajustes → Restaurar compras.",
    s_priv:"Neon Swipe procesa tus fotos en el dispositivo. Consulta nuestra política de privacidad.",

    // Privacy (expanded)
    p_title:"Política de privacidad",
    p_intro:"Neon Swipe está diseñado para respetar tu privacidad. Aquí explicamos lo que hacemos — y lo que no.",
    p_local_t:"Procesamiento en el dispositivo",
    p_local_d:"Tus fotos y vídeos se procesan localmente en tu dispositivo. No subimos, vemos ni almacenamos tu biblioteca en nuestros servidores.",
    p_perm_t:"Permisos",
    p_perm_d:"La app solicita acceso a tu Fototeca únicamente para mostrar, organizar y eliminar elementos bajo tu dirección. Puedes cambiar el permiso en Ajustes del sistema.",
    p_ads_t:"Anuncios y conectividad",
    p_ads_d:"La app usa conexión a internet para cargar anuncios. Nunca se envía contenido de fotos o vídeos con los anuncios. Los proveedores de anuncios pueden recibir identificadores del dispositivo necesarios para ofrecer y medir los anuncios, según sus políticas.",
    p_iap_t:"Compras dentro de la app",
    p_iap_d:"Las suscripciones y compras las procesan Apple o Google. Pueden almacenar los metadatos necesarios de la compra conforme a sus políticas de privacidad. No recibimos tus datos de pago completos.",
    p_data_t:"Datos que no recopilamos",
    p_data_d:"No recopilamos ni almacenamos en nuestros servidores el contenido de tus fotos/vídeos, álbumes ni la estructura de tu biblioteca.",
    p_ret_t:"Conservación de datos",
    p_ret_d:"Si nos contactas, tu correo y mensaje se usan solo para atender tu solicitud y luego se conservan según lo exige la ley.",
    p_child_t:"Privacidad de menores",
    p_child_d:"Neon Swipe no está dirigido a menores de 13 años (o la edad mínima de tu jurisdicción).",
    p_changes_t:"Cambios",
    p_changes_d:"Podemos actualizar esta política. Los cambios relevantes se reflejarán aquí con una nueva fecha de vigencia.",
    p_contact_t:"Contacto",
    p_contact_d:"¿Dudas? Escribe a <a href=\"mailto:support@neonswipe.app\">support@neonswipe.app</a>."
  }
};

function $(q,scope=document){ return scope.querySelector(q); }
function $all(q,scope=document){ return Array.from(scope.querySelectorAll(q)); }

const billing = { currency:"EUR", period:"monthly" };
function detectCurrency(){ const lang=(navigator.language||"en").toLowerCase(); return lang.includes("en-us")?"USD":"EUR"; }

function setLocale(loc){
  const dict = L[loc] || L.en;

  // Translate
  $all("[data-i18n]").forEach(el=>{ const k=el.dataset.i18n; if (dict[k]!==undefined) el.innerHTML = dict[k]; });

  // Lang toggle
  $("#lang-en")?.setAttribute("aria-pressed", loc==="en");
  $("#lang-es")?.setAttribute("aria-pressed", loc==="es");
  localStorage.setItem("locale", loc);

  // Swap badge images
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

  // Localize pricing period label
  $("#pricePer").textContent = (loc==="es") ? (billing.period==="monthly" ? L.es.per_month : L.es.per_year)
                                            : (billing.period==="monthly" ? L.en.per_month : L.en.per_year);

  renderPrices();
}

function renderPrices(){
  const cfg = PRICING[billing.currency];
  const amount = billing.period==="monthly" ? cfg.monthly : cfg.annual;
  $("#curSymbol").textContent = cfg.symbol;
  $("#priceAmount").textContent = amount.toFixed(2);
  const loc = localStorage.getItem("locale")==="es" ? L.es : L.en;
  $("#pricePer").textContent = billing.period==="monthly" ? loc.per_month : loc.per_year;

  // small delight
  $("#priceAmount").animate([{transform:"scale(1)"},{transform:"scale(1.06)"},{transform:"scale(1)"}],{duration:220,easing:"ease-out"});
}

function countUp(el, to=16.92, secs=5.2){
  const start = performance.now(); const from = parseFloat(el.textContent)||0;
  function tick(t){
    const k = Math.min(1,(t-start)/(secs*1000));
    const val = from + (to-from)*(0.5-0.5*Math.cos(Math.PI*k));
    el.textContent = val.toFixed(2);
    if(k<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ===== Feature rail: infinite auto-slide, pause on hover/focus/drag ===== */
function initInfiniteRail(rail){
  if(!rail) return;

  // Duplicate content for seamless loop
  rail.innerHTML += rail.innerHTML;
  let paused = false;
  let speed = 0.35; // px per frame
  let rafId;

  function step(){
    if(!paused){
      rail.scrollLeft += speed;
      if(rail.scrollLeft >= rail.scrollWidth/2){ rail.scrollLeft = 0; }
    }
    rafId = requestAnimationFrame(step);
  }
  rafId = requestAnimationFrame(step);

  // Pause/resume on interactions
  ["mouseenter","focusin","pointerdown"].forEach(ev=>rail.addEventListener(ev,()=>paused=true));
  ["mouseleave","focusout","pointerup","pointercancel"].forEach(ev=>rail.addEventListener(ev,()=>paused=false));

  // Drag to scroll
  let isDown=false, startX=0, sl=0;
  rail.addEventListener("pointerdown", e=>{ isDown=true; rail.setPointerCapture(e.pointerId); startX=e.clientX; sl=rail.scrollLeft; });
  rail.addEventListener("pointermove", e=>{ if(isDown){ rail.scrollLeft = sl - (e.clientX - startX); }});
  ["pointerup","pointercancel","pointerleave"].forEach(ev=>rail.addEventListener(ev, ()=>{ isDown=false; }));
}

(function init(){
  // Locale
  const userLang=(navigator.language||"en").toLowerCase();
  const defaultLoc=localStorage.getItem("locale")||(userLang.startsWith("es")?"es":"en");
  setLocale(defaultLoc);

  // Year
  $("#year").textContent = new Date().getFullYear();

  // Prefer likely store button visually
  const isIOS=/iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
  const iosBtn=$("#btn-ios"), andBtn=$("#btn-android");
  if(isIOS&&iosBtn&&andBtn){ iosBtn.style.order=0; andBtn.style.order=1; }
  if(!isIOS&&iosBtn&&andBtn){ iosBtn.style.order=1; andBtn.style.order=0; }

  // Optional: add real store links
  if(iosBtn) iosBtn.href="https://apps.apple.com/app/your-app-id";
  if(andBtn) andBtn.href="https://play.google.com/store/apps/details?id=your.package";

  // Lang toggles
  $("#lang-en")?.addEventListener("click", ()=>setLocale("en"));
  $("#lang-es")?.addEventListener("click", ()=>setLocale("es"));

  // Counter → 16.92 GB (slower)
  const gb=$("#gbCount");
  const io=new IntersectionObserver((ent)=>{ if(ent[0].isIntersecting){ countUp(gb,16.92,5.2); io.disconnect(); }},{threshold:0.4});
  io.observe(gb);

  // Subtle tilt
  const wrap=document.getElementById("deviceWrap");
  if(wrap){
    wrap.addEventListener("mousemove",(e)=>{
      const r=wrap.getBoundingClientRect();
      const dx=(e.clientX-(r.left+r.width/2))/r.width;
      const dy=(e.clientY-(r.top+r.height/2))/r.height;
      wrap.querySelector(".iphone").style.transform=`rotateX(${dy*-4}deg) rotateY(${dx*6}deg) translateZ(0)`;
    });
    wrap.addEventListener("mouseleave",()=>{ wrap.querySelector(".iphone").style.transform=""; });
  }

  // Pricing controls (informational only)
  billing.currency = detectCurrency();
  if(billing.currency==="USD"){ $("#curUSD")?.classList.add("is-active"); } else { $("#curEUR")?.classList.add("is-active"); }
  $("#billMonthly")?.classList.add("is-active");
  renderPrices();

  $("#billMonthly")?.addEventListener("click", ()=>{ billing.period="monthly"; billMonthly.classList.add("is-active"); billAnnual.classList.remove("is-active"); renderPrices(); });
  $("#billAnnual")?.addEventListener("click", ()=>{ billing.period="annual"; billAnnual.classList.add("is-active"); billMonthly.classList.remove("is-active"); renderPrices(); });
  $("#curEUR")?.addEventListener("click", ()=>{ billing.currency="EUR"; curEUR.classList.add("is-active"); curUSD.classList.remove("is-active"); renderPrices(); });
  $("#curUSD")?.addEventListener("click", ()=>{ billing.currency="USD"; curUSD.classList.add("is-active"); curEUR.classList.remove("is-active"); renderPrices(); });

  // Infinite auto-slide rail
  initInfiniteRail(document.getElementById("featureRail"));
})();
