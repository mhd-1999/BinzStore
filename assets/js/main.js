// var productList = document.querySelector('.product__list');

// productList: JSON.parse(localStorage.getItem(PRODUCT_KEY)),

//     function getProd(callback) {
//         fetch(prodApi)
//             .then(function(reponse) {
//                 return reponse.json();
//             })
//             .then(callback)
//     };

// function renProd() {
//     var producctItem = productList.map(function(product, index) {
//         if (product.pricefirst != "") {
//             return `

//             <div class="product__item col-lg-4 col-md-12">
//                 <section>
//                     <img src="./assets/img/Frame 4656843.webp" alt="">
//                 </section>
//                 <div class="product__img">
//                     <img src="${product.img}" alt="">
//                 </div>
//                 <div class="product__text">
//                     <h3>${product.name}</h3>
//                 </div>
//                 <div class="product__option">
//                     <div class="product__option--1">
//                         <p>Gía độc quyền ở VinId <img src="./assets/img/im_80color_avatar_logo@3x.webp" alt=""></p>
//                         <p>${product.pricefirst}</p>
//                     </div>
//                     <div class="product__option--2">
//                         <p>Thanh toán chuyển khoản</p>
//                         <p>${product.pricesecond}</p>
//                     </div>
//                 </div>
//             </div>`
//         } else if (product.pricefirst == "") {
//             return `

//             <div class="product__item col-lg-4 col-md-12">
//                 <section>
//                     <img src="./assets/img/Frame 4656843.webp" alt="">
//                 </section>
//                 <div class="product__img">
//                     <img src="${product.img}" alt="">
//                 </div>
//                 <div class="product__text">
//                     <h3>${product.name}</h3>
//                 </div>
//                 <div class="product__option">
//                     <div class="product__option--2">
//                         <p>Thanh toán chuyển khoản</p>
//                         <p>${product.pricesecond}</p>
//                     </div>
//                 </div>
//             </div>`
//         }

//     });
//     productList.innerHTML = producctItem.join('')
// }

// function start() {
//     getProd(renProd);
// }
// start();
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    products: [{
            id: 1,
            name: "BINZ'S OVER SCREEN MERCURY COUGAR GRAPHIC T-SHIRT",
            pricefirst: "850000",
            pricesecond: "999000",
            img: "https://cdn-vincart.vinid.net/cdn-cgi/image/f=auto,fit=scale-down,width=588,height=588/cep/spacespeaker/Homepage_DBMH_Tee_1_matsau.png",
            imgDetail: "",
            imgDetail1: "",
            imgDetail2: "",
        },
        {
            id: 2,
            name: "BINZ'S OVER SCREEN MERCURY COUGAR GRAPHIC T-SHIRT",
            pricefirst: "765000",
            pricesecond: "899000",
            img: "https://cdn-vincart.vinid.net/cdn-cgi/image/f=auto,fit=scale-down,width=588,height=588/cep/spacespeaker/Homepage_DBMH_Tee_2_matsau.png",
            imgDetail: "",
            imgDetail1: "",
            imgDetail2: "",
        },
        {
            id: 3,
            name: "BINZ'S MERCURY COUGAR HANDMADE GRAPHIC T-SHIRT",
            pricefirst: "850000",
            pricesecond: "999000",
            img: "https://cdn-vincart.vinid.net/cdn-cgi/image/f=auto,fit=scale-down,width=588,height=588/cep/spacespeaker/Homepage_DBMH_Tee_3.png",
            imgDetail: "",
            imgDetail1: "",
            imgDetail2: "",
        },
        {
            id: 4,
            name: "BINZ'S CREW SOCKS - COMBO 3",
            pricefirst: "565000",
            pricesecond: "699000",
            img: "https://cdn-vincart.vinid.net/cdn-cgi/image/f=auto,fit=scale-down,width=588,height=588/cep/spacespeaker/Homepage_DBMH_Crew_Socks.png",
            imgDetail: "",
            imgDetail1: "",
            imgDetail2: "",
        },
        {
            id: 5,
            name: "BINZ'S BANDANA",
            pricefirst: "425000",
            pricesecond: "499000",
            img: "https://cdn-vincart.vinid.net/cdn-cgi/image/f=auto,fit=scale-down,width=588,height=588/cep/spacespeaker/Homepage_DBMH_Bandana.png",
            imgDetail: "",
            imgDetail1: "",
            imgDetail2: "",
        },
        {
            id: 6,
            name: "BINZ'S CAP",
            pricefirst: "425000",
            pricesecond: "499000",
            img: "https://cdn-vincart.vinid.net/cdn-cgi/image/f=auto,fit=scale-down,width=588,height=588/cep/spacespeaker/Homepage_DBMH_Cap.png",
            imgDetail: "",
            imgDetail1: "",
            imgDetail2: "",
        },
        {
            id: 7,
            name: "BINZ'S EXCLUSIVE LEATHER JACKET - PINK",
            pricefirst: "",
            pricesecond: "100000000",
            img: "https://cdn-vincart.vinid.net/cdn-cgi/image/f=auto,fit=scale-down,width=588,height=588/cep/spacespeaker/Homepage_DBMH_Leather_Varsity_Jacket_Pink.png",
            imgDetail: "",
            imgDetail1: "",
            imgDetail2: "",
        },
        {
            id: 8,
            name: "BINZ'S EXCLUSIVE LEATHER JACKET - BROWN",
            pricefirst: "",
            pricesecond: "100000000",
            img: "https://cdn-vincart.vinid.net/cdn-cgi/image/f=auto,fit=scale-down,width=588,height=588/cep/spacespeaker/Homepage_DBMH_Leather_Varsity_Jacket_Brown.png",
            imgDetail: "",
            imgDetail1: "",
            imgDetail2: "",
        },
        {
            id: 9,
            name: "BINZ'S EXCLUSIVE LEATHER JACKET - BLACK",
            pricefirst: "",
            pricesecond: "100000000",
            img: "https://cdn-vincart.vinid.net/cdn-cgi/image/f=auto,fit=scale-down,width=588,height=588/cep/spacespeaker/Homepage_DBMH_Leather_Varsity_Jacket_Black.png",
            imgDetail: "",
            imgDetail1: "",
            imgDetail2: "",
        },
    ],
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