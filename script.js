<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Karol Mora!</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <header class="header">
    <h1 class="title" data-label="titulo">¡Página de Karol!</h1>

    <nav>
      <a href="#about-me" data-label="navSobreMi">Sobre mí</a>
      <a href="#proyecto-vida" data-label="navProyecto">Mi proyecto de vida</a>
    </nav>

    <div class="languages">
      <button class="lang-button" id="btn-es" type="button"
        aria-pressed="true">ES</button>
      <button class="lang-button" id="btn-en" type="button"
        aria-pressed="false">EN</button>
    </div>
  </header>

  <main>
    <section class="section" id="about-me">
      <h2 data-label="sobreMi">Sobre mí</h2>
      <p data-label="descripcion">
        Soy Karol, estoy en grado décimo. Me gusta jugar vóley,
        escuchar música y jugar Free Fire con Alex en dúo,
        haciendo unas 1500 partidas para subir a Gran Maestro.
        Me gusta comer pasta, ver frutinovelas y la clase del
        profesor Alex porque no hacemos nada. Me gusta mucho ir
        a entrenar y pasar tiempo con mis yapopois Sofía y Alex.
        No me gusta que Alex me muerda. ¡FIN!
      </p>
    </section>

    <section id="proyecto-vida" class="section">
      <h2 data-label="tituloProyecto">Mi proyecto de vida</h2>

      <p data-label="descripcionProyecto">
        En el futuro me veo siendo administradora de empresas
        con un buen sueldo.
      </p>

      <ul>
        <li data-label="meta1">Graduarme del colegio.</li>
        <li data-label="meta2">Graduarme como profesional.</li>
        <li data-label="meta3">Tener un sueldo y una vida estable.</li>
      </ul>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
