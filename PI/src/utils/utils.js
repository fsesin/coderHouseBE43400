import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
export const __dirname = join(dirname(fileURLToPath(import.meta.url)), "../");

export const hashData = async (data) => {
  return bcrypt.hash(data, 10);
};

export const compareData = async (data, hashedData) => {
  return bcrypt.compare(data, hashedData);
};
