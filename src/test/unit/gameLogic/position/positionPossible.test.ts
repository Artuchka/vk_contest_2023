import { positionPossible } from "../../../../utils/gameLogic/position/positionPossible"

describe("#positionPossible", () => {
	test("left top border", () => {
		const boardSize = 3
		const pos = {
			x: 0,
			y: 0,
		}

		const res = positionPossible(pos, boardSize)
		expect(res).toBeTruthy()
	})
	test("right top border", () => {
		const boardSize = 3
		const pos = {
			x: 2,
			y: 0,
		}

		const res = positionPossible(pos, boardSize)
		expect(res).toBeTruthy()
	})
	test("left down border", () => {
		const boardSize = 3
		const pos = {
			x: 0,
			y: 2,
		}

		const res = positionPossible(pos, boardSize)
		expect(res).toBeTruthy()
	})
	test("right down border", () => {
		const boardSize = 3
		const pos = {
			x: 2,
			y: 2,
		}

		const res = positionPossible(pos, boardSize)
		expect(res).toBeTruthy()
	})

	test("over left top border", () => {
		const boardSize = 3
		const pos = {
			x: -1,
			y: -1,
		}

		const res = positionPossible(pos, boardSize)
		expect(res).toBeFalsy()
	})
	test("over right top border", () => {
		const boardSize = 3
		const pos = {
			x: 3,
			y: 0,
		}

		const res = positionPossible(pos, boardSize)
		expect(res).toBeFalsy()
	})
	test("over left down border", () => {
		const boardSize = 3
		const pos = {
			x: -1,
			y: 2,
		}

		const res = positionPossible(pos, boardSize)
		expect(res).toBeFalsy()
	})
	test("over right down border", () => {
		const boardSize = 3
		const pos = {
			x: 3,
			y: 2,
		}

		const res = positionPossible(pos, boardSize)
		expect(res).toBeFalsy()
	})

	test("center", () => {
		const boardSize = 3
		const pos = {
			x: 1,
			y: 1,
		}

		const res = positionPossible(pos, boardSize)
		expect(res).toBeTruthy()
	})
})
