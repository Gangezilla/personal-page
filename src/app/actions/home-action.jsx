export const expandCard = (e) => {
	console.log(e)
	return {
		type: 'EXPAND_CARD',
		isCardOpen: true
	}
}