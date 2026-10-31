const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const toast = document.querySelector("#toast");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3600);
}

// The portfolio cards are concept placeholders until you add your own video files.
document.querySelectorAll(".play-button").forEach((button) => {
  button.addEventListener("click", () => {
    showToast("Replace this concept card with your own video before sharing your portfolio.");
  });
});

// Demo contact form: prepares a mailto draft. It does not send or store the information.
document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name").trim();
  const brand = form.get("brand").trim();
  const email = form.get("email").trim();
  const details = form.get("details").trim();

  const subject = encodeURIComponent(`UGC collaboration inquiry — ${brand}`);
  const body = encodeURIComponent(
    `Hi Irshad,\n\nMy name is ${name} from ${brand}.\nEmail: ${email}\n\nProject details:\n${details}\n\n`
  );
  // Update hello@example.com in index.html to your real business email.
  window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
});
