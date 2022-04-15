'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    products: JSON.parse(localStorage.getItem(PRODUCT__KEY) || '[]'),
    renderProdcut: function() {
        $(".product__list").innerHTML = this.products.map((product) => {
            if (product.pricefirst != "") {
                return `                
                <div class="product__item col-lg-12 col-xl-4">
                    <section>
                        <img src="./assets/img/Frame 4656843.webp" alt="">
                    </section>
                    <div class="product__img">
                        <img src="${product.img}" alt="">
                    </div>
                    <div class="product__text">
                        <h3><a href="./product.html?id=${product.id}">${product.name}</a></h3>
                    </div>
                    <div class="product__option">
                        <div class="product__option--1">
                            <p>Gía độc quyền ở VinId <img src="./assets/img/im_80color_avatar_logo@3x.webp" alt=""></p>
                            <p>${product.pricefirst}</p>
                        </div>
                        <div class="product__option--2">
                            <p>Thanh toán chuyển khoản</p>
                            <p>${product.pricesecond}</p>
                        </div>
                    </div>
                </div>`;
            } else if (product.pricefirst == "") {
                return `   
                    <div class="product__item col-lg-12 col-xl-4">
                        <section>
                            <img src="./assets/img/Frame 4656843.webp" alt="">
                        </section>
                        <div class="product__img">
                            <img src="${product.img}" alt="">
                        </div>
                        <div class="product__text">
                            <h3><a href="./product.html?id=${product.id}">${product.name}</a></h3>
                        </div>
                        <div class="product__option">
                            <div class="product__option--2">
                                <p>Thanh toán chuyển khoản</p>
                                <p>${product.pricesecond}</p>
                            </div>
                        </div>
                    </div>`
            }
        }).join('')
    },

    start: function() {
        this.renderProdcut();
    },
};
console.log(window.location.href)
app.start();