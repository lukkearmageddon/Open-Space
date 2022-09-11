function load() {
  const inputPassword = document.getElementById('password');
  const buttonOk = document.getElementById('button-ok');
  const checkboxInput = document.querySelectorAll('input[type="checkbox"]');
  const rangeInput = document.querySelectorAll('input[type="range"]');
  const launch = document.querySelector('.button-launch');
  const rocket = document.querySelector('.rocket');
  
  buttonOk.addEventListener('click', () => {
	if (inputPassword.value === 'TrustNo1') {
	  checkboxInput.forEach(remAttr);
	  rangeInput.forEach(remAttr);
	  inputPassword.setAttribute('disabled', '');
	  buttonOk.setAttribute('disabled', '');
	}
  })

  const remAttr = (value) => {
	value.removeAttribute('disabled');
  }
  
  checkboxInput.forEach((e) => {
	e.onchange = () => unblockLaunchBtn();
  })

  rangeInput.forEach( (e) => {
	e.onchange = () => unblockLaunchBtn();
  })
  
  function unblockLaunchBtn() {
	let checkedElem = 0;
	let rangeElem = 0;
 
	checkboxInput.forEach((e) => {
	  if (e.checked) {checkedElem++};
	})
 
	rangeInput.forEach((e) => {
	  if (e.value === '100') {rangeElem++};
	})

	if (checkedElem === checkboxInput.length && rangeElem === rangeInput.length) {
	  launch.disabled = false;
	}
  }
  
  launch.addEventListener('click', () => {
	rocket.animate([
	  // keyframes
	  { transform: 'translateY(-300px) translateX(300px)' }
	], {
	  	// timing options
	  	duration: 2000,
	  	iterations: 1
		});
  })

alert('the password is : TrustNo1')
}


window.onload = load;