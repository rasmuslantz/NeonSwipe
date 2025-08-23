// Toggle this to true after you add Spanish badge images:
//   /img/badge-appstore-es.png  and  /img/badge-google-es.png
window.locales = window.locales || {};
window.locales.es_has_badges = false;

// Price table
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
    tag_queue:"Queue",

    // Checklist
    do_swipe:"Swipe right to keep, left to delete",
    do_sort:"Sort by screenshots, videos or photos",
    do_queue:"See your queue & progress at a glance",
    do_undo:"Undo anytime & recover from Recently Deleted (~30 days)",

    // Premium
    pro_title:"Go Premium — remove ads & keep your session",
    pro_sub:"The app shows ads by default. Premium removes ads and lets you continue a session so you never lose progress — plus access to future features.",
    pro_monthly:"Monthly",
    pro_annual:"Annual",
    per_month:"/month",
    per_year:"/year",
    pro_noads:"No ads — cleaner, faster experience",
    pro_session:"Continue session so you don’t lose progress",
    pro_future:"Access to future features as they roll out",
    pro_legal:"Prices shown for your region. Billed via App Store / Google Play. Cancel anytime. Taxes may apply.",
    get_ios_premium:"Upgrade on App Store",
    get_gp_premium:"Upgrade on Google Play",

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
    nav_support:"Soporte",
    kicker:"Limpieza de fotos • iOS y Android",
    h1:"Limpia tus fotos con un swipe.",
    sub:"Desliza a la derecha para conservar y a la izquierda para borrar. Ordena por capturas, vídeos o fotos. Mira tu cola y progreso. Deshaz y recupera desde «Eliminado recientemente».",
    metric_saved:"Espacio liberado",
    metric_safe:"Deshacer y recuperación seguras",
    metric_sort:"Ordenar: capturas • vídeos • fotos",
    tag_queue:"Cola",

    // Checklist
    do_swipe:"Desliza derecha para conservar, izquierda para borrar",
    do_sort:"Ordena por capturas, vídeos o fotos",
    do_queue:"Consulta tu cola y progreso de un vistazo",
    do_undo:"Deshaz en cualquier momento y recupera desde Eliminado recientemente (~30 días)",

    // Premium
    pro_title:"Hazte Premium — sin anuncios y con sesión guardada",
    pro_sub:"La app muestra anuncios por defecto. Con Premium eliminas los anuncios y puedes continuar una sesión para no perder progreso — además de acceso a futuras funciones.",
    pro_monthly:"Mensual",
    pro_annual:"Anual",
    per_month:"/mes",
    per_year:"/año",
    pro_noads:"Sin anuncios — experiencia más limpia y rápida",
    pro_session:"Continúa la sesión para no perder tu progreso",
    pro_future:"Acceso a funciones futuras a medida que salgan",
    pro_legal:"Precios según tu región. Se factura vía App Store / Google Play. Cancela cuando quieras. Impuestos aplicables.",
    get_ios_premium:"Mejorar en App Store",
    get_gp_premium:"Mejorar en Google Play",

    // Support page
    nav_home:"Inicio",
    s_title:"Soporte",
    s_intro:"Estamos para ayudarte. Respondemos en 1–2 días laborables.",
    sq1_t:"¿Sin acceso a Fotos?",sq1_d:"iOS: Ajustes → Privacidad y seguridad → Fotos → Neon Swipe → “Todas las fotos”.",
    sq2_t:"¿Deshacer un borrado?",sq2_d:"Fotos → Álbumes → Eliminado recientemente (≈30 días).",
    sq3_t:"¿El espacio no cambia?",sq3_d:"Tras limpiar, vacía “Eliminado recientemente” para recuperar espacio.",
    sq4_t:"Restaurar compras",sq4_d:"Neon Swipe → Ajustes → Restaurar compras.",
    s_priv:"Neon Swipe procesa tus fotos en el dispositivo. Consulta la política de privacidad en App Store."
  }
};

function $(q,scope=document){ return scope.querySelector(q); }
function $all(q,scope=document){ return Array.from(scope.querySelectorAll(q)); }

function setLocale(loc){
  const dict = L[loc] || L.en;

  // Translate text nodes
  $all("[data-i18n]").forEach(el=>{ const k=el.dataset.i18n; if (dict[k]!==undefined) el.innerHTML = dict[k]; });

  // Lang toggle
  $("#lang-en")?.setAttribute("aria-pressed", loc==="en");
  $("#lang-es")?.setAttribute("aria-pressed", loc==="es");
  localStorage.setItem("locale", loc);

  // Localize badges (fallback to EN images)
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

  // Localize period labels in pricing
  $("#pricePer").textContent = (loc==="es") ? (billing.period==="monthly" ? L.es.per_month : L.es.per_year)
                                            : (billing.period==="monthly" ? L.en.per_month : L.en.per_year);

  // Rerender the swipe demo captions (if any) + pricing
  renderPrices();
}

const billing = {
  currency: "EUR",   // "EUR" or "USD"
  period: "monthly"  // "monthly" or "annual"
};

function detectCurrency(){
  const lang = (navigator.language||"en").toLowerCase();
  // Simple heuristic: US English -> USD, everything else -> EUR
  return lang.includes("en-us") ? "USD" : "EUR";
}

function renderPrices(){
  const cfg = PRICING[billing.currency];
  const amount = billing.period==="monthly" ? cfg.monthly : cfg.annual;
  $("#curSymbol").textContent = cfg.symbol;
  $("#priceAmount").textContent = amount.toFixed(2);
  const i18n = (localStorage.getItem("locale")==="es") ? L.es : L.en;
  $("#pricePer").textContent = billing.period==="monthly" ? i18n.per_month : i18n.per_year;

  // Animate the number a bit for delight
  $("#priceAmount").animate([{transform:"scale(1)"},{transform:"scale(1.06)"},{transform:"scale(1)"}], {duration:220, easing:"ease-out"});
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
  // Locale
  const userLang = (navigator.language||"en").toLowerCase();
  const defaultLoc = localStorage.getItem("locale") || (userLang.startsWith("es") ? "es" : "en");
  setLocale(defaultLoc);

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
  $("#btn-ios-premium").href = "https://apps.apple.com/app/your-app-id";
  $("#btn-android-premium").href = "https://play.google.com/store/apps/details?id=your.package";

  // Badge locale toggles
  $("#lang-en")?.addEventListener("click", ()=>setLocale("en"));
  $("#lang-es")?.addEventListener("click", ()=>setLocale("es"));

  // Animate "Space saved" when visible
  const gb = $("#gbCount");
  const io = new IntersectionObserver((ent)=>{ if(ent[0].isIntersecting){ countUp(gb, 1.24, 2.2); io.disconnect(); }},{threshold:0.4});
  io.observe(gb);

  // Simple parallax/tilt on hero device
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

  // Auto swipe demo (alternates left/right)
  const phone = document.querySelector(".iphone");
  let dir = "left";
  setInterval(()=>{
    if(!phone) return;
    phone.classList.remove("show-left","show-right");
    if(dir==="left"){ phone.classList.add("show-left"); dir="right"; }
    else { phone.classList.add("show-right"); dir="left"; }
  }, 2400);

  // Pricing controls
  billing.currency = detectCurrency(); // USD for en-US, otherwise EUR
  renderPrices();

  $("#billMonthly")?.addEventListener("click", ()=>{
    billing.period="monthly";
    document.getElementById("billMonthly").classList.add("is-active");
    document.getElementById("billAnnual").classList.remove("is-active");
    renderPrices();
  });
  $("#billAnnual")?.addEventListener("click", ()=>{
    billing.period="annual";
    document.getElementById("billAnnual").classList.add("is-active");
    document.getElementById("billMonthly").classList.remove("is-active");
    renderPrices();
  });

  $("#curEUR")?.addEventListener("click", ()=>{
    billing.currency="EUR";
    document.getElementById("curEUR").classList.add("is-active");
    document.getElementById("curUSD").classList.remove("is-active");
    renderPrices();
  });
  $("#curUSD")?.addEventListener("click", ()=>{
    billing.currency="USD";
    document.getElementById("curUSD").classList.add("is-active");
    document.getElementById("curEUR").classList.remove("is-active");
    renderPrices();
  });

  // Initialize currency pill state
  if(billing.currency==="USD"){ $("#curUSD")?.classList.add("is-active"); } else { $("#curEUR")?.classList.add("is-active"); }
  // Default period pill
  $("#billMonthly")?.classList.add("is-active");
})();
