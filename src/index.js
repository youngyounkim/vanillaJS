import virtualList from './virtualList';
import tabList from './tabList';
import accordion from './accordion';

import './style.css';

const tabListArr = [{ title: 'Item one' }, { title: 'Item two' }, { title: 'Item three' }];
const accordionArr = [
    {
        title: 'Item one',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title: 'Item two',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title: 'Item three',
        disabled: true,
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    }
];

function home() {
    const element = document.createElement('div');

    element.appendChild(virtualList(50));
    element.appendChild(tabList(tabListArr));
    element.appendChild(accordion(accordionArr));

    return element;
}

document.body.appendChild(home());
