"use strict";

/*
   ------------------------------------------------------------------------------
   Copyright (c) 2024 JW Limited. All rights reserved.

   Project: JWLimited.WebFramework
   Module: Content.Optimization
   File: img-lazy-loader.module.js
   Company: JW Limited (licensed)
   Author: Joe Valentino Lengefeld (CEO)

   This software is proprietary to JW Limited and constitutes valuable 
   intellectual property. It is entrusted solely to employees named above
   and may not be disclosed, copied, reproduced, transmitted, or used in 
   any manner outside of the scope of its license without prior written
   authorization from JW Limited.

   ------------------------------------------------------------------------------
*/
function handleImageLoad(container, img) {
  setTimeout(function () {
    container.setAttribute("image", "async-loaded");
    img.classList.add("loaded");
  }, 500);
}

document.addEventListener("DOMContentLoaded", () => 
{
  document.querySelectorAll("img").forEach(function (img) 
  {
    console.log("[IMAGE Wrapper] Wrapping Image:" + img.src);
    var container = document.createElement("div");
    container.className = "image-container rounded-lg object-cover hover-scale";
    img.parentNode.insertBefore(container, img);
    container.appendChild(img);
    img.addEventListener("load", function () {
      return handleImageLoad(container, img);
    });
    if (img.complete) handleImageLoad(container, img);
  });

  setupListeners();
});

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
              if (node.nodeName === 'IMG') {
                console.log("[IMAGE Wrapper] Wrapping Image:" + img.src);
                var container = document.createElement("div");
                container.className = "image-container rounded-lg object-cover hover-scale";
                img.parentNode.insertBefore(container, img);
                container.appendChild(img);
                img.addEventListener("load", function () {
                  return handleImageLoad(container, img);
                });
                if (img.complete) handleImageLoad(container, img);
              } else if (node.nodeType === Node.ELEMENT_NODE) {
                  node.querySelectorAll('img:not(.loaded)').forEach(img => {
                      new ImageLoader(img);
                  });
              }
          });
      }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

function setupListeners() {
  
  if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  this.loadImage();
                  observer.unobserve(this.container);
              }
          });
      }, { rootMargin: '100px' });
      observer.observe(this.container);
  } else {
      this.loadImage();
  }
} 