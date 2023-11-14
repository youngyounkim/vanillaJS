import clickEffect from './util/clickEffect';
import moveHighlight from './util/moveHighlight';

function tabList(arr) {
    const header = document.createElement('header');
    header.className = 'tab_header';

    const element = document.createElement('ul');
    element.className = 'tab_wrap';

    let selectId = arr[0].title;

    const content = document.createElement('p');
    content.className = 'tab_item_content';
    const selectItem = arr.find((el) => el.title === selectId);
    content.textContent = selectItem.title;

    const border = document.createElement('div');
    border.className = 'highlight';

    arr.forEach((el, idx) => {
        const listItem = document.createElement('li');

        listItem.className = 'tab_item';

        listItem.textContent = el.title;

        listItem.onclick = () => {
            const target = document.getElementsByClassName('selected')[0];
            if (target) {
                target.classList.remove('selected');
            }
            selectId = el.title;
            listItem.className += ' selected';
            moveHighlight(listItem, border);
            const selectItem = arr.find((el) => el.title === selectId);

            if (selectItem) {
                content.textContent = selectItem.title;
            }
        };

        clickEffect(listItem);
        if (idx === 0) {
            listItem.className += ' selected';
            moveHighlight(listItem, border);
        }
        element.appendChild(listItem);
        element.appendChild(border);
    });
    header.appendChild(element);
    header.appendChild(content);
    return header;
}

export default tabList;
