const filme = document.getElementById('filme')
const musica = document.getElementById('musica')
const teatro = document.getElementById('teatro')
const evento = document.getElementById('evento')
const expo = document.getElementById('expo')
const mais = document.getElementById('mais')
const logo = document.querySelector('.navbar-brand')
const conteudoHome = document.getElementById('conteudo-home')
const categorias = [filme, musica, teatro, mais, evento, expo]

logo.addEventListener("click", (event)=> {

  conteudoHome.classList.remove("d-none")
  categorias.forEach((categoria) => {
    var bgColor = categoria.style.backgroundColor
    var color = categoria.style.color
    var conteudo = document.getElementById(`conteudo-${categoria.id}`)

    categoria.classList.remove("transition")
    if (!categoria.lastElementChild.classList.contains("d-none")) {
      categoria.lastElementChild.classList.add("d-none")
    }


    if (!conteudo.classList.contains('d-none')) {
      conteudo.classList.add('d-none')
    };

    if (bgColor === "white") {
      categoria.style.backgroundColor = color;
      categoria.style.color = "white"
    }



  })
})

categorias.forEach((categoria) => {
  categoria.addEventListener("click", (event)=> {
    var bgColor = event.currentTarget.style.backgroundColor
    var color = event.currentTarget.style.color
    var conteudo = document.getElementById(`conteudo-${categoria.id}`)

    conteudo.classList.remove('d-none')
    event.currentTarget.classList.toggle("transition")


    event.currentTarget.lastElementChild.classList.toggle("d-none")

    if (!conteudoHome.classList.contains('d-none')) {
      conteudoHome.classList.add('d-none')

    };

    // if (event.currentTarget.style.color === 'white' ) {
    //   event.currentTarget.style.backgroundColor = 'white';
    //   event.currentTarget.style.color = bgColor;
    // };

    var copia = categorias.slice()
    copia.splice(categorias.indexOf(event.currentTarget), 1)

    copia.forEach((elemento) => {
      if (elemento.classList.contains("transition")) {
        elemento.classList.remove("transition")
        elemento.lastElementChild.classList.add("d-none")
      };


    });



    copia.forEach((elemento) => {
      var conteudoCopia = document.getElementById(`conteudo-${elemento.id}`)
      if (!conteudoCopia.classList.contains('d-none')) {
        conteudoCopia.classList.add('d-none')
      };
    });




  });
});
