export interface IUser {
    userId?: UserId;
    role?: string;
    iat?: number;
    exp?: number;
}
interface UserId {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    address: string;
    photo: string;
    membership: string;
    followers: string[];
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}