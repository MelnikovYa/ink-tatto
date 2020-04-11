$(window).resize(function () {
  width = $(window).width();
  if (width >= 800) {
    let image1 = document.querySelector(".images-1");
    let image2 = document.querySelector(".images-2");
    let image3 = document.querySelector(".images-3");
    let image4 = document.querySelector(".images-4");
    let image5 = document.querySelector(".images-5");
    let image6 = document.querySelector(".images-6");
    let image7 = document.querySelector(".images-7");
    let image8 = document.querySelector(".images-8");
    let image9 = document.querySelector(".images-9");
    let image10 = document.querySelector(".images-10");
    let image11 = document.querySelector(".images-11");
    let image12 = document.querySelector(".images-12");
    let myArray = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
    ];
    image1.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image1) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image1.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image1.classList.remove("scale-effect");
      }
    });
    image2.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image2) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image2.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image2.classList.remove("scale-effect");
      }
    });
    image3.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image3) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image3.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image3.classList.remove("scale-effect");
      }
    });
    image4.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image4) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image4.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image4.classList.remove("scale-effect");
      }
    });
    image5.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image5) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image5.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image5.classList.remove("scale-effect");
      }
    });
    image6.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image6) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image6.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image6.classList.remove("scale-effect");
      }
    });
    image7.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image7) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image7.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image7.classList.remove("scale-effect");
      }
    });
    image8.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image8) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image8.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image8.classList.remove("scale-effect");
      }
    });
    image9.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image9) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image9.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image9.classList.remove("scale-effect");
      }
    });
    image10.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image10) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image10.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image10.classList.remove("scale-effect");
      }
    });
    image11.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image11) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image11.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image11.classList.remove("scale-effect");
      }
    });
    image12.addEventListener("mouseover", function () {
      for (i = 0; i < myArray.length; i++) {
        if (myArray[i] == image12) {
          continue;
        }
        myArray[i].classList.add("hover-effect");
      }
    });
    image12.addEventListener("mouseout", function () {
      for (i = 0; i < myArray.length; i++) {
        myArray[i].classList.remove("hover-effect");
        image12.classList.remove("scale-effect");
      }
    });
    for (let i = 0; i < myArray.length; i++) {
      myArray[i].addEventListener("click", function () {
        myArray[i].classList.add("scale-effect");
      });
    }
  }
});
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#up-Button").fadeIn();
    } else {
      $("#up-Button").fadeOut();
    }
  });
  $("#up-Button").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 700);
  });
});

$(function () {
  $(".header__menu-2").on("click", function () {
    $(".header__menu-2 ul").slideToggle();
  });
});
