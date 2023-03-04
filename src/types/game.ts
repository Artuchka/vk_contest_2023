export type TileStatus = "hidden" | "opened" | "marked" | "mine"

export type Cell = {
	id: string
	x: number
	y: number
	adjacentMinesCount: number
	status: TileStatus
}

export type Board = Cell[][]

export type Position = {
	x: number
	y: number
}
