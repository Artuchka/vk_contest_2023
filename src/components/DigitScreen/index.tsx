import React, { FC, memo } from "react"
import style from "./style.module.scss"
import { useSelector } from "react-redux"
import { selectGame } from "../../store/features/game/gameSlice"
import { getDigits } from "../../utils/formatNumber"
import { Digit } from "../Digit"

type PropType = { number: string }

export const DigitScreen: FC<PropType> = memo(({ number }) => {
	const digits = getDigits(parseInt(number) % 1000)

	return (
		<div className={style.wrapper} data-cy="digitScreen">
			<Digit number={digits[0]} />
			<Digit number={digits[1]} />
			<Digit number={digits[2]} />
		</div>
	)
}, digitScreenPropsAreEqual)

function digitScreenPropsAreEqual(
	prevdigitScreen: PropType,
	nextdigitScreen: PropType
) {
	return prevdigitScreen.number === nextdigitScreen.number
}
