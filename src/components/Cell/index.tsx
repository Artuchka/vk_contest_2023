import React, { FC, MouseEvent } from "react"
import style from "./style.module.scss"
import { useSelector } from "react-redux"
import {
	markCell,
	onCellMouseDown,
	onCellMouseUp,
	selectGame,
} from "../../store/features/game/gameSlice"
import { Cell as CellType } from "../../types/game"
import { useAppDispatch } from "../../store/store"
import { positionSame } from "../../utils/gameLogic/position/positionSame"

export const Cell: FC<CellType> = (props) => {
	const { id, x, y, adjacentMinesCount, status } = props
	const { openedCells, markedCells, gameStatus } = useSelector(selectGame)
	const dispatch = useAppDispatch()

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault()

		// i think there should be click possible on  `status ==='question'`
		if (status === "marked") return

		if (e.button === 0) {
			dispatch(onCellMouseDown({ x, y }))
		}
	}
	const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault()

		if (status === "marked") return
		if (e.button === 0) {
			dispatch(onCellMouseUp({ x, y }))
		}
	}

	const handleMark = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		dispatch(markCell({ x, y }))
	}

	const isMarked = markedCells.some((item) => positionSame(item, { x, y }))

	return (
		<div
			className={`${style.wrapper} 
			${status === "hidden" ? style.hidden : ""}
			${
				status === "opened"
					? `${style.opened} ${
							style[`image${adjacentMinesCount.toString()}`]
					  }`
					: ""
			}
			${status === "mine" ? style.mine : ""}
			${
				status === "mine" &&
				positionSame(openedCells[openedCells.length - 1], { x, y })
					? style.clicked
					: ""
			}
			${status === "mine" && isMarked ? style.saved : ""}
			${status === "marked" ? style.marked : ""}
			${status === "question" ? style.question : ""}

			`}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onContextMenu={handleMark}
			data-testid={`cell_${x}${y}`}
		></div>
	)
}
