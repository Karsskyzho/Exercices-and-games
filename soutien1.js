document.addEventListener('DOMContentLoaded', function() {
    let div = document.createElement('div');
    div.style.width = '150px';
    div.style.height = '150px';
    div.style.backgroundColor = 'purple';

    let body = document.querySelector('body');

    body.append(div);

    let input = document.createElement('input');
    input.setAttribute('type', 'color');
    input.setAttribute('id', 'couleur');

    let btnStart = document.createElement('button');
    btnStart.innerText = 'GO';

    body.append(btnStart);
    
    

    let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'black', 'pink', 'brown', 'grey', 'violet' ];  
    for (let c of colors) {
        afficherCouleur(c);
    }
    let firstColor = colors[Math.random() * colors.length | 0];
    let primary = document.getElementById('primary');
    primary.textContent = `Press space when you see the ${firstColor} color `;




    let compteur = 0;
    let idInterval;
    let speed = 1000;
    btnStart.addEventListener('click', function() {
        window.clearInterval(idInterval);
        idInterval = window.setInterval(function() {
            div.style.backgroundColor = colors[compteur];
            compteur++;
            if (compteur >= colors.length) {
                compteur = 0;
            }
            console.log(colors);
        }, speed);

    });
    let compte = 0;
    let level = 1;
    let life = 5;
    let pdv = document.getElementById('life');
    pdv.textContent = `Life points : ${life} \u2764\uFE0F`;
    let points = document.getElementById('points');
    points.textContent = `Level : ${level} & Points : ${compte}`;

    document.addEventListener('keydown', event => {

        if (event.code === 'Space') {
            event.preventDefault();
            console.log('Space pressed');
            window.clearInterval(idInterval);
            if (div.style.backgroundColor === firstColor) {
                window.alert("Bravo ! Vous passez au niveau suivant !");
                compte++;
                speed -= 150;
                level++;
            } else {
                window.alert("T'es nul");
                life--;
                if (life === 0) {
                    window.alert("Il ne vous reste plus de points de vie, vous êtes mort");
                }
            }
            
            points.textContent = `Level : ${level} & Points : ${compte}`;
            pdv.textContent = `Life points : ${life} \u2764\uFE0F`;
    }
    });

    function afficherCouleur(color) {
        let div = document.createElement('div');
        div.classList.add('color');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.backgroundColor = color;
        body.append(div);
    }
});