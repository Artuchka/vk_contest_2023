import { MINE_FLAG } from "../../../store/features/game/gameSlice"
import { Board, Cell, Position } from "../../../types/game"
import { addElement } from "../../arrayMethods"
import { randomNumber } from "../../randomNumber"
import { positionSame } from "../position/positionSame"
import { replaceTile } from "./replaceTile"

export function createMines(
	board: Board,
	boardSize: number,
	minesLeft: number,
	excludePositions?: Position[]
) {
	let minesPositions: Position[] = []
	let newBoard = board

	// haven't figured out the normal(not physco) way to do it in FP style (without loop I mean)
	while (minesLeft > minesPositions.length) {
		// minus 1 because array `board` indexes start from 0 =)
		const x = randomNumber(boardSize - 1)
		const y = randomNumber(boardSize - 1)
		const position = { x, y }

		const isUniquePosition = !minesPositions.some((el) =>
			positionSame(el, position)
		)
		const shouldBeExcludedMined = excludePositions?.some((item) =>
			positionSame(item, position)
		)

		if (!isUniquePosition || shouldBeExcludedMined) {
			continue
		}
		minesPositions = addElement(minesPositions, position)
	}

	minesPositions.forEach((pos) => {
		newBoard = setMine(newBoard, pos)
	})

	return newBoard
}

export function setMine(board: Board, { x, y }: Position) {
	const newCell = {
		...board[y][x],
		adjacentMinesCount: MINE_FLAG,
	}
	return replaceTile(board, { x, y }, newCell)
}
