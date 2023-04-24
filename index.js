
const express = require('express')
const bodyParser = require('body-parser')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const usersRoutes = require('./src/routes/users.routes');

const app = express()
const port = 3000

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Users API',
            description: 'API for managing users.',
            contact: {
                name: 'Juan Francisco'
            },
            servers: ['http://localhost:3000']
        }
    },
    apis: ['./src/routes/*.js']
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/api/users', usersRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get('/', (req, res) => {
    res.send('API de Usuarios');
});

app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
})