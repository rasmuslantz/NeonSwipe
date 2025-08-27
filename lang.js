// i18n + animations + pricing + feature rail auto-loop
window.locales = window.locales || {};
window.locales.es_has_badges = true;

const PRICING = {
  EUR: { monthly: 2.99, annual: 19.99, symbol: "€", per_m: "/month", per_y: "/year" },
  USD: { monthly: 3.99, annual: 29.99, symbol: "$", per_m: "/month", per_y: "/year" }
};

const L = {
  en: {
    nav_support:"Support", nav_home:"Home", footer_support:"Support", footer_privacy:"Privacy",
    kicker:"Photo cleaner • iOS & Android",
    h1:"Clean photos with a swipe.",
    sub:"Swipe right to keep, left to delete. Sort by screenshots, videos or photos. See your queue and progress. Undo & recover from “Recently Deleted”.",
    metric_saved:"Space saved", metric_safe:"Undo & recovery safe", metric_sort:"Sort: screenshots • videos • photos",
    do_swipe:"Swipe right to keep, left to delete",
    do_sort:"Sort by screenshots, videos or photos",
    do_queue:"See your queue & progress at a glance",
    do_undo:"Undo anytime & recover from Recently Deleted (~30 days)",
    feat_title:"What you can do", feat_sub:"A focused toolkit for fast, safe cleanup — with clear progress and full control.",
    f_start_t:"Start or continue a session", f_start_d:"Pick up where you left off or start fresh. Premium lets you continue across sessions without losing progress.",
    f_progress_t:"See progress as you go", f_progress_d:"A clear progress view helps you finish confidently and build a quick daily habit.",
    f_recover_t:"Inspect & recover from the queue", f_recover_d:"Review before removal, undo any step, and recover from “Recently Deleted” for ~30 days.",
    f_swipe_t:"Swipe to keep or delete", f_swipe_d:"Right to keep, left to delete. Full-screen review so every decision is easy.",
    f_info_t:"See info, share, and favorite", f_info_d:"Open details for photos & videos, share, or mark favorites without leaving the flow.",
    f_sort_t:"Sort by type", f_sort_d:"Focus on screenshots, videos, or just photos to clear clutter faster.",
    f_zoom_t:"Zoom & play", f_zoom_d:"Pinch to zoom into photos, or play videos inline to choose the best moments.",
    f_timeline_t:"Timeline or random", f_timeline_d:"Work newest-to-oldest for momentum — or switch to random mode for a fresh mix.",
    pro_title:"Go Premium — remove ads & keep your session",
    pro_sub:"The app shows ads by default. Premium removes ads and lets you continue a session so you never lose progress — plus access to future features.",
    pro_freeboost:"Tip:", pro_freeboost2:"Get 3 hours of Premium twice a day by watching two long ads.",
    pro_monthly:"Monthly", pro_annual:"Annual", per_month:"/month", per_year:"/year",
    pro_noads:"No ads — cleaner, faster experience", pro_session:"Continue session so you don’t lose progress", pro_future:"Access to future features as they roll out",
    pro_legal:"Prices shown for your region. Upgrades are made inside the app via App Store / Google Play. Cancel anytime. Taxes may apply.",
    s_title:"Support",
    s_intro:"We’re here to help. Start with the quick fixes below or contact us — we usually reply within 1–2 business days.",
    s_quick_title:"Quick fixes",
    s_q_perm_t:"Allow Photos access", s_q_perm_d:"iOS: Settings → Privacy & Security → Photos → Neon Swipe → Allow “All Photos”.",
    s_q_undo_t:"Undo a deletion", s_q_undo_d:"Photos → Albums → Recently Deleted (available ~30 days).",
    s_q_space_t:"Storage not changing?", s_q_space_d:"After a cleanup, empty “Recently Deleted” to reclaim space immediately.",
    s_q_restore_t:"Restore purchases", s_q_restore_d:"Open Neon Swipe → Settings → Restore Purchases.",
    s_contact_title:"Contact us", s_contact_desc:"Can’t find what you need? Email us and include your device model and iOS/Android version.",
    s_email_label:"Email", s_email_value:"neonswipe.help@gmail.com",
    p_title:"Privacy Policy",
    p_intro:"Neon Swipe is designed to respect your privacy. This notice explains our practices in clear terms.",
    p_local_t:"On-device processing", p_local_d:"All photo and video review happens locally on your device. We do not upload or store your library on our servers, and we do not view your content.",
    p_perm_t:"Permissions", p_perm_d:"Access to your Photos library is requested only to display items and perform actions you choose (keep, delete, favorite). You can change or revoke permission anytime in system settings.",
    p_ads_t:"Advertising & connectivity", p_ads_d:"The app needs an internet connection to load ads. Your photo/video content is never sent with ad requests. Ad providers may receive device identifiers and coarse information (like language and region) required to deliver and measure ads under their own policies.",
    p_iap_t:"In-app purchases", p_iap_d:"Subscriptions and purchases are processed by Apple or Google. They may maintain purchase metadata and receipts per their privacy terms. We do not receive your full payment details.",
    p_data_t:"Data we do not collect", p_data_d:"We do not collect on our servers: your photo/video files, albums, favorites, or the structure of your library. Actions you take (keep/delete) remain on your device.",
    p_diag_t:"Diagnostics", p_diag_d:"If you opt in to share diagnostics with Apple/Google or send us logs via support, we may receive anonymized crash reports and technical data used only to fix issues and improve performance.",
    p_security_t:"Security", p_security_d:"We apply industry-standard safeguards to any limited data we hold (e.g., support emails). Where feasible, data is encrypted in transit and at rest.",
    p_third_t:"Third-party partners", p_third_d:"When you interact with ads or make a purchase, the relevant partners (ad networks, Apple, Google) process your data under their own policies.",
    p_region_t:"International transfers", p_region_d:"Because ads and billing are provided by global platforms, your information may be processed outside your country. Those providers implement their own safeguards to facilitate such transfers.",
    p_ret_t:"Retention", p_ret_d:"Support emails and related correspondence are retained only as long as necessary to resolve your request and meet legal obligations.",
    p_changes_t:"Changes to this policy", p_changes_d:"We may update this notice from time to time. Material changes will be posted here with a new effective date.",
    p_contact_t:"Contact", p_contact_d:'Questions about privacy? Email <a href="mailto:neonswipe.help@gmail.com">neonswipe.help@gmail.com</a>.',
    p_effective_t:"Effective date", p_effective_d:"This policy is effective as of 1 October 2025."
  },
  es: {
    nav_support:"Soporte", nav_home:"Inicio", footer_support:"Soporte", footer_privacy:"Privacidad",
    kicker:"Limpieza de fotos • iOS y Android",
    h1:"Limpia tus fotos con un swipe.",
    sub:"Desliza a la derecha para conservar y a la izquierda para borrar. Ordena por capturas, vídeos o fotos. Mira tu cola y progreso. Deshaz y recupera desde «Eliminado recientemente».",
    metric_saved:"Espacio liberado", metric_safe:"Deshacer y recuperación seguras", metric_sort:"Ordenar: capturas • vídeos • fotos",
    do_swipe:"Desliza a la derecha para conservar y a la izquierda para borrar",
    do_sort:"Ordena por capturas, vídeos o fotos",
    do_queue:"Consulta tu cola y progreso de un vistazo",
    do_undo:"Deshaz en cualquier momento y recupera desde “Eliminado recientemente” (~30 días)",
    feat_title:"Qué puedes hacer", feat_sub:"Un conjunto de herramientas enfocado para limpiar rápido y con seguridad — con progreso claro y control total.",
    f_start_t:"Inicia o continúa una sesión", f_start_d:"Retoma donde lo dejaste o empieza de cero. Con Premium continúas entre sesiones sin perder progreso.",
    f_progress_t:"Ve el progreso mientras avanzas", f_progress_d:"Una vista de progreso clara te ayuda a terminar con confianza y crear un hábito diario.",
    f_recover_t:"Inspecciona y recupera desde la cola", f_recover_d:"Revisa antes de eliminar, deshaz cualquier paso y recupera desde «Eliminado recientemente» (~30 días).",
    f_swipe_t:"Desliza para conservar o borrar", f_swipe_d:"Derecha para conservar, izquierda para borrar. Revisión a pantalla completa para decidir fácil.",
    f_info_t:"Ver info, compartir y favoritos", f_info_d:"Abre detalles de fotos y vídeos, comparte o marca como favorito sin salir del flujo.",
    f_sort_t:"Ordena por tipo", f_sort_d:"Enfócate en capturas, vídeos o solo fotos para limpiar más rápido.",
    f_zoom_t:"Zoom y reproducción", f_zoom_d:"Acércate a las fotos o reproduce vídeos para elegir los mejores momentos.",
    f_timeline_t:"Cronología o aleatorio", f_timeline_d:"Trabaja de lo más nuevo a lo más antiguo o cambia a modo aleatorio para variar.",
    pro_title:"Hazte Premium — sin anuncios y con sesión guardada",
    pro_sub:"La app muestra anuncios por defecto. Con Premium eliminas los anuncios y puedes continuar una sesión sin perder progreso — además de acceso a funciones futuras.",
    pro_freeboost:"Truco:", pro_freeboost2:"Obtén 3 horas de Premium dos veces al día viendo dos anuncios largos.",
    pro_monthly:"Mensual", pro_annual:"Anual", per_month:"/mes", per_year:"/año",
    pro_noads:"Sin anuncios — experiencia más limpia y rápida", pro_session:"Continúa la sesión para no perder tu progreso", pro_future:"Acceso a funciones futuras a medida que salgan",
    pro_legal:"Precios según tu región. La mejora se realiza dentro de la app (App Store / Google Play). Cancela cuando quieras. Pueden aplicarse impuestos.",
    s_title:"Soporte",
    s_intro:"Estamos para ayudarte. Prueba primero estas soluciones rápidas o contáctanos — solemos responder en 1–2 días laborables.",
    s_quick_title:"Soluciones rápidas",
    s_q_perm_t:"Permitir acceso a Fotos", s_q_perm_d:"iOS: Ajustes → Privacidad y seguridad → Fotos → Neon Swipe → “Todas las fotos”.",
    s_q_undo_t:"Deshacer un borrado", s_q_undo_d:"Fotos → Álbumes → Eliminado recientemente (≈30 días).",
    s_q_space_t:"¿El espacio no cambia?", s_q_space_d:"Tras limpiar, vacía “Eliminado recientemente” para recuperar espacio al instante.",
    s_q_restore_t:"Restaurar compras", s_q_restore_d:"Neon Swipe → Ajustes → Restaurar compras.",
    s_contact_title:"Contáctanos", s_contact_desc:"¿No encuentras lo que necesitas? Escríbenos e incluye tu modelo de dispositivo y versión de iOS/Android.",
    s_email_label:"Correo", s_email_value:"neonswipe.help@gmail.com",
    p_title:"Política de privacidad",
    p_intro:"Neon Swipe está diseñado para respetar tu privacidad. Este aviso explica nuestras prácticas de forma clara.",
    p_local_t:"Procesamiento en el dispositivo", p_local_d:"Toda la revisión de fotos y vídeos ocurre localmente en tu dispositivo. No subimos ni almacenamos tu biblioteca en nuestros servidores, ni vemos tu contenido.",
    p_perm_t:"Permisos", p_perm_d:"El acceso a tu Fototeca se solicita únicamente para mostrar elementos y realizar las acciones que elijas (conservar, borrar, favorito). Puedes cambiar o revocar el permiso en Ajustes del sistema.",
    p_ads_t:"Publicidad y conectividad", p_ads_d:"La app necesita conexión a internet para cargar anuncios. Tu contenido nunca se envía con las solicitudes de anuncios. Los proveedores pueden recibir identificadores del dispositivo e información general (idioma y región) para ofrecer y medir anuncios según sus políticas.",
    p_iap_t:"Compras dentro de la app", p_iap_d:"Las suscripciones y compras las procesan Apple o Google. Pueden mantener metadatos y recibos de compra conforme a sus políticas de privacidad. No recibimos tus datos de pago completos.",
    p_data_t:"Datos que no recopilamos", p_data_d:"No recopilamos en nuestros servidores tus archivos de fotos/vídeos, álbumes, favoritos ni la estructura de tu biblioteca. Las acciones (conservar/borrar) permanecen en tu dispositivo.",
    p_diag_t:"Diagnósticos", p_diag_d:"Si aceptas compartir diagnósticos con Apple/Google o nos envías registros por soporte, podemos recibir informes anónimos de fallos y datos técnicos para corregir errores y mejorar el rendimiento.",
    p_security_t:"Seguridad", p_security_d:"Aplicamos salvaguardas estándar del sector a los datos limitados que mantenemos (p. ej., correos de soporte). Cuando es posible, los datos se cifran en tránsito y en reposo.",
    p_third_t:"Terceros", p_third_d:"Cuando interactúas con anuncios o realizas una compra, los socios correspondientes (redes publicitarias, Apple, Google) procesan tus datos según sus propias políticas.",
    p_region_t:"Transferencias internacionales", p_region_d:"Dado que la publicidad y la facturación las prestan plataformas globales, tu información puede procesarse fuera de tu país. Esos proveedores aplican sus propias garantías para dichas transferencias.",
    p_ret_t:"Conservación", p_ret_d:"Los correos de soporte y la correspondencia relacionada se conservan solo el tiempo necesario para atender tu solicitud y cumplir obligaciones legales.",
    p_changes_t:"Cambios en esta política", p_changes_d:"Podemos actualizar este aviso. Los cambios relevantes se publicarán aquí con una nueva fecha de vigencia.",
    p_contact_t:"Contacto", p_contact_d:'¿Preguntas sobre privacidad? Escribe a <a href="mailto:neonswipe.help@gmail.com">neonswipe.help@gmail.com</a>.',
    p_effective_t:"Fecha de vigencia", p_effective_d:"Esta política entra en vigor el 1 de octubre de 2025."
  }
};

function $(q,scope=document){ return scope.querySelector(q); }
function $all(q,scope=document){ return Array.from(scope.querySelectorAll(q)); }

const billing = { currency:"EUR", period:"monthly" };
const detectCurrency = () => (navigator.language||"en").toLowerCase().includes("en-us") ? "USD" : "EUR";

function setLocale(loc){
  const dict = L[loc] || L.en;
  // Translate anything with data-i18n
  $all("[data-i18n]").forEach(el => { const k=el.dataset.i18n; if(dict[k]!==undefined) el.innerHTML=dict[k]; });

  // lang buttons + remember
  $("#lang-en")?.setAttribute("aria-pressed", String(loc==="en"));
  $("#lang-es")?.setAttribute("aria-pressed", String(loc==="es"));
  localStorage.setItem("locale", loc);

  // Badges
  const iosImg=$("#badge-ios"), andImg=$("#badge-android");
  if(iosImg){
    iosImg.src=(loc==="es"&&window.locales.es_has_badges)?"/img/badge-appstore-es.png":"/img/badge-appstore-en.png";
    iosImg.alt = (loc==="es")?"Descárgalo en el App Store":"Download on the App Store";
  }
  if(andImg){
    andImg.src=(loc==="es"&&window.locales.es_has_badges)?"/img/badge-google-es.png":"/img/badge-google-en.png";
    andImg.alt = (loc==="es")?"Disponible en Google Play":"Get it on Google Play";
  }

  // /month or /year label to match locale + current period
  const pricePerEl=$("#pricePer");
  if(pricePerEl){
    pricePerEl.textContent=(loc==="es")
      ? (billing.period==="monthly"?L.es.per_month:L.es.per_year)
      : (billing.period==="monthly"?L.en.per_month:L.en.per_year);
  }
  renderPrices();
}

function renderPrices(){
  const sym=$("#curSymbol"), amountEl=$("#priceAmount"), per=$("#pricePer");
  if(!sym||!amountEl||!per) return;
  const cfg=PRICING[billing.currency];
  sym.textContent=cfg.symbol;
  amountEl.textContent=(billing.period==="monthly"?cfg.monthly:cfg.annual).toFixed(2);
  const loc=localStorage.getItem("locale")==="es"?L.es:L.en;
  per.textContent=billing.period==="monthly"?loc.per_month:loc.per_year;
}

function countUp(el, to=16.82, secs=5.6){
  if(!el) return;
  const start=performance.now(); const from=parseFloat(el.textContent)||0;
  function tick(t){
    const k=Math.min(1,(t-start)/(secs*1000));
    const val=from+(to-from)*(0.5-0.5*Math.cos(Math.PI*k));
    el.textContent=val.toFixed(2);
    if(k<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* Legacy manual rail (kept for other rails if any) */
function initInfiniteRail(rail){
  if(!rail) return;
  rail.innerHTML += rail.innerHTML;
  let paused=false, speed=0.28, rafId;
  function step(){
    if(!paused){
      rail.scrollLeft += speed;
      if(rail.scrollLeft >= rail.scrollWidth/2) rail.scrollLeft = 0;
    }
    rafId=requestAnimationFrame(step);
  }
  rafId=requestAnimationFrame(step);
  ["mouseenter","focusin","pointerdown"].forEach(ev=>rail.addEventListener(ev,()=>paused=true));
  ["mouseleave","focusout","pointerup","pointercancel"].forEach(ev=>rail.addEventListener(ev,()=>paused=false));
  let isDown=false,startX=0,sl=0;
  rail.addEventListener("pointerdown",e=>{isDown=true;rail.setPointerCapture(e.pointerId);startX=e.clientX;sl=rail.scrollLeft;});
  rail.addEventListener("pointermove",e=>{if(isDown){rail.scrollLeft=sl-(e.clientX-startX);}});
  ["pointerup","pointercancel","pointerleave"].forEach(ev=>rail.addEventListener(ev,()=>{isDown=false;}));
}

/* Ensure phone floats + video is pinned (no drift) */
function ensurePhoneFloat(){
  const phoneEl = document.querySelector(".iphone");
  if (phoneEl) {
    // keep class (in case your CSS styles it) but disable its keyframe animation
    if (!phoneEl.classList.contains("smooth-float")) phoneEl.classList.add("smooth-float");
    phoneEl.style.animation = "none"; // JS will drive transform for perfect smoothness
    phoneEl.style.willChange = "transform";
    phoneEl.style.backfaceVisibility = "hidden";
    phoneEl.style.transform = "translate3d(0,0,0)";
  }
  const vidEl =
    (phoneEl && phoneEl.querySelector("video, .iphone-video")) ||
    document.querySelector(".iphone-video, .iphone video");
  if (vidEl){
    vidEl.style.animation = "none";
    vidEl.style.transform  = "none";
    vidEl.style.position   = "absolute";
    vidEl.style.inset      = "0";
  }
}
function retryEnsurePhoneFloat(ms=250, tries=16){
  ensurePhoneFloat();
  let count=1;
  const id=setInterval(()=>{ ensurePhoneFloat(); if(++count>=tries) clearInterval(id); }, ms);
}

/* Ultra-smooth levitation via rAF + sine (no endpoints pause) */
function startPhoneSineFloat(){
  const phoneEl = document.querySelector(".iphone");
  if (!phoneEl) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const TWO_PI = Math.PI * 2;
  const amplitude = 16;     // px peak offset (visible but not jumpy)
  const periodSec = 12;    // seconds per full cycle (a bit faster)
  const omega = TWO_PI / periodSec;

  // Stop any CSS animation on the element to avoid conflicts
  phoneEl.style.animation = "none";

  // Only animate when on-screen to avoid jank/throttling rebounds
  let isActive = true;
  const io = new IntersectionObserver((entries)=> {
    isActive = entries[0]?.isIntersecting ?? true;
  }, { threshold: 0.1 });
  io.observe(phoneEl);

  let raf = 0;
  let start = performance.now();

  function loop(now){
    if (reduce.matches) {
      phoneEl.style.transform = "translate3d(0,0,0)";
      raf = requestAnimationFrame(loop);
      return;
    }
    if (!isActive) {
      raf = requestAnimationFrame(loop);
      return;
    }
    const t = (now - start) / 1000;
    const y = Math.sin(omega * t) * amplitude;
    // GPU path; subpixel precision prevents micro-stops
    phoneEl.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    raf = requestAnimationFrame(loop);
  }

  // Cancel any previous loop and start fresh
  if (phoneEl._floatRafId) cancelAnimationFrame(phoneEl._floatRafId);
  phoneEl._floatRafId = requestAnimationFrame(loop);

  // Pause/resume with tab visibility to keep timing consistent
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (phoneEl._floatRafId) cancelAnimationFrame(phoneEl._floatRafId);
      phoneEl._floatRafId = 0;
    } else {
      start = performance.now(); // reset phase for a seamless resume
      phoneEl._floatRafId = requestAnimationFrame(loop);
    }
  });

  // Respect changes to reduced-motion on the fly
  reduce.addEventListener?.("change", (e) => {
    if (e.matches) {
      if (phoneEl._floatRafId) cancelAnimationFrame(phoneEl._floatRafId);
      phoneEl.style.transform = "translate3d(0,0,0)";
    } else {
      start = performance.now();
      phoneEl._floatRafId = requestAnimationFrame(loop);
    }
  });
}

(function init(){
  let booted=false;
  function onReady(){
    if(booted) return; booted=true;

    const userLang=(navigator.language||"en").toLowerCase();
    const defaultLoc=localStorage.getItem("locale")||(userLang.startsWith("es")?"es":"en");
    setLocale(defaultLoc);

    $("#year") && ($("#year").textContent = new Date().getFullYear());

    // Store links (home only)
    const iosBtn=$("#btn-ios"), andBtn=$("#btn-android");
    if(iosBtn&&andBtn){
      const isIOS=/iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
      iosBtn.style.order=isIOS?0:1; andBtn.style.order=isIOS?1:0;
      iosBtn.href="https://apps.apple.com/app/your-app-id";
      andBtn.href="https://play.google.com/store/apps/details?id=your.package";
    }

    // Language toggles
    $("#lang-en")?.addEventListener("click", ()=>setLocale("en"));
    $("#lang-es")?.addEventListener("click", ()=>setLocale("es"));

    // Counter when visible
    const gb=$("#gbCount");
    if(gb){
      const io=new IntersectionObserver((ent)=>{ if(ent[0].isIntersecting){ countUp(gb,16.82,5.6); io.disconnect(); } },{threshold:0.4});
      io.observe(gb);
    }

    /* Phone: pin video & start ultra-smooth levitation */
    ensurePhoneFloat();
    retryEnsurePhoneFloat(250,16);
    startPhoneSineFloat();

    /* Pause CSS loop on hover & respect reduced motion for the features rail */
    const featTrack = document.querySelector('#featureRail .rail-track');
    const featRail  = document.getElementById('featureRail');
    if(featTrack && featRail){
      featRail.addEventListener('mouseenter', ()=> featTrack.style.animationPlayState='paused');
      featRail.addEventListener('mouseleave', ()=> featTrack.style.animationPlayState='running');
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
        featTrack.style.animationPlayState = 'paused';
      }
    }

    /* === PRICING CONTROLS === */
    billing.currency = detectCurrency();

    const curEUR=$("#curEUR"), curUSD=$("#curUSD"),
          billM=$("#billMonthly"), billA=$("#billAnnual");

    // Initial active state
    if(curEUR&&curUSD){
      (billing.currency==="USD" ? curUSD : curEUR).classList.add("is-active");
      curEUR?.setAttribute("aria-pressed", String(billing.currency==="EUR"));
      curUSD?.setAttribute("aria-pressed", String(billing.currency==="USD"));
    }
    if(billM){
      billM.classList.add("is-active");
      billM.setAttribute("aria-pressed","true");
      billA?.setAttribute("aria-pressed","false");
    }
    renderPrices();

    // Click handlers
    billM?.addEventListener("click", ()=>{
      billing.period="monthly";
      billM.classList.add("is-active"); billA?.classList.remove("is-active");
      billM.setAttribute("aria-pressed","true"); billA?.setAttribute("aria-pressed","false");
      renderPrices();
      const loc = localStorage.getItem("locale")==="es" ? L.es : L.en;
      $("#pricePer")?.textContent = loc.per_month;
    });

    billA?.addEventListener("click", ()=>{
      billing.period="annual";
      billA.classList.add("is-active"); billM?.classList.remove("is-active");
      billA.setAttribute("aria-pressed","true"); billM?.setAttribute("aria-pressed","false");
      renderPrices();
      const loc = localStorage.getItem("locale")==="es" ? L.es : L.en;
      $("#pricePer")?.textContent = loc.per_year;
    });

    curEUR?.addEventListener("click", ()=>{
      billing.currency="EUR";
      curEUR.classList.add("is-active"); curUSD?.classList.remove("is-active");
      curEUR.setAttribute("aria-pressed","true"); curUSD?.setAttribute("aria-pressed","false");
      renderPrices();
    });

    curUSD?.addEventListener("click", ()=>{
      billing.currency="USD";
      curUSD.classList.add("is-active"); curEUR?.classList.remove("is-active");
      curUSD.setAttribute("aria-pressed","true"); curEUR?.setAttribute("aria-pressed","false");
      renderPrices();
    });

    /* We no longer call initInfiniteRail(featureRail) — CSS loop handles it */
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady, { once:true });
  } else {
    onReady();
  }
  window.addEventListener("load", onReady, { once:true });
})();
