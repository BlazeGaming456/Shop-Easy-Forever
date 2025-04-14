import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productroute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import cors from 'cors'

//App Config
const app = express();
const port = process.env.PORT || 4000;

/ Update CORS configuration
const corsOptions = {
  origin: [
    'https://shop-easy-forever-frontend-c700pp3sd-blazegaming456s-projects.vercel.app',
    'https://shop-easy-forever-frontend.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

connectDB();
connectCloudinary();

//Middlewares
app.use(express.json());
app.use(cors());

//Api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter)
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter)

app.get('/', (req,res)=>{
    res.send('API Working');
})

app.listen(port, ()=>console.log(`Server started on PORT ` + port))