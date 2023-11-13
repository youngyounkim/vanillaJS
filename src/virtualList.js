function virtualList(itemCount) {
    const element = document.createElement('ul');
    const listArr = Array.from({ length: itemCount }, (v, i) => `item ${i}`);

    listArr.forEach((el) => {
        const listItem = document.createElement('li');
        listItem.textContent = el;
        listItem.className = 'list_item';

        console.log(el);
        element.appendChild(listItem);
    });

    return element;
}

export default virtualList;
