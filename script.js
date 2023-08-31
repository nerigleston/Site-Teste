// Função para alternar a exibição do dropdown
function toggleDropdown(dropdownId) {
    let dropdownContent = $("#" + dropdownId);
    
    // Fecha outros dropdowns abertos
    $(".dropdown-content").not(dropdownContent).removeClass("show");
    
    // Alterna a exibição do dropdown atual
    dropdownContent.toggleClass("show");

    if (dropdownContent.hasClass("show")) {
        let button = $("#" + dropdownId + "-button");
        
        // Posiciona o dropdown abaixo do botão relacionado
        dropdownContent.position({
            my: "left top",
            at: "left bottom",
            of: button
        });
    }
}

// Fecha o dropdown ao clicar fora dele
$(document).on("click", function(event) {
    if (!$(event.target).closest('.dropdown').length) {
        $(".dropdown-content").removeClass('show');
    }
});
