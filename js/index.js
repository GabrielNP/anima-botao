var mainIcon = $('#chat-icon');

mainIcon.ready(function() {
    setInterval(function() {
         animateIcon();
    }, 6000);
});

function animateIcon() {
    let icon  = (mainIcon.attr('src') == "img/hand.png")?
                        "img/icon-oi-avatar-02.png" :
                        "img/hand.png";
    
        mainIcon.toggleClass("rotate-vert-center")
            .attr("src", icon)
            .toggleClass("shake-lr btn-floating btn-large waves-effect waves-light white");
}