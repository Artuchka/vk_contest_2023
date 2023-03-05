import { TILE_STATUS } from "../../../../store/features/game/gameSlice"
import { Board } from "../../../../types/game"
import { markTile } from "../../../../utils/gameLogic/boardTransform/mark/markTile"
import { questionTile } from "../../../../utils/gameLogic/boardTransform/mark/questionTile"
import { unmarkTile } from "../../../../utils/gameLogic/boardTransform/mark/unmarkTiles"
import {
	isMarked,
	isQuestioned,
} from "../../../../utils/gameLogic/position/positionCheckers"

describe("#unmarkTile", () => {
	test("was questioned", () => {
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
					status: TILE_STATUS.QUESTIONED,
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

		// unmark tile
		board = unmarkTile(board, position)

		// check the tile is not marked
		expect(isMarked(board, position)).toBeFalsy()
	})

	test("was NOT marked", () => {
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

		// unmark tile
		board = unmarkTile(board, position)

		// check the tile is still not marked
		expect(isMarked(board, position)).toBeFalsy()
	})
})
