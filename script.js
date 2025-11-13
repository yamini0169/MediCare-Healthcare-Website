// Medicine search functionality
const searchBox = document.getElementById('searchBox');
const medicines = document.querySelectorAll('.medicine-grid .card');

searchBox.addEventListener('keyup', () => {
  const query = searchBox.value.toLowerCase();
  medicines.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    card.style.display = name.includes(query) ? 'block' : 'none';
  });
});
