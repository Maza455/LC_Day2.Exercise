function showSum() {
	let input1 = document.getElementById("input1").value;
	let input2 = document.getElementById("input2").value;

	let sum = Number(input1) + Number(input2);

	document.getElementById("result").innerHTML = "The sum is: " + sum;
}
