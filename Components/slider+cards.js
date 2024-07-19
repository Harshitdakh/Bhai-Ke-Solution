document.addEventListener('DOMContentLoaded', function() {
    const gradeIXCards = document.querySelectorAll('.card[data-grade="IX"]');
    const gradeXCards = document.querySelectorAll('.card[data-grade="X"]');

    const gradeIXRadio = document.getElementById('radio-1');
    const gradeXRadio = document.getElementById('radio-2');

    gradeIXCards.forEach(card => card.style.display = 'block');
    gradeXCards.forEach(card => card.style.display = 'none');

    gradeIXRadio.addEventListener('change', function() {
        if (this.checked) {
            gradeIXCards.forEach(card => card.style.display = 'block');
            gradeXCards.forEach(card => card.style.display = 'none');
        }
    });

    gradeXRadio.addEventListener('change', function() {
        if (this.checked) {
            gradeIXCards.forEach(card => card.style.display = 'none');
            gradeXCards.forEach(card => card.style.display = 'block');
        }
    });
});
// alert("Please")