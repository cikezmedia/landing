const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
$(document).ready(function () {
  $(nav).click(function () {
    $(menu).toggleClass('show');
  });
});
