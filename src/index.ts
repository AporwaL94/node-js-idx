import express from 'express';
import * as dotenv from 'dotenv'; 
import swaggerUi from 'swagger-ui-express';
import blogRoutes from './routes/blog.routes';
import authRoutes from './routes/auth.routes';

const swaggerSpec = require('./swagger');

const app = express();
dotenv.config(); 

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.use('/auth', authRoutes);
app.use('/blog', blogRoutes);

app.get('/hello', (req, res) => {
  res.send('Hello from another endpoint!');
});

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});