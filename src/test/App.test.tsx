import { render, screen } from "@testing-library/react"
import App from "../App"

it("should be hello world inside app", () => {
	render(<App />)

	const message = screen.queryByText("hello world")
	expect(message).toBeVisible()
})
