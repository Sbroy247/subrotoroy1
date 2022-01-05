
// testimonial



const personDetails=[
    {
      id : 1,
      name:"Susan singh",
      job: "Softwer Design",
      Img:"image/testi/man.jpg",
      text:"Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). "
    },
    {
        id : 2,
        name:"chrish loren",
        job: "Graphic Design",
        Img:"image/testi/women.jpg",
        text:"each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct,"
      },
      {
        id : 3,
        name:"mahafi singh",
        job: " App devlopver",
        Img:"image/testi/woman_glasses.jpg",
        text:"each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct,"
      },
      {
        id : 4,
        name:"abrahav de cok",
        job: "Degital Marketer",
        Img:"image/testi/1.jpg",
        text:"each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct,"
      },
      {
        id : 5,
        name:"kacey jhang",
        job: "Web devloper",
        Img:"image/testi/2.jpg",
        text:"each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct,"
      }
];

const person = document.getElementById('person');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const author = document.querySelector('#author');

const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');


let curentItem = 0;


window.addEventListener('DOMContentLoaded', function(){
  shownCount(curentItem);

});


function shownCount(details) {
  const review = personDetails[details];
  person.src = review.Img;
  job.textContent = review.job;
  info.textContent = review.text;
  author.textContent = review.name;


}

nextBtn.addEventListener('click', function(){
    curentItem++;
    if(curentItem> personDetails.length-1){
        curentItem =0;
    }
    shownCount(curentItem);
});

prevBtn.addEventListener('click', function(){
    curentItem--;
    if(curentItem <0){
        curentItem = personDetails.length-1;
    }
    shownCount(curentItem);
});

