//button mapping
const button_menu = document.getElementById("menu_button");
const menu_dropdown = document.getElementById("menu_dropdown");

//mapping buttons in the menu
const buttons = menu_dropdown.getElementsByTagName("p");


//event for show the menu

button_menu.addEventListener("click", () => {
    //verify if menu is hide
    if (menu_dropdown.style.display === "none" || menu_dropdown.style.display === ""){
        //Show the menu
        menu_dropdown.style.display = "block";
    }
    else{
        //hide the menu when click again, while show
        menu_dropdown.style.display = "none";
    }
})

//thos change the text of the main button for menu
Array.from(buttons).forEach((buttons) => {

    buttons.addEventListener("click", () => {
        menu_dropdown.style.display = "none"; // when a button of item is click, close the menu
        button_menu.textContent = buttons.textContent; // change the tet on main botton menu
    })      
})
