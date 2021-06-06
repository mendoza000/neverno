let min = 0
let max = 10

const btnNo = document.getElementById('btn_no');
const modal = document.getElementById('modal');

const mover = () => {
	let x = Math.random()*(max-min)
	if (x > 1 && x < 2) {
		btnNo.style.top = "-170px"
		btnNo.style.right = "100%"
	}
	else if (x > 2 && x < 3) {
		btnNo.style.top = "170px"
		btnNo.style.right = "50%"
	}
	else if (x > 3 && x < 4) {
		btnNo.style.top = "280px"
		btnNo.style.right = "6%"
	}
	else if (x > 4 && x < 5) {
		btnNo.style.top = "310px"
		btnNo.style.right = "100%"
	}
	else if (x > 5 && x < 6) {
		btnNo.style.top = "180px"
		btnNo.style.right = "0%"
	}
	else if (x > 6 && x < 7) {
		btnNo.style.top = "-50px"
		btnNo.style.right = "60%"
	}
	else if (x > 7 && x < 8) {
		btnNo.style.top = "100px"
		btnNo.style.right = "30%"
	}
	else if (x > 8 && x < 9) {
		btnNo.style.right = "90%"
		btnNo.style.top = "-100px"
	}
	else if (x > 9 && x < 10) {
		btnNo.style.top = "270px"
		btnNo.style.right = "21%"
	}
	else if (x > 10 && x < 11) {
		btnNo.style.top = "60px"
		btnNo.style.right = "40%"
	}
}

const show = () =>{
	modal.style.top = "0"
}

