import React from "react"
import style from "./style.module.scss"
import { useSelector } from "react-redux"
import { restartGame, selectGame } from "../../store/features/game/gameSlice"
import { useAppDispatch } from "../../store/store"

export const Smile = () => {
	const { gameStatus } = useSelector(selectGame)
	const dispatch = useAppDispatch()

	const handleRestart = () => {
		dispatch(restartGame())
	}
	return (
		<div
			className={`
		${style.wrapper}
		${gameStatus === "over" ? style.over : ""}
		${gameStatus === "idle" ? style.idle : ""}
		${gameStatus === "win" ? style.win : ""}
	`}
			onClick={handleRestart}
		></div>
	)
}
