// const student = {
//   name: "Nguyễn Chi Cong",
//   age: 20,
//   email: "Cheseconggmail.com",
//   major: "CNTT",
// };
// const table =`
//     <tr>
//   <td>${student.name}</td>
//   <td>${student.age}</td>
//   <td>${student.email}</td>
//   <td>${student.major}</td>
// </tr>
// `
// document.getElementById("student").innerHTML = table;

const student = [
 {
  name: "Nguyễn Chi Cong",
  age: 20,
  email: "Chesecong@gmail.com",
  major: "CNTT",
},
 {
  name: "Nguyễn Chi",
  age: 21,
  email: "Chesescong@gmail.com",
  major: "CNTT",
},
];
const html = student
  .map(
    (student) => `
<tr>
  <td>${student.name}</td>
  <td>${student.age}</td>
  <td>${student.email}</td>
  <td>${student.major}</td>
</tr>
`,
  )
  .join("");

document.getElementById("student").innerHTML = html;