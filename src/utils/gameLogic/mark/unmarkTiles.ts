import { TILE_STATUS } from "../../../store/features/game/gameSlice"
import { Board, Position } from "../../../types/game"
import { isMarked } from "../position/positionCheckers"
import { replaceTile } from "../replaceTile"

export function unmarkTile(board: Board, position: Position) {
	if (!isMarked(board, position)) return board

	let newBoard = board

	const newTile = {
		...newBoard[position.y][position.x],
		status: TILE_STATUS.HIDDEN,
	}

	return replaceTile(newBoard, position, newTile)
}
