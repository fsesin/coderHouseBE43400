import { dirname } from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
export const __dirname = dirname(fileURLToPath(import.meta.url));

export const hashData = async (data) => {
  return bcrypt.hash(data, 10);
};
