var name = "Muhammad Andika"
var old = 16
var ras = "Asia"

console.log('Nama saya ' + name + ', dan saya berusia ' + old + ' tahun, dan saya ber-ras ' + ras)
//console diatas akan menghasilkan "Nama saya Muhammad Andika, dan saya berusia 16 tahun, dan saya ber-ras Asia"

var a = 10
var b = 2
var c = a+b
var d = a-b
var e = a*b
var f = a/b
var g = a%b

console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)

// array

var lokers = ['Anton', 'Siti', 'Anita', 'Doni', 'Joko', 'Dimas', 'Jhon Doe']

console.log(lokers[6])
console.log(lokers[lokers.length-1])

// if else

var hari ='hujan'

if (hari === 'tidak hujan'){
    console.log('Saya membeli jazz hujan')
} else {
    console.log('Saya membeli honda jazz')
}

var uang =50000
var umur =18

if (umur < 18){
    console.log('Silahkan anda pulang kampung ke kubang')
}else if(uang === 50000){
    console.log('Anda bisa beli minuman 1 botol')
}else if(uang === 100000){
    console.log('Anda bisa beli minuman 2 botol')
}else if(uang < 50000){
    console.log('Sorry boy, anda kere')
}

// for

var lokers = ['Anton', 'Siti', 'Anita', 'Doni', 'Joko', 'Dimas', 'Jhon Doe']
    for(var i = 0; i < lokers.length; i = i+1){
        console.log(lokers[i])
    }

var students = [
    {
        name : 'Jhon Doe',
        address : 'Padang Jopang'
    },
    {
        name : 'Anita',
        address : 'Padang Jopang'
    },
    {
        name : 'Dimas',
        address : 'Ampang Gadang'
    }
]
    for(var i = 0; i < students.length; i = i+1){
        console.log('Nama :', students[i].name)
        console.log('Alamat :', students[i].address)
    }

// data

var students = [
    {
        NIS : '170700922',
        Name : 'Muhammad Andika',
        Avatar : 'img/Andika.jpg'
    },
    {
        NIS : '170700801',
        Name : 'Rizky Ananda',
        Avatar : 'Rizky.jpg'
    },
    {
        NIS : '170700800',
        Name : 'Rizki Fauzan',
        Avatar : 'img/Rizki.jpg'
    },
    {
        NIS : '170700803',
        Name : 'Satria Ramadanol',
        Avatar : 'img/Satria.jpg'
    },
    {
        NIS : '170700786',
        Name : 'Gia',
        Avatar : 'img/Gia.jpg'
    },
    {
        NIS : '170700788',
        Name : 'Khairul Mustafa',
        Avatar : 'img/Khairul.jpg'
    },
    {
        NIS : '170700806',
        Name : 'Syukriatul Zandri',
        Avatar : 'img/Zandri.jpg'
    },
    {
        NIS : '170700790',
        Name : 'M. Revan Apriyandi',
        Avatar : 'img/Revan.jpg'
    },
    {
        NIS : '170700799',
        Name : 'M. Lutfi',
        Avatar : 'img/Lutfi.jpg'
    },
    {
        NIS : '170700808',
        Name : 'Yoghie Lailatul Iqbal',
        Avatar : 'img/Yogi.jpg'
    },
    {
        NIS : '170700713',
        Name : 'Ahmad Fuadi',
        Avatar : 'img/Fuadi.jpg'
    }, 
    {
        NIS : '170700781',
        Name : 'Arif Habibi',
        Avatar : 'img/Habibi.jpg'
    },
    {
        NIS : '170700714',
        Name : 'Al Azim',
        Avatar : 'img/Azim.jpg'
    },
    {
        NIS : '170700757',
        Name : 'M. Ridwan',
        Avatar : 'img/Ridwan.jpg'
    },
    {
        NIS : '170700834',
        Name : 'Qolbiyatul Edriyen',
        Avatar : 'img/Qolbi.jpg'
    },
    {
        NIS : '170700838',
        Name : 'Wendi Hermawan',
        Avatar : 'img/Wendi.jpg'
    },
    {
        NIS : '170700791',
        Name : 'M. Reyhan Septio',
        Avatar : 'img/Reyhan.jpg'
    },
    {
        NIS : '170700818',
        Name : 'Hamizan Rafiqi Azuris',
        Avatar : 'img/Hamizan.jpg'
    },
    {
        NIS : '170700823',
        Name : 'M. Farid',
        Avatar : 'img/Farid.jpg'
    },
    {
        NIS : '170700792',
        Name : 'M. Akhdanul Wafiy',
        Avatar : 'img/Wafiy.jpg'
    },
    {
        NIS : '170700807',
        Name : 'Widian Sandiki',
        Avatar : 'img/Widian.jpg'
    },
    {
        NIS : '170700809',
        Name : 'Agustio Fernando',
        Avatar : 'img/Agustio.jpg'
    }
]


// function
    // ini untuk proses pencarian data
    // ketika tombol ditekan
    
    function cari(){
        var ketik = document.getElementById('search').value
        for(var i = 0; i <students.length; i = i+1){
            if(students[i].NIS == ketik){
                document.getElementById('tampil').textContent = students[i].Name
                document.getElementById('gambar').setAttribute("src",students[i].Avatar)
        }
    }
}   
