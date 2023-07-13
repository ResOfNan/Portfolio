const button=document.querySelector('#btn');
const par=document.querySelector('#par');

const quotes=[
    "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
    "When you change your thoughts, remember to also change your world.",
    "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
    "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "The road to success and the road to failure are almost exactly the same.",
    "Success usually comes to those who are too busy looking for it.",
    "Success is getting what you want, happiness is wanting what you get.",
]

button.addEventListener('click',function(){
    let randomQuote=quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display="block";
    par.textContent=randomQuote;
})