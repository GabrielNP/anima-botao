var mainIcon = $('#chat-icon');
var divChatbotIcon = $('#divChatbotIcon');
var texto = $("#texto");
var cont = 0;

mainIcon.ready(function() {

    setInterval(function() {
         animateIcon();
         if (cont == 5) {
            cont = 0;
            mainIcon.removeClass("rotate-vert-center");
            addEstica();
        }        
        cont++;
    }, 4000);
});

mainIcon.mouseenter(function() {
    
    addEstica();
});

mainIcon.mouseout(function() {

    removeEstica();
});

function animateIcon() {

    let icon  = (mainIcon.attr('src') == "img/hand.png")?
                        "img/icon-oi-avatar-02.png" :
                        "img/hand.png";
    
        if (icon == "img/hand.png" && cont == 1) {
            mainIcon.addClass("rotate-vert-center");
        } 

        if (icon == "img/icon-oi-avatar-02.png" && cont == 4) {
                cont--;
            }

        removeEstica();    

        mainIcon.toggleClass("rotate-vert-center")
                .attr("src", icon)
                .toggleClass("shake-lr btn-floating btn-large waves-effect waves-light white");
        
}

function addEstica() {

    divChatbotIcon.addClass("estica");   
}

function removeEstica() {

    divChatbotIcon.removeClass("estica");
}