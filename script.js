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

  // --- Next orga meeting: the first one in config.js that has not ended yet ----
  var om = document.querySelector("[data-orga-meeting]");
  if (om && Array.isArray(cfg.orgaMeetings)) {
    var now = Date.now();
    var next = cfg.orgaMeetings.filter(function (m) {
      return new Date(m.date).getTime() + 2 * 3600 * 1000 > now;
    })[0];
    om.textContent = next ? next.label : (cfg.orgaMeetingFallback || "Termin folgt auf Instagram");
  }

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

  // --- Share: the phone's share sheet, else copy the link ----------------------
  var toast = document.querySelector(".toast");
  var toastTimer;
  function say(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2600);
  }
  var shareUrl = cfg.siteUrl || location.href.split("#")[0];
  var shareText = "Mensa Summit 2027, 14. & 15. Mai in Konstanz: der bundesweite studentische Treffpunkt für nachhaltige Mensen. Sei dabei :)";
  document.querySelectorAll("[data-share]").forEach(function (b) {
    b.addEventListener("click", function () {
      if (navigator.share) {
        navigator.share({ title: "Mensa Summit 2027", text: shareText, url: shareUrl }).catch(function () {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText + " " + shareUrl).then(function () {
          say("Link kopiert. Ab damit in eure Gruppe!");
        }, function () { window.open("https://wa.me/?text=" + encodeURIComponent(shareText + " " + shareUrl), "_blank"); });
      } else {
        window.open("https://wa.me/?text=" + encodeURIComponent(shareText + " " + shareUrl), "_blank");
      }
    });
  });

  // --- Phones: bottom bar once the hero is gone, hidden at the signup ----------
  var bar = document.querySelector(".mobile-bar");
  var hero = document.querySelector(".hero");
  var signup = document.getElementById("anmelden");
  if (bar && hero && signup) {
    var update = function () {
      var vh = window.innerHeight;
      var heroGone = hero.getBoundingClientRect().bottom < 0;
      var s = signup.getBoundingClientRect();
      var atSignup = s.top < vh && s.bottom > 0;
      bar.classList.toggle("show", heroGone && !atSignup);
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
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
    document.querySelectorAll(".section > *:not(.deco):not(.eyebrow), .fact-grid li").forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }
})();
