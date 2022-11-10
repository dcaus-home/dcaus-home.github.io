1
var Alert = new CustomAlert();
2
3
function CustomAlert(){
4
  this.render = function(){
5
      //Show Modal
6
      let popUpBox = document.getElementById('popUpBox');
7
      popUpBox.style.display = "block";
8
      //Close Modal
9
      document.getElementById('closeModal').innerHTML = '<button onclick="Alert.ok()">OK</button>';
10
  }
11

12
this.ok = function(){
13
  document.getElementById('popUpBox').style.display = "none";
14
  document.getElementById('popUpOverlay').style.display = "none";
15
}
16
}

