function nilairandom(min,max){
    return Math.floor(Math.random()*(max-min + 1)) + min
}

let nilai = [];
let genap = [];
let ganjil = [];

for (let i = 0; i < 100; i++){
    nilai.push(nilairandom(1,50));
}

for (let x = 0; x < nilai.length; x++) {
    if (x % 2 == 0){
        genap.push(nilai[x]);
    } else {
        ganjil.push(nilai[x]);
    }
}

function nMax(a){
    for (let i = 0; i < a.length; i++){
        if (i==0){
            var nilai_max = a[i];
        } else {
            if(a[i] > nilai_max) {
                nilai_max = a[i]
            }
        }
    }
    return nilai_max;
}

function nMin(a){
    for(let i = 0; i < a.length; i++){
        if (i == 0){
            var nilai_min = a[i];
        } else {
            if (a[i] < nilai_min) {
                nilai_min = a[i];
            }
        }
    }
    return nilai_min;
}

function total(a){
    let tot = 0;
    for (let i = 0; i < a.length; i++){
    tot += a[i];
    }
return tot;
}

function rata(a) {
    let tot = 0;
    let rata2;
    for (let i = 0; i < a.length; i++){
        tot += a[i];
    }
    rata2 = tot / a.length;
    return rata2;
}
console.log(ganjil);
console.log(genap);
console.log('Nilai Min Genap ' + nMin(genap));
console.log('Nilai Max Genap ' + nMax(genap));
console.log('Nilai Min Ganjil ' + nMin(ganjil));
console.log('Nilai Max Ganjil ' + nMax(ganjil));
console.log('Nilai Total Genap ' + total(genap));
console.log('Nilai Total Ganjil ' + total(ganjil));
console.log('Nilai Rata2 Genap ' + rata(genap));
console.log('Nilai Rata2 Ganjil ' + rata(ganjil));