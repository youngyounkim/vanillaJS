import virtualList from './virtualList';
import './style.css';

function component() {
    const element = document.createElement('div');

    element.appendChild(virtualList(50));
    return element;
}

document.body.appendChild(component());
