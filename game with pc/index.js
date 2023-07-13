const input=document.querySelector("#guess");
const button=document.querySelector("#btn");
const answer=Math.floor(Math.random()*20)+1;
input.addEventListener("keypress",function(e){
    if(e.keyCode===13)
    play();
})

button.addEventListener("click", play);

function play(){

const userNumber=document.querySelector("#guess").value;

    if(userNumber < 1 || userNumber > 20){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number from 1 to 20',
            
          })
    
        }
   else if( isNaN(userNumber)){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to enter a number',
        
      })
   }

   else{
    if(userNumber < answer){
        Swal.fire('Try a biger number')
    }
    else if(userNumber > answer){
        Swal.fire('Try a smaller number')
    }
    else{
        Swal.fire({
            title: 'You Won!',
            imageUrl: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageWidth: 600,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
    }
   }
    }
