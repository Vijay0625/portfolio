// scrolling
document.querySelectorAll('a.nav-link') // Find all navbar links
  .forEach(link => {                    // For each link...
    link.addEventListener('click', function(e) { // When clicked...
      e.preventDefault();              // Stop the default jump behavior
      const target = document.querySelector(this.getAttribute('href')); 
      // Find the section that matches the link's href (like #about)

      target.scrollIntoView({ behavior: 'smooth' }); 
      // Scroll to that section smoothly
    });
  });


// image 
document.addEventListener('DOMContentLoaded', function () {
  const aboutImage = document.querySelector('#about img');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }

  function handleScroll() {
    if (isInViewport(aboutImage)) {
      aboutImage.classList.add('fade-in-up');
    } else {
      aboutImage.classList.remove('fade-in-up'); // Optional: reset when out of view
    }
  }

  window.addEventListener('scroll', handleScroll);
});


// text effect
document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('.scroll-animate');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function handleScroll() {
    animatedElements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible'); // Optional: reset when out of view
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger on load
});