export function toggleFooterVisibility() {
  const body = document.body;
  const scrollY = window.scrollY || window.pageYOffset;

  // Adjust the scroll threshold as needed
  const scrollThreshold = window.innerHeight * 0.65; // Set threshold to 65% of the viewport height

  if (scrollY > scrollThreshold) {
    body.classList.add('show-footer');
  } else {
    body.classList.remove('show-footer');
  }
}

// Attach the toggleFooterVisibility function to the window's scroll event
window.addEventListener('scroll', toggleFooterVisibility);

// Initial call to set the initial state based on the scroll position
toggleFooterVisibility();
