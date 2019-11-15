const { Wishlist, Item, User } = require('./models');

const seed = async () => {

  await User.destroy({ where: {} })
  const admin = await User.create({
    username: "admin",
    password_digest: "$2b$11$QHbk2uVG8nywE4Cyd3FIxupsuiN50DVejt.O6Ew71DCS8oZcRaCQG"
  })


  await Wishlist.destroy({ where: {} })

  const crazyDemonsWishlist = await Wishlist.create({
    name: "Crazy Demon Gear",
    description: "Official Crazy Demons kit",
    type: "SEI Dinos Cohort",

  })

  await admin.addWishlist(crazyDemonsWishlist);


  await Item.destroy({ where: {} })

  const goldChain = await Item.create({
    name: "Smiffys Chunky Gold Necklace Costume Accessory",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/61WCQ4sIu1L._UY879_.jpg",
    url: "https://www.amazon.com/gp/product/B007EA1IZA/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&th=1",
    price: 7.29,
    comments: "For people who want the best bling"
  })

  const coolShades = await Item.create({
    name: "Plastic Color Assorted Square Shutter ",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/71M1Y04Ru-L._SL1500_.jpg",
    url: "https://www.amazon.com/dp/B07CJQ6VF5/ref=sspa_dk_detail_8?psc=1&pd_rd_i=B07CJQ6VF5&pd_rd_w=lh7Ur&pf_rd_p=45a72588-80f7-4414-9851-786f6c16d42b&pd_rd_wg=uozaC&pf_rd_r=M4SC52FNGG4ZPRNY31W4&pd_rd_r=956f8be7-cc14-4ca8-859e-aa858f7335d6&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTENVVUVESlFYQ0VNJmVuY3J5cHRlZElkPUEwODY1MzI2MTZNTkFKT0pZWTQxTiZlbmNyeXB0ZWRBZElkPUEwNjcxMjQ2MjFSVjZBNDc5UlpSMCZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    price: 8.99,
    comments: "For people who want to be as cool as Crazy Dinos"
  })
  const fancyGoldChain = await Item.create({
    name: "DANSEUSE ETOILE CHOKER",
    image_url: "https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_6/870x580/17f82f742ffe127f42dca9de82fb58b1/x/s/1550571446_N0519DSEMT_D300_E06_ZHC.jpg",
    url: "https://www.dior.com/en_us/products/couture-N0519DSEMT_D300_TU?gclid=Cj0KCQiAk7TuBRDQARIsAMRrfUZhkIx8jnY8j0Fah49iDTBD9DVHKvTiY4_-WEpF6hX8C9b_bd_eTWMaAurfEALw_wcB&gclsrc=aw.ds",
    price: 610.00,
    comments: "For people who want to be as cool as Crazy Dinos"
  })
  const chainSet = await Item.create({
    name: "Hip Hop Costume Kit Hat Sunglasses Gold Chain",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/71V0PLH2q2L._SL1500_.jpg",
    url: "https://www.amazon.com/dp/B07SLZC3GL/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B07SLZC3GL&pd_rd_w=EVnv7&pf_rd_p=45a72588-80f7-4414-9851-786f6c16d42b&pd_rd_wg=JwuEx&pf_rd_r=DSV0Q209Z1YCQSVV3JVC&pd_rd_r=74257106-6ad9-4d7a-ad8b-91fee870fae3&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTjFUNEVTV0tVSTBWJmVuY3J5cHRlZElkPUEwMDc2NzY1MlVWR0xERVZaODVHOSZlbmNyeXB0ZWRBZElkPUEwNTQzNTM5MkgyT0tEUksxUENSNiZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    price: 14.99,
    comments: "For people who want to be as cool as Crazy Dinos"
  })
  const goldGlasses = await Item.create({
    name: "Gold Filigree Cherub Ornate Sunglasses",
    image_url: "https://i.etsystatic.com/5680763/r/il/627551/1699296097/il_1588xN.1699296097_6p8f.jpg",
    url: "https://www.etsy.com/listing/637392394/gold-filigree-cherub-ornate-sunglasses?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=fancy+sunglasses&ref=sr_gallery-1-2&organic_search_click=1&cns=1",
    price: 80.18,
    comments: "For people who want to be as cool as Crazy Dinos"
  })
  const targetChain = await Item.create({
    name: "Halloween Adult Necklace Dollar Sign Jumbo Silver",
    image_url: "https://target.scene7.com/is/image/Target/GUEST_1696465d-4635-4121-8e2d-c03f525c63eb?fmt=pjpeg&wid=1400&qlt=80",
    url: "https://www.target.com/p/halloween-adult-necklace-dollar-sign-jumbo-silver---one-size/-/A-51267837",
    price: 2.99,
    comments: "For people who want to be as cool as Crazy Dinos"
  })
  const jojoHat = await Item.create({
    name: "Halloween Adult Airplane Pilot Hat Blue",
    image_url: "https://target.scene7.com/is/image/Target/GUEST_4f621b99-bad6-4d58-b871-900bf2d6a2ff?fmt=pjpeg&wid=1400&qlt=80",
    url: "https://www.target.com/p/halloween-adult-airplane-pilot-hat-blue/-/A-51268944",
    price: 10.69,
    comments: "For people who want to be as cool as Crazy Dinos"
  })


  await crazyDemonsWishlist.addItem(goldChain);
  await admin.addItem(goldChain);

  await crazyDemonsWishlist.addItem(coolShades);
  await admin.addItem(coolShades);

  await crazyDemonsWishlist.addItem(fancyGoldChain);
  await admin.addItem(fancyGoldChain);

  await crazyDemonsWishlist.addItem(chainSet);
  await admin.addItem(chainSet);

  await crazyDemonsWishlist.addItem(goldGlasses);
  await admin.addItem(goldGlasses);

  await crazyDemonsWishlist.addItem(targetChain);
  await admin.addItem(targetChain);

  await crazyDemonsWishlist.addItem(jojoHat);
  await admin.addItem(jojoHat);

  process.exit();
}

seed();