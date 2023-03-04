import { TILE_STATUS } from "../../../store/features/game/gameSlice"
import { Board, Position } from "../../../types/game"
import { isOpened } from "../position/positionCheckers"
import { replaceTile } from "../replaceTile"

export function markTile(board: Board, position: Position) {
	if (isOpened(board, position)) return board

	let newBoard = board

	const newTile = {
		...newBoard[position.y][position.x],
		status: TILE_STATUS.MARKED,
	}

	return replaceTile(newBoard, position, newTile)
}
