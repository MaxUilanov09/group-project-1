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
      reviewWrap5: document.querySelector("[review-wrap-5]"),
      reviewWrap6: document.querySelector("[review-wrap-6]"),
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

    function toggleSwap(i) {
        refs.reviewWrap1.classList.toggle("reviews__swap" + i);
        refs.reviewWrap2.classList.toggle("reviews__swap" + i);
        refs.reviewWrap3.classList.toggle("reviews__swap" + i);
        refs.reviewWrap4.classList.toggle("reviews__swap" + i);
        refs.reviewWrap5.classList.toggle("reviews__swap" + i);
        refs.reviewWrap6.classList.toggle("reviews__swap" + i);
        console.log("HEEEY");
    }

    function swapReview1() {
        if (!refs.reviewWrap1.classList.contains("reviews__swap1")) {
            toggleSwap(1);
        }
        if (refs.reviewWrap1.classList.contains("reviews__swap2")) {
            toggleSwap(2);
        }
        if (refs.reviewWrap1.classList.contains("reviews__swap3")) {
            toggleSwap(3);
        }
    }

    function swapReview2() {
        if (refs.reviewWrap1.classList.contains("reviews__swap1")) {
            toggleSwap(1);
        }
        if (!refs.reviewWrap1.classList.contains("reviews__swap2")) {
            toggleSwap(2);
        }
        if (refs.reviewWrap1.classList.contains("reviews__swap3")) {
            toggleSwap(3);
        }
    }

    function swapReview3() {
        if (refs.reviewWrap1.classList.contains("reviews__swap1")) {
            toggleSwap(1);
        }
        if (refs.reviewWrap1.classList.contains("reviews__swap2")) {
            toggleSwap(2);
        }
        if (!refs.reviewWrap1.classList.contains("reviews__swap3")) {
            toggleSwap(3);
        }
    }
  })();