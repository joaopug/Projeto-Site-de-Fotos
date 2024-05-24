document.addEventListener("DOMContentLoaded", function (){

    const baseImagens = {
        todes: ['city.jpg', 'animal.jpg', 'natureza.jpg'],
        nature: ['natureza.jpg'],
        cidade: ['city.jpg'],
        animal: ['animal.jpg'],
    }

    function carregaImages(categoria){
        //Selecionar elementos HTML com base em um seletor
        const galeria = document.querySelector("#galeria-imagens")
        galeria.innerHTML = ''; //Limpar bloco, apaga tudo dentro

        const imagens = baseImagens[categoria]

        imagens.forEach(img => {
            console.log(img);
            galeria.innerHTML += "<div> <img src='imagens/"+ img +"'/> </div>";
        })

    
    }

    carregaImages('categoria');
    

    // Evento de clique
    document.body.addEventListener('click', function (event){
        if(event.target.classList.contains('botao-categoria')) {// Acessa a lista de classe de onde clicou e procura pela classe botao-categoria
            
            const categoria = event.target.dataset.categoria;

            //alert(categoria)

            carregaImages(categoria);


        };        
    
    });
    


})