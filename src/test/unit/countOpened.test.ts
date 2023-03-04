import { TILE_STATUS } from "../../store/features/game/gameSlice"
import { Board } from "../../types/game"
import { countOpenedTiles } from "../../utils/gameLogic/isWin"

describe("#countOpenedTiles", () => {
	test("all closed", () => {
		// create board
		const boardSize = 2
		const board: Board = [
			[
				{
					id: "",
					x: 0,
					y: 0,
					adjacentMinesCount: 0,
					status: TILE_STATUS.HIDDEN,
				},
				{
					id: "",
					x: 1,
					y: 0,
					adjacentMinesCount: 0,
					status: TILE_STATUS.HIDDEN,
				},
			],
			[
				{
					id: "",
					x: 0,
					y: 1,
					adjacentMinesCount: 0,
					status: TILE_STATUS.HIDDEN,
				},
				{
					id: "",
					x: 1,
					y: 1,
					adjacentMinesCount: 0,
					status: TILE_STATUS.HIDDEN,
				},
			],
		]

		// check the correct return of a function
		expect(countOpenedTiles(board)).toBe(0)
	})

	test("one opened", () => {
		// create board
		const boardSize = 2
		let board: Board = [
			[
				{
					id: "",
					x: 0,
					y: 0,
					adjacentMinesCount: 0,
					status: TILE_STATUS.HIDDEN,
				},
				{
					id: "",
					x: 1,
					y: 0,
					adjacentMinesCount: 0,
					status: TILE_STATUS.OPENED,
				},
			],
			[
				{
					id: "",
					x: 0,
					y: 1,
					adjacentMinesCount: 0,
					status: TILE_STATUS.HIDDEN,
				},
				{
					id: "",
					x: 1,
					y: 1,
					adjacentMinesCount: 0,
					status: TILE_STATUS.HIDDEN,
				},
			],
		]

		// check the correct return of a function
		expect(countOpenedTiles(board)).toBe(1)
	})

	test("all opened", () => {
		// create board
		const boardSize = 2
		let board: Board = [
			[
				{
					id: "",
					x: 0,
					y: 0,
					adjacentMinesCount: 0,
					status: TILE_STATUS.OPENED,
				},
				{
					id: "",
					x: 1,
					y: 0,
					adjacentMinesCount: 0,
					status: TILE_STATUS.OPENED,
				},
			],
			[
				{
					id: "",
					x: 0,
					y: 1,
					adjacentMinesCount: 0,
					status: TILE_STATUS.OPENED,
				},
				{
					id: "",
					x: 1,
					y: 1,
					adjacentMinesCount: 0,
					status: TILE_STATUS.OPENED,
				},
			],
		]

		// check the correct return of a function
		expect(countOpenedTiles(board)).toBe(boardSize ** 2)
	})
})
