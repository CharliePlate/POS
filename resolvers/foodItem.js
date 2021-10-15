const resolvers = {
	Query: {
		getFoodItem: async (parent, { id }, { db }) =>
			await db.foodItem.findOne({ where: { id } }),
		getFoodItemsByCategory: async (parent, { category }, { db }) =>
			await db.foodItem.findAll({ where: { category } }),
		getAllFoodItems: async (parent, args, { db }) =>
			await db.foodItem.findAll(),
	},

	Mutation: {
		createFoodItem: async (parent, args, { db }) =>
			await db.foodItem.create(args),
	},
};

module.exports = resolvers;
