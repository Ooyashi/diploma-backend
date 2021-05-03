import { ICar, IPartBrand } from '@interfaces';
import { carRepository, partBrandRepository } from '@repositories';

const getPartBrands = async () => {
  const partBrands = await partBrandRepository.getPartBrands().exec();

  return partBrands.map((partBrand) => partBrand.toObject<IPartBrand>());
};

const createPartBrand = (partBrand: IPartBrand) =>
  partBrandRepository.createPartBrand(partBrand);

export default { getPartBrands, createPartBrand };
