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




