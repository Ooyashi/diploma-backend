import { IPart } from '@interfaces';
import { carModel } from '@models';
import { partRepository } from '@repositories';

const getParts = async () => {
  const parts = await partRepository.getParts().populate('partForCar').exec();

  return parts.map((part) => part.toObject<IPart>());
};

const vinCodeSearch = async (vinCode: string) => {
  const testData = await partRepository.vinCodeSearch(vinCode);
  return testData;
};

const createPart = (part: IPart) => partRepository.createPart(part);

const getListOfProducts = async (cart: any) => {
  const data = await getParts();

  const products: any = [];
  let id = null;

  if (!cart) {
    throw new Error();
  }

  for (const value of data) {
    id = value.id.toString();
    if (cart.hasOwnProperty(id)) {
      value.partQuantity = cart[id];
      products.push(value);
    }
  }

  return products;
};

export default {
  getParts,
  getListOfProducts,
  createPart,

  vinCodeSearch,
};
