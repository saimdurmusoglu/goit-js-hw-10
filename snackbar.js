import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-DHwbnsIA.js";document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();const o=e.currentTarget,t=parseInt(o.elements.delay.value,10),r=o.elements.state.value;f(t,r).then(s=>{i.success({title:"✅ Success",titleColor:"#ffffff",message:`Fulfilled promise in ${s}ms`,iconUrl:"./ok.svg",iconColor:"#ffffff",backgroundColor:"#59a10d",messageColor:"#ffffff",progressBarColor:"#326101",position:"topRight",overlayColor:"rgba(181,234,124,1)",timeout:3e3})}).catch(s=>{i.error({title:"❌ Error",titleColor:"#ffffff",message:`Rejected promise in ${s}ms`,iconUrl:"./error.svg",iconColor:"#ffffff",backgroundColor:"#ef4040",messageColor:"#ffffff",progressBarColor:"#b51b1b",position:"topRight",overlayColor:"rgba(255,190,190,1)",timeout:3e3})}),o.reset()});function f(e,o){return new Promise((t,r)=>{setTimeout(()=>{o==="fulfilled"?t(e):r(e)},e)})}document.addEventListener("DOMContentLoaded",()=>{const e=document.createElement("style");e.textContent=`
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
  `,document.head.appendChild(e)});
//# sourceMappingURL=snackbar.js.map
