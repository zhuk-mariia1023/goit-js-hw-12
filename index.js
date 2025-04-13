import{a as f,S as m,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="49660874-601210469fa4941a8e9bed6bf",y="https://pixabay.com/api/";async function h(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:r})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let v=new m(".gallery a");function L(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:p,downloads:d})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${t}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${i}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${p}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${d}</p>
          </div>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),v.refresh()}function b(){c.innerHTML=""}function w(){u.classList.add("show")}function S(){u.classList.remove("show")}const l=document.querySelector(".form"),q=l.querySelector('input[name="search-text"]');l.addEventListener("submit",function(o){o.preventDefault();const r=q.value.trim();if(l.reset(),!r){n.warning({message:"Please enter a search term!",position:"topRight"});return}b(),w(),h(r).then(s=>{s.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(s.hits)}).catch(s=>{n.error({message:"Oops! Something went wrong.",position:"topRight"}),console.error(s)}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
