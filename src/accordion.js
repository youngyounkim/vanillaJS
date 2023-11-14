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
        itemContent.className = '';
        itemContent.style.display = 'none';

        if (el.disabled === 'true') {
            item.className += ' disabled';
        } else {
            item.addEventListener('click', (e) => {
                if (itemContent.style.display === 'none') {
                    itemContent.style.display = 'block';
                } else {
                    itemContent.style.display = 'none';
                }
            });
        }
        element.appendChild(item);
    });
    return element;
}

export default accordion;
