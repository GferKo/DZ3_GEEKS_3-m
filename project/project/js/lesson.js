// PHONE CHECKER

const phoneInput = document.querySelector('#phone-input');
const phoneButton = document.querySelector('#phone-button');
const phoneResult = document.querySelector('#phone-result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.innerHTML = 'OK'
//         phoneResult.style.color = 'green';
//     } else {
//         phoneResult.innerHTML = 'ERROR'
//         phoneResult.style.color = 'red';
//     }
// }

//tab slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    });
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    });
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}


// DZ 3 task 1
let currentIndex = 0;

const autoSlide = () => {
    currentIndex = (currentIndex + 1) % tabContentBlocks.length;
    hideTabContent();
    showTabContent(currentIndex);
}

setInterval(autoSlide, 3000);