//show cart

(function(){
    let cartInfo=document.getElementById("cart-info");
    let cart=document.getElementById("cart");

    cartInfo.addEventListener("click",function(e){
        cart.classList.toggle("show-cart");
    });

})();
let productContainer=[];
// add item to the chart
let cartBtn=document.querySelectorAll(".store-item-icon");
(function(){

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
                productContainer.push(item);
                console.log(productContainer);
                let cartItem=document.createElement('div');
                cartItem.innerHTML=`
                <div class="allContainer">
                <div class="d-flex justify-content-between">
                    <img src="${item.fullPath}" class="img-fluid rounded-circle w-25" id="item-img" alt="">
                    <div class="item-text">
                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.finalPrice}</span>
                    </div>
                    <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i id="icon" class="fas fa-trash"></i>
                    </a>
                    </div>
                </div>`;
                let cart=document.getElementById('cart');
                let total=document.querySelector('.cart-buttons-container');
                cart.insertBefore(cartItem,total);
                alert("item added to the cart");
                showTotal();
            }
        });
    });


    //show Total
function showTotal()
{
    const total=[];
    const items=document.querySelectorAll(".cart-item-price");
    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    });

    let totalMoney=total.reduce(function(total,item)
    {
        total+=item;
        return total;
    },0);

    let finalMoney=totalMoney;
    document.getElementById("cart-total").textContent=finalMoney;
    document.querySelector(".item-total").textContent=finalMoney;
    document.getElementById("item-count").textContent=total.length;
}
})();
let cart_item=document.getElementsByClassName('cart-item');
let allContainer=document.getElementsByClassName("allContainer");
$("#clear-cart").click(function(){
    for(let i=0;i<allContainer.length;i++)
    {
    $(".allContainer").hide();
    }
    document.getElementById("cart-total").textContent=0;
    document.querySelector(".item-total").textContent=0;
    document.getElementById("item-count").textContent=0;
});

let searchInp=document.getElementById("search-item");
searchInp.onkeyup=function()
{
    search(name);
}

function search(product)
{
    let ser="";
    for(let i=0;i<productContainer.length;i++)
    {
        if(productContainer[i].name.includes(product))
        {
            ser+=`<div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-item="sweets">
            <div class="card ">
              <div class="img-container">
                <img src="${productContainer[i].fullPath}" alt="">
                <span class="store-item-icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </div>
              <div class="card-body">
                <div class="card-text d-flex justify-content-between text-capitalize">
                  <h5 id="store-item-name">${productContainer[i].name}</h5>
                  <h5 class="store-item-value">$ <strong id="store-item-price" class="font-weight-bold">${productContainer[i].finalPrice}</strong></h5>
                </div>
              </div>
            </div>
          </div>`
        }
    }
}