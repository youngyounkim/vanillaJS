import virtualList from './virtualList';
import tabList from './tabList';
import accordion from './accordion';

import './style.css';

function home() {
    const element = document.createElement('div');
    const tabListArr = [{ title: 'Item one' }, { title: 'Item two' }, { title: 'Item three' }];

    element.appendChild(virtualList(50));
    element.appendChild(tabList(tabListArr));
    element.appendChild(accordion(tabListArr));
    return element;
}

document.body.appendChild(home());
