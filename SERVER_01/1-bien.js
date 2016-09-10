

//parseInt//
// var n = '10';
//  n = parseInt(n);
// var s = '5';
// s = parseInt(s);
// console.log(n + s);



// if else //
// var diem = 2;
// if (diem >= 5) {
// 	console.log('Dau');
// } else {
// 	console.log('Rot');
// }


//for//
// for (var i = 10; i < 16; i++) {
// 	console.log('So dong' + i);
// }



///while//
// var dong = 1;
// while(dong <= 5) {
// 	console.log(dong);
// 	dong = dong + 2;
// }


//array();
var mang = ["cam", "xoai", "chuoi"];
console.log( mang[1] );

//length dem chieu dai mang
console.log(mang.length);

//them phan tu vao mang 
mang.push('quyt');

console.log(mang[0]);
console.log(mang[1]);
console.log(mang[2]);
console.log(mang[3]);


/// CÓ TẤT CẢ 3 KIỂU GỌI HÀM OR GỌI METHOD
///function 
//BUOC 1 ĐƠN GIẢN
function total(a, b){
	return a + b;
}
var x = total(3,5);
console.log(x);


//BƯỚC 2
/// goi ham trong ham
function ham(){
	console.log('hello ham');
}
function goiHam(goi){
	goi();
	///neu tham so có ngoặc tròn đóng mở thì có nghĩa tham số truyền
	 // vào sẽ thực hiện hành động nào đó
}
goiHam(ham);



//BƯỚC 3 function nam trong bien 
var tong = function(){
	console.log('Lap trinh Node js');
}
tong();



///LAP TRINH HƯỚNG ĐỐI TƯỢNG NODE JS //
function lapTrinh(khoa_hoc, hoc_phi){
	this.Ten = khoa_hoc;
	this.Hoc_Phi = hoc_phi;
}
lapTrinh.prototype.mota = function (){
	console.log("Hello" + this.Ten + " " + this.Hoc_Phi);
}
var nodeJs = new lapTrinh("Hello lap trinh node js" , 800000);
nodeJs.mota();



//// buffer 
// truyền tải dữ liệu trên database // bằng phương thức buffer
// Truyền tải dữ liệu đi lên đi xuống///
//read -time
/// bất cứ dữ liệu nào cũng chuyển thành buffer để truyền tải
/// Vì muốn chuyển dữ liệu và một post khắc thì phải chuyển dữ liệu qua dạng buffer
/// Khi chuyển dữ liệu thành buffer thì dữ liệu sẽ xuất ra dưới dạng [1,33 ,234 ];
// Ở dạng này khi chuyển dữ liệu qua một thiết bị khác( cổng khác ) thì dữ liệu ở dạng này
/// này sẽ được dịch ngược lại 
// hàm Buffer viết hoa
//vd//
var buffer = new Buffer('Tôi đang đi chơi', 'utf-8');
console.log(buffer);
//=> dịch ngược lại buffer thành dạng chuỗi 
//hàm toString(); chuyển buffer thành dạng chuỗi
console.log(buffer.toString());
//=> dịch ngược lại buffer thành dạng json 
console.log(buffer.toJSON());
///  --> TỪ CHUỖI HELLO BIẾN THÀNH BUFFER / TỪ BUFFER CÓ THỂ DỊCH THÀNH JSON // HOẶC THÀNH STRING



///TẠO WEB SERVER NODE JS ///
/// vai trò khách hàng truye cập vào đường dẫn, post đang mở, truy cập vào được dẫn 
// và xem nội dung trang web đó
var http = require('http');


