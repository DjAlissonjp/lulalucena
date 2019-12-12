function mostra(obj) {
    switch (obj.id) {
        case "menu_principal":
            document.getElementById("sub_menu").style.display = "block";
            document.getElementById("menu_principal").id = "menu_principal1";
            break
        case "menu_principal1":
            document.getElementById("sub_menu").style.display = "none";
            document.getElementById("menu_principal").id = "menu_principal";
            break
    }
}