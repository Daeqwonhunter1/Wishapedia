const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'wishapedia_db',
  dialect: 'postgres',
  define: {
    underscored: true
  }
});

class Wishlist extends Sequelize.Model { }

Wishlist.init({
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  type: Sequelize.TEXT,
  
}, {
  sequelize,
  modelName: 'wishlist'
});

class Item extends Sequelize.Model { }

Item.init({
  name: Sequelize.STRING,
  image_url: Sequelize.TEXT,
  url: Sequelize.TEXT,
  price: Sequelize.DECIMAL,
  comments: Sequelize.TEXT
}, {
  sequelize,
  modelName: 'item'
});


class User extends Sequelize.Model { }

User.init({
  username: Sequelize.STRING,
  password_digest: Sequelize.STRING
}, {
  sequelize,
  modelName: 'user'
})

User.hasMany(Wishlist, { onDelete: 'cascade' });
Wishlist.belongsTo(User);

User.hasMany(Item, { onDelete: 'cascade' });
Item.belongsTo(User);
Wishlist.hasMany(Item, { onDelete: 'cascade' });
Item.belongsTo(Wishlist);


module.exports = {
  Wishlist,
  User,
  Item,
  sequelize
}