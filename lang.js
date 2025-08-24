/* i18n + UI behaviors for Neon Swipe
   - Keeps hero video still while device floats (CSS)
   - Infinite auto-scroll for "What you can do" (pause on hover/focus/drag)
   - Lightweight helpers (currency toggle, year injection is in HTML)
*/

(function(){
  "use strict";

  /* -------------------------------------------------------
   * i18n (very small helper; demo strings inline)
   * ----------------------------------------------------- */
  const LOCALE = (navigator.language || "en").slice(0,2);
  const STR = {
    en:{
      nav_features:"Features",
      nav_faq:"FAQ",
      nav_privacy:"Privacy",
      h_title:"Delete blurry photos in seconds.",
      h_sub:"Swipe through screenshots and duplicates. Keep the good stuff. Free up space — fast.",
      do_queue:"See your queue & progress at a glance",
      do_sort:"Sort by screenshots, duplicates, or date",
      do_safe:"Fast, safe cleanup — with clear progress and full control.",
      cta_features:"See what you can do",
      cta_privacy:"How your data stays yours",
      feat_title:"What you can do",
      feat_sub:"A focused tool to breeze through the messy bits — screenshots, dupes, bursts, dark shots.",
      f_start_t:"Start or continue a session",
      f_start_d:"Pick up where you left off, with your queue and progress saved.",
      f_screens_t:"Sweep screenshots",
      f_screens_d:"Slice through years of screenshots in minutes.",
      f_dupes_t:"Catch duplicates",
      f_dupes_d:"See near-duplicates side by side and keep only the best.",
      f_dark_t:"Hide the dark ones",
      f_dark_d:"Filter out accidental pocket shots and underexposed pics.",
      faq_title:"Questions, answered",
      q_privacy:"Does Neon Swipe upload my photos?",
      a_privacy:"No. Everything runs on-device. We don’t see your library.",
      q_delete:"Can I undo deletions?",
      a_delete:"Items go to your system Trash/Recently Deleted — you have time to restore."
    },
    es:{
      nav_features:"Funciones",
      nav_faq:"FAQ",
      nav_privacy:"Privacidad",
      h_title:"Elimina fotos borrosas en segundos.",
      h_sub:"Pasa por capturas y duplicados. Quédate con lo bueno. Libera espacio — rápido.",
      do_queue:"Ve tu cola y progreso de un vistazo",
      do_sort:"Ordena por capturas, duplicados o fecha",
      do_safe:"Limpieza rápida y segura — con progreso y control total.",
      cta_features:"Lo que puedes hacer",
      cta_privacy:"Cómo protegemos tus datos",
      feat_title:"Qué puedes hacer",
      feat_sub:"Una herramienta enfocada para limpiar lo pesado — capturas, duplicados, ráfagas, fotos oscuras.",
      f_start_t:"Inicia o continúa una sesión",
      f_start_d:"Sigue donde lo dejaste, con cola y progreso guardados.",
      f_screens_t:"Limpia capturas",
      f_screens_d:"Años de capturas en minutos.",
      f_dupes_t:"Caza duplicados",
      f_dupes_d:"Mira casi duplicados y quédate con lo mejor.",
      f_dark_t:"Oculta las oscuras",
      f_dark_d:"Filtra fotos de bolsillo y subexpuestas.",
      faq_title:"Preguntas frecuentes",
      q_privacy:"¿Se suben mis fotos?",
      a_privacy:"No. Todo funciona en el dispositivo. No vemos tu biblioteca.",
      q_delete:"¿Puedo deshacer?",
      a_delete:"Los elementos van a Eliminados recientemente; puedes restaurarlos."
    }
  };

  function i18nApply(){
    const dict = STR[LOCALE] || STR.en;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(dict[key]) el.textContent = dict[key];
    });
  }

  /* -------------------------------------------------------
   * Utilities
   * ----------------------------------------------------- */
  const $ = sel => document.querySelector(sel);

  /* -------------------------------------------------------
   * Counters / demo only (can be removed)
   * ----------------------------------------------------- */
  function counter(el, target = 100, dur = 900){
    if(!el) return;
    let k = 0, t0;
    function tick(ts){
      if(!t0) t0 = ts;
      k = Math.min(1, (ts - t0) / dur);
      el.textContent = Math.round(target * k).toLocaleString();
      if(k < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* -------------------------------------------------------
   * Infinite auto-scroll rail (dup children), pause on hover/focus/drag
   * ----------------------------------------------------- */
  function initInfiniteRail(rail){
    if(!rail) return;

    // Duplicate children to create a seamless loop
    rail.innerHTML += rail.innerHTML;

    let paused = false;
    let speed = 0.28; // px per frame-ish; tweak to taste
    let rafId;

    function step(){
      if(!paused){
        rail.scrollLeft += speed;
        // when we've scrolled through the original set, jump back
        if(rail.scrollLeft >= rail.scrollWidth / 2){
          rail.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    }
    rafId = requestAnimationFrame(step);

    // Pause when hovering, focusing with keyboard, or dragging
    ["mouseenter","focusin","pointerdown"].forEach(ev =>
      rail.addEventListener(ev, () => paused = true)
    );
    ["mouseleave","focusout","pointerup","pointercancel"].forEach(ev =>
      rail.addEventListener(ev, () => paused = false)
    );

    // Allow manual drag to read
    let isDown = false, startX = 0, startLeft = 0;
    rail.addEventListener("pointerdown", e => {
      isDown = true;
      rail.setPointerCapture?.(e.pointerId);
      startX = e.clientX;
      startLeft = rail.scrollLeft;
    });
    rail.addEventListener("pointermove", e => {
      if(isDown){
        rail.scrollLeft = startLeft - (e.clientX - startX);
      }
    });
    ["pointerup","pointercancel","pointerleave"].forEach(ev =>
      rail.addEventListener(ev, () => { isDown = false; })
    );
  }

  /* -------------------------------------------------------
   * Boot
   * ----------------------------------------------------- */
  window.addEventListener("DOMContentLoaded", () => {
    i18nApply();

    // (Video is already still via CSS .iphone-video { animation:none })
    // Nothing else needed for the hero — the device bobbing is on .smooth-float

    // Features auto-loop (home only)
    initInfiniteRail(document.getElementById("featureRail"));

    // Example counters (optional)
    counter(document.getElementById("statCleaned"), 120_000, 1200);
    counter(document.getElementById("statUsers"), 24_000, 1000);
  });

  // Currency demo toggle (optional, harmless if elements don't exist)
  const curUSD = document.getElementById("curUSD");
  const curEUR = document.getElementById("curEUR");
  const priceEls = document.querySelectorAll("[data-price]");
  let billing = { currency:"EUR", usd:2.99, eur:2.49 };
  function renderPrices(){
    priceEls.forEach(el=>{
      const val = (billing.currency==="USD"? billing.usd : billing.eur);
      el.textContent = new Intl.NumberFormat(undefined, {style:"currency", currency: billing.currency}).format(val);
    });
  }
  curUSD?.addEventListener("click", ()=>{ billing.currency="USD"; curUSD.classList.add("is-active"); curEUR?.classList.remove("is-active"); renderPrices(); });
  curEUR?.addEventListener("click", ()=>{ billing.currency="EUR"; curEUR.classList.add("is-active"); curUSD?.classList.remove("is-active"); renderPrices(); });

  // initial render if those controls exist
  renderPrices();

})();
