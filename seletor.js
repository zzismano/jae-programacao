const filme = document.getElementById('filme')
const musica = document.getElementById('musica')
const teatro = document.getElementById('teatro')
const evento = document.getElementById('evento')
const expo = document.getElementById('expo')
const ideias = document.getElementById('ideias')
const livros = document.getElementById('livros')
const mais = document.getElementById('mais')

const categorias = [filme, musica, teatro, mais, evento, expo, ideias, livros]


categorias.forEach((categoria) => {
  categoria.addEventListener("click", (event)=> {
    var bgColor = event.currentTarget.style.backgroundColor
    var color = event.currentTarget.style.color
    var conteudo = document.getElementById(`conteudo-${categoria.id}`)
    if (event.currentTarget.style.color === 'white' ) {
      event.currentTarget.style.backgroundColor = 'white';
      event.currentTarget.style.color = bgColor;
    };

    var copia = categorias.slice()
    copia.splice(categorias.indexOf(event.currentTarget), 1)

    copia.forEach((elemento) => {
      if (elemento.style.backgroundColor === "white") {
        elemento.style.backgroundColor = elemento.style.color;
        elemento.style.color = "white"
      };


    });


    conteudo.classList.remove('d-none')

    copia.forEach((elemento) => {
      var conteudoCopia = document.getElementById(`conteudo-${elemento.id}`)
      if (!conteudoCopia.classList.contains('d-none')) {
        conteudoCopia.classList.add('d-none')
      };
    });

  });
});
