var amount = "";
document.getElementById("betBtn").addEventListener("click", function money(){
  amount = prompt("Enter the amount you would like to Bet", "$00.00")
  if (amount != ""){
  alert("Your Bet Has Been Placed! Thank you for your Buisness!");
}
});