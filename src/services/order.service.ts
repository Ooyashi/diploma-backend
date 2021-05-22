import { IOrder } from '@interfaces';
import { orderRepository } from '@repositories';

const getOrders = async () => {
  const orders = await orderRepository.getOrders().exec();

  return orders.map((order) => order.toObject<IOrder>());
};

const createOrder = (order: IOrder) => orderRepository.createOrder(order);

export default { getOrders, createOrder };
