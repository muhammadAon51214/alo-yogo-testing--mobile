  const sliderWrapper = document.getElementById('sliderWrapper');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  
  const totalItems = sliderWrapper.children.length;
  const itemsPerView = 5;
  let currentIndex = 0;

  function updateSlider() {
    const itemWidth = sliderWrapper.children[0].offsetWidth + 20; // 20px gap
    const offset = currentIndex * itemWidth;
    sliderWrapper.style.transform = `translateX(-${offset}px)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalItems - itemsPerView;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsPerView) {
      currentIndex += itemsPerView;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= itemsPerView;
      updateSlider();
    }
  });

  // Initial call
  updateSlider();

//   Finishing Touches/slider-end
