import { ICar, IPart, IShipment } from '@interfaces';
import { carModel, partModel } from '@models';

const getById = (id: string) => partModel.findById(id);

const getParts = () => partModel.find();

const createPart = (part: IPart) => partModel.create(part);

export default { getById, getParts, createPart };
