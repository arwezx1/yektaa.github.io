const evetBtn = document.getElementById("evet");
const hayirBtn = document.getElementById("hayir");
const cevap = document.getElementById("cevap");
const heartsContainer = document.getElementById("hearts");
const muzik = document.getElementById("muzik");
const container = document.querySelector(".container");

evetBtn.addEventListener("click", () => {
  cevap.innerText = "Ben de seni seviyordum! Yekta❤️";
  muzik.play();
  createHearts(40);

  container.style.transition = "opacity 2s ease";
  container.style.opacity = 0;
  setTimeout(() => {
    container.style.display = "none";
  }, 2000);
});

hayirBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  hayirBtn.style.position = "fixed";
  hayirBtn.style.left = `${x}px`;
  hayirBtn.style.top = `${y}px`;
});

function createHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
}
