document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('button');
    for(let button of buttons) {
        button.addEventListener('click', function(e) {
            let text = e.target.getAttribute('data-text');
            document.querySelector('#container').innerText = text;
        })
    }
})