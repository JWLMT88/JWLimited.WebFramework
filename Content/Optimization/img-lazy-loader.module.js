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
var ImageLoader = /*#__PURE__*/ (function () {
  function ImageLoader(img) {
    this.img = img;
    this.wrapImage();
    this.container = this.img.closest(".image-container");
    this.progressBar = this.container.querySelector(".loading-progress");
    this.statusElement = this.container.querySelector(".visually-hidden");
    this.setupListeners();
  }
  var _proto = ImageLoader.prototype;
  _proto.wrapImage = function wrapImage() {
    var container = document.createElement("div");
    container.className = "image-container";
    var progressBar = document.createElement("div");
    progressBar.className = "loading-progress";
    var statusElement = document.createElement("span");
    statusElement.className = "visually-hidden";
    statusElement.setAttribute("aria-live", "polite");
    statusElement.textContent = "Image loading";
    this.img.parentNode.insertBefore(container, this.img);
    container.appendChild(this.img);
    container.appendChild(progressBar);
    container.appendChild(statusElement);

    // Store original src and set data-src
    this.img.setAttribute("data-src", this.img.src);
    this.img.removeAttribute("src");
  };
  _proto.setupListeners = function setupListeners() {
    var _this = this;
    this.img.addEventListener("load", function () {
      return _this.handleImageLoad();
    });
    this.img.addEventListener("error", function () {
      return _this.handleImageError();
    });
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              _this.loadImage();
              observer.unobserve(_this.container);
            }
          });
        },
        {
          rootMargin: "100px"
        }
      );
      observer.observe(this.container);
    } else {
      this.loadImage();
    }
  };
  _proto.loadImage = function loadImage() {
    var _this2 = this;
    var src = this.img.getAttribute("data-src");
    if (src) {
      this.simulateSlowNetwork(function () {
        _this2.img.src = src;
      });
    }
  };
  _proto.simulateSlowNetwork = function simulateSlowNetwork(callback) {
    var _this3 = this;
    var progress = 0;
    var interval = setInterval(function () {
      progress += Math.random() * 10;
      if (progress >= 100) {
        clearInterval(interval);
        callback();
      }
      _this3.updateProgress(Math.min(progress, 100));
    }, 200);
  };
  _proto.updateProgress = function updateProgress(progress) {
    this.progressBar.style.width = progress + "%";
    this.statusElement.textContent =
      "Image loading: " + Math.round(progress) + "%";
  };
  _proto.handleImageLoad = function handleImageLoad() {
    this.container.classList.add("loaded");
    this.statusElement.textContent = "Image loaded successfully";
  };
  _proto.handleImageError = function handleImageError() {
    this.container.classList.add("error");
    this.statusElement.textContent = "Image failed to load";
  };
  return ImageLoader;
})();
