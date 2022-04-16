

((doc,win)=>{
    const abreFechaMenu = (e) =>{
        e.preventDefault();
        const divFlutuante = doc.querySelector('[data-div-flutuante]');
        divFlutuante.classList.toggle('div-flutuante');
        const divTextoBotoes = doc.querySelectorAll('[data-texto-botoes]');
        divTextoBotoes.forEach(element =>{
            element.classList.toggle('none');
        })
    } 

    const botaoMenu = doc.querySelector('[data-btn-menu]');

    botaoMenu.addEventListener('click',abreFechaMenu)
})(document,window)