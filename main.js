const cartButton = document.querySelector(".cart-button");
const modal = document.querySelector(".modal");
cartButton.addEventListener("click", function () {
  modal.classList.toggle("active");
});

const productsContainer = document.querySelector(".products-container");
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    let products = res.products;
    products.forEach((e, i) => {
      productsContainer.innerHTML += ` <div id="${i}" class="product">
        <img
          src=${e.thumbnail}
          alt=""
        />

        <h3 class="product-title">${e.title}</h3>
        <h3 class="product-price">${e.price} $</h3>
        <input class="add-btn" type="button" value="Add to cart" />
      </div>`;
    });
    const addButtons = document.querySelectorAll(".add-btn");
    let panier = [];
    addButtons.forEach((e) => {
      e.addEventListener("click", (event) => {
        let parent = event.target.parentNode;
        // let priceObject = parent.querySelector(".product-price").innerHTML;
        // let price = parseInt(priceObject);
        // let title = parent.querySelector(".product-title").innerHTML;
        let clickedProductID = parent.getAttribute("id");
        let clickedProduct = products[clickedProductID];

        let exist = false;
        panier.forEach((e) => {
          if (e.title == clickedProduct.title) {xxxl
            exist = true;
          }
        });
        if (exist == true) {
          alert("llllll");
        } else {
                let num = document.querySelector(".c");
                num.innerHTML++;

          modal.innerHTML += `
            <div class="modal-item">
        <div class="title">${clickedProduct.title} </div>
        <div class="unit-price">${clickedProduct.price} </div>
        <div class="quantity">
          <i class="fa-solid fa-minus minus"></i>
          <div class="amount">1</div>
          <i class="fa-solid fa-plus plus"></i>
        </div>
        <div class="total-item-price">${clickedProduct.price} </div>
          <i class="fa-solid fa-trash delete"></i>
        
      </div>
        `;
          panier.push(clickedProduct);

          let pluses = document.querySelectorAll(".plus");
          pluses.forEach((e) => {
            e.addEventListener("click", (e) => {
              let Q = e.target.parentNode.querySelector(".amount");
              Q.innerHTML++;
            });
          });

          let minus = document.querySelectorAll(".minus");
          minus.forEach((e) => {
            e.addEventListener("click", (e) => {
              let Q = e.target.parentNode.querySelector(".amount");
              Q.innerHTML--;
            });
          });
          let deletes=document.querySelectorAll(".delete")
          deletes.forEach((e)=> {
            e.addEventListener("click",(event)=>{
                event.target.parentNode.remove()
                num.innerHTML--

            })

          })
        }
      });
    });
  });
