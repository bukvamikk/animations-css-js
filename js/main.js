/*
 *  global site scripts
 */
window.addEventListener('DOMContentLoaded', function (e) {
    document.querySelector('hp-presentation').onclick = handlePresentationClick;
});

function handlePresentationClick(e) {
let current = document.querySelector('hp-slide.active');
let next = current.nextElementSibling;

if (next) {
    current.classList.remove('active');
    next.classList.add('active');
}
}