import React, { useEffect } from "react"
import style from "./style.module.scss"
import { useSelector } from "react-redux"
import { selectGame } from "../../store/features/game/gameSlice"
import { Cell } from "../Cell"
import { useAppDispatch } from "../../store/store"

export const Board = () => {
	const { board, gameStatus, secondsPassed } = useSelector(selectGame)
	const dispatch = useAppDispatch()

	useEffect(() => {
		// create board
	}, [])
	return (
		<div className={style.wrapper}>
			{board.flat().map((item) => {
				return <Cell key={item.id} {...item} />
			})}
		</div>
	)
}
