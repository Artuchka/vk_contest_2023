import { configureStore } from "@reduxjs/toolkit"
import gameReducer from "./features/game/gameSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

let opt = { devTools: true }
if (process.env.NODE_ENV === "production") {
	opt.devTools = false
}

export const store = configureStore({
	reducer: {
		game: gameReducer,
	},
	...opt,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {game: GameState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
