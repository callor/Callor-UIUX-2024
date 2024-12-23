document.addEventListener("DOMContentLoaded", () => {
  const img_list_box = document.querySelector("div.image_list");

  // img list 생성하여 div.image_list 에 추가하기
  for (let i = 0; i < 4; i++) {
    const src = `./images/0${i + 1}.jpg`;
    const img_item_box = document.createElement("DIV");
    img_item_box.classList.add("image_item");

    const img_tag = document.createElement("IMG");

    img_tag.src = src;
    img_item_box.appendChild(img_tag);
    img_list_box.appendChild(img_item_box);
  }

  // 화면에 그려진 list 중 첫번째 이미지 소스를 사용하여
  // 대표 이미지를 생성하고 화면에 보여주기

  // 화면에 그려진 전체 image list 중에서
  // 첫번째 요소만 selector 하기
  const image_first = document.querySelector("div.image_list img");

  const view_image = document.createElement("IMG");
  view_image.src = image_first.src;
  document.querySelector("div.image_view").appendChild(view_image);

  img_list_box.addEventListener("click", (e) => {
    const img_view = document.querySelector("div.image_view img");
    const target = e.target;
    const img_src = target.src;
    img_view.src = img_src;
  });
});
