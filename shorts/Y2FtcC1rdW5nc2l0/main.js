const video = document.querySelector('.video');

const overlay = document.querySelector('.paused-overlay');

const glow = document.querySelector('.video-glow');

/*
        Canvas 설정
      */

const canvas = document.querySelector('#color-canvas');

const ctx = canvas.getContext('2d', {
    willReadFrequently: true,
});

canvas.width = 32;
canvas.height = 32;

/*
        현재 Glow 색상
      */

const currentColor = {
    r: 255,
    g: 255,
    b: 255,
};

function lerp(a, b, t) {
    return a + (b - a) * t;
}

/*
        영상 프레임에서 색 추출
      */

function updateGlow() {
    if (video.readyState < 2) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const data = image.data;

    let r = 0;
    let g = 0;
    let b = 0;

    const count = data.length / 4;

    for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
    }

    r /= count;
    g /= count;
    b /= count;

    /*
          색감 보정
        */

    r = Math.min(255, r * 1.2);
    g = Math.min(255, g * 1.2);
    b = Math.min(255, b * 1.2);

    /*
          부드러운 이동
        */

    currentColor.r = lerp(currentColor.r, r, 0.12);

    currentColor.g = lerp(currentColor.g, g, 0.12);

    currentColor.b = lerp(currentColor.b, b, 0.12);

    glow.style.background = `
          radial-gradient(
            circle,
            rgb(
              ${currentColor.r},
              ${currentColor.g},
              ${currentColor.b}
            ) 0%,
            transparent 70%
          )
          `;
}

/*
        영상 프레임마다 Glow 업데이트
      */

function glowLoop() {
    updateGlow();

    if (video.requestVideoFrameCallback) {
        video.requestVideoFrameCallback(glowLoop);
    }
}

/*
        재생 / 정지
      */

function updateOverlay() {
    overlay.style.display = video.paused ? 'flex' : 'none';
}

async function playVideo() {
    try {
        await video.play();

        if (video.requestVideoFrameCallback) {
            video.requestVideoFrameCallback(glowLoop);
        }
    } catch (error) {
        console.error(error);
    }
}

function pauseVideo() {
    video.pause();
}

function togglePlayback() {
    if (video.paused) {
        playVideo();
    } else {
        pauseVideo();
    }
}

overlay.addEventListener('click', togglePlayback);

video.addEventListener('click', togglePlayback);

video.addEventListener('play', updateOverlay);

video.addEventListener('pause', updateOverlay);

window.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        event.preventDefault();
        togglePlayback();
    }
});

window.addEventListener('keydown', event => {
    if (event.code === 'KeyC') {
        event.preventDefault();
        if (video.hasAttribute('controls')) {
            video.removeAttribute('controls');
        } else {
            video.setAttribute('controls', true);
        }
    }
    if (event.code === 'KeyF') {
        event.preventDefault();
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }
});

updateOverlay();
