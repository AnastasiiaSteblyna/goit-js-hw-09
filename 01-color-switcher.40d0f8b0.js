!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=null;function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(){t.style.backgroundColor=r(),o=setInterval((function(){t.style.backgroundColor=r()}),1e3),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(o),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.40d0f8b0.js.map