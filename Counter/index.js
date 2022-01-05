let count =0;
const counter = document.querySelector('#counter');
const btns = document.querySelectorAll('.btn');
 

btns.forEach(function(btn){
   
     btn.addEventListener('click',function(e){
        
      let style = e.currentTarget.classList;
      if(style.contains("increase")){
          count++;
         
    }else if(style.contains("decrease")){
        count--;
    
    }else{
        count=0;
    }if(count<0){
        counter.style.color="green";
    }
    if(count>0){
        counter.style.color="red";
    }
    if(count===0){
        counter.style.color="black";
    }
    counter.textContent = count;
     });
});












