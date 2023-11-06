import { usersService } from "../services/users.service.js";
import { coursesService } from "../services/courses.service.js";

export const getUsers = async (req, res) => {
  try {
    const users = await usersService.getAll();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getUserById = async (req, res) => {
  const { idUser } = req.params;
  try {
    const user = await usersService.getById(idUser);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User", user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ message: "Missing values" });
  }
  try {
    const createdUser = await usersService.createOne(req.body);
    res.status(200).json({ message: "User created", user: createdUser });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const addUserToCourse = async (req, res) => {
  console.log("Test");
  const { idUser, idCourse } = req.params;
  console.log(idUser, idCourse);
  try {
    const user = await usersService.getById(idUser);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const course = await coursesService.getById(idCourse);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    const courseExists = user.courses.some((c) => c._id.equals(idCourse));

    if (courseExists) {
      return res.status(400).json({ message: "User already has this course" });
    }

    user.courses.push(idCourse);
    if (user.role === "student") {
      course.students.push(idUser);
    } else {
      course.teacher = idUser;
    }

    await Promise.all([await course.save(), await user.save()]);
    res.status(200).json({ message: "Course added to user" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
