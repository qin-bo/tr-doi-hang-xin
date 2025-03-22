// Function to handle user registration using JSON
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username != "" && password != "") {
        // Get existing users from localStorage or create an empty object
        let users = JSON.parse(localStorage.getItem("users")) || {};

        // Check if the username already exists
        if (users[username]) {
            alert('Tên đăng nhập đã tồn tại, vui lòng chọn tên đăng nhập khác');
        } else {
            // Add new user to the users object
            users[username] = password;
            localStorage.setItem("users", JSON.stringify(users));
            alert('Đăng ký thành công');
        }
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
}


// Function to handle user login using JSON
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username != "" && password != "") {
        // Get existing users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || {};

        // Check if the username exists and the password is correct
        if (users[username] == password) {
            //kiểm tra tk mà mk đúng thì chuyển hướng về trang chủ
            window.location.href = "main.html"
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
}