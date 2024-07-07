"use strict"

const data = [
    {
      id: 1,
      name: "puffer jacket",
      image:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/6666/644/305/738537c6f8a6f0154f291325abee2b38-6666644305_2_4_0.jpg?imwidth=1920&impolicy=bershka-itxmediumlow&imformat=chrome",
      price: "89",
      category: "Jacket",
      color: "yellow",
      sizes: ["xs", "s", "m", "l", "xl"],
    },
    {
      id: 2,
      name: "zipped jumper",
      image:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/7336/623/800/3cff9417825ad0b50d0804ae249358fd-7336623800_2_4_0.jpg?imwidth=1920&impolicy=bershka-itxmediumlow&imformat=generic",
      price: "89",
      category: "Sweater",
      color: "black",
      sizes: ["xs", "s", "m", "l", "xl"],
    },
    {
      id: 3,
      name: "textured sweater",
      image:
        "https://static.bershka.net/4/photos2/2024/V/0/2/p/7335/623/513/8c4e84f0b46d295163e82317c8e76b03-7335623513_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic",
      price: "79",
      category: "Sweater",
      color: "green",
      sizes: ["xs", "s", "m", "l", "xl"],
    },
    {
      id: 4,
      name: "baggy jeans",
      image:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/5415/335/800/ea6818ec458051e6a0fcfefaca9c5afb-5415335800_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome",
      price: "109",
      category: "Pants",
      color: "gray",
      sizes: ["xs", "s", "m", "xl"],
    },
    {
      id: 5,
      name: "vintage jeans",
      image:
        "https://static.bershka.net/4/photos2/2024/V/0/2/p/5394/534/428/840d8b0640170bc135ae28d2e5e25d32-5394534428_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome",
      price: "89",
      category: "Jeans",
      color: "blue",
      sizes: ["xs", "s", "m", "l", "xl"],
    },
    {
      id: 6,
      name: "leather jacket",
      image:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/6692/310/800/2e42f27b0b8fde0feaa06aeffe8cddec-6692310800_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic",
      price: "109",
      category: "Jacket",
      color: "black",
      sizes: ["xs", "s", "m", "l", "xl"],
    },
    {
      id: 7,
      name: "shiny puffer jacket",
      image:
        "https://static.bershka.net/4/photos2/2024/V/0/2/p/1900/226/501/fd47beaba918dff008b932b818815ca9-1900226501_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome",
      price: "149",
      category: "Jacket",
      color: "green",
      sizes: ["xs", "s", "m", "l", "xl"],
    },
    {
      id: 8,
      name: "boxy-fit sweater",
      image:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/7348/623/627/72280f3478fbdcb92cb24da1033cc8e4-7348623627_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium&imformat=chrome",
      price: "79",
      category: "Sweater",
      color: "pink",
      sizes: ["xs", "s", "m", "l", "xl"],
    },
    {
      id: 9,
      name: "high-neck jumper",
      image:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/7542/693/612/a66a6267efae2b65e5da3c78d27b60ad-7542693612_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium&imformat=chrome",
      price: "79",
      category: "Sweater",
      color: "purple",
      sizes: ["xs", "s", "m", "l", "xl"],
    },
    {
      id: 10,
      name: "polo sweater",
      image:
        "https://static.bershka.net/4/photos2/2023/I/0/2/p/7949/596/515/b3c4977f28bf813596a48504f3f4f46c-7949596515_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium&imformat=chrome",
      price: "79",
      category: "Sweater",
      color: "green",
      sizes: ["xs", "s", "m", "l", "xl"],
    },
  ];


const cartItemList = document.querySelector(".cart__list");
const cartTotalPrice = document.querySelector(".cart__total__price");
const bucketEl = document.getElementById("bucket");

let cart2 = [];

const fetchCartFromLocalStorage = () => {

}
const getCartItems = () => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    data.forEach((product) => {
        cartItem.forEach((cartItem) => {
            if(cartItem.id === product.id) {
                cart2.push({ ...product, quantity: cartItem.quantity});
            };
        });
    });
    // console.log(cart2);

};
fetchCartFromLocalStorage();
getCartItems();
getTotalPrice();


const getTotalPrice = () => {
   cart2.map((cartItem) => cartItem.price * cartItem.quantity).reduce((prev, curr) => prev + curr, 0);

   cartTotalPrice.textContent = totalPrice + "USD"
}

const displayCartItems = () => {
  cart2.forEach((cartItem) => {
  cartItemList.innerHTML += `<div class="flex gap-5 cart__item">
  <div class="cart__item__image">
    <img src="./images/image 19 (1).png" alt="t-shirt">
  </div>
<div>                                     
  <div class="mb-[125px] cart__item__info">
    <div class="mb-[20px]">
                                                         
      <h3 class="text-[20px] font-bold mb-[10px] cart__item__name">Boxy fit Pop Smoke T-shirt</h3>
      <p class="text-[16px] font-bold text-[#1d1d1d] cart__item__category">T-shirts</p> 
    </div>
                                            
  <div class="flex gap-[20px] mb-[20px] cart__item__description">
      <button class="h-[30px] w-[30px] border-2 border-[#1d1d1d] bg-[#1d1d1d] rounded-[50%] cart__item__color"></button>
      <button class="h-[30px] w-[48px] border-2 border-[#1d1d1d] bg-[#1d1d1d] rounded-[15px] text-[12px] font-bold text-[#fff] cart__item__size" >S</button>
  </div>
                        
  <div class="cart__item__price">
      <p class="text-[24px] font-medium text-[#1d1d1d]">2 x 13.99 USD | <span class="font-bold">27.98 USD</span> </p>
  </div>
  </div>

  <div>                  
  <div class="flex gap-4 mb-[20px] cart__counter">
    <button class="text-[24px] font-bold">-</button>
    <p class="text-[24px] font-bold">2</p>
    <button class="text-[24px] font-bold">+</button>
  </div>
    <button class="flex justify-between py-[11.5px] px-[16px] border-2 rounded-[8px] border-[#1d1d1d] bg-[#1d1d1d] gap-[70px] remove__btn">
      <p class="text-[#fff] text-[16px] font-black " >REMOVE</p>
      <i class="fa-solid fa-minus text-[#1d1d1d] border-2 border-white bg-[#ffff] rounded-[50%] h-[20px] w-[20px]"></i>
    </button>
  </div>
  </div>
  </div>`
    });
};

