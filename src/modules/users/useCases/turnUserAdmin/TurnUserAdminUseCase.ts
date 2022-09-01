import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(data: IRequest): User {
    const user = this.usersRepository.findById(data.user_id);

    if (!user) throw new Error("User not found.");

    const result = this.usersRepository.turnAdmin(user);

    return result;
  }
}

export { TurnUserAdminUseCase };
