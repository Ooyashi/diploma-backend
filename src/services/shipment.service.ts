import { ICar, IShipment } from '@interfaces';
import { carRepository, shipmentRepository } from '@repositories';

const getShipments = async () => {
  const shipments = await shipmentRepository.getShipments().exec();

  return shipments.map((shipment) => shipment.toObject<IShipment>());
};

const createShipment = (shipment: IShipment) =>
  shipmentRepository.createShipment(shipment);

export default { getShipments, createShipment };
