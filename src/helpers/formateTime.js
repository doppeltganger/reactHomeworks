const formateTime = (inputTime) => {
	let seconds = String(~~(inputTime % 60));
	let minutes = String(~~((inputTime / 60) % 60));
	let hours = String(~~((inputTime / (60 * 60)) % 24));

	let currentTime = `${ hours.padStart(2, '0') }:${ minutes.padStart(2, '0') }:${ seconds.padStart(2, '0') }`;

	return currentTime;
};

export default formateTime;