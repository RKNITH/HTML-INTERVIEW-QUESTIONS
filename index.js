// Toggle the display of answers when the button is clicked
const toggleButtons = document.querySelectorAll('.toggle-answer');

toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            this.textContent = 'Show Answer';
        } else {
            answer.style.display = 'block';
            this.textContent = 'Hide Answer';
        }
    });
});

// Dynamically set the current year in the footer
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
