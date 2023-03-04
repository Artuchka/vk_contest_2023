import React, { useEffect } from "react"
import style from "./style.module.scss"
import { useSelector } from "react-redux"
import { createBoard, selectGame } from "../../store/features/game/gameSlice"
import { Cell } from "../Cell"
import { useAppDispatch } from "../../store/store"
import { Header } from "../Header"

export const Board = () => {
	const { board, gameStatus, secondsPassed } = useSelector(selectGame)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(createBoard({ boardSize: 5, minesLeft: 4 }))
	}, [])

	console.log({ board })

	return (
		<div className={style.outerWrapper}>
			<div className={style.middleWrapper}>
				<div className={`${style.innerWrapper}`}>
					<Header />
				</div>
				<div className={`${style.innerWrapper} ${style.board}`}>
					{board.flat().map((item) => {
						return <Cell key={item.id} {...item} />
					})}
				</div>
			</div>
		</div>
	)
}
