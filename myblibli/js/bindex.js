document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.videothing').querySelector('.video');
    var videoBox = document.querySelector('.videobox');
    var videoImg = document.querySelector('.videoimg');

    videoBox.addEventListener('mouseover', function () {
        video.currentTime = 10;
        video.play();
        videoImg.style.display = 'none';

    });

    videoBox.addEventListener('mouseout', function () {
        video.pause();
        videoImg.style.display = 'block';
    });

    var gameCenter = document.querySelector('.gamecenter');
    var gameMore = document.querySelector('.gamemore');
    gameCenter.addEventListener('mouseover', function () {
        gameMore.style.display = 'block';
    })
    gameCenter.addEventListener('mouseout', function () {
        gameMore.style.display = 'none';
    })
});
