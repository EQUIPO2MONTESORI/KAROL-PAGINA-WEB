
const traducciones = {
  es: {
    titulo: "¡Página de Karol!",
    navSobreMi: "Sobre mí",
    navProyecto: "Mi proyecto de vida",
    sobreMi: "Sobre mí",
    descripcion: "Soy Karol, estoy en grado décimo. Me gusta jugar vóley, escuchar música y jugar Free Fire con Alex en dúo, haciendo unas 1500 partidas para subir a Gran Maestro. Me gusta comer pasta, ver frutinovelas y la clase del profesor Alex porque no hacemos nada. Me gusta mucho ir a entrenar y pasar tiempo con mis yapopois Sofía y Alex. No me gusta que Alex me muerda. ¡FIN!",
    tituloProyecto: "Mi proyecto de vida",
    descripcionProyecto: "En el futuro me veo siendo administradora de empresas con un buen sueldo.",
    meta1: "Graduarme del colegio.",
    meta2: "Graduarme como profesional.",
    meta3: "Tener un sueldo y una vida estable."
  },

  en: {
    titulo: "Karol's Page!",
    navSobreMi: "About Me",
    navProyecto: "My Life Plan",
    sobreMi: "About Me",
    descripcion: "I'm Karol, and I'm in tenth grade. I like playing volleyball, listening to music, and playing Free Fire in duo mode with Alex. We play around 1,500 matches to reach Grandmaster. I like eating pasta, watching drama series, and attending Professor Alex's class because we don't do anything. I really enjoy going to training and spending time with my yapopois, Sofia and Alex. I don't like it when Alex bites me. THE END!",
    tituloProyecto: "My Life Plan",
    descripcionProyecto: "In the future, I see myself working as a business administrator with a good salary.",
    meta1: "Graduate from high school.",
    meta2: "Graduate from university.",
    meta3: "Have a good salary and a stable life."
  }
};

function cambiarIdioma(idioma) {
  const textos = traducciones[idioma];

  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-label]").forEach(elemento => {
    const etiqueta = elemento.dataset.label;

    if (textos[etiqueta]) {
      elemento.textContent = textos[etiqueta];
    }
  });

  document.getElementById("btn-es").setAttribute(
    "aria-pressed",
    idioma === "es"
  );

  document.getElementById("btn-en").setAttribute(
    "aria-pressed",
    idioma === "en"
  );
}

document.getElementById("btn-es").addEventListener("click", () => {
  cambiarIdioma("es");
});

document.getElementById("btn-en").addEventListener("click", () => {
  cambiarIdioma("en");
});

// Mostrar la página en español al comenzar
cambiarIdioma("es");
