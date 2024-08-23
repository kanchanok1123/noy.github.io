document.addEventListener('DOMContentLoaded', function () {
    var ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            alert('Button Clicked!');
        });
    }
});
