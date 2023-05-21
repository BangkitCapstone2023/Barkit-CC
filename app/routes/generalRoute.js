const express = require('express');
const router = express.Router();

const {
  getAllImages,
  getImageByName,
  deleteLessorById,
  getAllLessors,
  getAllRenters,
  addCategory,
  addSubCategory,
  getAllOrders,
  getOrderById,
} = require('../controllers/generalHandler');

router.get('/renters', getAllRenters);
router.get('/lessors', getAllLessors);

router.post('/category', addCategory);
router.post('/category/:categoryId/subcategory', addSubCategory);
router.delete('/lessors/:lessorId', deleteLessorById);

router.get('/orders', getAllOrders);
router.get('/orders/:orderId', getOrderById);

router.get('/images', getAllImages);
router.get('/images/:name', getImageByName);
// router.get('/images/:name/download', addProductHandler.downloadImage);

module.exports = router;
