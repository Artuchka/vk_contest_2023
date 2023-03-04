import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { Board, Position, TileStatus } from "../../../types/game"

export const TILE_STATUS: Record<string, TileStatus> = {
	HIDDEN: "hidden",
	OPENED: "opened",
	MARKED: "marked",
	MINE: "mine",
}

export const MINE_FLAG = 999

export type GameStatus = "over" | "playing" | "win" | "idle"

// Define a type for the slice state
interface GameState {
	board: Board
	boardSize: number
	minesLeft: number
	// openedCells are cells which user clicked on, not just every auto opened cell
	openedCells: Position[]
	gameStatus: GameStatus
	secondsPassed: number
	minesMarked: number
}

// Define the initial state using that type
const initialState: GameState = {
	board: [],
	boardSize: 0,
	minesLeft: 0,
	minesMarked: 0,
	secondsPassed: 0,
	openedCells: [],
	gameStatus: "idle",
}

export const gameSlice = createSlice({
	name: "game",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {},
})

export const {} = gameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGame = (state: RootState) => state.game

export default gameSlice.reducer
