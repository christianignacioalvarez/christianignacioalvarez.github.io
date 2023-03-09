function desarrollandoPortfolio() {
    document.getElementById("alert_desarrollo1").addEventListener("click",function(){
        alert("Proyecto en progreso");
    })
    document.getElementById("alert_desarrollo2").addEventListener("click",function(){
        alert("Proyecto en progreso");
    })
    document.getElementById("alert_desarrollo3").addEventListener("click",function(){
        alert("Proyecto en progreso");
    })    
}

function ocultarMenu() {
    document.getElementById("btn-ocultar_menu").addEventListener("click", function() {
        document.getElementById("menu_oculto").remove();
    })
}



desarrollandoPortfolio();

ocultarMenu();

