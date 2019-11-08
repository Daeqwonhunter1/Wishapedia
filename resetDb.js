const { sequelize } = require('./models');

const main = async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(error.message)

  } finally {
    process.exit()
  }
}

main();