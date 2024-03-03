document.getElementById("form-login").addEventListener("submit", function(event) {
    // Ngăn chặn hành vi mặc định của form (reload trang)
    event.preventDefault();

    // Lấy giá trị của username và password từ các trường input
    var username = document.getElementById("tennguoidung").value;
    var password = document.getElementById("matkhau").value;

    // Lấy danh sách tài khoản từ Local Storage
    var existingAccounts = JSON.parse(localStorage.getItem("accounts")) || {};

    // Kiểm tra xem username có tồn tại trong danh sách tài khoản hay không
    if (existingAccounts.hasOwnProperty(username)) {
        // Kiểm tra password có khớp không
        if (existingAccounts[username].password === password) {
            // Mật khẩu đúng, chuyển hướng đến trang "fab.com"
            window.location.href = "https://fab.com";
        } else {
            // Password sai
            alert("Sai mật khẩu! Vui lòng thử lại.");
        }
    } else {
        // Username không tồn tại trong danh sách tài khoản
        alert("Sai tên đăng nhập! Vui lòng thử lại.");
    }
});
