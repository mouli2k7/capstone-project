const videoContainer = document.getElementById('videoContainer');
const watchSection = document.getElementById('watchSection');
const videoGrid = document.querySelector('.video-grid');
const videoPlayer = document.getElementById('videoPlayer');

function openVideo(url) {
  videoPlayer.src = url;
  videoGrid.style.display = 'none';
  watchSection.classList.add('active');
}

function goBack() {
  videoPlayer.src = '';
  watchSection.classList.remove('active');
  videoGrid.style.display = 'block';
}

function searchVideos() {
  const query = document.getElementById('search').value.toLowerCase();
  const videos = document.querySelectorAll('.video');

  videos.forEach(video => {
    const title = video.querySelector('h4').innerText.toLowerCase();
    video.style.display = title.includes(query) ? 'block' : 'none';
  });
}
