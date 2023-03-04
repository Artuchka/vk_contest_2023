import times from "lodash.times"
import { Board } from "../../types/game"
import { TILE_STATUS } from "../../store/features/game/gameSlice"

export function createTiles(boardSize: number) {
	const newBoard: Board = []

	// FP style of looping
	return times(boardSize, (y) => {
		return times(boardSize, (x) => {
			return {
				id: crypto.randomUUID(),
				x,
				y,
				adjacentMinesCount: 0,
				status: TILE_STATUS.HIDDEN,
			}
		})
	})
}
