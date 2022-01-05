

let songIndex = 0;
let audioElement= new Audio('music/10.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('progress');
let gif = document.getElementById('gif');
let songsItem = Array.from( document.getElementsByClassName('songs-list'));
let masterSongName = document.getElementById('masterSongname');

let songs = [
    {songName:"sanam re -sanam re" , filePath:"music/1.mp3",coverPath: "musicPic/1.jpg"},
    {songName:"ami tmr bondhu" , filePath:"music/2.mp3",coverPath: "musicPic/2.jpg"},
    {songName:"tmi amr jan re moyna" , filePath:"music/3.mp3",coverPath: "musicPic/3.jpg"},
    {songName:"tal-se-tal" , filePath:"music/4.mp3",coverPath: "musicPic/4.jpg"},
    {songName:"tor ek kothay----" , filePath:"music/5.mp3",coverPath: "musicPic/5.jpg"},
    {songName:"aja na meri dhar" , filePath:"music/6.mp3",coverPath: "musicPic/6.jpg"},
    {songName:"ma huu tera asiqe" , filePath:"music/7.mp3",coverPath: "musicPic/7.jpg"},
    {songName:"akasher sob tara jodi--" , filePath:"music/8.mp3",coverPath: "musicPic/8.jpg"},
    {songName:"raj akhono tera" , filePath:"music/9.mp3",coverPath: "musicPic/9.jpg"},
    {songName:"Zindegi mele na dubara" , filePath:"music/10.mp3",coverPath: "musicPic/11.jpg"},
   

]

songsItem.forEach((element,i)=> {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity= 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
 progress = parseInt ((audioElement.currentTime / audioElement.duration) *100);
   myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', ()=>{
   audioElement.currentTime =  myprogressBar.value * audioElement.duration / 100;
   
 })
const makeAllPlays = ()=>{
 Array.from(document.getElementsByClassName('clickBtn')).forEach((element)=>{
    
         element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');

 })
}
 Array.from(document.getElementsByClassName('clickBtn')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `music/${songIndex+1}.mp3`;
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
        masterSongName.innerText = songs[songIndex].songName;
    })

})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
       songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
       songIndex = 0;
    }else{
        songIndex -= 0;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})