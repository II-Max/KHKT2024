// Hàm để lấy thông tin từ các trường input và lưu vào Local Storage
function saveAccount() {
    // Lấy thông tin từ các trường input
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    // Tạo một đối tượng đại diện cho tài khoản mới
    var newAccount = {
        email: email,
        password: password
    };

    // Lấy danh sách tài khoản hiện tại từ Local Storage
    var existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Tạo một key mới cho tài khoản và lưu vào Local Storage
    var newKey = Date.now().toString(); // Sử dụng timestamp làm key
    existingAccounts.push({ [newKey]: newAccount });
    localStorage.setItem("accounts", JSON.stringify(existingAccounts));

    // Thông báo cho người dùng biết rằng tài khoản đã được lưu
    alert("Tài khoản của bạn đã được lưu!");
}
