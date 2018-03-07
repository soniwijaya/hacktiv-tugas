var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
var bulan = input[3].split("/");
var tanggal = input[3].split("/");

function dataHandling2(input){
    input.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung");
    input.splice(4,1,"Pria", "SMA Internasional Metro");
    return input;
}

function dataHandling3(bulan){
    switch (Number(bulan[1])) {
        case 1:
            bulan = "Januari";
            break;
        case 2:
            bulan = "Februari";
            break;
        case 3:
            bulan = "Maret";
            break;
        case 4:
            bulan = "April";
            break;
        case 5:
            bulan = "Mei";
            break;
        case 6:
            bulan = "Juni";
            break;
        case 7:
            bulan = "Juli";
            break;
        case 8:
            bulan = "Agustus";
            break;
        case 9:
            bulan = "September";
            break;
        case 10:
            bulan = "Oktober";
            break;
        case 11:
            bulan = "November";
            break;
        case 12:
            bulan = "Desember";
            break;
        default:
            bulan = "Bulan hanya sampai 1-12 (Januari hingga Desember)";
            break;
    }
    return bulan;
}

function dataHandling4(bulan){
    bulan.sort(function(value1, value2) { return value2-value1 });
    return bulan;
}

function dataHandling5(tanggal){
    return tanggal.join("-");
}

function dataHandling6(input){
    return input[1].slice(0,15);
}

console.log(dataHandling2(input));
console.log(dataHandling3(bulan));
console.log(dataHandling4(bulan));
console.log(dataHandling5(tanggal));
console.log(dataHandling6(input));