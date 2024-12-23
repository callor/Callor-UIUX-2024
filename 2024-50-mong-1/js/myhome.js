



$(document).ready(()=>{
	
	// id가 join_send인 버튼이 클릭 되었을때
	$("#join_send").click(function(){
		
		var userid = $("#userid").val()
		if(userid == "") {
			alert("회원 ID는 필수 항목입니다")
			$("#userid").focus()
			return false // 더이상 진행하지 말라
		}
		
		// 1 바로 값을 추출하는 방법
		if($("#password").val() == ""){
			alert("비밀번호를 입력하세요")
			$("#password").focus()
			return false
		}
		
		if($("#re_password").val() == "") {
			alert("비밀번호 확인을 입력하세요")
			$("#re_password").focus()
			return false
		}
		
		if($("#password").val() != $("#re_password")) {
			alert("비밀번호와 확인이 같지 않습니다")
			// 두개의 비밀번호가 같지 않으면
			// 일단 두 값을 삭제하고, password에 포커스 위치
			$("#password").val("")
			$("#re_password").val("")
			$("#password").focus()
			return false
		}
		
		// 2 변수에 값을 담아서 사용하는 방법
		var password = $("#password").val()
		var re_password = $("#re_password").val()
		if(password == "") {
			alert("비밀번호를 입력하세요")
			return false
		}
		if(re_password == "") {
			alert("비밀번호 확인을 입력하세요")
			return false
		}
		
		if(password == re_password) {
			alert("비밀번호와 확인이 같지 않습니다")
			return false
		}
		
		
		
		// browser에 알림 창을 띄워 메시지 전달
		// browser는 alert창이 뜨면 모든 기능이 정지
		alert("회원가입 버튼이 클릭되었습니다")
		return false
		
	})
	
	
})