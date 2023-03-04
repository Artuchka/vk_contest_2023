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
import { positionSame } from "../../utils/gameLogic/position/positionSame"

export const Board = () => {
	const { board, gameStatus, openedCells, markedCells } =
		useSelector(selectGame)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(createBoard({ boardSize: 16, minesLeft: 200 }))
	}, [])

	const intervalref = useRef<number | null>(null)

	const startInterval = () => {
		if (intervalref.current !== null) return
		intervalref.current = window.setInterval(() => {
			dispatch(addSecond())
		}, 1000)
	}

	const stopInterval = () => {
		if (intervalref.current !== null) {
			window.clearInterval(intervalref.current)
			intervalref.current = null
		}
	}

	// Use the useEffect hook to cleanup the interval when the component unmounts
	useEffect(() => {
		if (gameStatus === "over") {
			console.log({ gameStatus })
			console.log({ board })
		}
		if (gameStatus === "playing") {
			startInterval()
		}

		// cleanup function
		return stopInterval
	}, [gameStatus])

	return (
		// this many wrappers only for borders
		<div className={style.outerWrapper}>
			<div className={style.middleWrapper}>
				<div className={`${style.innerWrapper}`}>
					<Header />
				</div>
				<div
					className={`${style.innerWrapper} ${style.board} ${
						gameStatus === "win" || gameStatus === "over"
							? style.disabled
							: ""
					}`}
				>
					{board.flat().map((item) => {
						return <Cell key={item.id} {...item} />
					})}
				</div>
			</div>
		</div>
	)
}
