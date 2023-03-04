import { TILE_STATUS } from "../../../../store/features/game/gameSlice"
import { Board, Cell, Position } from "../../../../types/game"
import { isQuestioned } from "../../position/positionCheckers"
import { replaceTile } from "../replaceTile"

export function unmarkTile(board: Board, position: Position): Board {
	if (!isQuestioned(board, position)) return board

	let newBoard = board

	const newTile: Cell = {
		...newBoard[position.y][position.x],
		status: TILE_STATUS.HIDDEN,
		isMarked: false,
	}

	return replaceTile(newBoard, position, newTile)
}
