var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var Newmessages = document.createElement("<li>");
    newmessage.innerHTML = textbox.nodeValue;
    messages.appendChild(newmessage);
});
