// 📩 CONTACT (smooth scroll)
function contact() {
  document.querySelector(".contact").scrollIntoView({
    behavior: "smooth"
  });
}

// 🌙 DARK / LIGHT MODE
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";

document.body.appendChild(toggleBtn);

let dark = true;

toggleBtn.onclick = () => {
  if (dark) {
    document.body.style.background = "#f1f5f9";
    document.body.style.color = "#000";
    toggleBtn.innerText = "☀️ Mode";
  } else {
    document.body.style.background = "#0f172a";
    document.body.style.color = "#fff";
    toggleBtn.innerText = "🌙 Mode";
  }
  dark = !dark;
};

// 🎬 SCROLL ANIMATION
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < trigger) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// boshlanishda yashirib qo‘yamiz
sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "0.6s";
});

// 📅 YEAR (agar qo‘shmoqchi bo‘lsang)
const footer = document.createElement("footer");
footer.style.textAlign = "center";
footer.style.padding = "20px";
footer.innerHTML = `© ${new Date().getFullYear()} Muhammadsodiq`;

document.body.appendChild(footer);