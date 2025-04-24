const click = document.querySelector('.click');
const giftBox = document.querySelector('.gift-box');
const shadow = document.querySelector('.shadow');
const giftContainer = document.querySelector('.gift-container');
const img = document.querySelector('.img');

click.addEventListener('click', () => {
    if (click.className === "click") {
        click.classList.add('active');
        giftBox.classList.add('active');
        shadow.classList.add('active');
        giftContainer.classList.add('active');
        img.classList.add('active');
        img.classList.remove('active2');
    } else {
        click.classList.remove('active');
        giftBox.classList.remove('active');
        shadow.classList.remove('active');
        giftContainer.classList.remove('active');
        img.classList.remove('active');
        img.classList.add('active2');
    }
})