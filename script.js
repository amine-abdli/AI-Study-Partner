function askAI(){

let question = document.getElementById("question").value;

if(question === "") return;

let chat = document.getElementById("chat");

chat.innerHTML += "<div class='user'>You: " + question + "</div>";

fetch("ask.php",{
method:"POST",
headers:{
"Content-Type":"application/x-www-form-urlencoded"
},
body:"question=" + encodeURIComponent(question)
})
.then(res => res.text())
.then(data =>{

chat.innerHTML += "<div class='ai'>AI: " + data + "</div>";

document.getElementById("question").value="";

chat.scrollTop = chat.scrollHeight;

});

}