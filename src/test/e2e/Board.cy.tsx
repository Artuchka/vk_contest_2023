import { Provider } from "react-redux"
import { Board } from "../../components/Board"
import { store } from "../../store/store"
import App from "../../App"
import times from "lodash.times"

describe("<Board/>", () => {
	times(10, () => {
		it("first must not be mine", () => {
			cy.mount(
				<Provider store={store}>
					<App />
				</Provider>
			)
			cy.get("[data-cy=cell]").first().click()
			cy.get("[data-cy=cell]")
				.should("have.css", "background-image")
				.and("not.include", "mine_red.png")
		})
	})
})
