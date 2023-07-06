const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

panel.addEventListener("click", (e) => {
  if (
    e.target.parentNode.classList.contains("rating") ||
    e.target.classList.contains("rating")
  ) {
    removeActive();
    if (e.target.classList.contains("rating")) {
      e.target.classList.add("active");
      selectedRating = e.target.children[1].innerHTML;
    } else {
      e.target.parentNode.classList.add("active");
      selectedRating = e.target.nextElementSibling.innerHTML;
    }
  }
});

sendBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br />
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
});

function removeActive() {
  const active = panel.querySelector(".active");
  active.classList.remove("active");
}
