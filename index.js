import{a as p,S as d,i as n}from"./assets/vendor-Pp936Fs7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="58348391-58ffa1f34c1ed01641d0de533",y="https://pixabay.com/api/";async function h(s){return(await p.get(y,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),f=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(s){const o=s.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:a,comments:m,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${i}" alt="${e}" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${t}</p>
            <p class="info-item"><b>Views</b> ${a}</p>
            <p class="info-item"><b>Comments</b> ${m}</p>
            <p class="info-item"><b>Downloads</b> ${u}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",o),b.refresh()}function v(){l.innerHTML=""}function w(){f.classList.add("is-visible")}function S(){f.classList.remove("is-visible")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const i=new FormData(c).get("search-text").trim();i&&(v(),w(),h(i).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits)}).catch(r=>{n.error({message:r.message||"Something went wrong. Please try again.",position:"topRight"})}).finally(()=>{S()}))});
//# sourceMappingURL=index.js.map
