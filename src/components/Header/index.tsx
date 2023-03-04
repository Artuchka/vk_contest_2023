import React from "react"
import style from "./style.module.scss"
import { TimeCounter } from "../TimeCounter"
import { MinesLeftCounter } from "../MinesLeftCounter"
import { Smile } from "../Smile"

export const Header = () => {
	return (
		<div className={style.wrapper}>
			<MinesLeftCounter />
			<Smile />
			<TimeCounter />
		</div>
	)
}
