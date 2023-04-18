let student = [
  {
    id: 1,
    name: "rikkei",
    email: "rikkei@gmail.com",
    phone: "082386888",
    address: "Hà nội",
    genrder: "Nam",
  },
  {
    id: 2,
    name: "Academy",
    email: "Academy@gmail.com",
    phone: "0978666888",
    address: "hồ Chí Minh",
    genrder: "Nữ",
  },
];

let result = document.getElementById("result");

let form = document.getElementById("student_information");

let newForm = document.getElementById("list_students");



function renderResult() {
  result.innerHTML = "";
  for (let i = 0; i < student.length; i++) {
    result.innerHTML += `
        <tr id="${i + 1}">
            <td>${student[i].id}</td>
            <td>${student[i].name}</td>
            <td>${student[i].email}</td>
            <td>${student[i].phone}</td>
            <td>${student[i].address}</td>
            <td>${student[i].genrder}</td>
            <td>
            <button class="btn btn-success btn-update">Update</button>
            <button class="btn btn-danger btn-delete">Delete</button>
            </td>
        </tr>
        `;
  }
}
renderResult();

// them hoc vien vao danh sach
form.onsubmit = function (e) {
  e.preventDefault();
  let id = Math.floor(Math.random() * 1000000);
  let name = form.username.value;
  let email = form.email.value;
  let phone = form.number_phone.value;
  let address = form.address.value;
  let genrder = e.target.classList.contains("information");
  if (e.target.elements.genrder.value === "boy") {
    student.push(newStudent);
    renderResult();
  }
  if (e.target.elements.genrder.value === "girl") {
    student.push(newStudent);
    renderResult();
  }
  let newStudent = {
    id: id,
    name: name,
    email: email,
    phone: phone,
    address: address,
    genrder: genrder,
  };
  console.log(student);
  //    newForm.innerHTML = "" ;
  //    newForm.innerHTML =  `
  //    <tr id="${i+1}">
  //             <td>${newStudent[i].id}</td>
  //             <td>${newStudent[i].name}</td>
  //             <td>${newStudent[i].email}</td>
  //             <td>${newStudent[i].phone}</td>
  //             <td>${newStudent[i].address}</td>
  //             <td>${newStudent[i].genrder}</td>
  //             <td>
  //             <button class="btn btn-success btn-update">Update</button>
  //             <button class="btn btn-danger btn-delete">Delete</button>
  //             </td>
  //         </tr>
  //    `
  student.push(newStudent);
  renderResult();
};

// xoa hoc vien khoi danh sach
form.onsubmit = function (e) {
    e.preventDefault();
  };
  
  result.onclick = function (e) {
    let index = e.target.parentElement.parentElement.id;
    if (e.target.classList.contains("delete")) {
        student.splice(index, 1);
      render();
    }
}
