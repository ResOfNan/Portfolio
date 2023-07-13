let text="Hello, my name is Ekaterina. Nice to meet you! I am the Front-End Web Developer.";
let i=0;
let speed=50;

function type(){
    document.querySelector("#greetings").textContent+=text.charAt(i);
    i++;
    setTimeout(type,speed);
}
type();