import { MINE_FLAG, TILE_STATUS } from "../../store/features/game/gameSlice"
import { Board } from "../../types/game"
import {
	isMarked,
	isMine,
	isOpened,
} from "../../utils/gameLogic/position/positionCheckers"

describe("#isOpened", () => {
	test("returns true when tile was opened", () => {
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

		// position for checking
		const position = { x: 0, y: 0 }

		// check the tile is opened
		expect(isOpened(board, position)).toBeTruthy()
	})

	test("returns false when tile was not opened", () => {
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

		// position for checking
		const position = { x: 0, y: 0 }

		// check the tile is opened
		expect(isOpened(board, position)).toBeFalsy()
	})
})

describe("#isMine", () => {
	test("returns true when tile is a mine", () => {
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

		// position for checking
		const position = { x: 0, y: 0 }

		// check the tile is mine
		expect(isMine(board, position)).toBeTruthy()
	})

	test("returns false when tile is not a mine", () => {
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

		// position for checking
		const position = { x: 0, y: 0 }

		// check the tile is mine
		expect(isMine(board, position)).toBeFalsy()
	})
})

describe("#isMarked", () => {
	test("false when NOT marked", () => {
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

		// position for checking
		const position = { x: 1, y: 0 }

		// check the tile is marked
		expect(isMarked(board, position)).toBeFalsy()
	})
	test("true when marked", () => {
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
					status: TILE_STATUS.MARKED,
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

		// position for checking
		const position = { x: 1, y: 0 }

		// check the tile is marked
		expect(isMarked(board, position)).toBe(true)
	})
})
