import { MINE_FLAG, TILE_STATUS } from "../../store/features/game/gameSlice"
import { Board } from "../../types/game"
import { openCertainTile } from "./openCertainTile"
import { replaceTile } from "./replaceTile"

export function openAllMines(board: Board) {
	let newBoard = board
	newBoard.forEach((row, y) => {
		row.forEach((tile, x) => {
			if (tile.adjacentMinesCount === MINE_FLAG) {
				newBoard = replaceTile(
					newBoard,
					{ x, y },
					{ ...tile, status: TILE_STATUS.MINE }
				)
			}
		})
	})

	return newBoard
}
