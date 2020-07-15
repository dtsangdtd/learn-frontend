class userhotel {
  constructor(name, phoneNumber, age, day) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.age = age;
    this.day = day;
  }
}

var usershotel = [new userhotel('sang', 0982354461, 19, 20 / 10)];

var addUserhoteldata = function() {
  let inputName = document.getElementById('inputName');
  let inputPhoneNumber = document.getElementById('inputPhoneNumber');
  let inputBirthday = document.getElementById('inputBirthday');
  let inputDay = document.getElementById('inputDay');

  let newName = inputName.value;
  let newphoneNumber = inputPhoneNumber.value;
  let newAge = inputBirthday.value;
  let newDay = inputDay.value;

  if (
    newName === undefined ||
    newName === '' ||
    newphoneNumber === undefined ||
    newphoneNumber === '' ||
    newAge === undefined ||
    newAge === '' ||
    newDay === undefined ||
    newDay === ''
  ) {
    return;
  }

  usershotel.push(new userhotel(newName, newphoneNumber, newAge, newDay));

  loadUserhotelData();

  clearInput();
};

var clearInput = function() {
  let inputName = document.getElementById('inputName');
  let inputPhoneNumber = document.getElementById('inputPhoneNumber');
  let inputBirthday = document.getElementById('inputBirthday');
  let inputDay = document.getElementById('inputDay');

  inputName.value = '';
  inputPhoneNumber.value = '';
  inputBirthday.value = '';
  inputDay.value = '';
};

var loadUserhotelData = function() {
  let userTable = document.getElementById('usersHotel');

  let userTableCount = userTable.rows.length;
  if (userTable.rows.length > 1) {
    for (let index = userTableCount - 1; index > 0; index--) {
      console.log('delete row of table ' + index);
      userTable.deleteRow(index);
    }
  }

  for (let index = 0; index < usershotel.length; index++) {
    let userhotelRow = userTable.insertRow(index + 1);

    let NameCell = userhotelRow.insertCell(0);
    let PhoneNumber = userhotelRow.insertCell(1);
    let BrithdayCell = userhotelRow.insertCell(2);
    let DayCell = userhotelRow.insertCell(3);

    NameCell.innerHTML = usershotel[index].name;
    PhoneNumber.innerHTML = usershotel[index].phoneNumber;
    BrithdayCell.innerHTML = usershotel[index].age;
    DayCell.innerHTML = usershotel[index].day;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  loadUserhotelData();
});
function confirmDelete(userhotel){
  let tabledata = document.getElementById(userhotel)
  for ( let i = 0; i < tabledata; i++ ){ 
    inputName.value = '';
    inputPhoneNumber.value = '';
    inputBirthday.value = '';
    inputDay.value = '';
    
  }
}