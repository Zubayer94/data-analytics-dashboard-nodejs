const express = require('express')
const config = require('config')
const app = express()
const {sequelize} = require('./models/index')
const userRoutes = require('./routes/users')

// app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes)

const port = process.env.PORT || 3000;


/**
 * Create a anonymous function to establish the database connection.
 * After the connection is established, start the server.
 */
 const initApp = async () => {
    console.log(config.get('db.password'));
    console.log("Testing the database connection..");
    /**
     * Test the connection.
     * You can use the .authenticate() function to test if the connection works.
     */
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

        /**
         * Start the web server on the specified port.
         */
         app.listen(port, () => {
            console.log(`listening at ${port}`);
        })
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

/**
 * Initialize the application.
 */
initApp();