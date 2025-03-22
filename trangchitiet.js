
        const searchParams = new URLSearchParams(location.search);
        const productId = searchParams.get("id");

        if (!productId) {
            location.href = "main.html";
        }
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => res.json())  // Chuyển đổi dữ liệu nhận được từ API thành JSON
            .then((product) => {
                const productDiv = document.getElementById("product_detail");

                productDiv.innerHTML =
                    `
                           <div class="row">
        <div class="col-4 quan">
          <img
            src="${product.image}"
          />
        </div>
        <div class="col-8">
          <h1>${product.title}</h1>
          <h2>Thông Tin Sản Phẩm</h2>
          <p>Giá:${product.price}</p>
          <p>Thông tin:${product.description}</p>
          <h5>có thể ship trong 5 ngày</h5>
          <h6>Liên hệ:0913646411</h6>
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Số Lượng
          </a>
          <ul class="dropdown-menu soluong">
            <li><a class="dropdown-item" href="#">1</a></li>
            <li><a class="dropdown-item" href="#">2</a></li>
            <li><a class="dropdown-item" href="#">3</a></li>
          </ul>
          <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-login btn-lg" 
                    style="padding-left: 2.5rem; padding-right: 2.5rem;">Đổi Ngay</button>
        </div>
        
      </div>
                    
                        

            `
            })
            .catch((err) => console.error("Error fetching product:", err));