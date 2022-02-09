const angka = document.querySelector(".inputNumber");
const q1 = document.querySelector(".hasilQ1");
const q2 = document.querySelector(".hasilQ2");
const q3 = document.querySelector(".hasilQ3");
const jq = document.querySelector(".hasilJq");
const qd = document.querySelector(".hasilQd");
const reset = document.querySelector(".reset");
const tombolHasil = document.querySelector(".tombolHasil");
let cariAngka = /-\d+|\d+/g;
let ar;
let number = [];

function menambahkanArray() {
  while ((ar = cariAngka.exec(angka.value)) != null) {
    number.push(parseFloat(ar[0]));
  }
}

function urutan(number) {
  number.sort((a, b) => {
    return a - b;
  });
}

let filter1 = [];
let filter2 = [];

function pembagian() {
  let median = "";
  if (number.length % 2 === 0) {
    for (let i = 0; i < Math.floor(number.length / 2); i++) {
      filter1.push(number[i]);
      filter2.push(number[number.length - (i + 1)]);
    }
    urutan(filter2);
    median = parseFloat((filter1[filter1.length - 1] + filter2[0]) / 2);
    q2.innerHTML = median;
  } else {
    for (let i = 0; i < Math.floor(number.length / 2); i++) {
      filter1.push(number[i]);
      filter2.push(number[number.length - (i + 1)]);
    }
    urutan(filter2);
    median = number[Math.floor(number.length / 2)];
    q2.innerHTML = median;
  }
}

let filter3 = [];
let filter4 = [];
let kuartilBawahQ1 = "";

function kuartilBawah() {
  for (let i = 0; i < Math.floor(filter1.length / 2); i++) {
    filter3.push(filter1[i]);
    filter4.push(filter1[filter1.length - (i + 1)]);
  }
  urutan(filter4);
  if (filter1.length % 2 === 0) {
    kuartilBawahQ1 = parseFloat((filter3[filter3.length - 1] + filter4[0]) / 2);
  } else {
    kuartilBawahQ1 = parseFloat(filter1[Math.floor(filter1.length / 2)]);
  }
  q1.innerHTML = kuartilBawahQ1;
}

let filter5 = [];
let filter6 = [];
let kuartilAtasQ3 = "";

function kuartilAtas() {
  for (let i = 0; i < Math.floor(filter2.length / 2); i++) {
    filter5.push(filter2[i]);
    filter6.push(filter2[filter2.length - (i + 1)]);
  }
  urutan(filter6);
  if (filter2.length % 2 === 0) {
    kuartilAtasQ3 = parseFloat((filter5[filter5.length - 1] + filter6[0]) / 2);
  } else {
    kuartilAtasQ3 = parseFloat(filter2[Math.floor(filter2.length / 2)]);
  }
  q3.innerHTML = kuartilAtasQ3;
}

function bagian(a, b, c) {
  for (let i = 0; i < Math.floor(a.length / 2); i++) {
    b.push(a[i]);
    c.push(a[a.length - (i + 1)]);
  }
}

function jangkauanKuartil(number1, number2) {
  let jangkauanKuartilJq = "";
  jangkauanKuartilJq = parseFloat(number1 - number2);
  jq.innerHTML = jangkauanKuartilJq;
}

function simpanganKuartil(number1, number2) {
  let simpanganKuartilQd = "";
  simpanganKuartilQd = parseFloat((number1 - number2) / 2);
  qd.innerHTML = simpanganKuartilQd;
}

tombolHasil.addEventListener("click", () => {
  menambahkanArray();
  urutan(number);
  pembagian();
  kuartilBawah();
  kuartilAtas();
  jangkauanKuartil(kuartilAtasQ3, kuartilBawahQ1);
  simpanganKuartil(kuartilAtasQ3, kuartilBawahQ1);
});

reset.addEventListener("click", () => {
  number = [];
  filter1 = [];
  filter2 = [];
  filter3 = [];
  filter4 = [];
  filter5 = [];
  filter6 = [];
  median = "";
  kuartilBawahQ1 = "";
  kuartilAtasQ3 = "";
  angka.value = "";
  q1.innerHTML = "";
  q2.innerHTML = "";
  q3.innerHTML = "";
  jq.innerHTML = "";
  qd.innerHTML = "";
});
