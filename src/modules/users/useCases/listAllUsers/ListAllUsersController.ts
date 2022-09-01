import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      if (!user_id)
        return response.status(400).json({ error: "Need user_id in Header" });

      const data: IRequest = { user_id: request.headers.user_id.toString() };

      const result = this.listAllUsersUseCase.execute(data);

      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
