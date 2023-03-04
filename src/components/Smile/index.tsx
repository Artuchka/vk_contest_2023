import React from "react"
import style from "./style.module.scss"
import { useSelector } from "react-redux"
import { selectGame } from "../../store/features/game/gameSlice"

export const Smile = () => {
	const { gameStatus } = useSelector(selectGame)

	const handleRestart = () => {}
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
