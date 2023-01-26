window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".open_menu").addEventListener("click", function () {
        document.querySelector(".mob_menu").classList.add("mob_menu_visible");
    });
    document.body.addEventListener("click", function (e) {
        if (!e.target.closest(".open_menu")) {
            document.querySelector(".mob_menu").classList.remove("mob_menu_visible");
        }
    });
});
window.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".toogle input").addEventListener("change", function(e){
      if(e.target.checked) {
         document.body.classList.add("dark_theme");
      } else {
         document.body.classList.remove("dark_theme");
      }
    });
  });
  window.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".toogle_mob input").addEventListener("change", function(e){
      if(e.target.checked) {
         document.body.classList.add("dark_theme");
      } else {
         document.body.classList.remove("dark_theme");
      }
    });
  });