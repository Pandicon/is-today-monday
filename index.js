function is_today_monday() {
	return new Date().getDay() === 1;
}

module.exports = is_today_monday;
