import { Role } from "./role";

export class User {
    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    role: Role | undefined;
    token?: string;
}