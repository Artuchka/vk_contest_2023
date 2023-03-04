import { Board, Cell, Position } from "../../types/game"
import { positionSame } from "./positionSame"

export function replaceTile(board: Board, position: Position, newCell: Cell) {
	return board.map((row, y) => {
		return row.map((tile, x) => {
			if (positionSame(position, { x, y })) {
				return newCell
			}
			return tile
		})
	})
}
