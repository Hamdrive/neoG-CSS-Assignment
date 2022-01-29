const toggleBtn = document.querySelector(".button__badge-toggle");
const toggleBadge = toggleBtn.querySelector("span");

toggleBtn.addEventListener("click", () => {
  toggleBadge.classList.toggle("toggle");
});