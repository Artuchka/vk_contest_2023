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

	// const handleOpen = (e: MouseEvent<HTMLDivElement>) => {
	// 	e.preventDefault()
	// 	if (status === "marked") return
	// 	dispatch(openCell({ x, y }))
	// }
	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		console.log({ x, y })
		console.log(e)
		dispatch(onCellMouseDown({ x, y }))
	}
	const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		console.log(e)
		console.log({ x, y })

		dispatch(onCellMouseUp({ x, y }))
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
			// onClick={handleOpen}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onContextMenu={handleMark}
		></div>
	)
}
