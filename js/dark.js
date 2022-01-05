const darksun = document.querySelector('#darkSun');

// const darkSun = document.querySelector('#darkMoon');

darksun.addEventListener('click', () =>{
     var element = document.body;
     
     element.classList.toggle("dark-Mode");
     // darksun.classList.toggle('fa-moon');

})

const darkMood= document.querySelector('.dark-mood >i');
darkMood.addEventListener('click', ()=>{
     if(darkMood.classList.contains('fa-sun')){
          darkMood.classList.remove('fa-sun');
          darkMood.classList.add('fa-moon');

     }else if(darkMood.classList.contains('fa-moon')){
          darkMood.classList.remove('fa-moon');
          darkMood.classList.add('fa-sun');
     }
        
     // darkMood.classList.remove('fa-sun');
     // darkMood.classList.toggle('fa-moon');

})


