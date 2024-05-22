document.addEventListener("DOMContentLoaded", function (){

    const baseImagens = {
        todes: ['city.jpg', 'animal.jpg', 'natureza.jpg'],
        nature: ['natureza.jpg'],
        cidade: ['city.jpg'],
        animal: ['animal.jpg'],
    }

    function carregaImages(){
        //Selecionar elementos HTML com base em um seletor
        const galeria = document.querySelector("#galeria-imagens");

        const imagens = baseImagens['todes']

        imagens.forEach(img => {
            console.log(img);
            galeria.innerHTML = "<div> <img src='imagens/"+ img +"'/> </div>";
        })

    }

    carregaImages();
    




    /*const baseImagens = {
        todes: ['imagem.jpg', 'city.jpg', 'animal.jpg', 'natureza.jpg'],
        nature: ['natureza.jpg'],
        cidade: ['city.jpg'],
        animal: ['animal.jpg'],
    }

    function carregaImages(images){
        const galeria = document.querySelector("#galeria-imagens");
        galeria.innerHTML = ""; // Clear previous images

        images.forEach(img => {
            const div = document.createElement('div');
            div.innerHTML = "<img src='imagens/"+ img +"'/>";
            galeria.appendChild(div);
        });
    }

    carregaImages(baseImagens['todes']); // Initial loading of images

    // Evento de clique nos botões de categoria
    const categoryButtons = document.querySelectorAll('.botao-categoria');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const category = event.target.textContent.toLowerCase();
            carregaImages(baseImagens[category]);
        });
    });
    */
   
    








    /*// Evento de clique
    document.body.addEventListener('click', function (event){
        //console.log(event);
        if(event.target.classList.contains('botao-categoria')){ // Acessa a lista de classe de onde clicou e procura pela classe botao-categoria
    }
    })
    */




})