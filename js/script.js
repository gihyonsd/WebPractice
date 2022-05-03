let menu;
let price;

let sum = 0;
let suma = 0;
let sumb = 0;
let sumc = 0;
let sumd = 0;
let sume = 0;
let sumf = 0;
let sumg = 0;
let sumh = 0;
let sumi = 0;
let sumj = 0;
let sumk = 0;
let suml = 0;
let summ = 0;
let sumn = 0;

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;
let count11 = 0;
let count12 = 0;
let count13 = 0;
let count14 = 0;

function add1(menu, price) {
  if (menu == "a") {
    suma += parseInt(price);
    count1++;
  }
  //정규식 숫자 콤마 금액표시하려고 씀
  let a = document.getElementById('menu1Name1').innerText;
  let msg1 = a + " : " + suma.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count1 + "개";
  document.querySelector("#msg1").innerHTML = msg1;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add2(menu, price) {
  if (menu == "b") {
    sumb += parseInt(price);
    count2++;
  }


  let b = document.getElementById('menu1Name2').innerText;
  let msg2 = b + " : " + sumb.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count2 + "개";
  document.querySelector("#msg2").innerHTML = msg2;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add3(menu, price) {
  if (menu == "c") {
    sumc += parseInt(price);
    count3++;
  }


  let c = document.getElementById('menu1Name3').innerText;
  let msg3 = c + " : " + sumc.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count3 + "개";
  document.querySelector("#msg3").innerHTML = msg3;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add4(menu, price) {
  if (menu == "d") {
    sumd += parseInt(price);
    count4++;
  }


  let d = document.getElementById('menu1Name4').innerText;
  let msg4 = d + " : " + sumd.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count4 + "개";
  document.querySelector("#msg4").innerHTML = msg4;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add5(menu, price) {
  if (menu == "e") {
    sume += parseInt(price);
    count5++;
  }

  let e = document.getElementById('menu1Name5').innerText;
  let msg5 = e + " : " + sume.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count5 + "개";
  document.querySelector("#msg5").innerHTML = msg5;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add6(menu, price) {
  if (menu == "f") {
    sumf += parseInt(price);
    count6++;
  }

  let f = document.getElementById('menu1Name6').innerText;
  let msg6 = f + " : " + sumf.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count6 + "개";
  document.querySelector("#msg6").innerHTML = msg6;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add7(menu, price) {
  if (menu == "g") {
    sumg += parseInt(price);
    count7++;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let g = document.getElementById('menu2Name1').innerText;
  let msg7 = g + " : " + sumg.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count7 + "개";
  document.querySelector("#msg7").innerHTML = msg7;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add8(menu, price) {
  if (menu == "h") {
    sumh += parseInt(price);
    count8++;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let h = document.getElementById('menu2Name2').innerText;
  let msg8 = h + " : " + sumh.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count8 + "개";
  document.querySelector("#msg8").innerHTML = msg8;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add9(menu, price) {
  if (menu == "i") {
    sumi += parseInt(price);
    count9++;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let i = document.getElementById('menu2Name3').innerText;
  let msg9 = i + " : " + sumi.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count9 + "개";
  document.querySelector("#msg9").innerHTML = msg9;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add10(menu, price) {
  if (menu == "j") {
    sumj += parseInt(price);
    count10++;
  }


  let j = document.getElementById('menu2Name4').innerText;
  let msg10 = j + " : " + sumj.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count10 + "개";
  document.querySelector("#msg10").innerHTML = msg10;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add11(menu, price) {
  if (menu == "k") {
    sumk += parseInt(price);
    count11++;
  }

  let k = document.getElementById('menu2Name5').innerText;
  let msg11 = k + " : " + sumk.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count11 + "개";
  document.querySelector("#msg11").innerHTML = msg11;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add12(menu, price) {
  if (menu == "l") {
    suml += parseInt(price);
    count12++;
  }


  let l = document.getElementById('menu2Name6').innerText;
  let msg12 = l + " : " + suml.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count12 + "개";
  document.querySelector("#msg12").innerHTML = msg12;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add13(menu, price) {
  if (menu == "m") {
    summ += parseInt(price);
    count13++;
  }

  let m = document.getElementById('menu3Name1').innerText;
  let msg13 = m + " : " + summ.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count13 + "개";
  document.querySelector("#msg13").innerHTML = msg13;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ + sumn;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function add14(menu, price) {
  if (menu == "n") {
    sumn += parseInt(price);
    count14++;
  }
  //let b = document.getElementById('mainPrice1').innerText;

  let n = document.getElementById('menu3Name2').innerText;
  let msg14 = n + " : " + sumn.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " " + count14 + "개";
  document.querySelector("#msg14").innerHTML = msg14;
  sum = suma + sumb + sumc + sumd + sume + sumf + sumg + sumh + sumi + sumj + sumk + suml + summ;
  document.querySelector("#total").innerHTML = "합계 = " + sum.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}





function reset() {
  sum = 0;
  suma = 0;
  sumb = 0;
  sumc = 0;
  sumd = 0;
  sume = 0;
  sumf = 0;
  sumg = 0;
  sumh = 0;
  sumi = 0;
  sumj = 0;
  sumk = 0;
  suml = 0;
  summ = 0;
  sumn = 0;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  count6 = 0;
  count7 = 0;
  count8 = 0;
  count9 = 0;
  count10 = 0;
  count11 = 0;
  count12 = 0;
  count14 = 0;


  document.querySelector("#msg1").innerHTML = "";
  document.querySelector("#msg2").innerHTML = "";
  document.querySelector("#msg3").innerHTML = "";
  document.querySelector("#msg4").innerHTML = "";
  document.querySelector("#msg5").innerHTML = "";
  document.querySelector("#msg6").innerHTML = "";
  document.querySelector("#msg7").innerHTML = "";
  document.querySelector("#msg8").innerHTML = "";
  document.querySelector("#msg9").innerHTML = "";
  document.querySelector("#msg10").innerHTML = "";
  document.querySelector("#msg11").innerHTML = "";
  document.querySelector("#msg12").innerHTML = "";
  document.querySelector("#msg13").innerHTML = "";
  document.querySelector("#msg14").innerHTML = "";
  document.querySelector("#total").innerHTML = "";
}