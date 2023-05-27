const product=[
    {
        id: 0,
        image: 'rice2.jpg',
        title: 'Rice',
        price: 250,
    },
    {
        id: 1,
        image: 'flour.jpg',
        title:'Flour',
        price: 200,
    },
    {
        id: 2,
        image: 'sugur.jpg',
        title: 'Sugur',
        price: 150,
    },
    {
        id: 3,
        image:'moongh.jpg',
        title: 'Daal moongh',
        price: 280,
    },
    {
        id: 4,
        image:'download.jfif',
        title: 'Ketchup',
        price: 300,
    },
    {
        id: 5,
        image:'images.jfif',
        title: 'Soap',
        price: 150,
    },
    {
        id: 6,
        image:'1066827-1.jpg',
        title: 'Tooth paste',
        price: 250,
    },
    {
        id: 7,
        image:'grocerapp.webp',
        title: 'Mayonnaise',
        price: 450,
    },
    {
        id: 8,
        image:'breadrackLG_0.jpg',
        title: 'Bread',
        price: 180,
    },
    {
        id: 9,
        image:'pasta.jfif',
        title: 'Pasta',
        price: 350,
    },
    {
        id: 10,
        image:'downloa.jfif',
        title: 'Kheer',
        price: 200,
    },
    {
        id: 11,
        image:'noodles.jpg',
        title: 'Noodles',
        price: 450,
    },
    
];
const categories = [...new Set(product.map((item)=>
    {
        return item;
    }))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>
    {
        var{image, title, price}=item;
        return(
            `<div class='box'>
                <div class='img-box'>
                  <img class='images' src=${image}></image>
                </div>
                <div class ='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>`+
                "<button onclick= 'addtocart("+(i++)+")'>Add to Cart</button>"+
                `</div>
             </div>`
        )
   }).join(' ')
  



   var cart=[];
   function addtocart(a){
            cart.push({...categories[a]});
            displaycart();
   }
  function delElement(a){
    cart.splice(a, 1);
    displaycart();
  }
   function displaycart(a){
        let j=0 , total=0;
        document.getElementById("count").innerHTML= cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML= "Your cart is empty";
            document.getElementById("total").innerHTML= "$" +0+ ".00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "$ "+total+".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                    "<i class='fa fa-trash-o' onclick='delElement("+ (j++) +")'></i></div>"
                );
            }).join('');
        }
   

         
    }

































































   // const categories= [...new set(product.map((item)=>
//     {return item}))]
//     let i=0;
//     document.getElementById("root").innerHTML=categories.map((item)=>{
    
//         var {image, title, price} = item;
//         return(
//             `<div class='box'>
//             <div class='img-box'>
//             <img class='images' src=${image}></img>
//             </div>
//             <div class='bottom'>
//             <p>${title}</p>
//             <h2>$ ${price}.00</h2>`+
//             "<button onclick='addtocart("+(i++) +")'>Add To Cart</button>" + 
//             `</div>
//             </div>`
            
//         )
//     }).join(' ')