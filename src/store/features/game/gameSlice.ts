import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { Board, Position, TileStatus } from "../../../types/game"
import { createTiles } from "../../../utils/gameLogic/createTiles"
import { createMines } from "../../../utils/gameLogic/createMines"
import { openAdjacentTiles } from "../../../utils/gameLogic/openTile"
import {
	isMarked,
	isMine,
	isOpened,
} from "../../../utils/gameLogic/position/positionCheckers"
import { openAllTiles } from "../../../utils/gameLogic/openAllTiles"
import { unmarkTile } from "../../../utils/gameLogic/mark/unmarkTiles"
import { markTile } from "../../../utils/gameLogic/mark/markTile"
import { positionSame } from "../../../utils/gameLogic/position/positionSame"

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
	markedCells: Position[]
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
	markedCells: [],
	gameStatus: "idle",
}

export const gameSlice = createSlice({
	name: "game",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		createBoard(
			state,
			action: PayloadAction<{ boardSize: number; minesLeft: number }>
		) {
			const { boardSize, minesLeft } = action.payload
			let board = []

			board = createTiles(boardSize)
			board = createMines(board, boardSize, minesLeft)

			state.board = board
			state.boardSize = boardSize
			state.minesLeft = minesLeft
			state.gameStatus = "idle"
		},

		openCell(state, action: PayloadAction<{ x: number; y: number }>) {
			const { x, y } = action.payload

			const clickedOnMine = isMine(state.board, { x, y })
			const isFirstClick = state.openedCells.length === 0
			console.log({ isFirstClick, clickedOnMine })

			if (isFirstClick && clickedOnMine) {
				let board = []

				board = createTiles(state.boardSize)
				board = createMines(board, state.boardSize, state.minesLeft, [
					{ x, y },
				])

				state.board = board
			} else if (!isFirstClick && clickedOnMine) {
				state.board = openAllTiles(state.board)
				state.openedCells.push({ x, y })
				state.gameStatus = "over"
				return state
			}

			const board = openAdjacentTiles(
				state.board,
				{ x, y },
				state.boardSize
			)
			state.board = board
			state.openedCells.push({ x, y })
			state.gameStatus = "playing"

			const hasWon =
				state.boardSize - state.openedCells.length === state.minesLeft

			if (hasWon) {
				state.gameStatus = "win"
			}
		},

		markCell(state, action: PayloadAction<{ x: number; y: number }>) {
			const position = action.payload
			if (isMarked(state.board, position)) {
				state.board = unmarkTile(state.board, position)
				state.markedCells = state.markedCells.filter(
					(item) => !positionSame(item, position)
				)
			} else if (!isOpened(state.board, position)) {
				state.board = markTile(state.board, position)
				state.markedCells.push(position)
			}
		},
	},
})

export const { createBoard, openCell, markCell } = gameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGame = (state: RootState) => state.game

export default gameSlice.reducer
