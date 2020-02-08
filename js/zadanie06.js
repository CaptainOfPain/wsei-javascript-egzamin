document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#button-1').addEventListener('click', function () {
        let ul = document.querySelector('#shopping-list');
        var li = document.createElement('li');
        li.appendChild(document.createTextNode('chleb'));
        ul.appendChild(li);
    })

    document.querySelector('#button-2').addEventListener('click', function () {
        let ul = document.querySelector('#shopping-list');
        if(ul.children.length === 0) {
            alert('Can\'t delete last element');
        }
        ul.removeChild(ul.lastElementChild);
    })

    document.querySelector('#button-3').addEventListener('click', function () {
        let ul = document.querySelector('#shopping-list');
        if(ul.children.length < 2) {
            alert('Can\'t copy second element');
        }
        ul.appendChild(ul.children[1].cloneNode(true));
    })
})