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

    renDetail: function() {
        var url = new URL(window.location.href);
        var idUrl = url.searchParams.get("id").toString();
        $(".test").innerHTML = this.products.map((product) => {
            if (idUrl == product.id.toString()) {
                console.log(typeof(this.products))
                return `<img src="${product.img}">`
            }
        }).join('')
    },
    start: function() {
        this.renDetail();
    },
};
console.log(window.location.href)
app.start();