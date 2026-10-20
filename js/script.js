/**
 * script.js
 * ------------------------------------------------------------
 * Logika utama website. Data berasal dari config.js, translations.js
 * dan documents.js. Tidak ada dependensi eksternal.
 */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var CFG = window.SITE_CONFIG || {};
  var TR = window.TRANSLATIONS || {};
  var DOCS = Array.isArray(window.DOCUMENTS) ? window.DOCUMENTS : [];

  var LANG_KEY = "syfdn-lang";
  var THEME_KEY = "syfdn-theme";
  var DEFAULT_LANG = "id";

  var state = { lang: DEFAULT_LANG, filter: "all", cvAvailable: false };

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function store(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  function t(key) {
    var d = TR[state.lang] || {};
    if (d[key] !== undefined) return d[key];
    var fb = TR[DEFAULT_LANG] || {};
    return fb[key] !== undefined ? fb[key] : key;
  }

  function pick(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] || obj[DEFAULT_LANG] || "";
  }

  function el(tag, className, text) {
    var n = document.createElement(tag);
    if (className) n.className = className;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }

  function icon(id, cls) {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "icon" + (cls ? " " + cls : ""));
    svg.setAttribute("aria-hidden", "true");
    var use = document.createElementNS(ns, "use");
    use.setAttribute("href", "#" + id);
    svg.appendChild(use);
    return svg;
  }

  function isValidUrl(u) {
    return typeof u === "string" && /^https?:\/\/\S+$/i.test(u.trim());
  }
  function isValidEmail(e) {
    return typeof e === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
  }

  function reveal(node) {
    node.classList.add("reveal");
    if (observer) observer.observe(node); else node.classList.add("is-visible");
  }

  /* ---------- Reveal on scroll ---------- */
  var observer = null;
  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          observer.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
  }

  /* ---------- i18n ---------- */
  function applyStaticTranslations() {
    $$("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    $$("[data-i18n-attr]").forEach(function (n) {
      n.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length === 2) n.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });
  }

  function setLang(lang, persist) {
    if (!TR[lang]) lang = DEFAULT_LANG;
    state.lang = lang;
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    var md = $('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.description"));
    var ogLocale = $('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", lang === "en" ? "en_US" : "id_ID");

    $$(".lang-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    if (persist) store(LANG_KEY, lang);

    applyStaticTranslations();
    renderAll();
    syncMenuLabel();
  }

  /* ---------- Theme ---------- */
  function setTheme(theme, persist) {
    document.documentElement.setAttribute("data-theme", theme);
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#131216" : "#faf9f7");
    if (persist) store(THEME_KEY, theme);
  }

  /* ---------- Renderers ---------- */
  function renderHeroPortrait() {
    var img = $("#portrait-img");
    var ph = $("#portrait-placeholder");
    var photo = CFG.profile && CFG.profile.photo;
    img.alt = pick(CFG.profile && CFG.profile.photoAlt);

    function showPlaceholder() { img.hidden = true; ph.hidden = false; }
    function showPhoto() { img.hidden = false; ph.hidden = true; }

    if (!photo) { showPlaceholder(); return; }
    if (img.getAttribute("src") !== photo) img.setAttribute("src", photo);
    if (img.complete) {
      if (img.naturalWidth > 0) showPhoto(); else showPlaceholder();
    }
    img.onload = showPhoto;
    img.onerror = showPlaceholder;
  }

  var SOCIALS = [
    { key: "linkedin", name: "LinkedIn", icon: "i-linkedin" },
    { key: "instagram", name: "Instagram", icon: "i-instagram" },
    { key: "facebook", name: "Facebook", icon: "i-facebook" }
  ];

  function renderHeroSocial() {
    var ul = $("#hero-social");
    ul.textContent = "";
    ["linkedin", "instagram"].forEach(function (key) {
      var s = SOCIALS.filter(function (x) { return x.key === key; })[0];
      var url = CFG.social && CFG.social[key];
      if (!isValidUrl(url)) return;
      var li = el("li");
      var a = el("a", "text-link");
      a.href = url.trim();
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", t("social.openIn").replace("{name}", s.name));
      a.appendChild(icon(s.icon));
      a.appendChild(el("span", "", s.name));
      li.appendChild(a);
      ul.appendChild(li);
    });
    ul.hidden = ul.children.length === 0;
  }

  function renderExperience() {
    var list = $("#experience-list");
    list.textContent = "";
    (CFG.experience || []).forEach(function (job, i) {
      var li = el("li", "timeline-item");
      li.appendChild(el("span", "timeline-marker"));
      li.lastChild.setAttribute("aria-hidden", "true");

      var card = el("article", "card exp-card");
      var head = el("header", "exp-head");
      var left = el("div");
      left.appendChild(el("h3", "", pick(job.position)));
      left.appendChild(el("p", "exp-company", job.company || ""));
      head.appendChild(left);

      var right = el("div");
      var period = pick(job.period);
      var p = el("p", "exp-period" + (period ? "" : " is-placeholder"), period || t("exp.periodPlaceholder"));
      right.appendChild(p);
      if (i === 0) right.appendChild(el("span", "badge", t("exp.current")));
      head.appendChild(right);
      card.appendChild(head);

      card.appendChild(el("h4", "exp-sub", t("exp.responsibilities")));
      var ul = el("ul", "resp-list");
      (job.responsibilities || []).forEach(function (r) { ul.appendChild(el("li", "", pick(r))); });
      card.appendChild(ul);

      li.appendChild(card);
      reveal(li);
      list.appendChild(li);
    });
  }

  function renderSkills() {
    var grid = $("#skills-grid");
    grid.textContent = "";
    (CFG.skills || []).forEach(function (cat) {
      var card = el("article", "card skill-card");
      card.appendChild(el("h3", "", pick(cat.title)));
      var ul = el("ul", "tag-list");
      (cat.items || []).forEach(function (it) { ul.appendChild(el("li", "", pick(it))); });
      card.appendChild(ul);
      reveal(card);
      grid.appendChild(card);
    });
  }

  /* Documents */
  function fileExt(path) {
    var m = /\.([a-z0-9]+)(?:[?#].*)?$/i.exec(path || "");
    return m ? m[1].toLowerCase() : "";
  }
  function docType(d) {
    if (d.type) return d.type;
    var e = fileExt(d.file);
    if (e === "pdf") return "pdf";
    if (e === "jpg" || e === "jpeg" || e === "png") return "image";
    if (e === "doc" || e === "docx") return "word";
    return "other";
  }
  function formatDate(s) {
    if (!s) return "";
    var m = /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(String(s));
    if (!m) return String(s);
    var locale = state.lang === "en" ? "en-US" : "id-ID";
    var y = +m[1], mo = m[2] ? +m[2] - 1 : null, d = m[3] ? +m[3] : null;
    try {
      if (mo === null) return String(y);
      if (d === null) return new Date(y, mo, 1).toLocaleDateString(locale, { year: "numeric", month: "long" });
      return new Date(y, mo, d).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
    } catch (e) { return String(s); }
  }

  function makeThumb(d, type) {
    var wrap = el("div", "doc-thumb");
    var src = type === "image" ? d.file : d.thumbnail;

    function fallback() {
      wrap.textContent = "";
      var fb = el("div", "doc-thumb-fallback");
      fb.appendChild(icon(type === "image" ? "i-image" : "i-file"));
      var ext = fileExt(d.file).toUpperCase();
      if (ext) fb.appendChild(el("span", "doc-ext", ext));
      wrap.appendChild(fb);
    }

    if (src) {
      var img = el("img");
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = t("cert.preview") + ": " + pick(d.title);
      img.addEventListener("error", fallback);
      img.src = src;
      wrap.appendChild(img);
    } else {
      fallback();
    }
    return wrap;
  }

  function makeDocCard(d) {
    var type = docType(d);
    var card = el("article", "doc-card");
    card.appendChild(makeThumb(d, type));

    var body = el("div", "doc-body");
    body.appendChild(el("span", "doc-cat", t("cert.cat." + d.category)));
    body.appendChild(el("h3", "", pick(d.title)));
    var date = formatDate(d.date);
    if (date) body.appendChild(el("p", "doc-date", date));
    var desc = pick(d.description);
    if (desc) body.appendChild(el("p", "doc-desc", desc));
    card.appendChild(body);

    var actions = el("div", "doc-actions");
    var view = el("a", "btn btn-primary");
    view.href = d.file;
    view.target = "_blank";
    view.rel = "noopener noreferrer";
    view.appendChild(icon(type === "word" ? "i-external" : "i-eye"));
    view.appendChild(el("span", "", type === "word" ? t("cert.openWord") : (type === "pdf" ? t("cert.openNewTab") : t("cert.view"))));
    actions.appendChild(view);

    var dl = el("a", "btn btn-secondary");
    dl.href = d.file;
    dl.setAttribute("download", "");
    dl.appendChild(icon("i-download"));
    dl.appendChild(el("span", "", t("cert.download")));
    actions.appendChild(dl);
    card.appendChild(actions);

    reveal(card);
    return card;
  }

  function renderDocs() {
    var grid = $("#docs-grid");
    var empty = $("#docs-empty");
    grid.textContent = "";

    var valid = DOCS.filter(function (d) { return d && d.file && d.category; });
    var list = state.filter === "all" ? valid : valid.filter(function (d) { return d.category === state.filter; });

    if (!list.length) {
      var none = valid.length === 0;
      $("#docs-empty-title").textContent = t(none ? "cert.empty.title" : "cert.emptyFilter.title");
      $("#docs-empty-text").textContent = t(none ? "cert.empty.text" : "cert.emptyFilter.text");
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    list.forEach(function (d) { grid.appendChild(makeDocCard(d)); });
  }

  function setupFilters() {
    var wrap = $("#doc-filters");
    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      state.filter = btn.getAttribute("data-filter");
      $$(".chip", wrap).forEach(function (c) {
        var on = c === btn;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-pressed", String(on));
      });
      renderDocs();
    });
  }

  /* CV */
  function checkCv() {
    var cv = CFG.cv || {};
    if (!cv.path) { state.cvAvailable = false; applyCv(); return; }
    // Memeriksa keberadaan file. Pada file:// browser memblokir fetch, jadi dicoba via HEAD lalu fallback.
    var done = false;
    function finish(ok) { if (done) return; done = true; state.cvAvailable = ok; applyCv(); }
    if (window.location.protocol === "file:") {
      // Tidak dapat diverifikasi secara andal dari file://; anggap tersedia agar bisa dicoba dibuka.
      finish(true);
      return;
    }
    fetch(cv.path, { method: "HEAD", cache: "no-store" })
      .then(function (r) {
        var type = r.headers.get("content-type") || "";
        finish(r.ok && type.indexOf("text/html") === -1);
      })
      .catch(function () { finish(false); });
  }

  function applyCv() {
    var cv = CFG.cv || {};
    var ok = state.cvAvailable;
    var actions = $("#cv-actions");
    var missing = $("#cv-missing");
    actions.hidden = !ok;
    missing.hidden = ok;

    if (ok) {
      $("#cv-view").href = cv.path;
      var dl = $("#cv-download");
      dl.href = cv.path;
      dl.setAttribute("download", cv.downloadName || "");
    }

    // Tombol CV di hero
    var heroBtn = $("[data-cv-download]");
    var label = heroBtn.querySelector("span");
    if (ok) {
      heroBtn.href = cv.path;
      heroBtn.setAttribute("download", cv.downloadName || "");
      heroBtn.removeAttribute("aria-disabled");
      heroBtn.classList.remove("is-disabled");
      label.textContent = t("hero.ctaCv");
    } else {
      heroBtn.href = "#cv";
      heroBtn.removeAttribute("download");
      heroBtn.removeAttribute("aria-disabled");
      heroBtn.classList.remove("is-disabled");
      label.textContent = t("hero.cvUnavailable");
    }
  }

  /* Social */
  function renderSocial() {
    var ul = $("#social-grid");
    ul.textContent = "";
    SOCIALS.forEach(function (s) {
      var url = CFG.social && CFG.social[s.key];
      var li = el("li");
      var node;
      if (isValidUrl(url)) {
        node = el("a", "social-link");
        node.href = url.trim();
        node.target = "_blank";
        node.rel = "noopener noreferrer";
        node.setAttribute("aria-label", t("social.openIn").replace("{name}", s.name));
      } else {
        node = el("div", "social-link is-disabled");
      }
      node.appendChild(icon(s.icon));
      node.appendChild(el("span", "social-name", s.name));
      if (isValidUrl(url)) {
        node.appendChild(icon("i-external"));
        node.lastChild.style.marginLeft = "auto";
      } else {
        node.appendChild(el("span", "social-status", t("social.unavailable")));
      }
      li.appendChild(node);
      reveal(li);
      ul.appendChild(li);
    });
  }

  /* Contact */
  function renderContact() {
    var email = (CFG.email || "").trim();
    var ok = isValidEmail(email);
    var text = $("#contact-email-text");
    var me = $("#contact-me");
    var send = $("#send-email");
    var gmail = $("#open-gmail");
    var note = $("#contact-note");

    if (!ok) {
      text.textContent = t("contact.emailMissing");
      text.className = "is-placeholder";
      [me, send, gmail].forEach(function (a) {
        a.setAttribute("aria-disabled", "true");
        a.classList.add("is-disabled");
        a.setAttribute("tabindex", "-1");
        a.removeAttribute("href");
      });
      note.textContent = t("contact.emailUnavailable");
      return;
    }

    var tpl = (CFG.emailTemplate && (CFG.emailTemplate[state.lang] || CFG.emailTemplate[DEFAULT_LANG])) || { subject: "", body: "" };
    var subject = encodeURIComponent(tpl.subject || "");
    var body = encodeURIComponent(tpl.body || "");
    var mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email) +
      "&su=" + subject + "&body=" + body;

    text.textContent = email;
    text.className = "";
    [me, send, gmail].forEach(function (a) {
      a.removeAttribute("aria-disabled");
      a.classList.remove("is-disabled");
      a.removeAttribute("tabindex");
    });
    me.href = mailto;
    send.href = mailto;
    gmail.href = gmailUrl;
    note.textContent = t("contact.note");
  }

  function renderAll() {
    renderHeroPortrait();
    renderHeroSocial();
    renderExperience();
    renderSkills();
    renderDocs();
    applyCv();
    renderSocial();
    renderContact();
  }

  /* ---------- Navigation ---------- */
  var navToggle = $("#nav-toggle");
  var navLinks = $("#nav-links");

  function syncMenuLabel() {
    var open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", t(open ? "nav.menuClose" : "nav.menu"));
  }
  function setMenu(open) {
    navToggle.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("is-open", open);
    syncMenuLabel();
  }

  function setupNav() {
    navToggle.addEventListener("click", function () {
      setMenu(navToggle.getAttribute("aria-expanded") !== "true");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        navToggle.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (navToggle.getAttribute("aria-expanded") === "true" &&
          !e.target.closest(".site-header")) setMenu(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 960) setMenu(false);
    });

    // Active section
    var links = {};
    $$("[data-nav]").forEach(function (a) { links[a.getAttribute("data-nav")] = a; });
    var sections = Object.keys(links).map(function (id) { return document.getElementById(id); }).filter(Boolean);

    function updateActive() {
      var y = window.scrollY + 120;
      var current = null;
      sections.forEach(function (s) { if (s.offsetTop <= y) current = s.id; });
      Object.keys(links).forEach(function (id) {
        var on = id === current;
        links[id].classList.toggle("is-active", on);
        if (on) links[id].setAttribute("aria-current", "true"); else links[id].removeAttribute("aria-current");
      });
    }

    var toTop = $("#to-top");
    function onScroll() {
      updateActive();
      toTop.hidden = window.scrollY < 600;
    }
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { onScroll(); ticking = false; });
    }, { passive: true });
    onScroll();

    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Init ---------- */
  function init() {
    $("#year").textContent = String(new Date().getFullYear());

    // Tema
    setTheme(document.documentElement.getAttribute("data-theme") || "light", false);
    $("#theme-toggle").addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next, true);
    });

    // Bahasa
    $$(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang"), true); });
    });

    setupFilters();
    setupNav();

    var savedLang = load(LANG_KEY);
    setLang(TR[savedLang] ? savedLang : DEFAULT_LANG, false);
    checkCv();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
