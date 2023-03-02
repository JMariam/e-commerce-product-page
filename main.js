if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

function ready() {

    var deleteCartItemsButtons = document.getElementsByClassName('cart-delete');

    for (var i = 0; i < deleteCartItemsButtons.length; i++) {
       var button = deleteCartItemsButtons[i];
       button.addEventListener('click', removeCartItem);        
    }

    var cartQuantity = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < cartQuantity.length; i++) {
        var input = cartQuantity[i]

        input.addEventListener('change', cartChanged);
    }

    var addToCartButton = document.querySelector('.add-cart');
    var button = addToCartButton;

    button.addEventListener('click', addToCartClicked);

    document.getElementsByClassName('check')[0].addEventListener('click', checkClicked)
}

// addtocart
function addToCartClicked(event) {
    var button = event.target
    var shopImg = button.parentElement.parentElement.parentElement.parentElement.parentElement
    var imgSrc = shopImg.getElementsByClassName('main-img')[0].src

    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('cart-title')[0].innerText;
    var price = shopItem.getElementsByClassName('cart-pricee')[0].innerText;
    var quantityy = shopItem.getElementsByClassName('num')[0].innerText;
    
    
    console.log(quantityy)
    addItemToCart(imgSrc, title, price, quantityy);
    updateTotal();
}

function addItemToCart(imgSrc, title, price, quantityy) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0];

    var cartRowContents = `
            <div class="cart-row flex justify-between items-center space-x-4 px-2">
              <img src="${imgSrc}" class="rounded-xl h-12 w-12" width="100%" id="cart-img" alt="">
              <div class="flex flex-col">
                <small class="text-GrayishBlue">${title}</small>
                <div class="flex space-x-1">
                  <small class="cart-price text-GrayishBlue">${price}</small>
                  <small class="cart-quantity text-GrayishBlue">${quantityy}</small>
                </div>
            </div>
              <img src="./images/icon-delete.svg" alt="" class="cart-delete hover:cursor-pointer">
            </div>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('cart-delete')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('change', cartChanged)
}


// quantity changed
function cartChanged(event) {
    var input = event.target
    updateTotal()
}


// delet cart items
function removeCartItem(event){
    var buttonClicked = event.target

       buttonClicked.parentElement.parentElement.remove();
        updateTotal();
}


// Update total functionality
function updateTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
     var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0

     for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var pricelement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]

        var price = parseFloat(pricelement.innerText.replace('$', ''))
        var quantity = quantityElement.innerText.replace('*', '')
        total = total + (price * (1/2 * quantity)) 
     }
    //  total = Math.round(total * 100) / 100
     document.getElementsByClassName('cart-total')[0].innerText = '$' + total
 }


//  checkout 
function checkClicked() {
    alert('Thank you for checking out!')
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateTotal()
}




// cart toggle
const cartIcon = document.getElementsByClassName('cart-icon')[0];
const cartI = document.getElementsByClassName('cart')[0];

cartIcon.addEventListener('click', function () {
    cartI.classList.toggle ('cart-open')
})

// mobile menu
const menu = document.querySelector('#menu');
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');

openBtn.addEventListener('click', () => {
    menu.style.left = '0'
    
})

closeBtn.addEventListener('click', () => {
    menu.style.left = '-100%'
    
})

// Gallery
const mainImg = document.getElementsByClassName('main-img')[0];
const smallImg = document.getElementsByClassName('small-img')

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src
}
smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src
    
}
smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src
    
}
smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src
   
}


// smallImg border toggle
// var smallImage = document.getElementsByClassName('small-img');
// for(i = 0; i < smallImage.length; i++){
				
//     smallImage[i].addEventListener('click', function () {
//             this.classList.toggle('border')
//     })
    
// }

// card

function toggleClass(el) {
    const kids = document.querySelector('.small-images').children;

    for (let i = 0; i < kids.length; i++) {
        kids[i].className = 'small-img'
        el.className = "small-img border"
        
    }
}

// increment & decrement
const num = document.querySelector('.num');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

let a = 0

plus.addEventListener('click', function () {
    a++;
    // a = (a < 10) ? "0" + a : a;
    num.innerText = a;
})


minus.addEventListener('click', function () {
   if (a > 1) {
    a--;
    // a = (a < 10) ? "0" + a : a;
    num.innerText = a;

   }
})
