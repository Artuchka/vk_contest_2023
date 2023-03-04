import React from "react"
import { Digit } from "../../components/Digit/index"
import { DigitScreen } from "../../components/DigitScreen"

describe("<Digit />", () => {
	it("number = 0", () => {
		cy.mount(<DigitScreen number={0} />)
		cy.get("[data-cy=digitScreen]")
			.children()
			.should("have.css", "background-image")
			.and("include", "0.png")
	})

	it("number = 1", () => {
		cy.mount(<DigitScreen number={1} />)

		cy.get("[data-cy=digitScreen] > :nth-child(1) ")
			.should("have.css", "background-image")
			.and("include", "0.png")
		cy.get("[data-cy=digitScreen] > :nth-child(2) ")
			.should("have.css", "background-image")
			.and("include", "0.png")
		cy.get("[data-cy=digitScreen] > :nth-child(3) ")
			.should("have.css", "background-image")
			.and("include", "1.png")
	})

	it("number = 12", () => {
		cy.mount(<DigitScreen number={12} />)

		cy.get("[data-cy=digitScreen] > :nth-child(1) ")
			.should("have.css", "background-image")
			.and("include", "0.png")
		cy.get("[data-cy=digitScreen] > :nth-child(2) ")
			.should("have.css", "background-image")
			.and("include", "1.png")
		cy.get("[data-cy=digitScreen] > :nth-child(3) ")
			.should("have.css", "background-image")
			.and("include", "2.png")
	})

	it("number = 123", () => {
		cy.mount(<DigitScreen number={123} />)

		cy.get("[data-cy=digitScreen] > :nth-child(1) ")
			.should("have.css", "background-image")
			.and("include", "1.png")
		cy.get("[data-cy=digitScreen] > :nth-child(2) ")
			.should("have.css", "background-image")
			.and("include", "2.png")
		cy.get("[data-cy=digitScreen] > :nth-child(3) ")
			.should("have.css", "background-image")
			.and("include", "3.png")
	})
	it("number = 1000", () => {
		cy.mount(<DigitScreen number={1000} />)

		cy.get("[data-cy=digitScreen] > :nth-child(1) ")
			.should("have.css", "background-image")
			.and("include", "0.png")
		cy.get("[data-cy=digitScreen] > :nth-child(2) ")
			.should("have.css", "background-image")
			.and("include", "0.png")
		cy.get("[data-cy=digitScreen] > :nth-child(3) ")
			.should("have.css", "background-image")
			.and("include", "0.png")
	})
	it("number = 1123", () => {
		cy.mount(<DigitScreen number={1123} />)

		cy.get("[data-cy=digitScreen] > :nth-child(1) ")
			.should("have.css", "background-image")
			.and("include", "1.png")
		cy.get("[data-cy=digitScreen] > :nth-child(2) ")
			.should("have.css", "background-image")
			.and("include", "2.png")
		cy.get("[data-cy=digitScreen] > :nth-child(3) ")
			.should("have.css", "background-image")
			.and("include", "3.png")
	})
})
