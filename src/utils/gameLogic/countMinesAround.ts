import { Board, Position } from "../../types/game"
import { isMine } from "./position/positionCheckers"
import { positionPossible } from "./position/positionPossible"

export function countMinesAround(
	board: Board,
	position: Position,
	boardSize: number
) {
	// it may seem stupid, but it's by hand only because of FP(btw not Fucked Up) style!!!
	// maybe using range(start, end) from lodash would help
	const dxdyPositions = [
		{ dx: -1, dy: -1 },
		{ dx: -1, dy: 0 },
		{ dx: -1, dy: 1 },

		{ dx: 0, dy: -1 },
		{ dx: 0, dy: 0 },
		{ dx: 0, dy: 1 },

		{ dx: 1, dy: -1 },
		{ dx: 1, dy: 0 },
		{ dx: 1, dy: 1 },
	]

	return dxdyPositions.reduce((count, offset) => {
		const newPos = { x: position.x + offset.dx, y: position.y + offset.dy }
		if (positionPossible(newPos, boardSize) && isMine(board, newPos)) {
			return count + 1
		}
		return count
	}, 0)
}
