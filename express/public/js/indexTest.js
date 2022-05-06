const ShowMessage = function(message) {
    console.log('Entrou');
    const divMsg = document.getElementById("divMessage");
    divMsg.innerText = message;
    divMsg.style.color = "#FF0000";
    console.log('saiu');
};

ShowMessage("Ola do JS!");