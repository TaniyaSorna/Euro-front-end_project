// Faq
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});
// footer
document.addEventListener("DOMContentLoaded", (event) => {
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const date = now.toLocaleDateString(); // Get date in locale-specific format

    document.getElementById(
      "current-time"
    ).textContent = `${date} ${hours} :${minutes} :${seconds}`;
  }
  updateTime(); // Initial call to set time immediately
  setInterval(updateTime, 1000); // Update time every second
});

// popup
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById("popup").style.display = "flex";
  });
