const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let   lastCheck;

function checkChecked(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastCheck) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastCheck = this;
}

checkboxes.forEach((cBox) => {
    cBox.addEventListener('click', checkChecked);
})