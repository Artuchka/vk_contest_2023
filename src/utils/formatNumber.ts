export function getDigits(num: number): string {
	const res = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: 3,
	}).format(num)

	return res
}
