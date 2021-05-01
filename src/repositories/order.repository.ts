import { ICar, IOrder, IPart, IShipment } from '@interfaces';
import { carModel, orderModel, partModel } from '@models';

const getById = (id: string) => orderModel.findById(id);

const createOrder = (order: IOrder) => orderModel.create(order);

export default { getById, createOrder };
