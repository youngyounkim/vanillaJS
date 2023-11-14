const moveHighlight = (el, border) => {
    // 탭 버튼을 누를 때 border의 위치를 변경하기 위한 함수
    const newLeft = el.offsetLeft;
    const newWidth = el.offsetWidth;
    const newHeight = el.offsetHeight;

    if (newWidth === 0 && newHeight === 0) {
        // 최초 위치를 잡기 위한 코드
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
