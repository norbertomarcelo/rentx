import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";

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
      throw new AppError("Specification already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
