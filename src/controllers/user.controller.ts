import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export const getAllUsers = (req: Request, res: Response) => {
  try {
    const users = userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const getUserById = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = userService.getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const addUser = (req: Request, res: Response) => {
  try {
    const { id, name, email } = req.body;
    const newUser = { id, name, email };
    userService.addUser(newUser);
    res.status(201).send("User added successfully");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
