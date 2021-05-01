import { Request, Response } from 'express';

import { productService } from '@services';

const getProducts = async (_req: Request, res: Response) => {
  const test = await productService.getParts();
  res.json(test);
};

const listOfProducts = async (req: Request, res: Response) => {
  const cart = JSON.parse(req.body.cart);
  const products = await productService.getListOfProducts(cart);

  return res.json(products);
};

const payOrder = async (_req: Request, res: Response) =>
  res.json('Payment successful!');

export default {
  getProducts,
  listOfProducts,
  payOrder,
};
