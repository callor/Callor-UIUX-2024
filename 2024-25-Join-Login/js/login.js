document.addEventListener("DOMContentLoaded", () => {
  const login_body = document.querySelector("section.login.body");
  const form = login_body.querySelector("form");
  const btn_login = login_body.querySelector("input.login");
  const btn_join = login_body.querySelector("button.join");
  const input_username = login_body.querySelector(
    "input[name='username']"
  );
  const input_password = login_body.querySelector(
    "input[name='password']"
  );

  /*
  로그인을 실행할때 USER ID 와 PASSWORD 가 입력되었는지 확인하여 
  입력되지 않았으면 정확히 입력하도록 유도하는 JS 코드
  */
  const onValidation = () => {
    const value_username = input_username.value;
    const value_password = input_password.value;
    // alert(`${value_username}, ${value_password}`);

    // 사용자 ID 가 입력이 안됬으면
    if (value_username === "") {
      // 안내 메시지를 보여주고
      alert("사용자 ID는 반드시 입력해야 합니다");

      // username input box 에 focus() 주어 사용자 또다시 마우스를
      // 클릭하는 것을 줄여준다
      input_username.select();
      // event handler 코드 실행을 중단하라
      return false;
    }
    if (!value_password) {
      alert("비밀번호를 입력해 주세요");
      input_password.select();
      return false;
    }
    // 유효성 검사가 끝났으니 서버로 데이터를 전송하라
    form.submit();
  };
  btn_login.addEventListener("click", onValidation);
});
