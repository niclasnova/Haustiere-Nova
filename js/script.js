document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[data-demo-form]");
  const out = document.querySelector("#form-output");
  if(!form || !out) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("[name='name']").value.trim();
    const pet  = form.querySelector("[name='pet']").value;
    out.textContent = `Danke, ${name || "du"}! Dein Formular wurde lokal getestet (keine echte Übertragung). Lieblings-Haustier: ${pet}.`;
    out.classList.add("notice");
    out.scrollIntoView({behavior:"smooth", block:"nearest"});
    form.reset();
  });
});
