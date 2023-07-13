const back=document.querySelector("#back");
const next=document.querySelector("#next");

const photos=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg"];

let i=0


next.addEventListener("click", ()=>{
    i++;
    if (i>photos.length-1){
        i=0
    }
    document.querySelector("#pictures").src=photos[i];

})

back.addEventListener("click", ()=>{
    i--;
    if(i<0){
        i=photos.length-1;
    }
    document.querySelector("#pictures").src=photos[i];
})