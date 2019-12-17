var mainIcon = $('#chat-icon');
var cont = 0;

mainIcon.ready(function() {
    setInterval(function() {
         animateIcon();
         if (cont == 5) {
            cont = 0;
            botaQuadrado();
            console.log("bati");
        }        
        cont++;
    }, 6000);
});

function animateIcon() { console.log(cont);
    let icon  = (mainIcon.attr('src') == "img/hand.png")?
                        "img/icon-oi-avatar-02.png" :
                        "img/hand.png";
    
        if (icon == "img/hand.png" && cont == 1) {
            mainIcon.addClass("rotate-vert-center");
        } 

        if (icon == "img/icon-oi-avatar-02.png" && cont == 4) {
                cont--;
            }
        tiraQuadrado();              
        mainIcon.toggleClass("rotate-vert-center")
            .attr("src", icon)
            .toggleClass("shake-lr btn-floating btn-large waves-effect waves-light white");
        
}


mainIcon.mouseover(function() {
    console.log("PASSEI");
    botaQuadrado();
});

function botaQuadrado() {
    mainIcon.removeClass("rotate-vert-center");
    mainIcon.addClass("quadrado");
}

function tiraQuadrado() {
    mainIcon.removeClass("quadrado"); 
}