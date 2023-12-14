var fight1Amount = "";
document.getElementById("betBtn1").addEventListener("click", function fight1(){
  amount = prompt("Enter the amount you would like to Bet", "$00.00")
  if (fight1Amount != null && amount != "$00.00"){
  alert("Your bet has been placed! Thank you for your buisnesss!")
  }
});
