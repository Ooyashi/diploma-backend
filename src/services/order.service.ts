import { ICar, IOrder, IPartBrand } from '@interfaces';
import {
  carRepository,
  orderRepository,
  partBrandRepository,
} from '@repositories';

const getOrders = async () => {
  const orders = await orderRepository.getOrders().exec();

  return orders.map((order) => order.toObject<IOrder>());
};

const createOrder = (order: IOrder) => orderRepository.createOrder(order);

export default { getOrders, createOrder };
