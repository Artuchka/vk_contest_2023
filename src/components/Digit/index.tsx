import React, { FC } from "react"
import style from "./style.module.scss"

export const Digit: FC<{ number: number | string }> = ({ number }) => {
	return (
		<div
			className={`
				${style.wrapper}
				${style[`image${number}`]}
			`}
		></div>
	)
}
