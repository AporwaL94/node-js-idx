import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0', // Add this line to specify the OpenAPI version
    info: {
      title: 'Your API',
      version: '1.0.0', 
      description: 'API documentation for your project',
    },
  },
  apis: [
    './src/routes/*.ts', 
    './src/controllers/*.ts' 
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;