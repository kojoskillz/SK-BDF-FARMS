// auto-slide
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;


function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Change slide every 3 seconds



// scroll_to_top
function scrollToTop() {
 window.scrollTo(0,0);
}

// testimonial_slider
//Testimonial Data
const testimonials = [
  {
    name: "Asante Ebenezer",
    job: "Teacher,Ghana Education Service",
    image: "pic1.png",
    testimonial:
      "SK BDF farms is one of the best farmlands i've come across.They are reliable,transparent and offer the best quality products.",
  },
  {
    name: "Alfred Boateng",
    job: "Developer, TechCrew",
    image: "pic2.jpg",
    testimonial:
      "In terms of quality and reliablity they are always  available. Will recommend them anytime.",
  },
  {
    name: "Kofi Kwao",
    job: "Nurse,Ghana Health Service",
    image: "pic3.jpg",
    testimonial:
      "Never a waste of time if you really want to enjoy your farm produce in peace. Their customer services is a top notch",
  },
  {
    name: "Kwadwo Nyarko",
    job: "Software Developer,SkillzLab",
    image: "pic4.png",
    testimonial:
     "Look no further when you want quality farm produce.SK BDF farms is the best."
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;

// email
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Send the email
  $to = "skbdf02@gmail.com";
  $subject = "New message from contact form";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Error sending message.";
  }
}
?>
