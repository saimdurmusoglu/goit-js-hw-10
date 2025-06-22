import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as g,i as y}from"./assets/vendor-DHwbnsIA.js";const u=document.getElementById("datetime-picker"),o=document.querySelector("button[data-start]"),S=document.querySelector("[data-days]"),C=document.querySelector("[data-hours]"),x=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let n=null,i=null;function a(t){return String(t).padStart(2,"0")}function r(t){const f=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:f,hours:m,minutes:p,seconds:h}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));g(u,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(o.disabled=!0,y.error({title:"Hata",titleColor:"#fff",message:"Please choose a date in the future",iconUrl:"../img/error.svg",iconColor:"#fff",backgroundColor:"#ef4040",messageColor:"#fff",progressBarColor:"#4375ff",position:"topRight"}),n=null):(o.disabled=!1,n=e)},locale:{firstDayOfWeek:1}});o.addEventListener("click",()=>{n&&(o.disabled=!0,u.disabled=!0,i=setInterval(()=>{const e=n-new Date;if(e<=0){clearInterval(i),l(0);return}l(e)},1e3))});function l(t){const{days:e,hours:s,minutes:c,seconds:d}=r(t);S.textContent=String(e).padStart(2,"0"),C.textContent=a(s),x.textContent=a(c),b.textContent=a(d)}document.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("style");t.textContent=`
      .iziToast > .iziToast-close {
        background: url('./close.svg') no-repeat center center;
        background-size: 16px 16px;
        width: 24px;
        height: 24px;
        color: transparent;
        opacity: 1;
        top: 14px;
        right: 14px;
      }
    `,document.head.appendChild(t)});
//# sourceMappingURL=timer.js.map
