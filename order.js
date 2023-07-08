//alert('ORDER JS')

let itemOrder = [
    {
        dipesan : false,
        harga : 5000,
        nama : 'nasi',
    },
    {
        dipesan : false,
        harga : 8000,
        nama : 'ikan goreng',
    },
    {
        dipesan : false,
        harga : 5000,
        nama : 'Telur Balado',
    },
    {
        dipesan : false,
        harga : 5000,
        nama : 'Pindang',
    },
    {
        dipesan : false,
        harga : 10000,
        nama : 'Pepes Ayam',
    },
    {
        dipesan : false,
        harga : 10000,
        nama : 'Pepes Ikan',
    },
    {
        dipesan : false,
        harga : 5000,
        nama : 'Tahu & Tempe',
    },
    {
        dipesan : false,
        harga : 15000,
        nama : 'Rendang',
    },
]

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName
('item');

const textTotal = document.getElementById('last-item');

for(let i= 0; i < itemTerpilih.length; i++) {
    itemTerpilih[i].addEventListener('click',function () {
        setItemPemesanan(i, itemTerpilih[i]);    
    });
}
function setItemPemesanan(index, element){
    if (itemOrder[index].dipesan == false){
        itemOrder[index].dipesan =true;
        element.style.backgroundColor = "brown";
        element.style.color = "white";
        totalOrder = totalOrder + itemOrder[index].harga;
    }
    else{
        itemOrder[index].dipesan = false;
        element.style.backgroundColor = "aqua";
        element.style.color = " black";
        totalOrder = totalOrder - itemOrder[index].harga;
    }
    textTotal.innerHTML = "Total <span>Rp  " + totalOrder + 
    "</span>";
}