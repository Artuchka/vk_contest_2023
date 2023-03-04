import { MINE_FLAG, TILE_STATUS } from "../../../store/features/game/gameSlice"
import { Board, Cell } from "../../../types/game"
import { setMine } from "../../../utils/gameLogic/boardTransform/createMines"
import { replaceTile } from "../../../utils/gameLogic/boardTransform/replaceTile"

describe("#replaceTile", () => {
	test("correctly replaces 1 tile", () => {
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
					adjacentMinesCount: 0,
					status: TILE_STATUS.QUESTIONED,
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

		const position = { x: 0, y: 0 }
		const newCell: Cell = {
			x: 0,
			y: 0,
			status: TILE_STATUS.QUESTIONED,
			adjacentMinesCount: 0,
			id: "",
		}
		board = replaceTile(board, position, newCell)

		// check boards are the same
		expect(board).toEqual(expectedBoard)
	})

	test("correctly replaces 2 tile", () => {
		// create board
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
					adjacentMinesCount: 0,
					status: TILE_STATUS.QUESTIONED,
				},
				{
					id: "",
					x: 1,
					y: 0,
					adjacentMinesCount: 0,
					status: TILE_STATUS.MINE,
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

		const position1 = { x: 0, y: 0 }
		const newCell1: Cell = {
			x: 0,
			y: 0,
			status: TILE_STATUS.QUESTIONED,
			adjacentMinesCount: 0,
			id: "",
		}
		board = replaceTile(board, position1, newCell1)

		const position2 = { x: 1, y: 0 }
		const newCell2: Cell = {
			x: 1,
			y: 0,
			status: TILE_STATUS.MINE,
			adjacentMinesCount: 0,
			id: "",
		}
		board = replaceTile(board, position2, newCell2)

		// check boards are the same
		expect(board).toEqual(expectedBoard)
	})
})
