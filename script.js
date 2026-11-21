(function () {
  "use strict";

  var cfg = window.SUMMIT_CONFIG || {};
  var mails = window.SUMMIT_MAILS || {};

  // --- Links: a configured URL, otherwise a prepared mail --------------------
  function mailto(key) {
    var m = mails[key] || ["Mensa Summit 2027", ""];
    var q = "subject=" + encodeURIComponent(m[0]);
    if (m[1]) q += "&body=" + encodeURIComponent(m[1]);
    return "mailto:" + (cfg.contactMail || "") + "?" + q;
  }

  document.querySelectorAll("[data-link]").forEach(function (a) {
    var key = a.getAttribute("data-link");
    // Nav and hero buttons point at the signup section unless a form exists.
    var inPageFallback = a.getAttribute("href") === "#anmelden";
    var url = key === "contactMail" ? "" : cfg[key];
    if (url) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
    } else if (!inPageFallback) {
      a.href = mailto(key);
    }
  });

  document.querySelectorAll("[data-label]").forEach(function (el) {
    var v = cfg[el.getAttribute("data-label")];
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-text]").forEach(function (el) {
    var v = cfg[el.getAttribute("data-text")];
    if (v) el.textContent = v;
  });

  // --- Countdown --------------------------------------------------------------
  var cd = document.querySelector(".countdown");
  if (cd) {
    var target = new Date(cd.getAttribute("data-target")).getTime();
    var out = {
      d: cd.querySelector('[data-unit="d"]'),
      h: cd.querySelector('[data-unit="h"]'),
      m: cd.querySelector('[data-unit="m"]'),
    };
    var tick = function () {
      var diff = target - Date.now();
      if (diff <= 0) {
        cd.innerHTML = '<p class="countdown-live">Der Summit läuft! 🎉</p>';
        return false;
      }
      var mins = Math.floor(diff / 60000);
      out.d.textContent = Math.floor(mins / 1440);
      out.h.textContent = Math.floor((mins % 1440) / 60);
      out.m.textContent = mins % 60;
      return true;
    };
    if (tick()) setInterval(tick, 30000);
  }

  // --- Mobile nav ------------------------------------------------------------
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Reveal on scroll -------------------------------------------------------
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".section > *, .fact-grid li").forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }
})();
