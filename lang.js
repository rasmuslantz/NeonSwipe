const L = {
  en:{
    nav_features:"Features",
    nav_support:"Support",
    kicker:"Photo cleaner • iOS & Android",
    h1:"Clean photos with a swipe.",
    sub:"Keep your best shots and delete the rest—duplicates, screenshots, bursts & blurry pics.",
    get_ios:"Get on the App Store",
    get_android:"Get on Google Play",
    note:"Store links coming soon.",
    feat_kicker:"Why you’ll love it",
    f1_t:"Swipe to keep/delete", f1_d:"Lightning-fast triage that makes cleanup fun.",
    f2_t:"Smart queues", f2_d:"Duplicates & similars, screenshots, bursts, and blurry shots.",
    f3_t:"Review & Undo", f3_d:"Confirm before trash—your memories stay safe.",
    f4_t:"Space meter", f4_d:"Watch MB/GB freed climb in real time.",
    how_k:"How it works",
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
  es:{
    nav_features:"Funciones",
    nav_support:"Soporte",
    kicker:"Limpieza de fotos • iOS y Android",
    h1:"Limpia tus fotos con un swipe.",
    sub:"Conserva lo mejor y borra el resto—duplicados, capturas, ráfagas y borrosas.",
    get_ios:"Descárgalo en App Store",
    get_android:"Disponible en Google Play",
    note:"Enlaces de tienda próximamente.",
    feat_kicker:"Por qué te encantará",
    f1_t:"Desliza para conservar/borrar", f1_d:"Triage rapidísimo que hace la limpieza divertida.",
    f2_t:"Colas inteligentes", f2_d:"Duplicados y similares, capturas, ráfagas y borrosas.",
    f3_t:"Revisión y Deshacer", f3_d:"Confirma antes de borrar: tus recuerdos, a salvo.",
    f4_t:"Medidor de espacio", f4_d:"Mira subir los MB/GB liberados en tiempo real.",
    how_k:"Cómo funciona",
    h_t1:"1) Abre y permite acceso a Fotos", h_d1:"No tocamos tu nube: todo se hace en el dispositivo.",
    h_t2:"2) Desliza derecha/izquierda", h_d2:"Derecha para conservar, izquierda para borrar.",
    h_t3:"3) Revisa y recupera espacio", h_d3:"Vacía “Eliminado recientemente” para liberar espacio al instante.",
    footer_support:"Soporte", footer_privacy:"Privacidad",
    // Support
    nav_home:"Inicio",
    s_title:"Soporte",
    s_intro:"Estamos para ayudarte. Escríbenos y responderemos en 1–2 días laborables.",
    sq1_t:"¿Sin acceso a Fotos?",sq1_d:"iOS: Ajustes → Privacidad y seguridad → Fotos → Neon Swipe → “Todas las fotos”.",
    sq2_t:"¿Deshacer un borrado?",sq2_d:"Fotos → Álbumes → Eliminado recientemente (≈30 días).",
    sq3_t:"¿El espacio no cambia?",sq3_d:"Después de limpiar, vacía “Eliminado recientemente” para recuperar espacio.",
    sq4_t:"Restaurar compras",sq4_d:"Neon Swipe → Ajustes → Restaurar compras.",
    s_priv:"Neon Swipe procesa tus fotos en el dispositivo. Consulta la política de privacidad en App Store."
  }
};

function setLocale(loc){
  const dict = L[loc] || L.en;
  document.querySelectorAll("[data-i18n]").forEach(el=>{ const k=el.dataset.i18n; if(dict[k]!==undefined){ el.innerHTML=dict[k]; } });
  const enBtn = document.getElementById("lang-en"); if(enBtn) enBtn.setAttribute("aria-pressed", loc==="en");
  const esBtn = document.getElementById("lang-es"); if(esBtn) esBtn.setAttribute("aria-pressed", loc==="es");
  localStorage.setItem("locale", loc);
}

(function init(){
  const guess = localStorage.getItem("locale") || (navigator.language||"en").toLowerCase().startsWith("es") ? "es" : "en";
  setLocale(guess);

  const en = document.getElementById("lang-en"), es = document.getElementById("lang-es");
  if(en) en.addEventListener("click", ()=>setLocale("en"));
  if(es) es.addEventListener("click", ()=>setLocale("es"));

  const y = document.getElementById("year"); if(y) y.textContent = new Date().getFullYear();

  // Optional: prioritize the likely store button based on platform
  const isIOS = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
  const iosBtn = document.getElementById("btn-ios");
  const andBtn = document.getElementById("btn-android");
  if(isIOS && iosBtn && andBtn){ iosBtn.classList.remove("ghost"); andBtn.classList.add("ghost"); }
  if(!isIOS && iosBtn && andBtn){ iosBtn.classList.add("ghost"); andBtn.classList.remove("ghost"); }

  // TODO: set your real store links here
  if(iosBtn) iosBtn.href = "#";
  if(andBtn) andBtn.href = "#";
})();