import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as S,i as u}from"./assets/vendor-77e16229.js";const t=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),m=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]"),C=e=>{const a=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:s,minutes:c,seconds:y}};let d;const D=()=>{clearInterval(d),t.disabled=!0;const e=new Date(t.value);if(e<=new Date){u.error({title:"Error",message:"Please choose a date in the future",position:"topCenter"}),t.disabled=!1;return}d=setInterval(()=>{const i=new Date,r=e.getTime()-i.getTime();if(r<=0)clearInterval(d),m.textContent="00",f.textContent="00",h.textContent="00",p.textContent="00",u.success({title:"Success",message:"Countdown finished",position:"topCenter"}),t.disabled=!1,t.value="",n.disabled=!1;else{const{days:l,hours:a,minutes:s,seconds:c}=C(r);m.textContent=String(l).padStart(2,"0"),f.textContent=String(a).padStart(2,"0"),h.textContent=String(s).padStart(2,"0"),p.textContent=String(c).padStart(2,"0")}},1e3),n.disabled=!0};S(t,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:e=>{const o=e[0];o&&(o<=new Date?(u.error({title:"Error",message:"Please choose a date in the future",position:"topCenter"}),n.disabled=!0):n.disabled=!1)}});n.addEventListener("click",D);
//# sourceMappingURL=commonHelpers.js.map
