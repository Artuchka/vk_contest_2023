import { Position } from "../../../types/game"

export function positionSame(a: Position, b: Position) {
	return a.x == b.x && a.y == b.y
}
