function accordion(arr) {
    const element = document.createElement('ul');
    element.className = 'accordion_wrap';

    arr.forEach((el) => {
        const item = document.createElement('li');
        item.className = 'accordion_item';

        const itemTitleWrap = document.createElement('span');
        itemTitleWrap.className = 'accordion_item_title_wrap';

        const itemTitle = document.createElement('h3');
        itemTitle.className = 'accordion_item_title';
        itemTitle.textContent = el.title;

        const arrowIcon = document.createElement('div');
        arrowIcon.className = 'arrow';
        itemTitleWrap.appendChild(itemTitle);
        itemTitleWrap.appendChild(arrowIcon);

        item.appendChild(itemTitleWrap);
        const itemContent = document.createElement('p');
        itemContent.className = 'accordion_item_content';
        itemContent.textContent = el.content;
        item.appendChild(itemContent);

        let isClick = false;
        if (el.disabled === true) {
            // 아코디언이 선택 불가 상태인 경우 이벤트 미지정
            item.className += ' disabled';
        } else {
            item.addEventListener('click', () => {
                if (isClick) {
                    item.style.height = 24 + 'px';
                    item.classList.remove('accordion_item_select');
                    isClick = !isClick;
                    arrowIcon.style.transform = 'rotate(45deg)';
                } else {
                    item.className += ' accordion_item_select';
                    item.style.height = 40 + itemContent.offsetHeight + 'px';
                    isClick = !isClick;
                    arrowIcon.style.transform = 'rotate(225deg)';
                }
            });
        }
        element.appendChild(item);
    });
    return element;
}

export default accordion;
