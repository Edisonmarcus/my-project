// List of image URLs
const images = [
    "elephant.jpg",
    "tiger.jpg",
    "deer.jpg",
    "zibra.jpg",

  ];
  
  // Get references to HTML elements
  const currentImage = document.getElementById('current-image');
  const prevButton = document.getElementById('prev-btn');
  const nextButton = document.getElementById('next-btn');
  
  // Current image index
  let currentIndex = 0;
  
  // Function to update the displayed image
  function updateImage() {
    currentImage.src = images[currentIndex];
  }
  
  // Event listener for the "Previous" button
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });
  
  // Event listener for the "Next" button
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
  
  // Initialize with the first image
  updateImage();
  