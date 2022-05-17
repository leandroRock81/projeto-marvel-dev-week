const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idselecionado = personagem.attributes.id.value;

        if(idselecionado === 'ultron') return;

        const personagemselecionado = document.querySelector('.selecionado');
        personagemselecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const imagemjogador1 = document.getElementById('personagem-jogador-1');
        imagemjogador1.src = `./src/imagens/${idselecionado}.png`;


        const nomejogador1 = document.getElementById('nome-jogador-1');
        
        const nomeselecionado = personagem.getAttribute('data-name');

        nomejogador1.innerHTML = nomeselecionado;

        

       
    });
});