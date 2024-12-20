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
    isBlocked: boolean;
    membership: string;
    following?: string;
    followers?: string;
    passwordChangedAt?: string;
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

export type IReview = {
    _id?: string;
    user: string;
    rating: number;
    comment: string;
}

export interface IRecipe {
    _id: string;
    title: string;
    desc: string;
    image: string;
    reviews?: IReview[],
    category: string[];
    contentAvailability: string;
    user: IUser;
    createdAt: string;
    updatedAt: string;
    votes: [string];
    __v: number
}

type TMeta = {
    total: number;
    currentPage: number;
    totalPages: number;
}

export interface IRecipes {
    data: IRecipe[];
    message: string;
    statusCode: number;
    success: boolean;
    meta?: TMeta;
}