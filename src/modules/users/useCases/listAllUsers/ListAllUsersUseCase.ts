import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(data: IRequest): User[] {
    const user = this.usersRepository.findById(data.user_id);

    if (!user) throw new Error("User not found!");
    if (!user.admin)
      throw new Error("You need to be an administrator to list all users.");

    const result = this.usersRepository.list();

    return result;
  }
}

export { ListAllUsersUseCase };
