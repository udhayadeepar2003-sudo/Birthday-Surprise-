let step = 0;

// 🎵 Music
let music = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");

function playMusic() {
  music.play();
}

// 🚀 START FLOW
function start() {
  step++;

  let text = document.getElementById("text");
  let photo = document.getElementById("photo");

  if (step == 1) {
    text.innerHTML = "🎉 Happy Birthday Dear Friend!";
    balloons();
  }

  else if (step == 2) {
    text.innerHTML = "💖 You are Special!";
    photo.style.display = "block";
    photo.src = "https://i.imgur.com/1X5ZQZb.jpg";
  }

  else if (step == 3) {
    text.innerHTML = "🎂 Wishing You Success & Happiness!";
    fireworks();
  }

  else {
    text.innerHTML = "🎁 Surprise Completed 💖";
  }
}

/* 🎈 Balloons */
function balloons() {
  for (let i = 0; i < 25; i++) {
    let b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 100 + "%";
    b.style.background = randomColor();
    document.body.appendChild(b);
  }
}

function randomColor() {
  let colors = ["red","blue","green","yellow","pink","orange"];
  return colors[Math.floor(Math.random() * colors.length)];
}

/* 🎇 FIREWORKS */
function fireworks() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4
    });
  }

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "yellow";

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
      p.y += 2;
    });

    requestAnimationFrame(draw);
  }

  draw();
}