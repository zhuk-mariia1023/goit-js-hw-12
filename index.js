import{a as P,S as q,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const O="49660874-601210469fa4941a8e9bed6bf",R="https://pixabay.com/api/",E=15;async function m(o,t=1){const s={key:O,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:E};return(await P.get(R,{params:s})).data}const h=document.querySelector(".gallery"),g=document.querySelector(".loader");let M=new q(".gallery a");function y(o){const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:a,comments:b,downloads:S})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${r}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${a}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${b}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${S}</p>
          </div>
        </div>
      </li>
    `).join("");h.insertAdjacentHTML("beforeend",t),M.refresh()}function $(){h.innerHTML=""}function v(){g.classList.add("show")}function L(){g.classList.remove("show")}const c=document.querySelector(".form"),x=c.querySelector('input[name="search-text"]'),f=document.querySelector(".load-more");let l=1,d="",u=0;c.addEventListener("submit",async o=>{o.preventDefault();const t=x.value.trim();if(!t){n.warning({message:"Please enter a search term!",position:"topRight"});return}d=t,l=1,$(),p(),v(),c.reset();try{const s=await m(d,l);u=s.totalHits,s.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(y(s.hits),s.hits.length<u&&w())}catch(s){n.error({message:"Oops! Something went wrong.",position:"topRight"}),console.error(s)}finally{L()}});f.addEventListener("click",async()=>{l+=1,v(),p();try{const o=await m(d,l);y(o.hits);const t=Math.ceil(u/15);l>=t?(n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),p()):w(),A()}catch(o){n.error({message:"Oops! Something went wrong.",position:"topRight"}),console.error(o)}finally{L()}});function w(){f.classList.remove("hidden")}function p(){f.classList.add("hidden")}function A(){const o=document.querySelector(".gallery-item");if(o){const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
