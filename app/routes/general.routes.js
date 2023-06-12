import express from 'express';

import { authMiddleware } from '../middlewares/authentication.middlewares.js';

import {
  mainPath,
  getRenterById,
  getLessorById,
  getProductById,
  getRenterOrderById,
  getLessorOrderById,
} from '../controllers/general.controller.js';

const router = express.Router();

router.get('/', mainPath);

// Get Renter Details
router.get('/renters/:renterId', getRenterById);

// Get Lessor Details
router.get('/lessors/:lessorId', getLessorById);

// Get Product Details
router.get('/products/:productId', authMiddleware, getProductById);

// Get Order Details
router.get('/orders/:orderId', authMiddleware, getRenterOrderById);
router.get('/orders/lessors/:orderId', authMiddleware, getLessorOrderById);

export default router;
