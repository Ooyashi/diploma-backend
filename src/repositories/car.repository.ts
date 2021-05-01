import { ICar } from '@interfaces';
import { carModel } from '@models';

const getById = (id: string) => carModel.findById(id);

const createCar = (car: ICar) => carModel.create(car);

export default { getById, createCar };
