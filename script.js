const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


/*product details */
var MainImg=document.getElementById("MainImg");
var smallimg=document.getElementsByClassName("small-img");

smallimg[0].onclick=function(){
    MainImg.src=smallimg[0].src;
}

smallimg[1].onclick=()=>{
    MainImg.src=smallimg[1].src;
}

smallimg[2].onclick=()=>{
    MainImg.src=smallimg[2].src;
}

smallimg[3].onclick=()=>{
    MainImg.src=smallimg[3].src;
}
//adding data to cart
let products=[
    {
        "id":1,
        "name":"Party Wear",
        "price":200,
        "image":"images/fea4.webp"
    },
    {
        "id":2,
        "name":"Party Wear",
        "price":200,
        "image":"images/party2.jpg"}
 ]
let listProductHTML=document.querySelector('.listProduct');
let list=[];
const initApp=()=>{
    fetch('product.json')
    .then(responce=>Response.json())
    .then(data=>{
        list=data;
   console.log(data);
    })
}
initApp();