import { ICar, IPartBrand, IShipment } from '@interfaces';
import { carModel, partBrandModel, shipmentModel } from '@models';

const getById = (id: string) => partBrandModel.findById(id);

const getPartBrands = () => partBrandModel.find();

const createPartBrand = (partBrand: IPartBrand) =>
  partBrandModel.create(partBrand);

export default { getById, getPartBrands, createPartBrand };
