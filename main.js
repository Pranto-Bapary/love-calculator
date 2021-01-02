var myName = document.getElementById('myName');
var partnerName = document.getElementById('partnerName');
var loveCalculateButton = document.getElementById('calculateLove');


loveCalculateButton.addEventListener("click", function () {
    var myValue = myName.value;
    var partnervalue = partnerName.value;
    if (myName.value == "") {
        alert("Please Enter Your Name");
    } else if (partnerName.value == "") {
        alert("Please Enter Your Partner's Name");
    } else {
        var count = 0;
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        let calculatedLove = document.getElementById('output');
        calculatedLove.innerHTML = (myValue + " and " + partnervalue + "'s Love Percentage is : " + randomNumber + "%");
        myName.value = "";
        partnerName.value = "";
    }

});