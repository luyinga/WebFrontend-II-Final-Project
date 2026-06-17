document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("register-modal");
  const closeBtn = document.getElementById("close-modal");

  const hasSeenModal = localStorage.getItem("registerModalShown");

  if (!hasSeenModal) {
    modal.classList.remove("hidden");
    localStorage.setItem("registerModalShown", "true");
  }

  closeBtn?.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});
