const song = document.getElementById("song");
const progress = document.getElementById("progress");
const ctrlIcon = document.getElementById("ctrlIcon");
const image = document.getElementById("music-img");

const prev = document.getElementById("previous");
const next = document.getElementById("next");
const songName = document.getElementById("songName");
const singer = document.getElementById("singer");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
    song.pause();
}
ctrlIcon.onclick = function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.play();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        image.classList.add("rotate");
    }
    else{
        song.pause();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");    
        image.classList.remove("rotate");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = () =>{
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}

prev.addEventListener("click", prevSong);

function prevSong(){
    songName.innerHTML = "Ambient";
    singer.innerHTML = "Adam Smith ft. Sia";
    image.src = "media/img3.jpg";
    song.src = "media/Forest Find - TrackTribe.mp3";
}

next.addEventListener("click", nextSong);

function nextSong(){
    songName.innerHTML = "Despacito";
    singer.innerHTML = "Luis Founsi ft. Track Tribe";
    image.src = "media/468-thumbnail.png";
    song.src = "media/Little Umbrellas - TrackTribe.mp3";
}