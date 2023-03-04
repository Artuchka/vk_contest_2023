import { TILE_STATUS } from "../../store/features/game/gameSlice"
import { Board, Cell, Position } from "../../types/game"
import { countMinesAround } from "./countMinesAround"
import { isMarked, isMine, isOpened } from "./position/positionCheckers"
import { positionPossible } from "./position/positionPossible"
import { replaceTile } from "./replaceTile"

// should be called smth like "openAdjacentTiles"
export function openTile(board: Board, position: Position, boardSize: number) {
	if (
		isOpened(board, position) ||
		isMarked(board, position) ||
		isMine(board, position)
	) {
		return board
	}
	let newBoard = openCertainTile(board, position, boardSize)

	// setting position offsets by hand so there are less calculations AND checked that they are only christ-alike
	const dxdyPositions = [
		{ dx: -1, dy: 0 },
		{ dx: 1, dy: 0 },
		{ dx: 0, dy: 1 },
		{ dx: 0, dy: -1 },
	]
	dxdyPositions.forEach((dxdyPosition) => {
		const newX = position.x + dxdyPosition.dx
		const newY = position.y + dxdyPosition.dy
		const nextPosition = { x: newX, y: newY }

		if (positionPossible(nextPosition, boardSize)) {
			newBoard = openTile(newBoard, nextPosition, boardSize)
		}
	})

	return newBoard
}

export function openCertainTile(
	board: Board,
	position: Position,
	boardSize: number
) {
	let newBoard = board

	const newTile: Cell = {
		...newBoard[position.y][position.x],
		adjacentMinesCount: countMinesAround(board, position, boardSize),
		status: TILE_STATUS.OPENED,
	}

	return replaceTile(newBoard, position, newTile)
}
