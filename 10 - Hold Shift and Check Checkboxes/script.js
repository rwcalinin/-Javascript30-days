'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const inbox = document.querySelector('.inbox'),
          item = inbox.querySelectorAll('.item'),
          checkbox = inbox.querySelectorAll('input');

    checkbox.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.target.classList.toggle('--checked');
            let checkboxArr = [...checkbox];
            checkChecked(checkboxArr);
        });
    });

    function checkChecked(cbArr) {
        console.log(cbArr);
        
    }

});