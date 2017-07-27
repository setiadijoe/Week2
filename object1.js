//var Mobil = name(pabrikan, model, warna);

function name(pabrikan, model, warna)
{
    this.pabrikan = pabrikan;
    this.model    = model;
    this.warna    = warna;
    this.maju     = function(othername) 
              {
                  console.log('Mobil ' + this.pabrikan + ' ' + this.model + ' ' + 
                    this.warna + ' bergerak maju');
              }
}

var mobilku = new name("Tesla", 'Ludicrous', 'Merah');

mobilku.maju();

var mobil1 = new name('Honda', 'Accord', 'Hitam');
var mobil2 = new name('Honda', 'Civic', 'Silver');

console.log('Mobil 1 adalah ' + mobil1.pabrikan + ' ' + mobil1.model + ' ' + mobil1.warna);
mobil1.maju();
mobil1.warna = 'Silver';
mobil1.maju();
console.log('Mobil 2 adalah ' + mobil2.pabrikan + ' ' + mobil2.model + ' ' + mobil2.warna);
mobil2.maju();

// contoh constructor function

// function Teman(nama, kabar, pekerjaan) {
//   this.nama     = nama;
//   this.kabar    = kabar;
//   this.pekerjaan= pekerjaan;
//   this.sapa     = function(siapa) {
//     console.log('Halo, ' + siapa + ' apakabar?');
//   }
//   this.balasSapa = function(siapa) {
//     console.log('Halo, ' + siapa + ' kabarku ' + this.kabar);
//   }
//   this.tanyaPekerjaan = function() {
//     console.log('Apakah pekerjaanmu?');
//   }
//   this.balasPekerjaan = function() {
//     console.log('Pekerjaanku saat ini ' + this.pekerjaan);
//   }
//   this.berpisah   = function(nama) {
//     console.log('Senang bertemu dengan ' + this.nama + ' semoga sukses sebagai ' +
//      this.pekerjaan);
//   }
// }

// var budi = new Teman('Budi', 'baik', 'developer');
// var tono = new Teman('Tono', 'baik', 'chef');
// var arif = new Teman('Arif', 'sakit', 'kusir');

// budi.sapa(tono.nama);
// budi.sapa(arif.nama);
// arif.balasSapa(tono.nama);
// tono.balasSapa(budi.nama);
// budi.tanyaPekerjaan();
// tono.balasPekerjaan();
// budi.berpisah(tono);

//JSON

// var Human1 = {
//     nama      : ['Tono', 'Tono', 'Tono'],
//     hari      : ['Senin', 'Rabu', 'Jumat'],
//     kehadiran : ['Masuk', 'Masuk', 'Absen'],
//     alasan    : ['', '', 'Dinas Luar']
// };

// var harikerja = Human1.hari.length;
// var harimasuk = 0;
// var hariabsen = 0;

// for (i = 0; i < Human1.nama.length; i++){
//     if (Human1.nama[i] === 'Tono'){
//         console.log('Nama: ' + Human1.nama[i]);
//         console.log('Hari: ' + Human1.hari[i]);
//         console.log('Kehadiran: ' + Human1.kehadiran[i]);
//         if (Human1.alasan[i] === 'Dinas Luar' ){
//             console.log('Alasan: ' + Human1.alasan[i]);
//         }
//         console.log('');
//     }
//     if (Human1.kehadiran[i] === 'Masuk'){
//         harimasuk += 1;
//     }else{
//         hariabsen += 1;  
//     }
// }

// console.log('Total hari kerja minggu ini: ' + harikerja + ' hari');
// console.log('Total Masuk: ' + harimasuk + ' hari');
// console.log('Total Tidak Masuk: ' + hariabsen + ' hari');
// 
// Nama: Tono
// Hari: senin
// Kehadiran: masuk

// Nama: Tono
// Hari: rabu
// Kehadiran: masuk

// Nama: Tono
// Hari: jumat
// Kehadiran: absen
// Alasan: dinas luar

// Total hari kerja minggu ini: 3 hari
// Total Masuk: 2 hari
// Total Tidak Masuk: 1 hari
