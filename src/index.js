(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }

        function underlines() {
        // start - 8.5% * font-size * line-height
        // step - ceil(font-size * line-height)
        // width - 1px
        // repeat - 8 times?
        let element = document.getElementsByClassName("reviews__text")[0];
        let line_height = parseFloat(window.getComputedStyle(element).lineHeight);
        let padding_height = parseFloat(window.getComputedStyle(element).paddingTop);
        let start = 0.085 * line_height;
        let step = Math.ceil(line_height);
        let width = 1;
        let repeat = 8;
        let full_height = padding_height + start + (width + step) * (repeat + 1);
        let padding_percentage = Math.round(10000 * padding_height / full_height) / 100;
        let start_percentage = Math.round(10000 * start / full_height) / 100;
        let step_percentage = Math.round(10000 * step / full_height) / 100;
        let width_percentage = Math.round(10000 / full_height) / 100;
        let s = "linear-gradient(";
        let line_color = "$review-text-underline-color";
        let background_color = "$review-text-background-color";
        // let line_color = "#E1E1E1";
        // let background_color = "#FAFAFA";
        s = s + background_color + " 0%, "
        for (let index = 0; index <= repeat; index++) {
            s = s + background_color + " " + (Math.round(100 * (padding_percentage + start_percentage + (width_percentage + step_percentage) * (index + 1))) / 100) + "%,";
            s = s + line_color + " " + (Math.round(100 * (padding_percentage + start_percentage + width_percentage * (index + 2) + step_percentage * (index + 1))) / 100) + "%,";
            s = s + background_color + " " + (Math.round(100 * (padding_percentage + start_percentage + width_percentage * (index + 2) + step_percentage * (index + 1))) / 100) + "%,";
        }
        s = s.slice(0, -1) + ")";
        element.setAttribute("background", s);
    }

    setInterval(function() {underlines()}, 10);

  })();