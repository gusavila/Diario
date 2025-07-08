document.querySelector("textarea").focus();

let textBox = document.querySelector(".text-array-div").getAttribute("text-array").split(",");

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


document.querySelectorAll(".delete-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        console.log(textBox[index]); 
        textBox.splice(index, 1); 
        console.log("Atualizado:", textBox);
    });
});