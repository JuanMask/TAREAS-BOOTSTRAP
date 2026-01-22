/* CONTADOR DE VISITAS */
let visitas = localStorage.getItem("visitasConciertos");

if (!visitas) {
  visitas = 1;
} else {
  visitas = parseInt(visitas) + 1;
}

localStorage.setItem("visitasConciertos", visitas);

document.getElementById("visitas").textContent =
  `Has visitado esta página ${visitas} veces`;

/* MODO OSCURO */
const body = document.getElementById("page");
const btn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

btn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
