const newsletterForm = document.querySelector("#newsletter-form");

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#newsletter-email").value;

  localStorage.setItem("newsletterEmail", email);

  document.querySelector("#newsletter-message").textContent =
    "Thanks for subscribing to our newsletter!";

  newsletterForm.reset();
});
