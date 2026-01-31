const heart = document.querySelector('.heart');
const music = document.getElementById('bgMusic');

const scenes = {
  heart: document.getElementById('scene-heart'),
  question: document.getElementById('scene-question'),
  plead: document.getElementById('scene-plead'),
  letter: document.getElementById('scene-letter')
};

const letterBox = document.getElementById('letterBox');
const effects = document.getElementById('effects');

const LETTER = [
  "Dear Cherry 🍒",
  "I love you so much more than i could ever fully explain and being with you is one of the greatest gifts in my life.",
  "You mean everything to me.",
  "You are incredibly beautiful and absolutely gorgeous inside and out.",
  "Love your smile, your eyes and the whole you baby.",
  "Lucky to call you mine.",
  "I love you, always and forever ♾️",
  "Always be My Muse 💐 😘",
  "Your Daddy"
];

function show(scene) {
  Object.values(scenes).forEach(s => s.classList.remove('active'));
  scenes[scene].classList.add('active');
}

heart.addEventListener('click', () => {
  heart.classList.add('split');
  music.play();
  setTimeout(() => show('question'), 1200);
});

document.getElementById('yesBtn').onclick = () => startLetter();
document.getElementById('pleadYes').onclick = () => startLetter();
document.getElementById('noBtn').onclick = () => show('plead');

function startLetter() {
  show('letter');
  letterBox.innerHTML = '';
  LETTER.forEach((line, i) => {
    setTimeout(() => {
      const p = document.createElement('p');
      p.textContent = line;
      letterBox.appendChild(p);
    }, i * 700);
  });
  startEffects();
}

function startEffects() {
  setInterval(() => {
    const f = document.createElement('div');
    f.className = 'flower';
    f.textContent = '🌸';
    f.style.left = Math.random() * 100 + 'vw';
    f.style.animationDuration = 4 + Math.random() * 3 + 's';
    effects.appendChild(f);
    setTimeout(() => f.remove(), 7000);
  }, 250);

  setInterval(() => {
    const h = document.createElement('div');
    h.className = 'mini-heart';
    h.textContent = '💖';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.top = '100vh';
    h.style.animationDuration = 5 + Math.random() * 3 + 's';
    effects.appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }, 400);
}
