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
    bio?: string;
    membership: string;
    following?: string;
    followers?: string;
    passwordChangedAt?: Date;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export interface IRegisterUser {
    name: string,
    email: string,
    password: string,
    phone: string,
    role: 'user',
    address: string,
    membership: 'string',
    photo: string,
}

export interface IRecipe {
    _id: string;
    title: string;
    desc: string;
    image: string;
    rating: string;
    contentAvailability: string;
}

export interface IRecipes {
    data: IRecipe[];
    message: string;
    statusCode: number;
    success: boolean;
}