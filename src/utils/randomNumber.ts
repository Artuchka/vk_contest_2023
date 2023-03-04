// should be moved to upper functions because it's impure function
export function randomNumber(top: number) {
	// +0.9 is `bicycle` so we definetely get possible range [0..top(included)]
	return Math.floor(Math.random() * (top + 0.9))
}
