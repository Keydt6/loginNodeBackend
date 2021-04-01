import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import checkToken from '../src/middleware/checkToken'

// importing routes
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors());

// routes
app.use('/api', authRoutes);
app.use('/api/users', checkToken, userRoutes);

export default app;