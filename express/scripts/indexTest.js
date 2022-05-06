const ShowMessage = function(message) {
    const divMsg = document.getElementById("divMessage");
    divMsg.innerText = message;
    divMsg.style.color = "#FF0000";
};

ShowMessage("Ola do JS!");