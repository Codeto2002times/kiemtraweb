
function timConGiap() {
  const year = document.getElementById("year").value; //lấy giá trị year từ id year của html
  
  const tenGiap = [  
   "Tý" ,
   "Sửu",
   "Dần",
   "Mão",
  "Thìn",
  "Tỵ",
  "Ngọ" ,
  "Mùi",
  "Thân",
  "Dậu",
  "Tuất",
  "Hợi",
  ];
  const namConGiap = (year-4)  % 12; // - 4 để chia ra đúng số dư cần tính và chu kì của 12 con giáp theo danh sách

  const tenThienChi=[
    "Giáp", 
    "Ất", 
    "Bính",
    "Đinh", 
    "Mậu",
    " Kỷ",
    " Canh",
    "Tân",
     "Nhâm", 
     "Quý",
    ];
const namThienChi= (year-4)%10;// tương tự 12 tháng

 const x=[("Con giáp của bạn là: "+ tenGiap[namConGiap]+
 ", thuộc năm: " +tenThienChi[namThienChi]+" "+tenGiap[namConGiap])]; // thuộc tính đã đặt[vị trí của thuộc tính] ví dụ ở biến q = [ "a", "b", "c"] ta muốn lấy vị trí chữ b thì ta có thể dùng q[2] theo thứ tự bắt đầu từ 0

 //const y = [ "thuộc năm: "+( tenThienChi[namThienChi])+" "+tenGiap[namConGiap]];
    
 if (namConGiap<0){
 document.getElementById("ketqua").innerHTML = "Vui lòng nhập năm sinh hợp lệ"
 ;
}

 else{

    document.getElementById("ketqua").innerHTML= x;

   // document.getElementById("idtest1").innerHTML= y;

 }
  const a =[tenGiap[namConGiap]]//ở đây mình đã lấy ra vị trí của tenGiap bằng namConGiap được tính ở trên
  const c = document.getElementById("image");c.src = "image/"+a+".jpg"

}
