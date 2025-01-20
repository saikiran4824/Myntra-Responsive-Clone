        let currentIndex = 0;
        const images = document.querySelectorAll('#image-carousel img');
        const dots = document.querySelectorAll('.dot');

        function showImage(index) {
          currentIndex = index;
          updateCarousel();
        }

        function updateCarousel() {
          const carousel = document.getElementById('image-carousel');
          carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

          dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
              // Add 'bg-gray-900' class to the active dot
              dot.classList.add('bg-gray-900');
            } else {
              // Remove 'bg-gray-900' class and add 'bg-gray-500' to inactive dots
              dot.classList.remove('bg-gray-900');
              dot.classList.add('bg-gray-500');
            }
          });
          }
        setInterval(() => {
          currentIndex = (currentIndex + 1) % images.length;
          updateCarousel();
        }, 3000);
        updateCarousel();
      

  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('hidden');
    if (dropdown.classList.contains('hidden')) {
      chevronIcon.classList.remove('rotate-0');
    } else {
      chevronIcon.classList.add('rotate-180');
    }
  }
  function toggleMenu() {
    window.scrollTo(0, 0);
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenu.classList.toggle('open');
    
    hamburger.classList.toggle('active');
    
    if (mobileMenu.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
      document.body.style.overflow = ''; 
    }
  }
function toggleChevron(chevronId) {
  const chevron = document.getElementById(chevronId);
  
  if (chevron.style.transform === 'rotate(180deg)') {
    chevron.style.transform = 'rotate(0deg)';
  } else {
    chevron.style.transform = 'rotate(180deg)';
  }
}

  
