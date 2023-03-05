import { TILE_STATUS } from "../../../../store/features/game/gameSlice"
import { Board } from "../../../../types/game"
import { questionTile } from "../../../../utils/gameLogic/boardTransform/mark/questionTile"
import { isQuestioned } from "../../../../utils/gameLogic/position/positionCheckers"

describe("#questionTile", () => {
	test("was NOT questioned, was NOT marked", () => {
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

		// position for checking
		const position = { x: 0, y: 0 }

		// question tile
		board = questionTile(board, position)

		// check the tile is questioned
		expect(isQuestioned(board, position)).toBeFalsy()
	})
	test("was NOT questioned, was marked", () => {
		// create board
		let board: Board = [
			[
				{
					id: "",
					x: 0,
					y: 0,
					adjacentMinesCount: 0,
					status: TILE_STATUS.MARKED,
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

		// question tile
		board = questionTile(board, position)

		// check the tile is questioned
		expect(isQuestioned(board, position)).toBeTruthy()
	})
	test("was questioned", () => {
		// create board
		let board: Board = [
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

		// position for checking
		const position = { x: 0, y: 0 }

		// question tile
		board = questionTile(board, position)

		// check the tile is questioned
		expect(isQuestioned(board, position)).toBeTruthy()
	})
})
