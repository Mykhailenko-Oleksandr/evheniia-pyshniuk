export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: "Guest" | "Admin";
  createdAt?: string;
  updatedAt?: string;
}
