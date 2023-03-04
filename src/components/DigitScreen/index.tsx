import React, { FC } from "react"
import style from "./style.module.scss"
import { useSelector } from "react-redux"
import { selectGame } from "../../store/features/game/gameSlice"
import { getDigits } from "../../utils/formatNumber"
import { Digit } from "../Digit"

export const DigitScreen: FC<{ number: number }> = ({ number }) => {
	const digits = getDigits(number % 1000)

	return (
		<div className={style.wrapper} data-cy="digitScreen">
			<Digit number={digits[0]} />
			<Digit number={digits[1]} />
			<Digit number={digits[2]} />
		</div>
	)
}
