const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// If she clicks YES 💖 → go to the surprise page
yesBtn.addEventListener("click", () => {
  window.location.href = "surprise.html";
});

// The NO button tries to escape 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
