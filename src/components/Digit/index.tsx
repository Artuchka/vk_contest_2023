import React, { FC, memo } from "react"
import style from "./style.module.scss"

type PropType = { number: number | string }
export const Digit: FC<PropType> = memo(({ number }) => {
	return (
		<div
			className={`
				${style.wrapper}
				${style[`image${number}`]}
			`}
			data-cy={`digit`}
		></div>
	)
}, digitScreenPropsAreEqual)

function digitScreenPropsAreEqual(
	prevdigitScreen: PropType,
	nextdigitScreen: PropType
) {
	return prevdigitScreen.number === nextdigitScreen.number
}
