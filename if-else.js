let nilai = 79;

if (nilai >= 80) {
    console.log('Lulus')
}   else if (nilai >=70) {
    console.log ('Ditanggungkan')
}   else {
    console.log('Tidak Lulus')
}

if (nilai >= 80 && nilai <= 100) {
    nilai = "A"
}   else if (nilai >= 70 && nilai < 80) {
    nilai = "B"
}   else if (nilai >= 60 && nilai < 70) {
    nilai = "C" 
}   else {
    nilai = "D"
}

console.log(nilai)