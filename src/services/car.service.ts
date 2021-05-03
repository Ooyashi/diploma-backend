import { ICar } from '@interfaces';
import { carRepository } from '@repositories';

const getCars = async () => {
  const cars = await carRepository.getCars().exec();

  return cars.map((car) => car.toObject<ICar>());
};

const createCar = (car: ICar) => carRepository.createCar(car);

export default { getCars, createCar };
