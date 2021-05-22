import { IPart } from '@interfaces';
import { partModel } from '@models';

const getById = (id: string) => partModel.findById(id);

const getParts = () => partModel.find();

const createPart = (part: IPart) => partModel.create(part);

const deletePartById = (id: string) => partModel.deleteOne({ _id: id });

const vinCodeSearch = (vinCode: string) =>
  partModel.aggregate([
    {
      $lookup: {
        from: 'cars',
        localField: 'partForCar',
        foreignField: '_id',
        as: 'partForCar',
      },
    },
    { $unwind: { path: '$partForCar' } },
    { $match: { 'partForCar.carVinCode': vinCode } },
    // Changing _id to id
    {
      $addFields: {
        id: '$_id',
        'partForCar.id': '$partForCar._id',
      },
    },
    {
      $project: {
        _id: 0,
        'partForCar._id': 0,
      },
    },
  ]);

export default { getById, getParts, createPart, deletePartById, vinCodeSearch };
