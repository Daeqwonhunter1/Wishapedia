const {
  Router
} = require('express');
const itemRouter = Router();
const {
  Item
} = require('../models.js')
const {
  restrict
} = require('../services/auth')


itemRouter.route('/:wishlistId/items')
  .get(async (req, res, next) => {
    try {
      const posts = await Item.findAll();
      res.json(posts);
    } catch (e) {
      next(e)
    }
  })
  .post(async (req, res, next) => {
    try {
      const post = await Item.create(req.body);
      res.json(post);
    } catch (e) {
      next(e)
    }
  })

itemRouter.route('/:wishlistId/items/:itemId')
  .get(async (req, res, next) => {
    try {
      const post = await Item.findByPk(req.params.id);
      res.json(post);
    } catch (e) {
      next(e)
    }
  })
  .put(async (req, res, next) => {
    try {
      const post = await Item.findByPk(req.params.id);
      await post.update(req.body)
      res.json(post)
    } catch (e) {
      next(e)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const post = await Item.destroy({
        where: {
          id: req.params.id
        }
      })
      res.json(post)
    } catch (e) {
      next(e)
    }
  })

module.exports = itemRouter;