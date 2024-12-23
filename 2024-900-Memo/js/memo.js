document.addEventListener("DOMContentLoaded", () => {
  const date_form = document.querySelector("form.date");
  const input_form = document.querySelector("form.input");

  const toDate = date_form.querySelector("input.todate"); // .value;
  const toTime = date_form.querySelector("input.totime"); // .value;

  const toSubject = input_form.querySelector("input.tosubject");
  const toMemo = input_form.querySelector("input.tomemo");

  const image_btn = document.querySelector("input.toimage");
  const memo_image = input_form.querySelector("img.memo.image");

  const btn_save = document.querySelector("input.btn_save");
  const btn_new = document.querySelector("input.btn_new");
  const btn_delete = document.querySelector("input.btn_delete");

  const memo_box = document.querySelector("ul.memo");

  memo_image.addEventListener("click", () => {
    image_btn.click();
  });

  image_btn.addEventListener("change", (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = (window.URL || webkitURL).createObjectURL(imageFile);

    memo_image.src = imageUrl;
  });

  memo_box.addEventListener("click", async (e) => {
    const target = e.target;
    const classList = target.classList;
    const className = target.className;
    let seq = 0;

    if (className === "memo list") {
      seq = target.dataset.seq;
    } else {
      seq = target.closest("LI").dataset.seq;
    }
    // if (classList.contains("memo")) {
    //   let seq = 0;
    //   if (classList.contains("list")) {
    //     seq = target.dataset.seq;
    //   } else {
    //     seq = target.closest("LI").dataset.seq;
    //   }
    const res = await fetch(`/${seq}/get`);
    const json = await res.json();
    console.log(json);

    toDate.value = json.m_date;
    toTime.value = json.m_time;
    toSubject.value = json.m_subject;
    toMemo.value = json.m_memo;

    memo_image.src = `/images/${json.m_image}`;
    // btn_save.dataset.seq = json.m_seq;
    input_form.action = `/update/${json.m_seq}`;

    btn_save.value = "수정";
    btn_delete.dataset.seq = json.m_seq;
    btn_delete.type = "button";

    // }
  });
  btn_new.addEventListener("click", async () => {
    try {
      const result = await fetch("/get_new_date");
      const json = await result.json();
      toDate.value = json.toDate;
      toTime.value = json.toTime;
    } catch (error) {
      alert("서버 통신오류");
    }
  });

  btn_save.addEventListener("click", () => {
    toDate.type = "hidden";
    toTime.type = "hidden";
    input_form.appendChild(toDate);
    input_form.appendChild(toTime);
    input_form.submit();

    console.log(toDate.value, toTime.value, toSubject.value, toMemo.value);
  });
});
