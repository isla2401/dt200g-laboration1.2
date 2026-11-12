"use strict";

// Hämta DOM-element
const menuEl = document.querySelector("#menu"); // Menyn
const menuBtn = document.querySelector("#menu-button"); // Menyknappen
const menuBtnIcon = menuBtn.querySelector(".menu-icon"); // Ikonen/bilden på menyknappen

// När mobilmeny-knappen klickas på
menuBtn.addEventListener("click", togglemenu);

// Växla mellan öppen och stängd mobilmeny
function togglemenu() {
	if (menuEl.classList.contains("open")) {
		menuEl.classList.remove("open");
		menuBtnIcon.src = "images/menu.svg";
	} else {
		menuEl.classList.add("open");
		menuBtnIcon.src = "images/x-filled.svg";
	}
}
