var timeIntervalHideIcon = setInterval(timeIntervalHideIconTimer, 4000);

function timeIntervalHideIconTimer() {
    document.querySelectorAll('.ctIcon>a>p')[0].classList.toggle('hideElement');
    document.querySelectorAll('.ctIcon>a>p')[1].classList.toggle('hideElement');
}