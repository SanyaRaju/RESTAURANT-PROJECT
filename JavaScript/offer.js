
document.addEventListener("DOMContentLoaded", () => {

  const animatedElements = document.querySelectorAll(
    ".animate, .animate-left, .animate-right, .animate-zoom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  animatedElements.forEach(el => observer.observe(el));

});
