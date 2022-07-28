//Make the 2nd item have green background color
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor="green";

//Make the 3rd item invisible

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';



//Using QuerySelectorALL change the font color to green for 2nd item in the item list
var seconditem=document.querySelectorAll('.list-group-item');
seconditem[1].style.color="green";

//Choose all the odd elements and make their background green using QuerySelectorALL﻿
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
}


