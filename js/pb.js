

function SuperButton() {


$("#my-progress-bar1").width("30%")



}
function SuperButton2() {


$("#my-progress-bar2").width("60%")



}

function SuperButton3() {


$("#my-progress-bar3").width("100%")



}

function SuperButton4() {


$("#my-progress-bar1").width("0%");
$("#my-progress-bar2").width("0%");
$("#my-progress-bar3").width("0%");


}


function intro() {

	$("#bar").click(SuperButton);
	$("#bar2").click(SuperButton2);
	$("#bar3").click(SuperButton3);
	$("#bar4").click(SuperButton4);


console.log("80");

}

$(document).ready(intro);







