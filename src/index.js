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
        let font_size = window.getComputedStyle(element).fontSize;
        let line_height = window.getComputedStyle(element).lineHeight;
        let start = 0.085 * font_size * line_height;
        let step = Math.ceil(font_size * line_height);
        let width = 1;
        let repeat = 8;
        let full_height = start + (width + step) * repeat;
        let start_percentage = 100 * start / full_height
        let step_percentage = 100 * step / full_height
        let width_percentage = 100 / full_height;
        let s = "linear-gradient(";
        // let line_color = "$review-text-underline-color";
        // let background_color = "$review-text-background-color";
        let line_color = "lc";
        let background_color = "bg";
        s = s + background_color + " 0%, "
        console.log(s);
        for (let index = 0; index < repeat; index++) {
            s = s + line_color + " " + (start + (width + step) * index) + "%,";
            s = s + background_color + " " + (start + width * (index + 1) + step * index) + "%,";
            console.log(index, (start + (width + step) * index), (start + width * (index + 1) + step * index));
        }
    }
  })();