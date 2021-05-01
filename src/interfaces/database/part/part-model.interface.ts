import { PaginateModel } from 'mongoose';

import { IPartDocument } from '@interfaces';

export interface IPartModel extends PaginateModel<IPartDocument> {}
