"use strict";



/*
    Add envent on multiple elements
*/

const addEventOnElements = function(elements, eventType, callback){
    for (const elem of elements) elem.addEventListener(eventType,
        callback);
}


/*
    Toggle search box in moblie device || small screen
*/

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click" , function(){
    searchBox.classList.toggle("active");
})