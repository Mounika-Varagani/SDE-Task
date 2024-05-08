function filterBy(property, value) {
    const jobCards = document.querySelectorAll('#jobListings .col-md-4');
    jobCards.forEach(card => {
      const cardValue = card.getAttribute(`data-${property}`);
      if (property === 'role') {
        if (value === '' || cardValue === value) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      } else {
        if (value === '' || cardValue === value) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  }
  