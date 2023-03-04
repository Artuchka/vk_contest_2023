import { MINE_FLAG, TILE_STATUS } from "../../../store/features/game/gameSlice"
import { Board } from "../../../types/game"
import { openCertainTile } from "./openCertainTile"
import { replaceTile } from "./replaceTile"

export function openAllTiles(board: Board) {
	let newBoard = board
	const boardSize = board.length
	newBoard.forEach((row, y) => {
		row.forEach((tile, x) => {
			if (tile.adjacentMinesCount === MINE_FLAG) {
				newBoard = replaceTile(
					newBoard,
					{ x, y },
					{ ...tile, status: TILE_STATUS.MINE }
				)
			} else {
				newBoard = openCertainTile(newBoard, { x, y }, boardSize)
			}
		})
	})

	return newBoard
}
