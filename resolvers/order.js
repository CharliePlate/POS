import { Op } from 'sequelize';

const resolvers = {
	Query: {
		getOrderDetails: async (parent, { orderId }, { db }) => {
			let orderDetails = await db.order.findOne({
				where: { id: orderId },
				include: { all: true },
			});
			return {
				user: orderDetails.user,
				foodItems: orderDetails.foodItems,
				id: orderId,
			};
		},

		getAllOrders: async (parent, args, { db }) => {
			let orders = await db.order.findAll();
			return orders;
		},
	},

	Mutation: {
		createOrder: async (parent, { FoodItems }, { db, currentUser }) => {
			let order = await currentUser.createOrder();
			let orderFoodItems = await db.foodItem.findAll({
				where: { id: { [Op.in]: FoodItems } },
			});
			let orderFoods = [];
			for (let foodItem of orderFoodItems) {
				order.addFoodItem(foodItem);
				orderFoods.push(foodItem);
			}
			return {
				user: currentUser,
				foodItems: orderFoods,
				id: order.dataValues.id,
			};
		},
	},
};

module.exports = resolvers;
