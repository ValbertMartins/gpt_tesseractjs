import { findByTestId, findByText, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Chat from "."
import { server } from "@/mocks/server"
import { rest } from "msw"

describe("Chat component", () => {
  it("should render chat component in the document", () => {
    render(<Chat inputText="" />)
    const container = screen.getByRole("container")
    expect(container).toBeInTheDocument()
  })

  it("should render typewritter effect in screen when receive a message a inputText", async () => {
    render(<Chat inputText="hi" />)
    const typewritterComponent = await screen.findByTestId("typewriter-wrapper")
    expect(typewritterComponent).toBeVisible()
  })

  it("should be able to show a exception message when the request fails", async () => {
    server.use(
      rest.post("/api/getResponse", (req, res, ctx) => {
        return res(
          ctx.json({
            message: "request error",
          }),
          ctx.status(400)
        )
      })
    )
    render(<Chat inputText="hi" />)
    const errorComponent = await screen.findByText("request error")
    expect(errorComponent).toBeVisible()
  })
})
