import { MINE_FLAG, TILE_STATUS } from "../../../store/features/game/gameSlice"
import { Board, Position } from "../../../types/game"

export function isQuestioned(board: Board, position: Position) {
	return board[position.y][position.x].status === TILE_STATUS.QUESTIONED
}
export function isMarked(board: Board, position: Position) {
	return board[position.y][position.x].status === TILE_STATUS.MARKED
}
export function isOpened(board: Board, position: Position) {
	return board[position.y][position.x].status === TILE_STATUS.OPENED
}
export function isMine(board: Board, position: Position) {
	return board[position.y][position.x].adjacentMinesCount === MINE_FLAG
}
