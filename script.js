document.addEventListener('DOMContentLoaded', function() {
    // FADE-IN ANIMATION USING INTERSECTION OBSERVER
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.1
    };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
  
  // CONTACT FORM HANDLER
  function submitForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const message = document.getElementById('form-message').value;
    
    // Here, you might send data to a real backend, API, or email service
    console.log('Form submitted:', { name, email, message });
  
    alert(`Thanks for reaching out, ${name}! I'll get back to you soon.`);
  
    // Clear form fields
    document.getElementById('form-name').value = '';
    document.getElementById('form-email').value = '';
    document.getElementById('form-message').value = '';
  }

  function openResumePopup(event) {
    // Prevent the default link behavior
    event.preventDefault();
  
    // Define custom width, height, and optional features
    const width = 800;
    const height = 600;
    const features = `width=${width},height=${height},scrollbars=yes,resizable=yes`;
  
    // Open the pop-up
    window.open('Resume.pdf', 'resumePopup', features);
  }

  function showHobbyImages(hobby) {
    const galleryContainer = document.getElementById("hobby-gallery");
    galleryContainer.innerHTML = ""; // Clear previous images

    // Define multiple images for each hobby
    const hobbyImages = {
        "photography": ["images/hobbies/photography1.jpg", "images/hobbies/photography2.jpg"],
        "hiking": ["images/hobbies/hiking1.jpg", "images/hobbies/hiking2.jpg"],
        "cooking": ["images/hobbies/cooking1.jpg"],
        "skiing": ["images/hobbies/music1.jpg"],
        "travel": ["images/hobbies/travel1.jpg"]
    };

    // Check if images exist for the selected hobby
    if (hobbyImages[hobby]) {
        hobbyImages[hobby].forEach(imgSrc => {
            let imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.alt = hobby + " image";
            galleryContainer.appendChild(imgElement);
        });
    }
}

  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('resume-toggle');
    const resumePanel = document.getElementById('resume-panel');
  
    toggleButton.addEventListener('click', () => {
      // Toggle the "open" class
      resumePanel.classList.toggle('open');
    });
  });
