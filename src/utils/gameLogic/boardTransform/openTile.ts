import { Board, Position } from "../../../types/game"
import { isMarked, isMine, isOpened } from "../position/positionCheckers"
import { positionPossible } from "../position/positionPossible"
import { openCertainTile } from "./openCertainTile"
import { replaceTile } from "./replaceTile"

export function openAdjacentTiles(
	board: Board,
	position: Position,
	boardSize: number
) {
	if (
		isOpened(board, position) ||
		isMarked(board, position) ||
		isMine(board, position)
	) {
		return board
	}
	let newBoard = openCertainTile(board, position, boardSize)

	if (newBoard[position.y][position.x].adjacentMinesCount >= 1) {
		return newBoard
	}

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
			newBoard = openAdjacentTiles(newBoard, nextPosition, boardSize)
		}
	})

	return newBoard
}
