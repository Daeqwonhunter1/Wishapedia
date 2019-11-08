const { Wishlist, Item } = require('./models');

const seed = async () => {
  await Wishlist.destroy({ where: {} })

  const xmas = await Wishlist.create({
    name: "xmas",
    description: "xmas",
    type: "christmas"
  })



  await Item.destroy({ where: {} })

  const planner = await Item.create({
    name: "Monthly Planner",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51m1MKA028L._SX412_BO1,204,203,200_.jpg",
    url: "https://www.amazon.com/gp/product/1449498485/ref=ox_sc_saved_image_3?smid=ATVPDKIKX0DER&psc=1",
    price: 13.46,
    comments: "Plz buy"
  })


  await xmas.addItem(planner);
  process.exit();
}

seed();