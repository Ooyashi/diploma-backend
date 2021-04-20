import { productService } from '@services';
import { Request, Response } from 'express';

const data = require('./data');

const getProducts = async (_req: Request, res: Response) => {
  return res.json(data.products);
};

const listOfProducts = async (req: Request, res: Response) => {
  const cart = JSON.parse(req.body.cart);
  const products = productService.getListOfProducts(cart);

  return res.json(products);
};

const payOrder = async (_req: Request, res: Response) => {
  return res.json('Payment successful!');
};

export default {
  getProducts,
  listOfProducts,
  payOrder,
};
