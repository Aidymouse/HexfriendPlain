/** @param {string} colorString */
export const hexToNumber = (colorString) => {
	return parseInt(`0x${colorString.replace("#", "")}`)
}

/** @param {number} colorNumber */
export const numberToHex = (colorNumber) => {
	return `#${colorNumber.toString(16)}`
}
