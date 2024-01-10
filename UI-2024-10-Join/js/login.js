// js 코드를 html 어디에 있던지 정상 실행되도록 하기 위한 시작코드
document.addEventListener("DOMContentLoaded", () => {
  const btn_login = document.querySelector("button.btn_login");
  const input_username = document.querySelector(
    "input[name='username']"
  );
  const input_password = document.querySelector("#password");

  // 화면에 form 이 모두 그려진 시점에 input box 에 입력된
  // 값을 catch 하여 각 변수에 저장
  // const txt_username = input_username.value;
  // const txt_password = input_password.value;
  btn_login?.addEventListener("click", () => {
    // 로그인을 시도(button 이 클릭된)하는 시점에
    // input box 에 입력된 값을 catch 하라
    const txt_username = input_username.value;
    const txt_password = input_password.value;

    // txt_username 값이 "" 이면 ?
    if (!txt_username) {
      alert("USER NAME 을 입력해 주세요");
      input_username.focus();
      // JS 에서는 함수 코드의 진행을 중단할때 return false 실행
      return false;
    }
    // txt_password 값이 "" 이면 ?
    if (!txt_password) {
      alert("PASSWORD 를 입력해 주세요");
      input_password.focus();
      return false;
    }

    // 여기에 코드가 도달하면?
    // username 과 password 가 입력이 된 상태
    // 데이터를 서버로 전송(submit)
    // document.querySelector("form").submit();
    const form = document.querySelector("form");
    form.submit();
  });
});
