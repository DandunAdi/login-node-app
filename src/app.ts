import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import userRoutes from "./routes/user.route";
import { errorMiddleware } from "./middlewares/error.middleware";
import morgan from "morgan";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/users", userRoutes);

// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
