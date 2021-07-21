var HangDoi = String();
var ketQua = 0;
function xoaSach() {
  HangDoi = String();
}

function themVao(phim) {
  console.log("themVao() =>");
  if (isNaN(phim)) {
    console.log("xxxxxxxx");
    if (!isNaN(HangDoi[HangDoi.length - 1])) HangDoi += phim;
  } else {
    console.log("!!!!!!!!");
    HangDoi += phim;
  }
  console.log(HangDoi.toString());
}

function xuat() {
  return HangDoi.toString();
}

function tinh() {
  alert(ketQua.toString());
}
