const resolvers = {
	Query: {
		getAllUsers: (parent, args, { db }) => db.user.findAll(),
		getUserByAuth: (parent, { auth }, { db }) =>
			db.user.findAll({ where: { auth } }),
		getUserById: (parent, { id }, { db }) =>
			db.user.findOne({ where: { id } }),
	},
	Mutation: {
		addUser: (parent, args, { db }) => {
			return db.user.create(args);
		},
		changeUserAuth: (parent, { id, auth }, { db }) => {
			return db.user
				.update({ auth: auth }, { where: { id } })
				.then((user) => {
					return db.user.findOne({ where: { id } });
				});
		},
	},
};

module.exports = resolvers;
