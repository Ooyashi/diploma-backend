import { ICar, IShipment } from '@interfaces';
import { carModel, shipmentModel } from '@models';

const getById = (id: string) => shipmentModel.findById(id);

const getShipments = () => shipmentModel.find();

const createShipment = (shipment: IShipment) => shipmentModel.create(shipment);

export default { getById, getShipments, createShipment };
