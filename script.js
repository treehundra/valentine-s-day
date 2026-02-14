document.body.classList.add('no-scroll');

const heartContainer = document.querySelector('.heart-background');
const noBtn = document.querySelector('#no-btn');
const yesBtn = document.querySelector('#yes-btn');
const questionScreen = document.querySelector('#question-screen');
const yesScreen = document.querySelector('#yes-screen');
const buttonsWrap = document.querySelector('.buttons');
const envelopeWrap = document.querySelector('#envelope-wrap');
const bouquet = document.querySelector('#bouquet');

function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = '❤';

  const size = Math.random() * 18 + 10;
  const left = Math.random() * 100;
  const duration = Math.random() * 8 + 10;
  const delay = Math.random() * 10;
  const drift = `${(Math.random() - 0.5) * 180}px`;

  heart.style.left = `${left}%`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `-${delay}s`;
  heart.style.setProperty('--drift', drift);

  heartContainer.appendChild(heart);
}

for (let i = 0; i < 42; i += 1) createHeart();

function moveNoButton() {
  const wrapRect = buttonsWrap.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = Math.max(wrapRect.width - btnRect.width, 0);
  const maxY = 80;

  const randomX = Math.random() * maxX - maxX / 2;
  const randomY = (Math.random() - 0.5) * maxY;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

['mouseenter', 'mousedown', 'touchstart', 'click'].forEach((eventName) => {
  noBtn.addEventListener(eventName, (event) => {
    event.preventDefault();
    moveNoButton();
  });
});

yesBtn.addEventListener('click', () => {
  questionScreen.classList.remove('screen--active');
  yesScreen.classList.add('screen--active');

  // запускаем анимации только после клика "Да"
  requestAnimationFrame(() => {
    bouquet?.classList.add('bouquet--show');

    setTimeout(() => {
      envelopeWrap?.classList.add('open');
    }, 450);
  });
});
