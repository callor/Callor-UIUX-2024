document.addEventListener("DOMContentLoaded", function (e) {
  const contents = document.querySelector("section#contents");

  const slider = document.querySelector("div.slider");
  const imgSlider = tns({
    container: slider,
    nav: false,
    tems: 1,
    mouseDrag: true,
    // loop: true,
    // autoplay: true,
    // autoplayHoverPause: true,
    // autoplayTimeout: 2500,
    controls: false,
  });

  const imgSliderPrev = document.querySelectorAll("ul.sliderControl button.prev");
  const imgSliderNext = document.querySelectorAll("ul.sliderControl button.next");

  for (let i = 0; i < imgSliderPrev.length; i++) {
    imgSliderPrev[i].onclick = () => {
      imgSlider.goTo("prev");
    };
  }

  for (let i = 0; i < imgSliderNext.length; i++) {
    imgSliderNext[i].onclick = () => {
      imgSlider.goTo("next");
    };
  }

  const slidePageNumCurrent = document.querySelectorAll("p.num > span.current");
  const slidePageNumTotal = document.querySelectorAll("p.num > span.total");
  imgSlider.events.on("transitionEnd", function () {
    slidePageNumCurrent.innerText = imgSlider.getInfo().slideCount;
    slidePageNumTotal.innerText = imgSlider.getInfo().index;
  });

  const ideafestival = scrollMonitor.create(document.querySelectorAll("div.title.ideafestival"));
  const audiotechnica = scrollMonitor.create(document.querySelectorAll("div.title.at"));
  const shopick = scrollMonitor.create(document.querySelectorAll("div.title.shopick"));
  const brothumb = scrollMonitor.create(document.querySelectorAll("div.title.brothumb"));

  ideafestival.enterViewport(function () {
    for (let i = 0; i < 4; i++) {
      document.querySelector("div.slider").children[i].querySelector("img").src = "./common/images/img_ideafestival0" + (i + 1) + ".jpg";
      // contents.style.background = "url('./common/images/bg_ideafestival.jpg') fixed no-repeat";
    }
  });

  audiotechnica.enterViewport(function () {
    for (let i = 0; i < 4; i++) {
      document.querySelector("div.slider").children[i].querySelector("img").src = "./common/images/img_at0" + (i + 1) + ".jpg";
      // contents.style.background = "url('./common/images/bg_at.jpg') fixed no-repeat";
    }
  });

  shopick.enterViewport(function () {
    for (let i = 0; i < 4; i++) {
      document.querySelector("div.slider").children[i].querySelector("img").src = "./common/images/img_shopick_0" + (i + 1) + ".jpg";
      // contents.style.background = "url('./common/images/bg_shopick.jpg') fixed no-repeat";
    }
  });

  brothumb.enterViewport(function () {
    for (let i = 0; i < 4; i++) {
      document.querySelector("div.slider").children[i].querySelector("img").src = "./common/images/img_brothumb0" + (i + 1) + ".jpg";
      // contents.style.background = "url('./common/images/bg_brothumb.jpg') fixed no-repeat";
    }
  });
});

window.addEventListener("scroll", function (e) {});
