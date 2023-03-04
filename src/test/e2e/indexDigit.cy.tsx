import React from "react"
import { Digit } from "../../components/Digit/index"

describe("<Digit />", () => {
	it("number = 0", () => {
		cy.mount(<Digit number={0} />)
		cy.get("[data-cy=digit]")
			.should("have.css", "background-image")
			.and("include", "0.png")
	})

	it("number = 1", () => {
		cy.mount(<Digit number={1} />)
		cy.get("[data-cy=digit]")
			.should("have.css", "background-image")
			.and("include", "1.png")
	})

	it("number = 2", () => {
		cy.mount(<Digit number={2} />)
		cy.get("[data-cy=digit]")
			.should("have.css", "background-image")
			.and("include", "2.png")
	})

	it("number = 3", () => {
		cy.mount(<Digit number={3} />)
		cy.get("[data-cy=digit]")
			.should("have.css", "background-image")
			.and("include", "3.png")
	})

	it("number = 4", () => {
		cy.mount(<Digit number={4} />)
		cy.get("[data-cy=digit]")
			.should("have.css", "background-image")
			.and("include", "4.png")
	})

	it("number = 5", () => {
		cy.mount(<Digit number={5} />)
		cy.get("[data-cy=digit]")
			.should("have.css", "background-image")
			.and("include", "5.png")
	})

	it("number = 6", () => {
		cy.mount(<Digit number={6} />)
		cy.get("[data-cy=digit]")
			.should("have.css", "background-image")
			.and("include", "6.png")
	})

	it("number = 7", () => {
		cy.mount(<Digit number={7} />)
		cy.get("[data-cy=digit]")
			.should("have.css", "background-image")
			.and("include", "7.png")
	})

	it("number = 8", () => {
		cy.mount(<Digit number={8} />)
		cy.get("[data-cy=digit]")
			.should("have.css", "background-image")
			.and("include", "8.png")
	})

	it("number = 9", () => {
		cy.mount(<Digit number={9} />)
		cy.get("[data-cy=digit]")
			.should("have.css", "background-image")
			.and("include", "9.png")
	})
})
