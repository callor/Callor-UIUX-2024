document.addEventListener("DOMContentLoaded", () => {
  const img_list_box = document.querySelector("div.image_list");

  img_list_box.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "IMG") {
      // const image_view = document.querySelector("div.image_view img")
      const imgage_view_box =
        document.querySelector("div.image_view");
      // 크게 보여질 이미지 tag 가져오기
      const image_view = imgage_view_box.querySelector("img");

      image_view.style.marginLeft = "-100%";
      image_view.style.opacity = 0;
      image_view.style.transform = "rotate(-90deg)";

      const newImage = document.createElement("IMG");
      newImage.src = target.src;

      imgage_view_box.appendChild(newImage);

      // 위의 코드가 실행된 후 1초간 기다렸다가
      /**
       * 비동기 실행 코드의 타이밍을 어느정도 맞추기 위한 방법
       */
      setTimeout(() => {
        // image_view_box 의 첫번째 IMG tag(왼쪽으로 사라진 이미지)를
        // 완전히 제거하라
        imgage_view_box.querySelector("IMG").remove();
      }, 1000);

      // 클릭된 image 의 소스
      // const img_src = target.src;
      // image_view.src = img_src;
    }
  });
});
