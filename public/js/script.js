document.querySelector("textarea").focus();



function sendMensage() {
    let textarea = document.querySelector("textarea");
    let mensage = textarea.value.trim();

    if (mensage !== "") {
        document.querySelector("#message-form").submit();
    }
}

document.querySelector("textarea").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {  
        event.preventDefault();
        sendMensage();
    }
});

document.querySelector(".btn-enviar").addEventListener("click", function(event) {
    event.preventDefault();
    sendMensage(); 
});
