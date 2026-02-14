const heartContainer = document.querySelector('.heart-background');
const noBtn = document.querySelector('#no-btn');
const yesBtn = document.querySelector('#yes-btn');
const questionScreen = document.querySelector('#question-screen');
const yesScreen = document.querySelector('#yes-screen');
const buttonsWrap = document.querySelector('.buttons');

function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = '❤';

  const size = Math.random() * 18 + 10;
  const left = Math.random() * 100;
  const duration = Math.random() * 8 + 8;
  const delay = Math.random() * 8;
  const drift = `${(Math.random() - 0.5) * 140}px`;

  heart.style.left = `${left}%`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `-${delay}s`;
  heart.style.setProperty('--drift', drift);

  heartContainer.appendChild(heart);
}

for (let i = 0; i < 36; i += 1) {
  createHeart();
}

function moveNoButton() {
  const wrapRect = buttonsWrap.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = Math.max(wrapRect.width - btnRect.width, 0);
  const maxY = 90;

  const randomX = Math.random() * maxX;
  const randomY = (Math.random() - 0.5) * maxY;

  noBtn.style.transform = `translate(${randomX - maxX / 2}px, ${randomY}px)`;
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('click', (event) => {
  event.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener('click', () => {
  questionScreen.classList.remove('screen--active');
  yesScreen.classList.add('screen--active');
});
