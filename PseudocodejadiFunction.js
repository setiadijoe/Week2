//TUGAS 1
/*
SIMPAN 'nama'
SIMPAN 'angka pembilang'
SIMPAN 'angka penyebut'
HITUNG 'hasil bagi' dari 'angka pembilang' dibagi 'angka penyebut'
TULISKAN "Halo 'nama', 'angka pembilang' dibagi 'angka penyebut' adalah sama dengan 'hasil bagi'
*/

var nama = "K";
var angkapembilang = 5;
var angkapenyebut = 4;
var hasilbagi = angkapembilang / angkapenyebut;
console.log("Halo "+nama+", "+angkapembilang+" dibagi "+angkapenyebut+" adalah sama dengan "+hasilbagi);

//TUGAS 2

/*
SIMPAN 'alas' dari segitiga
SIMPAN 'tinggi' dari segitiga
HITUNG 'luas segitiga' dari 'alas' dikali 'tinggi' dibagi 2
TULISKAN "Luas Segitiga: 'luas segitiga'"
*/

var alas = 4;
var tinggi = 9;
var luassegitiga = alas * tinggi / 2;
console.log("Luas Segitiga: "+luassegitiga);

//TUGAS 3

/*
MASUKKAN sebuah tahun pada `tahun`
IF `tahun` habis dibagi 4 THEN:
    IF `tahun` tidak habis dibagi 100 THEN:
        TULISKAN "`tahun` adalah tahun kabisat"
    ELSE:
        IF `tahun` habis dibagi 400 THEN:
            TULISKAN "`tahun` adalah tahun kabisat"
        ELSE:
            TULISKAN "`tahun` adalah bukan tahun kabisat"
        ENDIF
    ENDIF
ELSE:
    TULISKAN "`tahun` adalah bukan tahun kabisat"
ENDIF
*/

var tahun = 1990;
if (tahun%4 == 0){
	if (tahun%100 != 0){
		console.log(tahun+" adalah tahun kabisat");
	}else if (tahun%400 == 0) {
		console.log(tahun+" adalah tahun kabisat");
	}
}else{
	console.log(tahun+" adalah bukan tahun kabisat");
}