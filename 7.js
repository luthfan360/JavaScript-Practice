var jmlAngkot = 10;
var angkotAktif = 6;
var noAngkot = 1;

while(noAngkot <= angkotAktif) {
    console.log('Angkot No. ' + noAngkot + ' Beroperasi');
    noAngkot++
}

for (noAngkot = angkotAktif; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' Tidak Beroperasi')
}
