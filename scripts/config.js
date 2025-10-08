function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid; // because +"1" => 1 number
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    configErrorElement.textContent = "";
    formElement.querySelector("form input").value = "";
}

function savePlayerConfig(event){
    event.preventDefault(); //Prevent the default behaviour, in our case to submit and post the form.
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();

    if (!enteredPlayerName){
        event.target.firstElementChild.classList.add("error");
        configErrorElement.textContent = "Please insert a valid name!";
        return;
    }

    const updatedPlayerDataElement = document.getElementById(`player-${editedPlayer}-data`);
    updatedPlayerDataElement.children[1].innerText = enteredPlayerName;
    
    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}