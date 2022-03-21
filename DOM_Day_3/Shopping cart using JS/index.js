var data = [
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$25.00",
        strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    }
];


data.map(function(el){
    var box=document.createElement("div");
    var imgs=document.createElement("img");
    var nam=document.createElement("p");
    var h3s=document.createElement("h3");
    var offer = document.createElement("p");
    imgs.src=el.imgUrl;
    nam.innerText=el.name;
    h3s.innerText=el.price;
    offer.innerText=el.strikedOffPrice;
    box.append(imgs,nam,h3s,offer);
    document.querySelector("#container").append(box);
    box.setAttribute("class","box");
    imgs.setAttribute("class","img");
    nam.setAttribute("class","name");
    h3s.setAttribute("class","h3");
    offer.setAttribute("class","p");
})