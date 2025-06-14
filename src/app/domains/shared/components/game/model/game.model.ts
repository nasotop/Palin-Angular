import { Category } from "../../../../enum/category.enum";

export interface Game {
    title: string;
    description: string;
    image: string;
    price: number;
    hasDescount: boolean;
    discountPercentage?: number;
    category: Category;
}