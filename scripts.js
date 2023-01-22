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