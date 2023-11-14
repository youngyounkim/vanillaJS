function clickEffect(el) {
    el.addEventListener('click', function (event) {
        event.stopPropagation();
        let x = event.clientX - el.getBoundingClientRect().left;
        let y = event.clientY - el.getBoundingClientRect().top;

        let rippleElement = document.createElement('span');
        rippleElement.className = 'click_effect';
        rippleElement.style.left = x + 'px';
        rippleElement.style.top = y + 'px';

        this.appendChild(rippleElement);
        setTimeout(function () {
            rippleElement.remove();
        }, 500);
    });
}

export default clickEffect;
