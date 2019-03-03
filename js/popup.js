
var link = document.querySelector(".hotel-search-button");
var container = document.querySelector(".container-form");
var form = document.querySelector(".search-form");

var arrival = document.querySelector("[name=arrival]");
var departure = document.querySelector("[name=departure]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");

var popup = document.querySelector(".search-form");
var close = popup.querySelector(".hotel-search-button");


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
  popup.classList.add("modal-show");
  popup.classList.remove("modal-error");

  if (storage) {
    arrival.value = storage;
    departure.focus();
  } else {
    arrival.focus();
  }
});


popup.addEventListener("submit", function(evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    container.classList.remove("modal-error");
    container.offsetWidth = container.offsetWidth;
    container.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("arrival", arrival.value);
    }
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
