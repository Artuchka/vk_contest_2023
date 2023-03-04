import { Provider } from "react-redux"
import { Board } from "../../components/Board"
import { store } from "../../store/store"
import App from "../../App"
import times from "lodash.times"
import { restartGame } from "../../store/features/game/gameSlice"

describe("<Board/>", () => {
	afterEach(() => {
		store.dispatch(restartGame())
	})

	times(10, (x) => {
		it(`first must not be mine: #${x}`, () => {
			cy.viewport(700, 700)
			cy.mount(
				<Provider store={store}>
					<App />
				</Provider>
			)
			cy.get("[data-cy=cell]").first().click()

			cy.get("[data-cy=cell]")
				.first()
				.should("have.css", "background-image")
				.and("not.include", "mine_red.png")

			cy.get("[data-cy=cell]")
				.first()
				.should("have.css", "background-image")
				.should("match", /(0|1|2|3|4|5|6|7|8|hidden_cell_clicked).png/)
		})
	})
})
