import { Category } from "src/category/entites/category.entity";

export class UpdatePostDto {
  title: string;

  description: string;

  thumbnail: string;

  status: number;

  category : Category;
}
