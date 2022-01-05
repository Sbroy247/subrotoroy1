const colors =['red','blue', 'green','yellow','tomato','light gray','#333'];
const btn =document.querySelector('#btn');
const color =document.querySelector('.color');

btn.addEventListener('click',function(){
    const randomNumber= getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
    console.log(randomNumber);
    // for (let i = 0; i < colors.length; i++) {
    //     const newColor = colors[i];
    //     document.body.style.backgroundColor=newColor;
    // };
    
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}







