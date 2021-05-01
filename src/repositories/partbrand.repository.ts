import { ICar, IPartBrand, IShipment } from '@interfaces';
import { carModel, partBrandModel, shipmentModel } from '@models';

const getById = (id: string) => partBrandModel.findById(id);

const createPartBrand = (partBrand: IPartBrand) =>
  partBrandModel.create(partBrand);

export default { getById, createPartBrand };
