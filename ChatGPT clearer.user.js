// ==UserScript==
// @name         ChatGPT clearer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script which helps to clear all Chats in ChatGPT in just one click.
// @author       You
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("load", (event) => {
        setTimeout(()=> {
            document.querySelector('nav a').insertAdjacentHTML('afterend', ` <a id="delAllBtn" class="flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 mb-1 flex-shrink-0" > <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > <polyline points="3 6 5 6 21 6"></polyline> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" ></path> <line x1="10" y1="11" x2="10" y2="17"></line> <line x1="14" y1="11" x2="14" y2="17"></line> </svg> Delete all chats</a>`);
        },5000);
    });
    document.addEventListener("click", function(e){
        if(e.target.closest("#delAllBtn")){
            var chats = document.querySelectorAll('nav li');
            for (var i = 0; i < chats.length; i++) {
                setTimeout(() => {
                    document.querySelectorAll('ol li.relative a')[0].click();
                }, i * 3000 + 500);
                setTimeout(() => {
                    document.querySelectorAll('ol li.relative a button')[1].click();
                }, i * 3000 + 1200);
                setTimeout(() => {
                    document.querySelectorAll('ol li.relative a button')[0].click();
                }, i * 3000 + 1800);
            }
        }
    });
})();