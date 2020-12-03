var message = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var newmessage = document.createElement("li");
    newmessage.innerHTML = textbox.value;
    message.appendChild(newmessage);
    textbox.value="";
});
