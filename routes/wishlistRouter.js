const {
  Router
} = require('express');
const wishlistRouter = Router();
const {
  Wishlist
} = require('../models.js')
const {
  restrict
} = require('../services/auth')


wishlistRouter.route('/')
  .get(async (req, res, next) => {
    try {
      const posts = await Wishlist.findAll();
      res.json(posts);
    } catch (e) {
      next(e)
    }
  })
  .post(async (req, res, next) => {
    try {
      const post = await Wishlist.create(req.body);
      res.json(post);
    } catch (e) {
      next(e)
    }
  })

wishlistRouter.route('/:wishlistId')
  .get(async (req, res, next) => {
    try {
      const post = await Wishlist.findByPk(req.params.wishlistId);
      res.json(post);
    } catch (e) {
      next(e)
    }
  })
  .put(async (req, res, next) => {
    try {
      const post = await Wishlist.findByPk(req.params.wishlistId);
      await post.update(req.body)
      res.json(post)
    } catch (e) {
      next(e)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const post = await Wishlist.destroy({
        where: {
          id: req.params.wishlistId
        }
      })
      res.json(post)
    } catch (e) {
      next(e)
    }
  })

module.exports = wishlistRouter;