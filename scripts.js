let a_idx = 0;
let audioContext = new AudioContext();

const audioUrls = {
    "Ciallo～(∠・ω< )⌒★": './material/Click-music/Ciallo.mp3',

    "Zako~♡ Zako~♡": './material/Click-music/zako.mp3',
    "お兄ちゃん 好き~♡": './material/Click-music/oni-suki.mp3',

    "まだ♡まだ♡": './material/Click-music/mada.mp3',
    "Mada~♡ Mada~♡": './material/Click-music/mada.mp3',
    "Mada~♡ ごめん♡": './material/Click-music/gomen.mp3',

    "狗修金~♡": './material/Click-music/go-shujin.mp3',
    "バカ♡バカ♡": './material/Click-music/baka.mp3'

};

// 初始化页面
$(function () {
    // 监听页面点击事件
    $("body").on('click', function (e) {
        const messages = [
            "Ciallo～(∠・ω< )⌒★",
            "Zako~♡ Zako~♡",
            "お兄ちゃん 好き~♡",

            "まだ♡まだ♡",
            "Mada~♡ Mada~♡",
            "Mada~♡ ごめん♡",

            "狗修金~♡",
            "バカ♡バカ♡"

        ];

        const messageText = messages[a_idx];
        a_idx = (a_idx + 1) % messages.length;

        const spanElement = $(`<span>${messageText}</span>`)
            .css({
                "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
                "top": e.pageY - 20,
                "left": e.pageX,
                "position": "absolute",
                "font-family": "Pixel",
                "font-weight": "bold",
                "color": generateRandomColor()
            })
            .appendTo("body")
            .animate({
                "top": e.pageY - 180,
                "opacity": 0
            }, 1500, () => {
                spanElement.remove();
            });

        playSound(audioUrls[messageText]);
    });
});

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function playSound(url) {
    const audio = new Audio(url);
    audio.volume = 0.2;
    audio.play().catch(error => {
        console.error('Error playing sound:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const audioElement = document.getElementById('myAudio');
    const playButton = document.getElementById('playButton');
    audioElement.volume = 0.5;

    const sources = audioElement.getElementsByTagName('source');

    playButton.addEventListener('click', function () {
        const randomSourceIndex = Math.floor(Math.random() * sources.length);
        const source = sources[randomSourceIndex];
        audioElement.src = source.src;
        audioElement.play();
        // 去掉原本隐藏按钮的代码
        // this.style.display = 'none';
    });

    playButton.addEventListener('mouseover', function () {
        this.textContent = this.getAttribute('data-hover-text');
    });

    playButton.addEventListener('mouseout', function () {
        this.textContent = '点击按钮，随机播放音乐~ଘ(੭ˊ꒳​ˋ)੭✧';
    });
});