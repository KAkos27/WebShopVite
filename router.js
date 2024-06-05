import init from "./src/init.js";

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
  init();
};

const routes = {
  "/": "/index.html",
  "/admin": "/public/admin.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  $("#app").html(html);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
