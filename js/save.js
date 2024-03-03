document.getElementById("dangky").addEventListener("click", function(event) {
    // Ngăn chặn hành vi mặc định của trình duyệt
    event.preventDefault();
    // Lấy giá trị của email, username và password từ các trường input
    var email = document.getElementById("email").value; // Thêm dòng này để lấy giá trị của email
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Lấy danh sách tài khoản hiện tại từ Local Storage
    var existingAccounts = JSON.parse(localStorage.getItem("accounts")) || {};
    // Kiểm tra xem email đã tồn tại trong danh sách tài khoản chưa
    if (existingAccounts.hasOwnProperty(username)) {
        alert("Tên Tài Khoản đã tồn tại!");
        return;     
    }
    // Lưu thông tin tài khoản vào Local Storage
    existingAccounts[username] = {
        password: password,
        email: email,
    }
    localStorage.setItem("accounts", JSON.stringify(existingAccounts));
    // Thông báo cho người dùng biết rằng tài khoản đã được lưu
    alert("Tài khoản của bạn đã được lưu!");
    window.location.href = "file:///C:/Users/Phamv/Desktop/KHKT/index.html?";
});
