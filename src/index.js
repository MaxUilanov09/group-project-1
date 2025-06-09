(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
      review1: document.querySelector("[review-button-1]"),
      review2: document.querySelector("[review-button-2]"),
      review3: document.querySelector("[review-button-3]"),
      reviewWrap1: document.querySelector("[review-wrap-1]"),
      reviewWrap2: document.querySelector("[review-wrap-2]"),
      reviewWrap3: document.querySelector("[review-wrap-3]"),
      reviewWrap4: document.querySelector("[review-wrap-4]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    refs.review1.addEventListener("click", swapReview1);
    refs.review2.addEventListener("click", swapReview2);
    refs.review3.addEventListener("click", swapReview3);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }

    function toggleSwap() {
        refs.reviewWrap1.classList.toggle("reviews__swap");
        refs.reviewWrap2.classList.toggle("reviews__swap");
        refs.reviewWrap3.classList.toggle("reviews__swap");
        refs.reviewWrap4.classList.toggle("reviews__swap");
        console.log("HEEEY");
    }

    function swapReview1() {
        toggleSwap();
    }

    function swapReview2() {
        toggleSwap();
    }

    function swapReview3() {
        toggleSwap();
    }
  })();