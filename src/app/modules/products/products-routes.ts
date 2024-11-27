import express from 'express';
import { productController } from './products-controller';

const routes = express.Router();

routes.post('/', productController.createProduct);
routes.get('/', productController.getAllProducts);
routes.get('/:productId', productController.getSingleProduct);
routes.put('/:productId', productController.updateSingleProduct);
routes.delete('/:productId', productController.deleteProduct);


export const productRoutes = routes