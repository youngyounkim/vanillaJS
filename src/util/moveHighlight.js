const moveHighlight = (el, border) => {
    const newLeft = el.offsetLeft;
    const newWidth = el.offsetWidth;
    const newHeight = el.offsetHeight;

    if (newWidth === 0 && newHeight === 0) {
        border.style.left = newLeft + 'px';
        border.style.width = 92 + 'px';
        border.style.top = 48 + 'px';
    } else {
        border.style.left = newLeft + 'px';
        border.style.width = newWidth + 'px';
        border.style.top = newHeight + 'px';
    }
};

export default moveHighlight;
