function show(){
  var x = document.getElementById("team")
  var y = document.getElementById("myform")
  if(x.style.display === "none" && y.style.display === "none"){
    document.getElementById("showmore").innerHTML="SHOW LESS";
    x.style.display = "inline-table";
    y.style.display = "inline-table";
  }
    else {
      document.getElementById("showmore").innerHTML="SHOW MORE";
      x.style.display = "none";
      y.style.display = "none";

    }
  
  }
  function check(){
    var x= document.getElementById("email").value;
    if(x == "" || x == null){
      alert("please fill your email !!");
      return false;
    }
    var z= document.getElementById("UK").value;
    if(z == null){
      alert("please check your option")
      return false;
    }
    var k= document.getElementById("USA").value;
    if(k == null){
      alert("please check your option")
      return false;
    }
    var y= document.getElementsByName("type").value;
    if(y !="cVr12TY"){
      alert("please check your captcha")
      return false;
    }
    else if(y =="cVr12TY"){
      return true;
    }
    document.getElementById("myform").reset();
  }
  