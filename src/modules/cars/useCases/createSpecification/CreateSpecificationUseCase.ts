import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequet {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRpository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequet): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
