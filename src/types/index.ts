export interface IUserWithIat {
    userId: IUser;
    role: string;
    iat: number;
    exp: number;
}
export interface IUser {
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

export interface IRecipe {
    title: string;
    desc: string;
    image: string;
    rating: string;
    contentAvailability: string;
}