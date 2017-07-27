var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2() {
    input.pop();
    input.push("Pria", "SMA Internasional Metro");
    
    var tanggal = input.slice(3, 4);
    var angka   = tanggal.toString( );
    
    nama     = (input.slice(1, 2)).toString();
    
    var date = [];
    date.push(tahun, tanggal, bulan);

    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    
    if (bulan == 5) {
        bulan = "Mei";
    }
    
    date2 = (tahun+"-"+tanggal+"-"+bulan)


    console.log(input);
    console.log(bulan);
    console.log(date2);
    console.log(date);
    console.log(nama);
}

dataHandling2();

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 5]
 * 1989-21-05
 * Roman Alamsyah
 */

 //Mengeluarkan data dari masing2 orang
 //Cukup mengakses tiap elemennya aja lah cuy

 var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

function dataHandling(){
    for(i=0;i<input.length;i++)
    {
        for(j=0;j<input[i].length;j++)
        {
               if(j == 0){
                  console.log("Kode: "+input[i][j]);
               }else if(j == 1){
                 console.log("Nama: "+input[i][j]);
               }else if(j == 2){
                 tempat = input[i][j];
               }else if(j == 3){
                 console.log("TTL: "+tempat+" "+input[i][j]);
               }else{
                 console.log("Hobby: "+input[i][j]);
                 console.log('');
               }
        }
    }
}

dataHandling();