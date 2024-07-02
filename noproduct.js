"use strict"

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
