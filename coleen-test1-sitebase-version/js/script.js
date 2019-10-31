document.addEventListener('DOMContentLoaded', function () {
    var myMenuButton = document.querySelector('.menu-button');
    var myMainMenu = document.querySelector('.site-header .site-navigation');
    //console.log(myMainMenu);
    myMenuButton.addEventListener('click', function () {
        //console.log("I'm Clicked!")
        myMainMenu.classList.toggle('expanded');
    });

});