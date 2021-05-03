import { ICar } from '@interfaces';
import { carModel } from '@models';

const getById = (id: string) => carModel.findById(id);

const getCars = () => carModel.find();

const createCar = (car: ICar) => carModel.create(car);

export default { getById, getCars, createCar };
