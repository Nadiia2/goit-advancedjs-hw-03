import{S as u,i as n}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function d(o){const r="https://pixabay.com/api",s=new URLSearchParams({key:"43435649-9580751e4a32127232b1b0155",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),a=await fetch(`${r}/?${s}`);if(!a.ok)throw new Error(a.status);return(await a.json()).hits}function h(o){return o.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${a}"
            width="360"
          />
        </a>
        <div class="info">
          <div class="block">
            <h2 class="title">Likes</h2>
            <p class="amount">${e}</p>
          </div>
          <div class="block">
            <h2 class="title">Views</h2>
            <p class="amount">${t}</p>
          </div>
          <div class="block">
            <h2 class="title">Comments</h2>
            <p class="amount">${i}</p>
          </div>
          <div class="block">
            <h2 class="title">Downloads</h2>
            <p class="amount">${m}</p>
          </div>
        </div>
      </li>`).join("")}const p=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),f=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,captions:!0,captionSelector:"img",captionType:"attr"});p.addEventListener("submit",g);function g(o){o.preventDefault();const r=o.currentTarget.elements.input.value;if(c.innerHTML="",!r.trim()){n.show({theme:"light",message:"Search field can not be empty!",messageSize:"20px",messageColor:"#f80303",backgroundColor:"#ebe268",position:"topRight",timeout:5e3});return}l.classList.remove("hidden-loader"),d(r).then(s=>{s.length===0&&n.show({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageColor:"#f80303",backgroundColor:"#ebe268",position:"topRight",timeout:5e3}),c.innerHTML=h(s),f.refresh()}).catch(y).finally(()=>l.classList.add("hidden-loader")),o.currentTarget.reset()}function y(o){console.error(o),c.innerHTML="",n.show({theme:"dark",message:"Sorry, there is a problem with connection to the server.",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"center",timeout:5e3})}
//# sourceMappingURL=commonHelpers.js.map
