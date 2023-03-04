import { Provider } from "react-redux"
import { Board } from "../../components/Board"
import { store } from "../../store/store"
import App from "../../App"
import times from "lodash.times"
import { restartGame } from "../../store/features/game/gameSlice"
import { randomNumber } from "../../utils/randomNumber"

describe("<Board/>", () => {
	afterEach(() => {
		store.dispatch(restartGame())
	})

	it(`should have 256 tiles`, () => {
		cy.viewport(700, 700)
		cy.mount(
			<Provider store={store}>
				<App />
			</Provider>
		)
		cy.get('[data-cy="cell"]').should("have.length", 256)
	})

	times(50, (x) => {
		it(`first must not be mine: #${x + 1}`, () => {
			cy.viewport(700, 700)
			cy.mount(
				<Provider store={store}>
					<App />
				</Provider>
			)
			const index = randomNumber(256)
			const cellSelector = `[data-cy=cell]:nth-child(${index})`
			cy.get(cellSelector).first().click()
			cy.log(JSON.stringify({ index }))

			cy.get(cellSelector)
				.first()
				.should("have.css", "background-image")
				.and("not.include", "mine_red.png")

			cy.get(cellSelector)
				.first()
				.should("have.css", "background-image")
				.should("match", /(0|1|2|3|4|5|6|7|8|hidden_cell_clicked).png/)
		})
	})
})
