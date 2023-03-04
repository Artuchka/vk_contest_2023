import { positionSame } from "../../../../utils/gameLogic/position/positionSame"

describe("#positionSame", () => {
	test("same position", () => {
		const pos1 = {
			x: 0,
			y: 0,
		}
		const pos2 = {
			x: 0,
			y: 0,
		}

		const res = positionSame(pos1, pos2)
		expect(res).toBeTruthy()
	})
	test("not same position by x", () => {
		const pos1 = {
			x: 0,
			y: 0,
		}
		const pos2 = {
			x: 1,
			y: 0,
		}

		const res = positionSame(pos1, pos2)
		expect(res).toBeFalsy()
	})
	test("not same position by y", () => {
		const pos1 = {
			x: 0,
			y: 0,
		}
		const pos2 = {
			x: 0,
			y: 1,
		}

		const res = positionSame(pos1, pos2)
		expect(res).toBeFalsy()
	})
	test("not same position by x and y", () => {
		const pos1 = {
			x: 0,
			y: 0,
		}
		const pos2 = {
			x: 1,
			y: 1,
		}

		const res = positionSame(pos1, pos2)
		expect(res).toBeFalsy()
	})
})
