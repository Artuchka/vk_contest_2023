import { TILE_STATUS } from "../../store/features/game/gameSlice"
import { Board } from "../../types/game"

export function isWin(board: Board, boardSize: number, minesLeft: number) {
	const openedTiles = countOpenedTiles(board)
	return openedTiles === boardSize ** 2 - minesLeft
}

export function countOpenedTiles(board: Board) {
	return board.flat(2).reduce((count, tile) => {
		if (tile.status === TILE_STATUS.OPENED) return count + 1
		return count
	}, 0)
}
