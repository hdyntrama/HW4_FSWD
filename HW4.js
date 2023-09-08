// a. Buatlah 100 nilai random (1 sampai 50) pada 1 array
const nilaiRandom = [];
for (let i = 0; i < 100; i++) {
  nilaiRandom.push(Math.floor(Math.random() * 50) + 1);
}

// b. Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil
const arrayGenap = [];
const arrayGanjil = [];

for (let i = 0; i < nilaiRandom.length; i++) {
  if (i % 2 === 0) {
    arrayGenap.push(nilaiRandom[i]);
  } else {
    arrayGanjil.push(nilaiRandom[i]);
  }
}

// c. Gunakan 2 array yang telah dibuat untuk mendapatkan Min, Max, Total, dan Rata-rata
function hitungStatistik(arr) {
  if (arr.length === 0) {
    return {
      min: null,
      max: null,
      total: 0,
      rataRata: null,
    };
  }

  let min = arr[0];
  let max = arr[0];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    total += arr[i];
  }

  const rataRata = total / arr.length;

  return {
    min,
    max,
    total,
    rataRata,
  };
}

const statistikGenap = hitungStatistik(arrayGenap);
const statistikGanjil = hitungStatistik(arrayGanjil);

// d. Bandingkan kedua buah array
function bandingkanStatistik(statistik1, statistik2) {
  let hasilBanding = '';

  if (statistik1.min > statistik2.min) {
    hasilBanding += 'Min lebih besar pada array genap\n';
  } else if (statistik1.min < statistik2.min) {
    hasilBanding += 'Min lebih besar pada array ganjil\n';
  } else {
    hasilBanding += 'Min memiliki nilai sama antara array genap dan ganjil\n';
  }

  if (statistik1.max > statistik2.max) {
    hasilBanding += 'Max lebih besar pada array genap\n';
  } else if (statistik1.max < statistik2.max) {
    hasilBanding += 'Max lebih besar pada array ganjil\n';
  } else {
    hasilBanding += 'Max memiliki nilai sama antara array genap dan ganjil\n';
  }

  if (statistik1.total === statistik2.total) {
    hasilBanding += 'Total memiliki nilai sama antara array genap dan ganjil\n';
  } else {
    hasilBanding += 'Total memiliki nilai berbeda antara array genap dan ganjil\n';
  }

  if (statistik1.rataRata > statistik2.rataRata) {
    hasilBanding += 'Rata-rata lebih besar pada array genap\n';
  } else if (statistik1.rataRata < statistik2.rataRata) {
    hasilBanding += 'Rata-rata lebih besar pada array ganjil\n';
  } else {
    hasilBanding += 'Rata-rata memiliki nilai sama antara array genap dan ganjil\n';
  }

  return hasilBanding;
}

// Output
console.log("Array dengan jumlah index 100:", nilaiRandom);
console.log("Array genap dengan jumlah index 50:", arrayGenap);
console.log("Array ganjil dengan jumlah index 50:", arrayGanjil);
console.log("Statistik Genap:", statistikGenap);
console.log("Statistik Ganjil:", statistikGanjil);
console.log("Perbandingan nilai:");
console.log(bandingkanStatistik(statistikGenap, statistikGanjil));