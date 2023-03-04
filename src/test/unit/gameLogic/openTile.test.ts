import { MINE_FLAG, TILE_STATUS } from "../../../store/features/game/gameSlice"
import { Board } from "../../../types/game"
import { openAllTiles } from "../../../utils/gameLogic/boardTransform/openAllTiles"
import { openAdjacentTiles } from "../../../utils/gameLogic/boardTransform/openTile"

describe("#openAllTiles", () => {
	test("correctly opens all tiles ", () => {
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
					status: TILE_STATUS.MINE,
				},
				{
					id: "",
					x: 1,
					y: 0,
					adjacentMinesCount: 1,
					status: TILE_STATUS.OPENED,
				},
			],
			[
				{
					id: "",
					x: 0,
					y: 1,
					adjacentMinesCount: 1,
					status: TILE_STATUS.OPENED,
				},
				{
					id: "",
					x: 1,
					y: 1,
					adjacentMinesCount: 1,
					status: TILE_STATUS.OPENED,
				},
			],
		]

		board = openAllTiles(board)

		// check boards are the same
		expect(board).toEqual(expectedBoard)
	})
})

describe("#openTile", () => {
	test("correctly reveals tile & nearby ones ", () => {
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

		// setting `click` position
		const position = { x: 1, y: 0 }
		// revealing tile
		board = openAdjacentTiles(board, position, boardSize)

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
					adjacentMinesCount: 1,
					status: TILE_STATUS.OPENED,
				},
			],
			[
				{
					id: "",
					x: 0,
					y: 1,
					adjacentMinesCount: 1,
					status: TILE_STATUS.OPENED,
				},
				{
					id: "",
					x: 1,
					y: 1,
					adjacentMinesCount: 1,
					status: TILE_STATUS.OPENED,
				},
			],
		]

		// check boards are the same
		expect(board).toEqual(expectedBoard)
	})
})
