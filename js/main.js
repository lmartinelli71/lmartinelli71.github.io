(function () {
  const body = document.body;
  const btnES = document.getElementById("btnES");
  const btnEN = document.getElementById("btnEN");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  function setLang(lang) {
    body.classList.toggle("show-es", lang === "es");
    body.classList.toggle("show-en", lang === "en");
    btnES && btnES.classList.toggle("active", lang === "es");
    btnEN && btnEN.classList.toggle("active", lang === "en");
    try { localStorage.setItem("lang", lang); } catch (_) {}
  }

  const saved = (() => {
    try { return localStorage.getItem("lang"); } catch (_) { return null; }
  })();

  setLang(saved || "en");

  btnES && btnES.addEventListener("click", () => setLang("es"));
  btnEN && btnEN.addEventListener("click", () => setLang("en"));
})();
