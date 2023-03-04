import { MINE_FLAG, TILE_STATUS } from "../../../store/features/game/gameSlice"
import { Board } from "../../../types/game"
import { createTiles } from "../../../utils/gameLogic/boardTransform/createTiles"
import { openAllMines } from "../../../utils/gameLogic/boardTransform/openAllMines"

describe("#openAllMines", () => {
	test("opens 1 mine", () => {
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
					adjacentMinesCount: MINE_FLAG,
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
					adjacentMinesCount: MINE_FLAG,
					status: TILE_STATUS.MINE,
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

		board = openAllMines(board)
		// check boards are the same
		expect(board.flat().map(({ id, ...item }) => item)).toEqual(
			expectedBoard.flat().map(({ id, ...item }) => item)
		)
	})

	test("opens 2 mines", () => {
		// create board
		const boardSize = 2
		let board: Board = [
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
					adjacentMinesCount: MINE_FLAG,
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
					status: TILE_STATUS.MINE,
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
					adjacentMinesCount: MINE_FLAG,
					status: TILE_STATUS.MINE,
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

		board = openAllMines(board)
		// check boards are the same
		expect(board.flat().map(({ id, ...item }) => item)).toEqual(
			expectedBoard.flat().map(({ id, ...item }) => item)
		)
	})
})
