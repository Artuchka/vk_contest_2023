import React from "react"
import { Digit } from "../../components/Digit/index"
import { DigitScreen } from "../../components/DigitScreen"
import { Cell } from "../../components/Cell"
import { Cell as CellType } from "../../types/game"
import { Provider } from "react-redux"
import { store } from "../../store/store"

const defaultCellProps: CellType = {
	x: 0,
	y: 0,
	adjacentMinesCount: 0,
	id: "",
	status: "hidden",
}

describe("<Cell />", () => {
	it("status = hidden", () => {
		cy.mount(
			<Provider store={store}>
				<Cell {...defaultCellProps} status="hidden" />
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "hidden_cell.png")
	})

	it("status = marked ", () => {
		cy.mount(
			<Provider store={store}>
				<Cell {...defaultCellProps} status="marked" />
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "hidden_cell_marked.png")
	})

	it("status = question ", () => {
		cy.mount(
			<Provider store={store}>
				<Cell {...defaultCellProps} status="question" />
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "question.png")
	})

	it("status = opened with 0 mines around", () => {
		cy.mount(
			<Provider store={store}>
				<Cell {...defaultCellProps} status="opened" />
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "hidden_cell_clicked.png")
	})

	it("status = opened with 1 mine around", () => {
		cy.mount(
			<Provider store={store}>
				<Cell
					{...defaultCellProps}
					status="opened"
					adjacentMinesCount={1}
				/>
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "1.png")
	})

	it("status = opened with 2 mine around", () => {
		cy.mount(
			<Provider store={store}>
				<Cell
					{...defaultCellProps}
					status="opened"
					adjacentMinesCount={2}
				/>
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "2.png")
	})

	it("status = opened with 3 mine around", () => {
		cy.mount(
			<Provider store={store}>
				<Cell
					{...defaultCellProps}
					status="opened"
					adjacentMinesCount={3}
				/>
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "3.png")
	})

	it("status = opened with 4 mine around", () => {
		cy.mount(
			<Provider store={store}>
				<Cell
					{...defaultCellProps}
					status="opened"
					adjacentMinesCount={4}
				/>
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "4.png")
	})

	it("status = opened with 5 mine around", () => {
		cy.mount(
			<Provider store={store}>
				<Cell
					{...defaultCellProps}
					status="opened"
					adjacentMinesCount={5}
				/>
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "5.png")
	})

	it("status = opened with 6 mine around", () => {
		cy.mount(
			<Provider store={store}>
				<Cell
					{...defaultCellProps}
					status="opened"
					adjacentMinesCount={6}
				/>
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "6.png")
	})

	it("status = opened with 7 mine around", () => {
		cy.mount(
			<Provider store={store}>
				<Cell
					{...defaultCellProps}
					status="opened"
					adjacentMinesCount={7}
				/>
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "7.png")
	})

	it("status = opened with 8 mine around", () => {
		cy.mount(
			<Provider store={store}>
				<Cell
					{...defaultCellProps}
					status="opened"
					adjacentMinesCount={8}
				/>
			</Provider>
		)
		cy.get("[data-cy=cell]")
			.should("have.css", "background-image")
			.and("include", "8.png")
	})
})
