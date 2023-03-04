import React from "react"
import style from "./style.module.scss"
import { Smile } from "../Smile"
import { DigitScreen } from "../DigitScreen"
import { useSelector } from "react-redux"
import { selectGame } from "../../store/features/game/gameSlice"

export const Header = () => {
	const { secondsPassed, minesLeft } = useSelector(selectGame)

	return (
		<div className={style.wrapper}>
			<DigitScreen number={minesLeft} />
			<Smile />
			<DigitScreen number={secondsPassed} />
		</div>
	)
}
