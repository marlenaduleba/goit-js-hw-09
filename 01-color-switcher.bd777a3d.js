!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body"),a=null;e.addEventListener("click",(function(){a=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!1,e.disabled=!0})),t.addEventListener("click",(function(){clearInterval(a),t.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.bd777a3d.js.map
