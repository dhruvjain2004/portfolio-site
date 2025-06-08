const words = ["Dhruv Jain", "a Web Developer", "a Problem Solver"];
let i = 0, j = 0, currentWord = '', isDeleting = false;
const typingElement = document.getElementById('typing');

function type() {
  if (!isDeleting && j <= words[i].length) {
    currentWord = words[i].substring(0, j++);
    typingElement.innerHTML = currentWord;
    setTimeout(type, 200); // consistent typing speed
  } else if (isDeleting && j >= 0) {
    currentWord = words[i].substring(0, j--);
    typingElement.innerHTML = currentWord;
    setTimeout(type, 150); // consistent deleting speed
  } else if (!isDeleting && j > words[i].length) {
    isDeleting = true;
    setTimeout(type, 500); // shorter pause at end of full word
  } else if (isDeleting && j < 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 200);
  }
}
type();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Dark mode toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80
    },
    "color": {
      "value": "#00bcd4"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.1
    },
    "size": {
      "value": 3
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00bcd4",
      "opacity": 0.15,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
});

