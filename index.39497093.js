let e=0;const n=document.querySelector(".slider-line"),t=document.querySelector(".slider-count");document.querySelector(".slider-next").addEventListener("click",(function(){e+=770,e>770&&(e=0),n.style.left=-e+"px",0===e?t.innerHTML="01":770===e&&(t.innerHTML="02")})),document.querySelector(".slider-prev").addEventListener("click",(function(){e-=770,e<0&&(e=770),n.style.left=-e+"px",0===e?t.innerHTML="01":770===e&&(t.innerHTML="02")}));
//# sourceMappingURL=index.39497093.js.map
