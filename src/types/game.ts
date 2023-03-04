export type TileStatus = "hidden" | "opened" | "marked" | "mine" | "question"

export type Cell = {
	id: string
	x: number
	y: number
	adjacentMinesCount: number
	status: TileStatus
	isMarked?: boolean
	wasLastOpened?: boolean
}

export type Board = Cell[][]

export type Position = {
	x: number
	y: number
}
