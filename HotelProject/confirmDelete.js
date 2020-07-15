function confirmDelete(userhotel) {
  try {
    var table = document.getElementById(userhotel);
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
      var row = table.rows[i];
      var chkbox = row.cells[0].childNodes[0];
      if (null != chkbox && true == chkbox.checked) {
        table.confirmDelete(i);
        rowCount--;
        i--;
      }
    }
  }
  catch (e) {
    alert(e);
  }
}
