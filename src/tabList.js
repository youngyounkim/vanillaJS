import clickEffect from './util/clickEffect';

function tabList(arr) {
    const element = document.createElement('ul');
    element.className = 'tab_wrap';
    let selectId;

    arr.forEach((el) => {
        const listItem = document.createElement('li');

        listItem.className = 'tab_item';

        const itemText = document.createElement('a');
        itemText.className = 'tab_item_title';
        itemText.textContent = el.title;

        listItem.onclick = () => {
            const target = document.getElementsByClassName('selected')[0];
            if (target) {
                target.classList.remove('selected');
            }
            selectId = el.title;
            listItem.className += ' selected';
        };

        clickEffect(listItem);
        listItem.appendChild(itemText);

        element.appendChild(listItem);
    });

    return element;
}

export default tabList;
