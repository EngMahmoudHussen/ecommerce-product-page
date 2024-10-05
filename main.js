let menu = document.querySelector('.menu');
let close = document.querySelector('.close');
let navLinks = document.querySelector('.nav-links');
let svg = document.querySelector('.svg');
let next = document.querySelector('.next');
let mainImag =document.querySelector('.main-imge :nth-child(3)');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let span = document.querySelector('.add .left span');
let btn = document.querySelector('.add .right button');
let navSpan = document.querySelector('.nav-right span');
let navRight = document.querySelector('.nav-right :nth-child(2)');
let cart = document.querySelector('.cart');
let empty = document.querySelector('.empty');
let product = document.querySelector('.product');
let Checkout = document.getElementById('Checkout');
let catagorey = document.querySelector('.catagorey');
let montag = document.querySelector('.montag');
let Delete = document.querySelector('.product .img-right img');
let allImges = document.querySelectorAll('.all-imges img');
console.log(allImges)
//start menu function//
menu.onclick = ()=>{
    navLinks.style.left = '0'
}
close.onclick = ()=>{ 
    navLinks.style.left = '-60%'
}
///end menu function//

// start left header function//
let imges = ["image-product-1.jpg","image-product-2.jpg","image-product-3.jpg","image-product-4.jpg"]
let numImge = 0;

next.onclick = ()=>{
    if(numImge < 3){
        numImge++;
        mainImag.src = `projects/images/${imges[numImge]}`

    }
}
svg.onclick = ()=>{  
    if(numImge > 0){
        numImge--;
        mainImag.src =`projects/images/${imges[numImge]}`
    }
}
for(let i =0; i < allImges.length; i++){
    allImges[i].onclick =()=>{
        mainImag.src =`projects/images/${imges[i]}`
        
    }

}

// end left header function//
//start add to left//
count = 0;
 minus.onclick = ()=>{
    if(count > 0){
        count--;
        span.innerHTML = count;
    }
 }
 plus.onclick = ()=>{
    if(count < 8){
        count++;
        span.innerHTML = count;

    }
 }
 //end add to left//
 //start add to right//
 btn.onclick = ()=>{
    showData();
    if(count > 0){
        navSpan.style.display = 'block'
        navSpan.innerHTML = count;
    }else{
        navSpan.style.display = 'none'
    }
 }
 navRight.onclick = ()=>{
    cart.classList.toggle('cart-toggle');
    showData()

 }
 function showData(){
    if(count > 0){
        empty.style.display = 'none';
        product.style.display = 'flex';
        Checkout.style.display = 'block';
        catagorey.innerHTML = count;
        montag.innerHTML = `$${count * 125}.00` 

    }
    else{
        empty.style.display = 'block';
        product.style.display = 'none';
        Checkout.style.display = 'none';
        

    }
 }
 Delete.onclick = ()=>{
    count--;
    span.innerHTML = count;
    navSpan.innerHTML = count;
    if(count == 0){
        navSpan.style.display = 'none';
    }
    showData();

 }


