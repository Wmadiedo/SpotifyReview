"use strict";

let audioTrack = document.createElement("audio");
audioTrack.preload = "metadata";
document.body.append(audioTrack);

let blurElement = document.getElementById("blurElement");

let themes = document.getElementById("themes");

let musicBox = document.getElementById("musicBox");

let trackItemsWrapper = document.getElementById("trackItemsWrapper");

let trackArtistName = document.getElementById("trackArtistName");
let trackAlbumName = document.getElementById("trackAlbumName");

let coverImage = document.getElementById("coverImage");

let playButton = document.getElementById("playButton");
let playButtonIcon = playButton.firstElementChild;
let pauseButtonIcon = playButton.lastElementChild;

let previousButton = document.getElementById("previousButton");
let nextButton = document.getElementById("nextButton");

let volumeWrapper = document.getElementById("volumeWrapper");
let volumeButton = document.getElementById("volumeButton");
let volumeNumber = document.getElementById("volumeNumber");

let wavesVolumeButton = document.getElementById("wavesVolumeButton");
let highVolumeSymbol = document.getElementById("highVolumeSymbol");
let mediumVolumeSymbol = document.getElementById("mediumVolumeSymbol");
let lowVolumeSymbol = document.getElementById("lowVolumeSymbol");
let volumeCross = document.getElementById("volumeCross");

let currentTrackTimeNumber = document.getElementById("currentTrackTimeNumber");
let currentTrackDuration = document.getElementById("currentTrackDuration");

let trackProgressBar = document.getElementById("trackProgressBar");
let trackLoading = document.getElementById("trackLoading");
let currentTrackTimeBar = document.getElementById("currentTrackTimeBar");

let musics = [
    {
        trackName: "Wesley's theory",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "Wesley's Theory.mp3"
    }, 
    {
        trackName: "For Free? - interluded",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "For Free_ - Interlude.mp3"
    }, 
    {
        trackName: "King Kunta",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "King Kunta.mp3"
    },
    {
        trackName: "Institutionalized",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "Institutionalized.mp3"
    },
    {
        trackName: "These Walls",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "These Walls.mp3"
    },
    {
        trackName: "u",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "u.mp3"
    },
    {
        trackName: "Alright",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "Alright.mp3"
    },
    {
        trackName: "For Sale? - interlude",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "For Sale_ - Interlude.mp3"
    },
    {
        trackName: "Momma",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "Momma.mp3"
    },
    {
        trackName: "Hood Politics",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "Hood Politics.mp3"
    },
    {
        trackName: "How Much A Dollar Cost",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "How Much A Dollar Cost.mp3"
    },
    {
        trackName: "Complexion (A Zulu Love)",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "Complexion (A Zulu Love).mp3"
    },
    {
        trackName: "The Blacker The Berry",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "The Blackere The Berry.mp3"
    },{
        trackName: "You Ain't Gotta Lie",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        coverImage: "tpab.jpg",
        audioSource: "YOu Ain't Gotta Lie (Momma Said).mp3"
    }, {
    trackName: "i",
    artist: "The Weeknd",
    album: "Kendrick Lamar",
    coverImage: "tpab.jpg",
    audioSource: "i.mp3"
} ,{
    trackName: "Mortal Man",
    artist: "Kendrick Lamar",
    album: "To Pimp A Butterfly",
    coverImage: "tpab.jpg",
    audioSource: "Mortal Man.mp3"
}
];

musics.forEach((item, index) => {
    trackItemsWrapper.innerHTML += `<div class="track-item" data-index="${index}">${index + 1
        }. ${item.trackName}</div>`;
});

trackItemsWrapper.firstElementChild.classList.add("active");

function informationUpdate(target) {
    target = target ? target : 0;
    coverImage.src = "";
    coverImage.src = musics[target].coverImage;
    audioTrack.src = musics[target].audioSource;
    trackArtistName.textContent = musics[target].artist;
    trackAlbumName.textContent = musics[target].album;
}

informationUpdate();

themes.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) return;
    let targetTheme = e.target.dataset.theme;

    let activeTheme = document.querySelector(".active-theme");
    activeTheme.classList.remove("active-theme");

    e.target.classList.add("active-theme");

    switch (targetTheme) {
        case "theme1":
            blurElement.style.visibility = "hidden";
            musicBox.style.border = "";
            musicBox.style.boxShadow = "";
            coverImage.style.background = "";
            trackProgressBar.style.background = "";
            currentTrackTimeBar.style.background = "";
            trackLoading.style.background = "";
            break;

        case "theme2":
            blurElement.style.visibility = "visible";
            musicBox.style.border = "1px solid #ffffff12";
            musicBox.style.boxShadow =
                "inset -10px -10px 15px #ffffff0a, inset 10px 10px 15px #ffffff0a";
            blurElement.style.background =
                "linear-gradient(135deg, #dc143c, #009688)";
            coverImage.style.background = "#00968875";
            trackProgressBar.style.background = "#0fd5ca73";
            currentTrackTimeBar.style.background = "#0fd5ca";
            trackLoading.style.background = "#0fd5ca";
            break;

        case "theme3":
            blurElement.style.visibility = "visible";
            musicBox.style.border = "1px solid #ffffff12";
            musicBox.style.boxShadow =
                "inset -10px -10px 15px #ffffff0a, inset 10px 10px 15px #ffffff0a";
            blurElement.style.background =
                "linear-gradient(135deg, #7f0096, #14abdc)";
            coverImage.style.background = "#288bcf75";
            trackProgressBar.style.background = "#0fd5ca73";
            currentTrackTimeBar.style.background = "#0fd5ca";
            trackLoading.style.background = "#0fd5ca";
            break;
    }
});

trackItemsWrapper.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) return;
    let activeAudio = document.querySelector(".active");
    activeAudio.classList.remove("active");
    e.target.classList.add("active");

    let targetIndex = e.target.dataset.index;

    informationUpdate(targetIndex);
});

audioTrack.addEventListener("waiting", waitingEvent);

function waitingEvent() {
    trackLoading.classList.add("track-loading");
}

audioTrack.addEventListener("canplay", (e) => {
    trackLoading.classList.remove("track-loading");
    audioTrack.removeEventListener("waiting", waitingEvent);
});

let firstPlay = true;
audioTrack.addEventListener("loadstart", (e) => {
    audioTrack.addEventListener("waiting", waitingEvent);
    currentTrackTimeBar.style.width = 0;
    if (!firstPlay) {
        audioTrack.play();
    }
    firstPlay = false;
});

let requestAnimationTimeArgument = performance.now();

requestAnimationFrame(function currentTimeUpdater(
    requestAnimationTimeArgument
) {
    let currentTime = audioTrack.currentTime;

    let currentMinute = Math.trunc(currentTime / 60);
    let currentSeconds = Math.trunc(currentTime % 60);

    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }

    currentTrackTimeNumber.textContent = `${currentMinute}:${currentSeconds}`;

    currentTrackTimeBar.style.width =
        (currentTime / audioTrack.duration) * 100 + "%";

    requestAnimationFrame(currentTimeUpdater);
});

audioTrack.addEventListener("canplay", canPlayEvent);

audioTrack.addEventListener("durationchange", canPlayEvent);

function canPlayEvent(e) {
    let totalTime = audioTrack.duration;

    let totalMinute = Math.trunc(totalTime / 60);
    let totalSeconds = Math.trunc(totalTime % 60);

    if (totalSeconds < 10) {
        totalSeconds = "0" + totalSeconds;
    }

    currentTrackDuration.textContent = `${totalMinute}:${totalSeconds}`;
}

trackProgressBar.addEventListener("pointerdown", (e) => {
    audioTrack.currentTime =
        ((e.offsetX / trackProgressBar.offsetWidth) * 100 * audioTrack.duration) /
        100;
    trackProgressBar.addEventListener("pointermove", trackProgressBarPointerMove);

    function trackProgressBarPointerMove(e) {
        audioTrack.currentTime =
            ((e.offsetX / trackProgressBar.offsetWidth) * 100 * audioTrack.duration) /
            100;
    }
    document.addEventListener("pointerup", (e) => {
        trackProgressBar.removeEventListener(
            "pointermove",
            trackProgressBarPointerMove
        );
    });
});

trackProgressBar.addEventListener("wheel", (e) => {
    if (e.deltaY < 0) {
        audioTrack.currentTime += 5;
    }
    if (e.deltaY > 0) {
        audioTrack.currentTime -= 5;
    }
});

playButton.addEventListener("click", (e) => {
    if (audioTrack.paused) {
        audioTrack.play();
    } else {
        audioTrack.pause();
    }
});

previousButton.addEventListener("click", (e) => {
    let activeAudio = document.querySelector(".active");

    let trackItems = document.querySelectorAll(".track-item");

    let activeIndex = +activeAudio.dataset.index == 0 ?
        trackItems.length :
        +activeAudio.dataset.index;

    let targetIndex = +activeIndex - 1;

    activeAudio.classList.remove("active");
    trackItems[targetIndex].classList.add("active");

    informationUpdate(targetIndex);
});

nextButton.addEventListener("click", (e) => {
    let activeAudio = document.querySelector(".active");

    let trackItems = document.querySelectorAll(".track-item");

    let activeIndex = +activeAudio.dataset.index == trackItems.length - 1 ?
        -1 :
        +activeAudio.dataset.index;

    let targetIndex = +activeIndex + 1;

    activeAudio.classList.remove("active");
    trackItems[targetIndex].classList.add("active");

    informationUpdate(targetIndex);
});

audioTrack.addEventListener("play", (e) => {
    playButtonIcon.style.opacity = 0;
    pauseButtonIcon.style.opacity = 1;
    if (wasPlaying) {
        wasPlaying = false;
    }
});

// prevent from nested animations
let firstTimeAnimation = true;
audioTrack.addEventListener("playing", (e) => {
    if (firstTimeAnimation) {
        blurElement.animate({ filter: "blur(30px)" }, {
            duration: 5000,
            easing: "ease-in-out",
            direction: "alternate",
            iterations: Infinity
        });
        firstTimeAnimation = false;
    }
});

audioTrack.addEventListener("pause", (e) => {
    playButtonIcon.style.opacity = 1;
    pauseButtonIcon.style.opacity = 0;

    blurElement.animate({ filter: "blur(10px)" }, {
        duration: 1000,
        easing: "linear",
        fill: "forwards"
    });

    firstTimeAnimation = true;
});

volumeWrapper.addEventListener(
    "wheel",
    (e) => {
        e.preventDefault();
        switch (true) {
            case e.deltaY < 0:
                audioTrack.volume = (audioTrack.volume += 0.05).toFixed(2);
                break;

            case e.deltaY > 0:
                audioTrack.volume = (audioTrack.volume -= 0.05).toFixed(2);
                break;
        }
        volumeNumberUpdate();
    }, { passive: false }
);

function volumeNumberUpdate() {
    volumeNumber.textContent = Math.trunc(audioTrack.volume * 100);
}

let wasPlaying;
audioTrack.addEventListener("volumechange", (e) => {
    let currentVolume = audioTrack.volume;
    switch (true) {
        case 0.66 < currentVolume:
            highVolumeSymbol.style.fill = "white";
            mediumVolumeSymbol.style.fill = "white";
            lowVolumeSymbol.style.fill = "white";
            wavesVolumeButton.style.opacity = 1;
            volumeCross.style.opacity = 0;
            if (wasPlaying) {
                audioTrack.play();
                wasPlaying = false;
            }
            break;

        case 0.33 < currentVolume && currentVolume < 0.66:
            highVolumeSymbol.style.fill = "#808080";
            mediumVolumeSymbol.style.fill = "white";
            lowVolumeSymbol.style.fill = "white";
            wavesVolumeButton.style.opacity = 1;
            volumeCross.style.opacity = 0;
            if (wasPlaying) {
                audioTrack.play();
                wasPlaying = false;
            }
            break;

        case 0 < currentVolume && currentVolume < 0.33:
            highVolumeSymbol.style.fill = "#808080";
            mediumVolumeSymbol.style.fill = "#808080";
            lowVolumeSymbol.style.fill = "white";
            wavesVolumeButton.style.opacity = 1;
            volumeCross.style.opacity = 0;
            if (wasPlaying) {
                audioTrack.play();
                wasPlaying = false;
            }
            break;

        case currentVolume == 0:
            wavesVolumeButton.style.opacity = 0;
            volumeCross.style.opacity = 1;
            if (!audioTrack.paused) {
                wasPlaying = true;
                audioTrack.pause();
            }
            break;
    }

    volumeNumberUpdate();
});

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowDown":
            audioTrack.volume = (audioTrack.volume -= 0.05).toFixed(2);
            break;

        case "ArrowUp":
            audioTrack.volume = (audioTrack.volume += 0.05).toFixed(2);
            break;

        case "ArrowLeft":
            audioTrack.currentTime -= 5;
            break;

        case "ArrowRight":
            audioTrack.currentTime += 5;
            break;

        case "Space":
            if (audioTrack.paused) {
                audioTrack.play();
            } else {
                audioTrack.pause();
            }
            break;
    }

    if (e.code == "ArrowDown" || e.code == "ArrowUp") {
        volumeButton.style.opacity = 0;
        volumeNumber.style.opacity = 1;

        document.addEventListener("keyup", (e) => {
            let volumeChangeAnimation = setTimeout(() => {
                volumeButton.style.opacity = 1;
                volumeNumber.style.opacity = 0;
            }, 600);

            document.addEventListener("keydown", (e) => {
                if (e.code == "ArrowDown" || e.code == "ArrowUp") {
                    clearTimeout(volumeChangeAnimation);
                }
            });
        });
    }
});

coverImage.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    let coverImageBigSize = coverImage.cloneNode();
    coverImageBigSize.className = "cover-image-big-size";
    coverImageBigSize.removeAttribute("id");
    document.body.append(coverImageBigSize);

    document.addEventListener("pointerup", (e) => {
        coverImageBigSize.remove();
    });
});
document.querySelectorAll('.rating').forEach(rating => {
    rating.addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const width = rect.width;
        const stars = (offsetX / width) * 5;
        rating.setAttribute('data-rating', stars.toFixed(1));
    });
});
// script.js

document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();
    
    if (commentText !== '') {
        const commentsContainer = document.getElementById('comments-container');
        
        // Crear un nuevo div para el comentario
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        
        // Añadir el nuevo comentario al contenedor de comentarios
        commentsContainer.appendChild(newComment);
        
        // Limpiar la caja de texto
        commentInput.value = '';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach(rating => {
        rating.addEventListener('click', function(e) {
            if (e.target.dataset.value) {
                const album = e.target.parentElement.dataset.album;
                const value = parseFloat(e.target.dataset.value);
                if (!hasRated(album)) {
                    rateAlbum(album, value);
                    setRated(album);
                } else {
                    alert('Ya has calificado este álbum.');
                }
            }
        });
    });

    loadRatings();
});

function hasRated(album) {
    let ratedAlbums = JSON.parse(sessionStorage.getItem('ratedAlbums')) || [];
    return ratedAlbums.includes(album);
}

function setRated(album) {
    let ratedAlbums = JSON.parse(sessionStorage.getItem('ratedAlbums')) || [];
    ratedAlbums.push(album);
    sessionStorage.setItem('ratedAlbums', JSON.stringify(ratedAlbums));
}

function rateAlbum(album, value) {
    let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    let albumRatings = ratings[album] || { total: 0, count: 0 };

    albumRatings.total += value;
    albumRatings.count += 1;
    ratings[album] = albumRatings;

    localStorage.setItem('ratings', JSON.stringify(ratings));
    updateAverageRating(album);
}

function updateAverageRating(album) {
    let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    let albumRatings = ratings[album];
    if (albumRatings) {
        const average = (albumRatings.total / albumRatings.count).toFixed(1);
        document.querySelector(`.average-rating[data-album="${album}"]`).textContent = average;
    }
}

function loadRatings() {
    let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    for (let album in ratings) {
        updateAverageRating(album);
    }
}