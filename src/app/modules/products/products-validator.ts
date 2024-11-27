import Joi from 'joi';
import IProduct from './products-interface';

const ProductValidationSchema = Joi.object<IProduct>({
  name: Joi.string().min(2).required().messages({
    'string.base': '"name" should be a type of string',
    'string.empty': '"name" cannot be an empty field',
    'string.min': '"name" should have a minimum length of 2 characters',
    'any.required': '"name" is a required field',
  }),

  brand: Joi.string().min(2).required().messages({
    'string.base': '"brand" should be a type of string',
    'string.empty': '"brand" cannot be an empty field',
    'string.min': '"brand" should have a minimum length of 2 characters',
    'any.required': '"brand" is a required field',
  }),

  price: Joi.number().greater(0).required().messages({
    'number.base': '"price" should be a type of number',
    'number.greater': '"price" should be greater than 0',
    'any.required': '"price" is a required field',
  }),

  type: Joi.string().valid('Mountain', 'Road', 'Hybrid', 'BMX', 'Electric').required().messages({
    'string.base': '"type" should be a type of string',
    'any.only': '"type" must be one of "Mountain", "Road", "Hybrid", "BMX", or "Electric"',
    'any.required': '"type" is a required field',
  }),

  description: Joi.string().min(10).required().messages({
    'string.base': '"description" should be a type of string',
    'string.empty': '"description" cannot be an empty field',
    'string.min': '"description" should have a minimum length of 10 characters',
    'any.required': '"description" is a required field',
  }),

  quantity: Joi.number().integer().min(0).required().messages({
    'number.base': '"quantity" should be a type of number',
    'number.integer': '"quantity" should be an integer',
    'number.min': '"quantity" should be a positive number or zero',
    'any.required': '"quantity" is a required field',
  }),

  inStock: Joi.boolean().required().messages({
    'boolean.base': '"inStock" should be a type of boolean',
    'any.required': '"inStock" is a required field',
  }),
});

export default ProductValidationSchema;
