const {
  Router
} = require('express');
const itemRouter = Router({
  mergeParams: true
});
const {
  Item,
  Wishlist
} = require('../models.js')
const {
  restrict
} = require('../services/auth')


itemRouter.route('/')
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
      const wishlistId = req.params.wishlistId
      const wishlist = await Wishlist.findByPk(wishlistId)
      const item = await Item.create(req.body);
      await item.setWishlist(wishlist)
      res.json(item);
    } catch (e) {
      next(e)
    }
  })

itemRouter.route(':itemId')
  .get(async (req, res, next) => {
    try {
      const post = await Item.findByPk(req.params.itemId);
      res.json(post);
    } catch (e) {
      next(e)
    }
  })
  .put(async (req, res, next) => {
    try {
      const post = await Item.findByPk(req.params.itemId);
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
          id: req.params.itemId
        }
      })
      res.json(post)
    } catch (e) {
      next(e)
    }
  })

module.exports = itemRouter;