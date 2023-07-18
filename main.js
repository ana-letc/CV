fetch("https://ana-letc.github.io/CV/projetos.json")
  .then(response => response.json()).then(json => console.log(json));