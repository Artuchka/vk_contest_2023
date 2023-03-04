import { MINE_FLAG, TILE_STATUS } from "../../../store/features/game/gameSlice"
import { Board } from "../../../types/game"
import { createMines } from "../../../utils/gameLogic/boardTransform/createMines"
import { createTiles } from "../../../utils/gameLogic/boardTransform/createTiles"

describe("#createMines", () => {
	test("correctly excludes 1 mine position", () => {
		it("first", () => {
			// create board
			const boardSize = 2
			const excludePositions = [
				{ x: 0, y: 0 },
				{ x: 1, y: 0 },
				{ x: 0, y: 1 },
			]
			let board: Board = createTiles(boardSize)
			board = createMines(board, boardSize, 1, excludePositions)

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
						adjacentMinesCount: 0,
						status: TILE_STATUS.HIDDEN,
					},
					{
						id: "",
						x: 1,
						y: 1,
						adjacentMinesCount: MINE_FLAG,
						status: TILE_STATUS.HIDDEN,
					},
				],
			]

			// check boards are the same
			expect(board.flat().map(({ id, ...item }) => item)).toEqual(
				expectedBoard.flat().map(({ id, ...item }) => item)
			)
		})
		it("first", () => {
			// create board
			const boardSize = 2
			const excludePositions = [
				{ x: 0, y: 0 },
				{ x: 1, y: 0 },
				{ x: 1, y: 1 },
			]
			let board: Board = createTiles(boardSize)
			board = createMines(board, boardSize, 1, excludePositions)

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

			// check boards are the same
			expect(board.flat().map(({ id, ...item }) => item)).toEqual(
				expectedBoard.flat().map(({ id, ...item }) => item)
			)
		})
	})

	test("correctly excludes 2 mine positions", () => {
		it("first", () => {
			// create board
			const boardSize = 2
			const excludePositions = [
				{ x: 0, y: 0 },
				{ x: 1, y: 0 },
			]
			let board: Board = createTiles(boardSize)
			board = createMines(board, boardSize, 2, excludePositions)

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
						status: TILE_STATUS.HIDDEN,
					},
					{
						id: "",
						x: 1,
						y: 1,
						adjacentMinesCount: MINE_FLAG,
						status: TILE_STATUS.HIDDEN,
					},
				],
			]

			// check boards are the same
			expect(board.flat().map(({ id, ...item }) => item)).toEqual(
				expectedBoard.flat().map(({ id, ...item }) => item)
			)
		})
		it("second", () => {
			// create board
			const boardSize = 2
			const excludePositions = [
				{ x: 0, y: 0 },
				{ x: 1, y: 1 },
			]
			let board: Board = createTiles(boardSize)
			board = createMines(board, boardSize, 2, excludePositions)

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
						adjacentMinesCount: MINE_FLAG,
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

			// check boards are the same
			expect(board.flat().map(({ id, ...item }) => item)).toEqual(
				expectedBoard.flat().map(({ id, ...item }) => item)
			)
		})
	})
})
