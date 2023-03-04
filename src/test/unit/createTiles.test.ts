import { TILE_STATUS } from "../../store/features/game/gameSlice"
import { Board } from "../../types/game"
import { createTiles } from "../../utils/gameLogic/boardTransform/createTiles"

describe("#createTiles", () => {
	test("correctly sets up new clean board ", () => {
		// create board
		const boardSize = 2
		const board: Board = createTiles(boardSize)

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
