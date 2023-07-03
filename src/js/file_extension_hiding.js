var path = window.location.pathname;
var newPath = path.replace(/\.[^.]+$/, '');

if (newPath !== path) {
  window.location.replace(newPath);
}
