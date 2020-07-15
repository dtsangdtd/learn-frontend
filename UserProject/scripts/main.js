class User {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

var users = [
  new User('Sang', 20, '88/69 NGV'),
  new User('Trung', 22, '11/16 HTP')
];



var addUserData = function () {
  let inputName = document.getElementById('inputName');
  let inputAge = document.getElementById('inputAge');
  let inputAddress = document.getElementById('inputAddress');

  let newName = inputName.value;
  let newAge = inputAge.value;
  let newAddress = inputAddress.value;

  users.push(new User(newName, newAge, newAddress));

  loadUserData();
}

var loadUserData = function() {
  let userTable = document.getElementById('users');

  let userTableCount = userTable.rows.length;
  if(userTable.rows.length > 1){
    for (let index = userTableCount - 1; index > 0; index--) {
      console.log('delete row number: ' + index);
      userTable.deleteRow(index);
    }
  }

  for (let index = 0; index < users.length; index++) {
    let userRow = userTable.insertRow(index + 1);

    let nameCell = userRow.insertCell(0);
    let ageCell = userRow.insertCell(1);
    let addressCell = userRow.insertCell(2);

    nameCell.innerHTML = users[index].name;
    ageCell.innerHTML = users[index].age;
    addressCell.innerHTML = users[index].address;
  }
};

window.addEventListener('DOMContentLoaded', (event) => {
  loadUserData();
});
