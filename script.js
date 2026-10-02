// ====== EDIT THIS ======
// Your WhatsApp number: country code + number, digits only (no +, spaces or dashes).
// Example for India: 919876543210
const WHATSAPP_NUMBER = "9686119309";
// =======================

const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Floating chat button
document.getElementById("waFloat").href = waLink("Hi! I saw your website and I'd like to talk about a project.");

// Contact form -> opens WhatsApp with the message filled in
document.getElementById("waForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const type = document.getElementById("type").value;
  const extra = document.getElementById("msg").value.trim();

  let text = `Hi! I'm ${name}. I'm looking for ${type.toLowerCase()}.`;
  if (extra) text += `\n\n${extra}`;

  window.open(waLink(text), "_blank", "noopener");
});

// Little interactive button in the hero mock browser
const mockBtn = document.getElementById("mockBtn");
const mockNote = document.getElementById("mockNote");
mockBtn.addEventListener("click", () => {
  const on = mockBtn.classList.toggle("on");
  mockBtn.textContent = on ? "Nice, it works!" : "Click me";
  mockNote.textContent = on ? "Every detail is interactive." : "Built with HTML, CSS & JavaScript";
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
