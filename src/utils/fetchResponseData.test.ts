import { server } from "@/mocks/server"
import { rest } from "msw"
import { fetchResponseData } from "./fetchResponseData"

describe("fetch Response data function", () => {
  it("should return a object with a property message", async () => {
    await expect(fetchResponseData("")).resolves.toEqual({
      message: "foo",
    })
  })

  it("should throw a exception if api calls fails", async () => {
    server.use(
      rest.post("/api/getResponse", (_, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({
            message: "request failed",
          })
        )
      })
    )
    await expect(fetchResponseData("")).rejects.toThrow("request failed")
  })
})
