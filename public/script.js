// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(registration => console.log('Service worker has been registered: ', registration))
    .catch(err => console.error(err));
}

const loadBtn = document.getElementById('load-btn');
const imgContainer = document.getElementById('img-container');

loadBtn.addEventListener('click', e => {
  const img = document.createElement('img');

  img.setAttribute('src', 'img.jpg');
  imgContainer.appendChild(img);
  imgContainer.classList.add('visible');

  loadBtn.classList.add('hidden');
});