import { TILE_STATUS } from "../../../store/features/game/gameSlice"
import { Board, Cell, Position } from "../../../types/game"
import { countMinesAround } from "../countMinesAround"
import { replaceTile } from "./replaceTile"

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
