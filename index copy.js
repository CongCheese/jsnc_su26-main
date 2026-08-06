let userName = "Nguyễn Chí Công";
name = "Nguyễn Chí Công 1";
let local = "Mỹ Đình";
let school = "FPT Polytechnic"
let email = "chesecong@gmail.com";
const birthYear = 2004;
let age = 22;

console.log (userName);
console.log (local);
console.log (email);
console.log (birthYear);
console.log (school);
console.log(age==21);
let isAdmim = true;

const book = {
    id:1,
    bookName: "One Piece",
    price: 20000
};
console.log(book);
console.log(book.bookName);
document.getElementById("book").innerHTML=`
<h2> ${book.bookName}</h2>
`;
// alert("jsnc");

const h1 = document.getElementById("title");
console.log(h1);
const title = "danh sách sản phẩm"
h1.innerHTML = `danh sách sản phẩm ${title}`



const student = {
    studentName:"Công",
    studentAge: 22,
    studentSchool: "FPY"
};
console.log(student);
console.log(student.studentName);
document.getElementById("student").innerHTML=`
<h2> ${student.studentName}</h2>`
