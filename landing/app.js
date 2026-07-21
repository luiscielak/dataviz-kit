/* Dataviz Kit landing — theme/palette control + Kit form enhancement. */
(function () {
  "use strict";

  var root = document.documentElement;
  var PALETTES = ["hl", "atelier", "courage", "minimal", "blueprint"];
  var LABELS = {
    hl: "HL",
    atelier: "Atelier",
    courage: "Courage",
    minimal: "Minimal",
    blueprint: "Blueprint",
  };

  function store(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {}
  }

  /* --- Theme (light / dark) --- */
  var themeBtn = document.getElementById("theme-toggle");

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit) return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    store("dvk-theme", theme);
    if (themeBtn) themeBtn.setAttribute("aria-pressed", String(theme === "dark"));
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  /* --- Palette --- */
  var paletteBtn = document.getElementById("palette-toggle");
  var paletteName = document.getElementById("palette-name");
  var swatches = Array.prototype.slice.call(
    document.querySelectorAll(".swatch[data-palette]")
  );

  function currentPalette() {
    return root.getAttribute("data-palette") || "hl";
  }

  function setPalette(p) {
    if (PALETTES.indexOf(p) === -1) p = "hl";
    root.setAttribute("data-palette", p);
    store("dvk-palette", p);
    if (paletteName) paletteName.textContent = LABELS[p];
    swatches.forEach(function (s) {
      s.setAttribute(
        "aria-pressed",
        String(s.getAttribute("data-palette") === p)
      );
    });
  }

  if (paletteBtn) {
    paletteBtn.addEventListener("click", function () {
      var idx = PALETTES.indexOf(currentPalette());
      setPalette(PALETTES[(idx + 1) % PALETTES.length]);
    });
  }

  swatches.forEach(function (s) {
    s.addEventListener("click", function () {
      setPalette(s.getAttribute("data-palette"));
    });
  });

  // Sync UI to whatever the pre-paint script already applied.
  setPalette(currentPalette());
  if (themeBtn) themeBtn.setAttribute("aria-pressed", String(currentTheme() === "dark"));

  /* --- Footer year --- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* --- Kit (ConvertKit) form --- */
  var form = document.getElementById("kit-form");
  var status = document.getElementById("form-status");
  var REPO_URL = "https://github.com/luiscielak/dataviz-kit";

  function say(msg, state) {
    if (!status) return;
    status.textContent = msg;
    status.setAttribute("data-state", state || "");
  }

  if (form) {
    var action = form.getAttribute("data-kit-action") || "";
    var configured = action.indexOf("REPLACE_WITH_FORM_ID") === -1 && action !== "";

    form.addEventListener("submit", function (e) {
      // Not wired to a real Kit form yet: don't lose the lead — send them to the repo.
      if (!configured) {
        e.preventDefault();
        say("Kit isn't connected yet — taking you to the repo…", "ok");
        window.setTimeout(function () {
          window.open(REPO_URL, "_blank", "noopener");
        }, 600);
        return;
      }

      // Progressive enhancement: submit to Kit via fetch, fall back to normal POST.
      if (!window.fetch) return; // let the native form POST proceed
      e.preventDefault();
      var data = new FormData(form);
      say("Sending…", "");
      form.querySelector("button[type=submit]").disabled = true;

      fetch(action, {
        method: "POST",
        body: data,
        headers: { accept: "application/json" },
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          return res.json().catch(function () {
            return {};
          });
        })
        .then(function () {
          form.reset();
          say("Check your inbox — the kit is on its way.", "ok");
        })
        .catch(function () {
          say(
            "Something went wrong. Grab it directly at github.com/luiscielak/dataviz-kit",
            "err"
          );
        })
        .finally(function () {
          var btn = form.querySelector("button[type=submit]");
          if (btn) btn.disabled = false;
        });
    });
  }
})();
