import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(data: IRequest): User {
    const user = this.usersRepository.findById(data.user_id);

    if (!user) throw new Error("User not found.");

    return user;
  }
}

export { ShowUserProfileUseCase };
