import React, { FC } from "react"
import style from "./style.module.scss"
import { useSelector } from "react-redux"
import { selectGame } from "../../store/features/game/gameSlice"
import { getDigits } from "../../utils/formatNumber"
import { Digit } from "../Digit"

export const DigitScreen: FC<{ number: number }> = ({ number }) => {
	const digits = getDigits(number)

	return (
		<div className={style.wrapper}>
			<Digit number={digits[0]} />
			<Digit number={digits[1]} />
			<Digit number={digits[2]} />
		</div>
	)
}
