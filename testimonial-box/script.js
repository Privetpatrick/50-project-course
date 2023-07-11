const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".user-name");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam    inventore cum porro itaque explicabo beatae et ratione atque ab non qui     aspernatur numquam, laboriosam eum maiores error ipsa? Quidem, quas!",
  },
  {
    name: "user1",
    position: "position1",
    photo: "https://randomuser.me/api/portraits/women/41.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam    inventore cum porro itaque explicabo beatae et ratione atque ab non qui     aspernatur numquam, laboriosam eum maiores error ipsa? Quidem, quas!",
  },
  {
    name: "user2",
    position: "position2",
    photo: "https://randomuser.me/api/portraits/women/42.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam    inventore cum porro itaque explicabo beatae et ratione atque ab non qui     aspernatur numquam, laboriosam eum maiores error ipsa? Quidem, quas!",
  },
  {
    name: "user3",
    position: "position3",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam    inventore cum porro itaque explicabo beatae et ratione atque ab non qui     aspernatur numquam, laboriosam eum maiores error ipsa? Quidem, quas!",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
