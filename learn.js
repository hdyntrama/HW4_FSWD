let nilairandom = [];
for (let i = 1; i <= 100; i++) {
  let nilai = Math.floor(Math.random()*50 ) +1 ;
  nilairandom.push(nilai);
}


const angkaGenap = []
const angkaGanjil = []
for(let i=0; i < nilairandom.length; i++){
  if(i % 2 === 0){
    angkaGenap.push(nilairandom[i])
  }
  else{
    angkaGanjil.push(nilairandom[i])
  }
}
function minimal(arr) {
  let minValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }

  return minValue;
}
       
function maksimal(arr) {
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}
function total(arr){
  let nilai = 0;
  for(i = 0; i<arr.length; i++){
      nilai = nilai + arr[i]
  }

  return nilai
}

function rataRata(arr){
  return total(arr) /arr.length
}






console.log("angka random:", nilairandom);
console.log("angka genap:", angkaGenap);
console.log("angka maksimal di index genap:", maksimal(angkaGenap));
console.log("angka minimal di index genap:", minimal(angkaGenap));
console.log("total angka di index genap:", total(angkaGenap));
console.log("rata rata angka di index genap:", rataRata(angkaGenap));

console.log("angka ganjil:", angkaGanjil);
console.log("angka maksimal di index ganjil:", maksimal(angkaGanjil));
console.log("angka minimal di index ganjil:", minimal(angkaGanjil));
console.log("total angka di index ganjil:", total(angkaGanjil));
console.log("rata rata angka di index ganjil:", rataRata(angkaGanjil))

console.log ("Hasil Perbandingan nilai antara Array Genap dan Array Ganjil : ");

if (minimal(angkaGenap) === minimal(angkaGanjil)) {
    console.log("nilai minimal pada Array Genap dan Array Ganjil Sama")
  } else if(minimal(angkaGenap) > minimal(angkaGanjil)) {
    console.log("nilai minimal pada Array genap lebih besar dari Array ganjil")
  }else {
    console.log("nilai minimal pada Array ganjil lebih besar dari Array genap")
  }

  if (maksimal(angkaGenap) === maksimal(angkaGanjil)) {
    console.log("nilai maksimal pada Array Genap dan Array Ganjil Sama")
  } else if(maksimal(angkaGenap) > maksimal(angkaGanjil)) {
    console.log("nilai maksimal pada Array genap lebih besar dari Array ganjil")
  }else {
    console.log("nilai maksimal Array ganjil lebih besar dari Array genap")
  }

  if (total(angkaGenap) === total(angkaGanjil)) {
    console.log("nilai total pada Array Genap dan Array Ganjil Sama")
  } else if(total(angkaGenap) > total(angkaGanjil)) {
    console.log("nilai total pada Array genap lebih besar dari Array ganjil")
  }else {
    console.log("nilai total Array ganjil lebih besar dari Array genap")
  }

  
  if (rataRata(angkaGenap) === rataRata(angkaGanjil)) {
    console.log("nilai rata rata pada Array Genap dan Array Ganjil Sama")
  } else if(total(angkaGenap) > total(angkaGanjil)) {
    console.log("nilai rata rata pada Array genap lebih besar dari Array ganjil")
  }else {
    console.log("nilai rata rata Pada Array ganjil lebih besar dari Array genap")
  }

