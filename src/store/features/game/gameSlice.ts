import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { Board, Position, TileStatus } from "../../../types/game"
import { createMines } from "../../../utils/gameLogic/boardTransform/createMines"
import {
	isMarked,
	isMine,
	isOpened,
	isQuestioned,
} from "../../../utils/gameLogic/position/positionCheckers"
import { positionSame } from "../../../utils/gameLogic/position/positionSame"
import { isWin } from "../../../utils/gameLogic/isWin"
import { createTiles } from "../../../utils/gameLogic/boardTransform/createTiles"
import { openAdjacentTiles } from "../../../utils/gameLogic/boardTransform/openTile"
import { openAllMines } from "../../../utils/gameLogic/boardTransform/openAllMines"
import { unmarkTile } from "../../../utils/gameLogic/boardTransform/mark/unmarkTiles"
import { questionTile } from "../../../utils/gameLogic/boardTransform/mark/questionTile"
import { markTile } from "../../../utils/gameLogic/boardTransform/mark/markTile"

export const TILE_STATUS: Record<string, TileStatus> = {
	HIDDEN: "hidden",
	OPENED: "opened",
	MARKED: "marked",
	MINE: "mine",
	QUESTIONED: "question",
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
	holdingCell: Position | null
}

const initialState: GameState = {
	board: [],
	boardSize: 0,
	minesLeft: 0,
	secondsPassed: 0,
	openedCells: [],
	markedCells: [],
	gameStatus: "idle",
	holdingCell: null,
}

export const gameSlice = createSlice({
	name: "game",
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

		markCell(state, action: PayloadAction<Position>) {
			if (state.gameStatus === "over" || state.gameStatus === "win") {
				return state
			}
			state.gameStatus = "playing"

			const position = action.payload
			if (isQuestioned(state.board, position)) {
				state.board = unmarkTile(state.board, position)
				state.markedCells = state.markedCells.filter(
					(item) => !positionSame(item, position)
				)
			} else if (isMarked(state.board, position)) {
				state.board = questionTile(state.board, position)
			} else if (
				!isOpened(state.board, position) &&
				state.markedCells.length < state.minesLeft
			) {
				state.board = markTile(state.board, position)
				state.markedCells.push(position)
			}
		},

		restartGame(state) {
			let board = []

			// creating new mined board
			board = createTiles(state.boardSize)
			board = createMines(board, state.boardSize, state.minesLeft)

			state.board = board
			// resetting all statistic values
			state.gameStatus = "idle"
			state.secondsPassed = 0
			state.openedCells = []
			state.markedCells = []
			state.holdingCell = null
		},

		addSecond(state) {
			state.secondsPassed += 1
		},

		onCellMouseDown(state, action: PayloadAction<Position>) {
			if (state.gameStatus === "over" || state.gameStatus === "win") {
				return state
			}

			state.holdingCell = action.payload
		},

		onCellMouseUp(state, action: PayloadAction<Position>) {
			if (state.gameStatus === "over" || state.gameStatus === "win") {
				return state
			}

			// will result if haven't held cell OR mouse lifted up on cell other than one which was held first time
			if (
				!(
					state.holdingCell &&
					positionSame(state.holdingCell, action.payload)
				)
			) {
				state.holdingCell = null
				return state
			}

			state.holdingCell = null

			// opening cell down there
			state.gameStatus = "playing"

			const position = action.payload

			const clickedOnMine = isMine(state.board, position)
			const isFirstClick = state.openedCells.length === 0

			console.log({ clickedOnMine, isFirstClick })

			let newBoard: Board = []
			if (isFirstClick && clickedOnMine) {
				newBoard = createTiles(state.boardSize)
				newBoard = createMines(
					newBoard,
					state.boardSize,
					state.minesLeft,
					[position]
				)

				console.log({ recreatedBoard: newBoard })

				newBoard = openAdjacentTiles(
					newBoard,
					position,
					state.boardSize
				)
				state.board = newBoard
				state.openedCells.push(position)

				console.log("resetting board")

				if (isWin(newBoard, state.boardSize, state.minesLeft)) {
					state.gameStatus = "win"
				}
				return state
			} else if (!isFirstClick && clickedOnMine) {
				state.board = openAllMines(state.board)
				state.board[position.y][position.x].wasLastOpened = true
				state.openedCells.push(position)
				state.gameStatus = "over"
				return state
			}

			console.log("here")

			const board = openAdjacentTiles(
				state.board,
				position,
				state.boardSize
			)
			state.board = board
			state.openedCells.push(position)

			if (isWin(state.board, state.boardSize, state.minesLeft)) {
				state.gameStatus = "win"
			}
		},
	},
})

export const {
	createBoard,
	markCell,
	addSecond,
	restartGame,
	onCellMouseUp,
	onCellMouseDown,
} = gameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGame = (state: RootState) => state.game

export default gameSlice.reducer
