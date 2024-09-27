
const audio = document.getElementById('audio')
const playBtn= document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const titleBtn = document.getElementById('title')
const artistBtn = document.getElementById('artist')
const coverBtn = document.getElementById('cover')


// STORE

const songs = [
    {
        title: 'Sinner by Adekunle Gold',
        artist: 'Adekunle Gold',
         src: 'song/songs3.mp3',
        cover: 'cover/cover3.png',
    },
    {
        title: 'All I Want by Olivia Rodrigo',
        artist: 'Olivia Rodrigo',
        src: 'song/songs2.mp3',
        cover: 'cover/cover2.jpg',
    },
    {
        title: 'Amari by J-Cole',
        artist: 'J-Cole',
        src: 'song/songs1.mp3',
        cover: 'cover/cover3.png',
    },
    {
        title: 'Circles by Post Malone',
        artist: 'Post Malone',
        src: 'song/songs4.mp3',
        cover: 'cover/cover1.jpg',
    }
];

let currentSongIndex = 0;
// TEST FUNCTUION
function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

function playSong() {
    audio.play();
    playBtn.textContent = 'pause';
    cover.style.animationPlayState = 'running';
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = 'play';
    cover.style.animationPlayState = 'paused';
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}


// CALLING THE FUNCTION CONDITIONALLY

playBtn.addEventListener('click',()=>{
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});


prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// Load the first song initially
loadSong(songs[currentSongIndex]);

