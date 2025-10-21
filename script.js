/*let search = document.querySelector(".searchbar");

document.querySelector("#search").onclick = () => {
  search.classList.toggle("active");
  favorite.classList.toggle.remove("active");
  delivery_truck_bolt.classList.toggle.remove("active");
  login.classList.toggle.remove("active");
};

let favorite = document.querySelector(".favorite");

document.querySelector("#favorite").onclick = () => {
  favorite.classList.toggle("active");
  search.classList.toggle.remove("active");
  delivery_truck_bolt.classList.toggle.remove("active");
  login.classList.toggle.remove("active");
};

let delivery_truck_bolt = document.querySelector(".delivery_truck_bolt");

document.querySelector("#delivery_truck_bolt").onclick = () => {
  delivery_truck_bolt.classList.toggle("active");
  search.classList.toggle.remove("active");
  favorite.classList.toggle.remove("active");
  login.classList.toggle.remove("active");
};

let login = document.querySelector(".login");

document.querySelector("#login").onclick = () => {
  login.classList.toggle("active");
  search.classList.toggle.remove("active");
  favorite.classList.toggle.remove("active");
  delivery_truck_bolt.classList.toggle.remove("active");
};

window.onscroll = () => {
  search.classList.toggle.remove("active");
  favorite.classList.toggle.remove("active");
  delivery_truck_bolt.classList.toggle.remove("active");
  login.classList.toggle.remove("active");
};*/
let search = document.querySelector(".searchbar");
let favorite = document.querySelector(".favorite");
let delivery_truck_bolt = document.querySelector(".delivery_truck_bolt");
let login = document.querySelector(".login");

document.querySelector("#search").onclick = () => {
  search.classList.toggle("active");
  favorite.classList.remove("active");
  delivery_truck_bolt.classList.remove("active");
  login.classList.remove("active");
};

document.querySelector("#favorite").onclick = () => {
  favorite.classList.toggle("active");
  search.classList.remove("active");
  delivery_truck_bolt.classList.remove("active");
  login.classList.remove("active");
};

document.querySelector("#delivery_truck_bolt").onclick = () => {
  delivery_truck_bolt.classList.toggle("active");
  search.classList.remove("active");
  favorite.classList.remove("active");
  login.classList.remove("active");
};

document.querySelector("#login").onclick = () => {
  login.classList.toggle("active");
  search.classList.remove("active");
  favorite.classList.remove("active");
  delivery_truck_bolt.classList.remove("active");
};

window.onscroll = () => {
  search.classList.remove("active");
  favorite.classList.remove("active");
  delivery_truck_bolt.classList.remove("active");
  login.classList.remove("active");
};
