import { MINE_FLAG, TILE_STATUS } from "../../store/features/game/gameSlice"
import { Board } from "../../types/game"
import { setMine } from "../../utils/gameLogic/boardTransform/createMines"

describe("#setMine", () => {
	test("correctly sets mine", () => {
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

		const expectedBoard: Board = [
			[
				{
					id: "",
					x: 0,
					y: 0,
					adjacentMinesCount: MINE_FLAG,
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

		// setting mine position
		const position = { x: 0, y: 0 }
		// revealing tile
		board = setMine(board, position)

		// check boards are the same
		expect(board).toEqual(expectedBoard)
	})
})
