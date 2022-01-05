
/*==================== toggel ====================*/
 const iconBar = document.querySelector('.hide-bar');
 const iconDiv = document.querySelector('.menu');
 
iconBar.addEventListener('click', ()=>{
    iconDiv.classList.toggle('show-inner-menu');
    //  iconDiv.classList.add('show-inner-menu');
    //  iconDiv.classList.remove('show-inner-menu');

})







const header = document.querySelector(".menu");
const sectionOne = document.getElementById("cover");

const newScrool = {};

const sectionObserve = new IntersectionObserver(
    function(
        entries,
         sectionObserve
         ){
          entries.forEach(entry=> {
              if(!entry.isIntersecting) {
              header.classList.add('nav-scroll');

            } else{
                header.classList.remove('nav-scroll');
            }
          });   

},

newScrool);

sectionObserve.observe(sectionOne);



// var smoothScroll = new scrollToSmooth('a', {
//     easing: 'easeInOutExpo',
//     duration: 1490,
//     durationRelative : true,
//     onScrollStart : (data) => {console.log(data);},
//     onScrollUpdate: (data) => {console.log(data);},
//     onScrollEnd : (data) => {console.log(data);},
// });

// scrollToSmooth.init(a);
/*==================== SHOW SCROLL UP ====================*/ 

const topUp = document.querySelector('.scroll-btn');
window.addEventListener("scroll", ()=>{
    if(window.pageYOffset >100){
        topUp.classList.add("show-btn");
    
    }else{
        topUp.classList.remove("show-btn")
    }
})



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navigation-bar a[href*=' + sectionId + ']').classList.add('active-menu')
        }else{
            document.querySelector('.navigation-bar a[href*=' + sectionId + ']').classList.remove('active-menu')
        }
    })
}
window.addEventListener('scroll', scrollActive)




$('.smoothscroll').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});





