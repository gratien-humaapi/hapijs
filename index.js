const Hapi = require('@hapi/hapi');
const db = require('./database/database').db;
const routes = require('./routes/usersRoutes');
const start = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

start();

