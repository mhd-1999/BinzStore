'use strict'
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = {
    products: JSON.parse(localStorage.getItem(DETAIL_PRODUCT__KEY) || '[]'),
    renDetail: function() {
        var url = new URL(window.location.href);
        var idUrl = url.searchParams.get("id").toString();
        $(".detail").innerHTML = this.products.map((product) => {
            if (idUrl == product.id.toString()) {
                console.log(typeof(this.products))
                return `<div class="image-item"><img src="${product.img}"></div>
                `
            };
        }).join('');
        $(".detail-info").innerHTML = this.products.map((product) => {
            if (idUrl == product.id.toString()) {
                return `<h3>${product.name}<span class="tag">FREESHIP</span></h3>
                <table>
                    <tr>
                        <td><h5>${product.pricesecond}</h5></td>
                        <td><button id="btnBank">Thanh toán chuyển khoản</button></td>
                    </tr>
                    <tr>
                        <td><h4>${product.pricefirst}</h4></td>
                        <td><span>Giá độc quyền ở VinId</span></td>
                    </tr>
                </table>
            <p>Hãy mua trên ứng dụng <span>VinID</span> để có giá cực kì ưu đãi bạn nhé!</p>
            <div class="ques__btn">
                    <button id="btnVin">
                            <span>Mua qua VinID</span>
                            <i class="fa fa-arrow-right"></i>
                    </button>
                </div>
            `
            }
        }).join('');

    },
    modalBanking: () => {
        var modal = $("#modal");
        var btn = $("#btnBank");
        var close = $(".close");
        btn.onclick = () => {
            modal.style.display = "block";
        }
        close.onclick = () => {
            modal.style.display = "none"
        }
        window.onclick = event => {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }
    },
    modalVin: () => {
        var modal = $("#modalV");
        var btn = $("#btnVin");
        var close = $(".closeV");
        btn.onclick = () => {
            modal.style.display = "block";
        }
        close.onclick = () => {
            modal.style.display = "none"
        }
        window.onclick = event => {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }
    },
    start: function() {
        this.renDetail();
        this.modalBanking();
        this.modalVin();
    },
};
console.log(window.location.href)
app.start();