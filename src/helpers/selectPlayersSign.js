export const selectPlayersSign = (sign, firstPlayer = 'X', secondPlayer = '0') => {
	return sign === 'X' ? firstPlayer : secondPlayer;
};
