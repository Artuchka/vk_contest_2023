import { Position } from "../../../types/game"

// checks whether position lies down on our map or is abroad
export function positionPossible(position: Position, boardSize: number) {
	return (
		0 <= position.x &&
		position.x < boardSize &&
		0 <= position.y &&
		position.y < boardSize
	)
}
