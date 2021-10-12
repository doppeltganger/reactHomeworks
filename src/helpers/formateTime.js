export const formateTime = (inputTime) => {
	let milliseconds = inputTime % 1000;
	let seconds = ~~((inputTime / 1000) % 60);
	let minutes = ~~((inputTime / 1000 / 60) % 60);
	let hours = ~~((inputTime / 1000 / 3600) % 24);

	milliseconds < 100 && (milliseconds = `0${milliseconds}`);
	seconds < 10 && (seconds = `0${seconds}`);
	minutes < 10 && (minutes = `0${minutes}`);
	hours < 10 && (hours = `0${hours}`);
	

	const currentTime = {
		hours,
		minutes,
		seconds,
		milliseconds,
	};

	return currentTime;
};