const productImg = document.getElementById("product-img");
const btn = document.getElementsByClassName("btn");
const imgThu = document.getElementsByClassName("img-thu");
const p_1 = document.getElementById("p-1");
const p_2 = document.getElementById("p-2");
const p_3 = document.getElementById("p-3");
const p_4 = document.getElementById("p-4");

btn[0].onclick = function () {
  productImg.src = "images/image-product-1.jpg";

  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");

  imgThu[0].classList.add("active");
  imgThu[1].classList.remove("active");
  imgThu[2].classList.remove("active");
  imgThu[3].classList.remove("active");
  p_1.style.zIndex = "1";
  p_2.style.zIndex = "0";
  p_3.style.zIndex = "0";
  p_4.style.zIndex = "0";
};

btn[1].onclick = function () {
  productImg.src = "images/image-product-2.jpg";

  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");

  imgThu[1].classList.add("active");
  imgThu[0].classList.remove("active");
  imgThu[2].classList.remove("active");
  imgThu[3].classList.remove("active");

  p_1.style.zIndex = "0";
  p_2.style.zIndex = "1";
  p_3.style.zIndex = "0";
  p_4.style.zIndex = "0";
};
btn[2].onclick = function () {
  productImg.src = "images/image-product-3.jpg";

  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");

  imgThu[2].classList.add("active");
  imgThu[1].classList.remove("active");
  imgThu[0].classList.remove("active");
  imgThu[3].classList.remove("active");

  p_1.style.zIndex = "0";
  p_2.style.zIndex = "0";
  p_3.style.zIndex = "1";
  p_4.style.zIndex = "0";
};
btn[3].onclick = function () {
  productImg.src = "images/image-product-4.jpg";

  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");

  imgThu[3].classList.add("active");
  imgThu[1].classList.remove("active");
  imgThu[2].classList.remove("active");
  imgThu[0].classList.remove("active");

  p_1.style.zIndex = "0";
  p_2.style.zIndex = "0";
  p_3.style.zIndex = "0";
  p_4.style.zIndex = "1";
};

// next and preview for small screen
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
  const regExp1 = new RegExp("images/image-product-1.jpg");
  const regExp2 = new RegExp("images/image-product-2.jpg");
  const regExp3 = new RegExp("images/image-product-3.jpg");
  const regExp4 = new RegExp("images/image-product-4.jpg");

  if (regExp1.test(productImg.src)) {
    productImg.src = "images/image-product-2.jpg";
  } else if (regExp2.test(productImg.src)) {
    productImg.src = "images/image-product-3.jpg";
  } else if (regExp3.test(productImg.src)) {
    productImg.src = "images/image-product-4.jpg";
  } else if (regExp4.test(productImg.src)) {
    productImg.src = "images/image-product-1.jpg";
  }
});

prev.addEventListener("click", () => {
  const regExp1 = new RegExp("images/image-product-1.jpg");
  const regExp2 = new RegExp("images/image-product-2.jpg");
  const regExp3 = new RegExp("images/image-product-3.jpg");
  const regExp4 = new RegExp("images/image-product-4.jpg");

  if (regExp1.test(productImg.src)) {
    productImg.src = "images/image-product-4.jpg";
  } else if (regExp2.test(productImg.src)) {
    productImg.src = "images/image-product-1.jpg";
  } else if (regExp3.test(productImg.src)) {
    productImg.src = "images/image-product-2.jpg";
  } else if (regExp4.test(productImg.src)) {
    productImg.src = "images/image-product-3.jpg";
  }
});

// ----------------------------------------------
const prod = document.getElementById("prod");
const body = document.querySelector("body");
const closeI = document.querySelector("#close-i");

productImg.addEventListener("click", () => {
  prod.style.visibility = "visible";
  body.style.background = "hsl(0, 0%, 0%, 0.75)";
});

closeI.addEventListener("click", () => {
  prod.style.visibility = "hidden";
  body.style.background = "#fff";
});

// --------------------------------
const productImgImg = document.querySelector("#product-img-img");
const btn_one = document.getElementsByClassName("bt");
const imgT = document.getElementsByClassName("img-t");

btn_one[0].onclick = function () {
  productImgImg.src = "images/image-product-1.jpg";

  for (bt of btn_one) {
    bt.classList.remove("active");
  }
  this.classList.add("active");

  imgT[0].classList.add("active");
  imgT[1].classList.remove("active");
  imgT[2].classList.remove("active");
  imgT[3].classList.remove("active");
};

btn_one[1].onclick = function () {
  productImgImg.src = "images/image-product-2.jpg";

  for (bt of btn_one) {
    bt.classList.remove("active");
  }
  this.classList.add("active");

  imgT[1].classList.add("active");
  imgT[0].classList.remove("active");
  imgT[2].classList.remove("active");
  imgT[3].classList.remove("active");
};
btn_one[2].onclick = function () {
  productImgImg.src = "images/image-product-3.jpg";

  for (bt of btn_one) {
    bt.classList.remove("active");
  }
  this.classList.add("active");

  imgT[2].classList.add("active");
  imgT[1].classList.remove("active");
  imgT[0].classList.remove("active");
  imgT[3].classList.remove("active");
};
btn_one[3].onclick = function () {
  productImgImg.src = "images/image-product-4.jpg";

  for (bt of btn_one) {
    bt.classList.remove("active");
  }
  this.classList.add("active");

  imgT[3].classList.add("active");
  imgT[1].classList.remove("active");
  imgT[2].classList.remove("active");
  imgT[0].classList.remove("active");
};

// -----------------------------------------------
const pre = document.getElementById("pre");
const nex = document.getElementById("nex");

nex.addEventListener("click", () => {
  const regExp1 = new RegExp("images/image-product-1.jpg");
  const regExp2 = new RegExp("images/image-product-2.jpg");
  const regExp3 = new RegExp("images/image-product-3.jpg");
  const regExp4 = new RegExp("images/image-product-4.jpg");

  if (regExp1.test(productImgImg.src)) {
    productImgImg.src = "images/image-product-2.jpg";

    btn_one[1].classList.add("active");
    btn_one[0].classList.remove("active");
    btn_one[2].classList.remove("active");
    btn_one[3].classList.remove("active");

    imgT[1].classList.add("active");
    imgT[0].classList.remove("active");
    imgT[2].classList.remove("active");
    imgT[3].classList.remove("active");
  } else if (regExp2.test(productImgImg.src)) {
    productImgImg.src = "images/image-product-3.jpg";
    btn_one[2].classList.add("active");
    btn_one[0].classList.remove("active");
    btn_one[1].classList.remove("active");
    btn_one[3].classList.remove("active");

    imgT[2].classList.add("active");
    imgT[0].classList.remove("active");
    imgT[1].classList.remove("active");
    imgT[3].classList.remove("active");
  } else if (regExp3.test(productImgImg.src)) {
    productImgImg.src = "images/image-product-4.jpg";
    btn_one[3].classList.add("active");
    btn_one[0].classList.remove("active");
    btn_one[2].classList.remove("active");
    btn_one[1].classList.remove("active");

    imgT[3].classList.add("active");
    imgT[0].classList.remove("active");
    imgT[2].classList.remove("active");
    imgT[1].classList.remove("active");
  } else if (regExp4.test(productImgImg.src)) {
    productImgImg.src = "images/image-product-1.jpg";
    btn_one[0].classList.add("active");
    btn_one[1].classList.remove("active");
    btn_one[2].classList.remove("active");
    btn_one[3].classList.remove("active");

    imgT[0].classList.add("active");
    imgT[1].classList.remove("active");
    imgT[2].classList.remove("active");
    imgT[3].classList.remove("active");
  }
});

pre.addEventListener("click", () => {
  const regExp1 = new RegExp("images/image-product-1.jpg");
  const regExp2 = new RegExp("images/image-product-2.jpg");
  const regExp3 = new RegExp("images/image-product-3.jpg");
  const regExp4 = new RegExp("images/image-product-4.jpg");

  if (regExp1.test(productImgImg.src)) {
    productImgImg.src = "images/image-product-4.jpg";
    productImgImg.src = "images/image-product-4.jpg";
    btn_one[3].classList.add("active");
    btn_one[0].classList.remove("active");
    btn_one[2].classList.remove("active");
    btn_one[1].classList.remove("active");

    imgT[3].classList.add("active");
    imgT[0].classList.remove("active");
    imgT[2].classList.remove("active");
    imgT[1].classList.remove("active");
  } else if (regExp2.test(productImgImg.src)) {
    productImgImg.src = "images/image-product-1.jpg";
    productImgImg.src = "images/image-product-1.jpg";
    btn_one[0].classList.add("active");
    btn_one[1].classList.remove("active");
    btn_one[2].classList.remove("active");
    btn_one[3].classList.remove("active");

    imgT[0].classList.add("active");
    imgT[1].classList.remove("active");
    imgT[2].classList.remove("active");
    imgT[3].classList.remove("active");
  } else if (regExp3.test(productImgImg.src)) {
    productImgImg.src = "images/image-product-2.jpg";

    btn_one[1].classList.add("active");
    btn_one[0].classList.remove("active");
    btn_one[2].classList.remove("active");
    btn_one[3].classList.remove("active");

    imgT[1].classList.add("active");
    imgT[0].classList.remove("active");
    imgT[2].classList.remove("active");
    imgT[3].classList.remove("active");
  } else if (regExp4.test(productImgImg.src)) {
    productImgImg.src = "images/image-product-3.jpg";

    btn_one[2].classList.add("active");
    btn_one[0].classList.remove("active");
    btn_one[1].classList.remove("active");
    btn_one[3].classList.remove("active");

    imgT[2].classList.add("active");
    imgT[0].classList.remove("active");
    imgT[1].classList.remove("active");
    imgT[3].classList.remove("active");
  }
});

// -----------------------------------
const navMobile = document.querySelector(".nav-mobile");
const menu = document.querySelector("#menu");
const closeMob = document.querySelector("#close-mob");

menu.addEventListener("click", () => {
  navMobile.style.left = 0;
});

closeMob.addEventListener("click", () => {
  navMobile.style.left = "-60vw";
});

// ---------------------------------------------------
const cartIcon = document.getElementById("cart-icon");
const yourCart = document.querySelector(".your-cart");
const yourCar = document.querySelector(".your-car");

cartIcon.addEventListener("click", () => {
  yourCart.classList.toggle("visible");
  yourCar.classList.toggle("visible");
});

// ----------------------------------------
const yourCartCart = document.querySelector(".your-cart-cart");
const yourCarCart = document.querySelector(".your-car-cart");

const addCart = document.querySelector(".add-cart");
const iconMinus = document.querySelector("#icon-minus");
const iconPlus = document.querySelector("#icon-plus");
const cartNum = document.querySelector(".cart-num");
const cartNumTop = document.querySelector("#cart-num-top");

const ecommerce = () => {
  let numCart = Number(0);

  addCart.onclick = () => {
    numCart += Number(1)
    cartNum.textContent = numCart;

    
    if (cartNum.textContent == 0) {
      yourCartCart.innerHTML =
        '<div class="cart-empty"><p>Your cart is empty</p></div>';
      yourCarCart.innerHTML =
        '<div class="cart-empty"><p>Your cart is empty</p></div>';
      cartNumTop.innerHTML = ''
    } else {
      yourCartCart.innerHTML = `
        <div class="cart-product">
          <img
            class="cart-img"
            src="images/image-product-1-thumbnail.jpg"
            alt=""
          />
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x ${numCart} <b>$${numCart * 125}.00</b></p>
          </div>
          <img class="del-cart" src="images/icon-delete.svg" alt="" />
        </div>
        <div class="check-btn">Checkout</div>`;

      yourCarCart.innerHTML = `
        <div class="cart-product">
          <img
            class="cart-img"
            src="images/image-product-1-thumbnail.jpg"
            alt=""
          />
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x ${numCart} <b>$${numCart * 125}.00</b></p>
          </div>
          <img class="del-cart" src="images/icon-delete.svg" alt="" />
        </div>
        <div class="check-btn">Checkout</div>`;
    }

    cartNumTop.innerHTML = `<div class="cart-num-top">${numCart}</div>`
  }

  // ----------- iconPlus ----------------
  iconPlus.onclick = () => {
    numCart += Number(1);
    cartNum.textContent = numCart;

    if (cartNum.textContent == 0) {
      yourCartCart.innerHTML =
        '<div class="cart-empty"><p>Your cart is empty</p></div>';
      yourCarCart.innerHTML =
        '<div class="cart-empty"><p>Your cart is empty</p></div>';
      cartNumTop.innerHTML = ``;
    } else {
      yourCartCart.innerHTML = `
        <div class="cart-product">
          <img
            class="cart-img"
            src="images/image-product-1-thumbnail.jpg"
            alt=""
          />
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x ${numCart} <b>$${numCart * 125}.00</b></p>
          </div>
          <img class="del-cart" src="images/icon-delete.svg" alt="" />
        </div>
        <div class="check-btn">Checkout</div>`;

      yourCarCart.innerHTML = `
        <div class="cart-product">
          <img
            class="cart-img"
            src="images/image-product-1-thumbnail.jpg"
            alt=""
          />
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x ${numCart} <b>$${numCart * 125}.00</b></p>
          </div>
          <img class="del-cart" src="images/icon-delete.svg" alt="" />
        </div>
        <div class="check-btn">Checkout</div>`;
    }

    cartNumTop.innerHTML = `<div class="cart-num-top">${numCart}</div>`
  };

  // ------------------ iconMinus ------------
  iconMinus.onclick = () => {
    if (numCart > 0) {
      numCart -= Number(1);
      cartNum.textContent = numCart;
      
      if (cartNum.textContent == 0) {
        yourCartCart.innerHTML =
          '<div class="cart-empty"><p>Your cart is empty</p></div>';
        yourCarCart.innerHTML =
          '<div class="cart-empty"><p>Your cart is empty</p></div>';

        cartNumTop.innerHTML = ``;
      } else {
        yourCarCart.innerHTML = `
          <div class="cart-product">
            <img
              class="cart-img"
              src="images/image-product-1-thumbnail.jpg"
              alt=""
            />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>$125.00 x ${numCart} <b>$${numCart * 125}.00</b></p>
            </div>
            <img class="del-cart" src="images/icon-delete.svg" alt="" />
          </div>
          <div class="check-btn">Checkout</div>
        `;

        yourCarCart.innerHTML = `
          <div class="cart-product">
            <img
              class="cart-img"
              src="images/image-product-1-thumbnail.jpg"
              alt=""
            />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>$125.00 x ${numCart} <b>$${numCart * 125}.00</b></p>
            </div>
            <img class="del-cart" src="images/icon-delete.svg" alt="" />
          </div>
          <div class="check-btn">Checkout</div>
        `;

        cartNumTop.innerHTML = `<div class="cart-num-top">${numCart}</div>`
      }
    }
  };
};

ecommerce();
