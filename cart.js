// delete functionality

var deleteCartItemsButtons = document.querySelector('#cart-delete');

for (var i = 0; i < deleteCartItemsButtons; i++) {
    var button = deleteCartItemsButtons[i]

    button.addEventListener('click', function (event) {
       var buttonClicked = event.target

       buttonClicked.parentElement.parentElement.remove()
    })
}