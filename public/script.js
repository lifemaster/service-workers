const loadBtn = document.getElementById('load-btn');
const imgContainer = document.getElementById('img-container');
const img = new Image();

loadBtn.addEventListener('click', e => {
  imgContainer.innerHTML = '';
  imgContainer.classList.remove('visible');

  loadImage('img.jpg')
    .then(response => {
      const imageURL = window.URL.createObjectURL(response);
      img.src = imageURL;
      imgContainer.appendChild(img);
      imgContainer.classList.add('visible');
    })
    .catch(err => console.error(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();

    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new Error(`Image didn't load successfully; error code: ${xhr.statusText}`));
      }
    }
  });
}