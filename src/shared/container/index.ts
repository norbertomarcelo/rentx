import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRpository } from "../../modules/cars/repositories/implementations/SpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRpository",
  SpecificationsRpository
);
