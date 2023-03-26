import { rest } from "msw"
import { setupServer } from "msw/node"

export const server = setupServer(
  rest.post("/api/getResponse", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "foo",
      }),
      ctx.status(200)
    )
  })
)
