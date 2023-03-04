import React from "react"
import style from "./style.module.scss"
import { useSelector } from "react-redux"
import { restartGame, selectGame } from "../../store/features/game/gameSlice"
import { useAppDispatch } from "../../store/store"

export const Smile = () => {
	const { gameStatus, holdingCell } = useSelector(selectGame)
	const dispatch = useAppDispatch()

	const handleRestart = () => {
		dispatch(restartGame())
	}
	return (
		<div
			className={`
				${style.wrapper}
				${
					(gameStatus === "playing" || gameStatus === "idle") &&
					holdingCell !== null
						? style.holdingCell
						: ""
				}
				${
					(gameStatus === "playing" || gameStatus === "idle") &&
					holdingCell === null
						? style.idle
						: ""
				}
				${gameStatus === "over" ? style.over : ""}
				${gameStatus === "win" ? style.win : ""}
			`}
			onClick={handleRestart}
			data-testid={`smile_${gameStatus}`}
		></div>
	)
}
