//show cart

(function(){
    let cartInfo=document.getElementById("cart-info");
    let cart=document.getElementById("cart");

    cartInfo.addEventListener("click",function(e){
        cart.classList.toggle("show-cart");
    });

})();

// add item to the chart

(function(){
    let cartBtn=document.querySelectorAll(".store-item-icon");

    cartBtn.forEach(function(btn)
    {
        btn.addEventListener("click",function(e){
            if(e.target.parentElement.classList.contains("store-item-icon"))
            {
                let item={};
                let fullPath=e.target.parentElement.previousElementSibling.src;
                let name=e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                let price=e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                let finalPrice=price.slice(1);
                item.fullPath=fullPath;
                item.name=name;
                item.finalPrice=finalPrice;
                let cartItem=document.createElement('div');
                cartItem.classList.add('cart-item','d-flex','justify-content-between','text-capitalize','my-3');

                cartItem.innerHTML=`<img src="${item.fullPath}" class="img-fluid rounded-circle w-25" id="item-img" alt="">
                <div class="item-text">
                  <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                  <span>$</span>
                  <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.finalPrice}</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                  <i class="fas fa-trash"></i>
                </a>`;
                let cart=document.getElementById('cart');
                let total=document.querySelector('.cart-buttons-container');
                cart.insertBefore(cartItem,total);
                alert("item added to the cart");
                showTotals();
            }
        })
    })

    //show totals

    let items=document.querySelector(".cart-item-price");
    consol.log(items);
    /*
    function showTotals(){
        let total=[];
        let items=document.querySelector(".cart-item-price");
        consol.log(items);
        items.forEach(function(item){
            total.push(item.textContent);
        })
    }*/
})();