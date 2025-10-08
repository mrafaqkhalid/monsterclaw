// Affiliate Marketing Page JavaScript


// Animated "Re" word typing effect
const words = ["Revenue", "Profit", "Business", "Traffic", "Leads", "Growth"];
let idx = 0, charIdx = 0, isDeleting = false;
const el = document.getElementById("animated-word");

// ✅ Prevent layout shift: reserve width for longest word
if (el) {
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b));
  el.style.display = "inline-block";
  el.style.minWidth = longestWord.length + "ch";
  el.style.whiteSpace = "nowrap"; // keep it inline, no wrap
}

function typeWord() {
  const word = words[idx];
  if (!el) return;

  if (isDeleting) {
    el.textContent = word.substring(0, charIdx--);
    if (charIdx < 1) {
      isDeleting = false;
      idx = (idx + 1) % words.length;
      setTimeout(typeWord, 600);
    } else {
      setTimeout(typeWord, 60);
    }
  } else {
    el.textContent = word.substring(0, charIdx++);
    if (charIdx > word.length) {
      isDeleting = true;
      setTimeout(typeWord, 1200);
    } else {
      setTimeout(typeWord, 90);
    }
  }
}
typeWord();


// Testimonials section slider logic can go here if needed  

 document.addEventListener('DOMContentLoaded', function () {
    // ✅ Dynamic testimonial data
    const testimonials = [
      { text: "MonsterClaw helped our business grow exponentially!", name: "John Doe", company: "Acme Corp" },
      { text: "Their marketing expertise is unmatched.", name: "Sarah Smith", company: "BrightAgency" },
      { text: "Highly professional team and great communication.", name: "Ali Khan", company: "TechVision" },
      { text: "Excellent results with SEO and PPC campaigns.", name: "Lisa Brown", company: "Marketify" },
      { text: "They completely transformed our online presence.", name: "Tom Clark", company: "BizPro" },
      { text: "Amazing experience, highly recommend!", name: "Emma Johnson", company: "CreativeEdge" },
      { text: "We saw instant improvements in our traffic.", name: "Michael Lee", company: "OptiGrow" },
      { text: "The best decision we made for our digital marketing.", name: "Fatima Noor", company: "NextPhase" },
      { text: "Results beyond expectations.", name: "David Kim", company: "GrowthLab" },
      { text: "Incredible attention to detail and creativity.", name: "Hassan Malik", company: "DigitalForce" },
      { text: "Top-notch support and delivery on time.", name: "Noor Fatima", company: "WebGrow" },
      { text: "Highly reliable and efficient.", name: "Usman Ali", company: "TechMate" },
      { text: "Exceeded our expectations at every step.", name: "Zainab Khan", company: "CodeCraft" },
      { text: "Professional and friendly service.", name: "Ahmed Raza", company: "BrightPixel" },
      { text: "Their results speak for themselves.", name: "Maria Anwar", company: "SoftEdge" },
    ];

    const slider = document.getElementById('testimonial-slider');
    const dotsContainer = document.getElementById('testimonial-dots');
    const wrapper = document.querySelector('.testimonial-wrapper');
    const perSlide = 3;
    const totalSlides = Math.ceil(testimonials.length / perSlide);
    let currentSlide = 0;

    // ✅ Generate testimonials dynamically
    testimonials.forEach(t => {
      const box = document.createElement('div');
      box.className =
        "testimonial-box bg-white rounded-xl shadow-lg mx-3 px-8 py-10 flex flex-col items-center w-[420px]";
      box.innerHTML = `
        <div class="quote-icon mb-4">
          <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
            <text x="0" y="32" font-size="32" fill="#facc15" font-family="Arial, sans-serif">”</text>
          </svg>
        </div>
        <p class="text-gray-700 text-center mb-8">${t.text}</p>
        <div class="w-8 h-1 bg-yellow-400 rounded mb-4"></div>
        <div class="font-bold text-lg text-center">${t.name}</div>
        <div class="text-gray-400 text-sm text-center">${t.company}</div>
      `;
      slider.appendChild(box);
    });

    // ✅ Create dots dynamically
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = `dot ${i === 0 ? 'bg-yellow-400' : 'bg-gray-300'}`;
      dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('.dot');

    // ✅ Show specific slide
    function showSlide(idx) {
      currentSlide = idx;
      const start = idx * perSlide;
      const end = start + perSlide;

      const boxes = slider.querySelectorAll('.testimonial-box');
      // Immediately hide all boxes
      boxes.forEach((box) => {
        box.style.display = 'none';
        box.classList.remove('active');
      });
      // Show only the current 3
      for (let i = start; i < end && i < boxes.length; i++) {
        boxes[i].style.display = 'flex';
        setTimeout(() => boxes[i].classList.add('active'), 10);
      }

      dots.forEach((dot, i) => {
        dot.classList.toggle('bg-yellow-400', i === idx);
        dot.classList.toggle('bg-gray-300', i !== idx);
      });
    }

    // ✅ Prevent page scroll when over testimonial section
    wrapper.addEventListener('wheel', (e) => {
      if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
        e.preventDefault(); // block page scroll
        showSlide(currentSlide + 1);
        animateScrollEffect();
      } else if (e.deltaY < 0 && currentSlide > 0) {
        e.preventDefault();
        showSlide(currentSlide - 1);
        animateScrollEffect();
      }
    }, { passive: false });

    // ✅ Dot click functionality
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        showSlide(i);
        animateScrollEffect();
      });
    });

    // ✅ Smooth feedback animation
    function animateScrollEffect() {
      slider.style.transform = 'scale(0.97)';
      slider.style.transition = 'transform 0.3s ease';
      setTimeout(() => {
        slider.style.transform = 'scale(1)';
      }, 300);
    }

    // ✅ Initial load
    showSlide(0);
  });