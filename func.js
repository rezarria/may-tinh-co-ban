var HangDoi = "0";
var ketQua = "0";

const capNhat = (mode) => {
  document.getElementById("noi-dung-hien-thi").innerText = (
    mode ? HangDoi : ketQua
  )
    .toString()
    .substr(0, 17);
};

const xoaSach = () => {
  HangDoi = String();
  HangDoi = "0";
  capNhat(true);
};

const themVao = (phim) => {
  if (isNaN(phim)) {
    if (!isNaN(HangDoi[HangDoi.length - 1])) HangDoi += phim;
  } else {
    HangDoi += phim;
    if (!(HangDoi[0] == "0" && isNaN(HangDoi[1])))
      while (HangDoi[0] == 0) HangDoi = HangDoi.slice(1);
  }
  capNhat(true);
};

const xuat = () => {
  return HangDoi.toString();
};

const tinh = () => {
  ketQua = eval(HangDoi).toString();
  if (ketQua == "Infinity")
    ketQua = "Vô lý!"
  xoaSach();
  capNhat(false);
};
