var man = [
    {
        id: 1,
        img: "https://bizweb.dktcdn.net/100/350/935/files/nhung-dieu-chang-can-biet-ve-quan-kaki-nam-3-1.png?v=1612637272109",
        name: "The cosmo (kem) quan kaki ",
        price: "250.000"
    },
    {
        id: 2,
        img: "https://bizweb.dktcdn.net/100/350/935/files/nhung-dieu-chang-can-biet-ve-quan-kaki-nam-3-1.png?v=1612637272109",
        name: "The cosmo (kem) quan kaki ",
        price: "250.000"
    },
    {
        id: 3,
        img: "https://bizweb.dktcdn.net/100/350/935/files/nhung-dieu-chang-can-biet-ve-quan-kaki-nam-3-1.png?v=1612637272109",
        name: "The cosmo (kem) quan kaki ",
        price: "250.000"
    },
    {
        id: 4,
        img: "https://bizweb.dktcdn.net/100/350/935/files/nhung-dieu-chang-can-biet-ve-quan-kaki-nam-3-1.png?v=1612637272109",
        name: "The cosmo (kem) quan kaki ",
        price: "250.000"
    }
]
var woman = [
    {
        id: 1,
        img: "https://media.loveitopcdn.com/2210/205534-img-20200305-000236.jpg",
        name: "Vay nu trung nien ",
        price: "500.000"
    },
    {
        id: 2,
        img: "https://media.loveitopcdn.com/2210/205534-img-20200305-000236.jpg",
        name: "Vay nu trung nien ",
        price: "500.000"
    },
    {
        id: 3,
        img: "https://media.loveitopcdn.com/2210/205534-img-20200305-000236.jpg",
        name: "Vay nu trung nien ",
        price: "500.000"
    },
    {
        id: 4,
        img: "https://media.loveitopcdn.com/2210/205534-img-20200305-000236.jpg",
        name: "Vay nu trung nien ",
        price: "500.000"
    },
    


]

function view(){
    for(i=0;i<man.length; i++){
        var demo= '<div class="cart">'
        demo+= ' <img src="'+man[i].img+'" alt="">'      
        demo+= ' <p>'+man[i].name+'</p>'      
        demo+= ' <label>'+man[i].price+'</label><br>'      
        demo+= ' <button>Đặt mua</button>'      
        demo+= ' </div>'
        document.getElementById("man").innerHTML +=demo

    }
    for(i=0;i<woman.length; i++){
        var demo= '<div class="cart">'
        demo+= ' <img src="'+woman[i].img+'" alt="">'      
        demo+= ' <p>'+woman[i].name+'</p>'      
        demo+= ' <label>'+woman[i].price+'</label><br>'      
        demo+= ' <button>Đặt mua</button>'      
        demo+= ' </div>'
        document.getElementById("woman").innerHTML +=demo

    }
}