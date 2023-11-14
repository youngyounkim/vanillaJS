function clickEffect(el) {
    // 아이템 클릭했을 때 클릭한 위치에 파동 이벤트가 발생하도록 하는 기능
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
