let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
 
let number= [Math.floor(Math.random()*100)];

btn.addEventListener('click',function(){
let input = document.getElementById('userinput').value;
if(input == number){
    output.innerHTML=`You Guesses Right, Your Number Was ${number}`
 }
  else if( input< number){
      output.innerHTML="You Guessed Too Low!"
  }
  if(input>number){
      output.innerHTML="You Guessed Too High!"
  }
});

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click',function(){
     window.location.reload();
}
);