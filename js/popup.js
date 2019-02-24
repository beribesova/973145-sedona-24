'use strict';
var link = document.querySelector(".hotel-search-button");

var popup = document.querySelector(".search-form");
var close = popup.querySelector(".hotel-search-button");

var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("arrival");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function(evt) {
  evt.preventDefault();

  popup.classList.toggle("modal");
  popup.classList.remove("modal-error");

  if (storage) {
    arrival.value = storage;
    departure.focus();
  } else {
    arrival.focus();
  }
});

form.addEventListener("submit", function(evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal")) {
      popup.classList.toggle("modal");
      popup.classList.remove("modal-error");
    }
  }
});
