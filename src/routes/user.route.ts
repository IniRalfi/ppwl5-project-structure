import { Elysia } from "elysia";
import { userService } from "../service/user.service";
import { userView } from "../views/user.view";
import { htmlResponse, redirect } from "../utils/response";

export const userRoutes = new Elysia()

  .get("/", () => {
    const users = userService.getAllUsers();
    return htmlResponse(userView(users));
  })

  .post("/create", async ({ body }: { body: any }) => {
    userService.create({ name: body.name, role: body.role });
    return redirect("/");
  })

  .post("/delete/:id", ({ params }: { params: { id: string } }) => {
    userService.delete(Number(params.id));
    return redirect("/");
  });
