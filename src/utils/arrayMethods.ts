import { Position } from "../types/game"

// yeah, may be stupid, but it's how FP works
export function addElement(array: Position[], element: Position): Position[] {
	return [...array, element]
}
