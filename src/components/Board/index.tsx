import React, { useEffect, useRef } from "react"
import style from "./style.module.scss"
import { useSelector } from "react-redux"
import {
	addSecond,
	createBoard,
	selectGame,
} from "../../store/features/game/gameSlice"
import { Cell } from "../Cell"
import { useAppDispatch } from "../../store/store"
import { Header } from "../Header"

export const Board = () => {
	const { board, gameStatus, secondsPassed } = useSelector(selectGame)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(createBoard({ boardSize: 5, minesLeft: 18 }))
	}, [])

	const intervalref = useRef<number | null>(null)

	const startInterval = () => {
		if (intervalref.current !== null) return
		intervalref.current = window.setInterval(() => {
			dispatch(addSecond())
		}, 1000)
	}

	// Use the useEffect hook to cleanup the interval when the component unmounts
	useEffect(() => {
		console.log({ gameStatus })

		if (gameStatus === "playing") {
			startInterval()
		}

		// here's the cleanup function
		return () => {
			if (intervalref.current !== null) {
				window.clearInterval(intervalref.current)
				intervalref.current = null
			}
		}
	}, [gameStatus])

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
