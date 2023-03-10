import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../../App"
import { Provider } from "react-redux"
import { store } from "../../../store/store"

describe("overall test", () => {
	it("should be 256 cells", () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		)
		const tiles = screen.getAllByTestId(/cell/)
		expect(tiles).toHaveLength(256)
	})
	it("should start from idle", () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		)
		const smile = screen.getByTestId(/smile_idle/)
		expect(smile).toBeDefined()
	})

	it("should not be idle when clicked", async () => {
		const { container } = render(
			<Provider store={store}>
				<App />
			</Provider>
		)
		const tile = screen.getAllByTestId(/cell/)
		await userEvent.click(tile[0])

		expect(
			container
				.querySelectorAll('[data-testid*="cell"]')[0]
				.classList.contains("opened")
		).toBeFalsy()
	})
})
