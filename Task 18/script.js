let cartCount = 0

function addToCart(productName){
    cartCount++
    document.getElementById("cartCount").innerText = cartCount

    let msg = document.getElementById("cartMsg")
    msg.innerText = productName + " added to cart!"
    msg.style.display = "block"

    setTimeout(function(){
        msg.style.display = "none"
    }, 2000)
}
