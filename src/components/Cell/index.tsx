import React, { FC, MouseEvent } from "react"
import style from "./style.module.scss"
import { useSelector } from "react-redux"
import { openCell, selectGame } from "../../store/features/game/gameSlice"
import { Cell as CellType } from "../../types/game"
import { useAppDispatch } from "../../store/store"

export const Cell: FC<CellType> = (props) => {
	const { id, x, y, adjacentMinesCount, status } = props
	const dispatch = useAppDispatch()

	const handleOpen = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		if (status === "marked") return
		dispatch(openCell({ x, y }))
	}
	const handleMark = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
	}
	return (
		<div
			className={`${style.wrapper} 
	${
		status === "opened"
			? `${style.opened} ${
					style[`image${adjacentMinesCount.toString()}`]
			  }`
			: ""
	}
	${status === "mine" ? style.mine : ""}
	${status === "marked" ? style.marked : ""}`}
			onClick={handleOpen}
			onContextMenu={handleMark}
		></div>
	)
}
