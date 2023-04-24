// const { expressjwt: expressJwt } = require('express-jwt');
// const jwks = require("jwks-rsa");

// const audience = process.env.AUTH0_AUDIENCE;
// const issuer = process.env.AUTH0_ISSUER;

// const jwtCheck = expressJwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: 'https://dev-cpw4mqjs3kzelwvn.us.auth0.com/.well-known/jwks.json'
//     }),
//     audience: audience,
//     issuer: 'https://dev-cpw4mqjs3kzelwvn.us.auth0.com/',
//     algorithms: ['RS256']
// });

// module.exports = jwtCheck;