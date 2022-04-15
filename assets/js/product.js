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
                <div class="image-item"><img src="${product.imageDetail1}"></div>
                <div class="image-item"><img src="${product.imageDetail2}"></div>`
            }
        }).join('')
    },

    start: function() {
        this.renDetail();
    },
};
console.log(window.location.href)
app.start();