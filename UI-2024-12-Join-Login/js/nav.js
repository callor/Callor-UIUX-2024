document.addEventListener("DOMContentLoaded", () => {
  const main_nav = document.querySelector("nav.main");
  const main_nav_ul = document.querySelector("nav.main ul");
  const main_nav_li = document.querySelector("nav.main li");

  main_nav_ul.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName == "LI") {
      const text = target.textContent;
      //   alert(`${text} 메뉴가 클릭됨`);
      if (text === "Home") {
        document.location.href = "./index0.html";
      } else if (text === "공지사항") {
        document.location.href = "./index1.html";
      } else if (text === "자유게시판") {
        document.location.href = "./index2.html";
      }
    }
  });

  //   main_nav.addEventListener("click", () => {
  //     alert("main_nav");
  //   });
  //   main_nav_li.addEventListener("click", (e) => {
  //     const text = e.target.textContent;
  //     alert(text);
  //   });
});
