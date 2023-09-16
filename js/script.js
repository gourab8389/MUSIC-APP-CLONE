console.log("Welcome to Spotify");
//initialize the variables
let songIndex= 0;
let audioElement = new Audio('songs/3.mp3');
let masterplay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: " let me love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "you and me", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: " puchki special", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: " chuiku special", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "gal krishna ", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: " let me down slowly", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: " galu", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
]
songItems.forEach((element, i)=>{
    element.getElementByTagName("img")[0].src = songs[i].coverPath;
    getElementsByClassName("songName")[0].innerText = song[i].songName;
});


// audioElement.play();

//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value =progress;
})
myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
}
)
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex  = 0;

    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();        
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex=1){
        songIndex  = 0;

    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();        
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})