import { ICar, IShipment } from '@interfaces';
import { carModel, shipmentModel } from '@models';

const getById = (id: string) => shipmentModel.findById(id);

const createShipment = (shipment: IShipment) => shipmentModel.create(shipment);

export default { getById, createShipment };
