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

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productImage = document.getElementById("productImage"); 
const addToCartBtn = document.querySelector(".add-to-cart__btn");

const [decreaseBtn, increaseBtn] = document.querySelectorAll(".product__counter button");
const counter = document.querySelector(".product__counter input");


const accordionBtns = document.querySelectorAll(".accordionBtn");
const accordionIcons = document.querySelectorAll(".accordionIcon");
const accordionItemTexts = document.querySelectorAll(".accordionItemText");

const toggleAccordionText = (index) => {
    accordionIcons[index].classList.toggle("rotate-180");
    accordionItemTexts[index].classList.toggle("hidden")
}

accordionBtns.forEach((accordionBtn, index) => {
    accordionBtn.addEventListener("click", () => {
    toggleAccordionText(index);
    });


});

let count = 0;
counter.value = count;
let cart =  JSON.parse(localStorage.getItem("cart")) || [];

const increaseProductCount = () => {
  count++
  counter.value = count;
};

const decreaseProductCount = () => {
  if (count > 1) {
    count--;
    counter.value = count;
  }
};

increaseBtn.addEventListener("click", () => {
   increaseProductCount();
});

decreaseBtn.addEventListener("click", () => {
  decreaseProductCount();
});
counter.addEventListener("input", (e) => {
  count = e.target.value;
})

addToCartBtn.addEventListener("click", () => {
  addToCart();

})


const product = data[localStorage.getItem("productId")-1];
console.log(product);

const displayProduct = () => {
  productName.textContent = product?.name;
  productPrice.textContent = product?.price + " USD";
  productImage.src = product.image;
} 

const addToCart = () => {
let existingProduct = cart.find((product) => product?.id !== cart.product?.id);

if(!existingProduct) {
  cart.push({id: product.id, quantity: count});
}

else if(existingProduct) {
  existingProduct.quantity = count;
}

localStorage.setItem("cart", JSON.stringify(cart));

console.log(cart);
}

displayProduct();

