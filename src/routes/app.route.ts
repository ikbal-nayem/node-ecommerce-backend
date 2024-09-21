import express, { Router } from 'express';
import path from 'path';
import productConfigRoutes from './product-config.route';
import productRoutes from './product.route';
import userRoutes from './user.route';

const appRoutes = Router();

//  /api/media/*
appRoutes.use('/media', express.static(path.join('media')));

//  /api/user
appRoutes.use('/user', userRoutes);

//  /api/product-config
appRoutes.use('/product-config', productConfigRoutes);

//  /api/product
appRoutes.use('/product', productRoutes);

export default appRoutes;
