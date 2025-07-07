function enterSite() {
  document.querySelector('.intro').style.display = 'none';
  document.querySelector('.content').classList.remove('hidden');

  const audio = document.getElementById("bgmusic");
  if (audio) audio.play();

  let count = localStorage.getItem('visits') || 0;
  count++;
  localStorage.setItem('visits', count);
  document.getElementById('counter').textContent = count;
}
