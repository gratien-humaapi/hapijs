
const User = require('../models/users');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (req, reply) => {
            return 'Hello world!';
        }
    },
    {
        method: 'GET',
        path: '/users',
        handler: async (req, reply) => {
            try {
                var users = await User.find({}).exec();
                return users;
            } catch (error) {
                return error;
            }
        }
    },

    {
        method: 'GET',
        path: '/users/{id}',
        handler: async (req, reply) => {
            try {
                const userId = req.params.id;
                var user = await User.findById(userId);
                return user;
            } catch (error) {
                return error;
            }
        }
    },

    {
        method: ['PUT', 'POST'],
        path: '/users/{id?}',
        handler: async (req, reply) => {
            try {
                var user = req.body;
                var newUser = await User.create(user);
                return newUser;
            } catch (error) {
                return error;
            }
        }
    }
];