let game_textbox = document.getElementById("game_textbox");
let search_result = document.getElementById("search_result");

game_textbox.addEventListener("keypress", function(){
    search_result.innerHTML = "Game not found."
})
