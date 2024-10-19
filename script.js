document.addEventListener('DOMContentLoaded', () => {
    const artistData = [
      { name: 'Guns N Roses', image: './assets/artists/1.png' },
      { name: 'Black Sabbath', image: './assets/artists/2.png' },
      { name: 'Metallica', image: './assets/artists/3.png' },
      { name: 'Slipknot', image: './assets/artists/4.png' },
      { name: 'Linkin Park', image: './assets/artists/5.png' },
      { name: 'Korn', image: './assets/artists/6.png' }
    ];
  
    const albumData = [
      { name: 'Paranoid', artist: 'Black Sabbath', image: './assets/albums/1.png' },
      { name: 'The Number of the Beast', artist: 'Iron Maiden', image: './assets/albums/2.png' },
      { name: 'From Mars to Sirius', artist: 'Gojira', image: './assets/albums/3.png' },
      { name: 'Master of Puppets', artist: 'Metallica', image: './assets/albums/4.png' },
      { name: 'Slipknot', artist: 'Slipknot', image: './assets/albums/5.png' },
      { name: 'Follow the Leader', artist: 'Korn', image: './assets/albums/6.png' }
    ];
  
    const bestData = [
      { name: 'Depeche Mode', image: './assets/best/1.png' },
      { name: 'Pink Floyd', image: './assets/best/2.png' },
      { name: 'Rammstein', image: './assets/best/3.png' },
      { name: 'Linkin Park', image: './assets/best/4.png' },
      { name: 'Polyphia', image: './assets/best/5.png' },
      { name: 'Maldita', image: './assets/best/6.png' }
    ];
  
    const artistGrid = document.querySelector('.main-artists-grid');
    const albumGrid = document.querySelector('.main-albums-grid');
    const bestGrid = document.querySelector('.main-best-grid');
  
    artistData.forEach(artist => {
      const artistCard = document.createElement('div');
      artistCard.classList.add('artist-card');
      artistCard.innerHTML = `
        <img src="${artist.image}" alt="imagem do ${artist.name}">
        <h3>${artist.name}</h3>
        <p>Artist</p>
        <button class="main-play">
          <i class="fa-solid fa-play"></i>
        </button>
      `;
      artistGrid.appendChild(artistCard);
    });
  
    albumData.forEach(album => {
      const albumCard = document.createElement('div');
      albumCard.classList.add('albums-card');
      albumCard.innerHTML = `
        <img src="${album.image}" alt="capa do album ${album.name}">
        <h3>${album.name}</h3>
        <p>${album.artist}</p>
        <button class="main-play">
          <i class="fa-solid fa-play"></i>
        </button>
      `;
      albumGrid.appendChild(albumCard);
    });
  
    bestData.forEach(best => {
      const bestCard = document.createElement('div');
      bestCard.classList.add('best-card');
      bestCard.innerHTML = `
        <img src="${best.image}" alt="This is ${best.name}">
        <p>This is ${best.name}. The essential tracks, all in one playlist.</p>
        <button class="main-play">
          <i class="fa-solid fa-play"></i>
        </button>
      `;
      bestGrid.appendChild(bestCard);
    });
  
    // Move this inside the DOMContentLoaded event
    function addRedirectToAll(buttonClass, url) {
      const buttons = document.querySelectorAll(buttonClass);
      buttons.forEach(button => {
        button.onclick = function() {
          window.open(url, '_blank');
        };
      });
    }
    addRedirectToAll('.link-redirect', 'https://www.spotify.com/br-pt/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F');
  
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => nav.classList.toggle("active"));
  });
  