import clickEffect from './util/clickEffect';

function virtualList(itemCount) {
    const element = document.createElement('ul');
    element.className = 'list_wrap';
    const listArr = Array.from({ length: itemCount }, (v, i) => `item ${i}`);

    listArr.forEach((el) => {
        const listItem = document.createElement('li');

        listItem.className = 'list_item';

        const itemText = document.createElement('p');
        itemText.className = 'list_item_title';
        itemText.textContent = el;
        clickEffect(listItem);
        listItem.appendChild(itemText);

        element.appendChild(listItem);
    });

    return element;
}

export default virtualList;
