var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

var nama = (input.slice(1,2)).toString();
function dataHandling{
    input.pop();
    input.push('Pria', 'SMA Internasional Metro');
    input.splice(1, 1, 'Roman Alamsyah Elsahrawy');
    input.splice(2, 1, 'Provinsi Bandar Lampung');

    var tanggal = input[3];
    var bulanAk = tanggal.split('/');
    var Akbulan = bulanAk[1];
    var Aktanggal = bulanAk[0];
    var Aktahun = bulanAk[2];
    switch (Akbulan){
        case "01": var bulan  = 'January'; break;
        case "02": var bulan  = 'February'; break;
        case "03": var bulan  = 'March'; break;
        case "04": var bulan  = 'April'; break;
        case "05": var bulan  = 'May'; break;
        case "06": var bulan  = 'June'; break;
        case "07": var bulan  = 'July'; break;
        case "08": var bulan  = 'Agustus'; break;
        case "09": var bulan  = 'September'; break;
        case "10": var bulan  = 'Oktober'; break;
        case "11": var bulan  = 'November'; break;
        case "12": var bulan  = 'December'; break;
    }

    var kart = [];
    kart.push(Aktahun, Aktanggal, Akbulan);

    var date = kart.join('-');

    return input;
    return bulan;
    return kart;
    return date;
    return nama;
}
console.log(dataHandling2());




