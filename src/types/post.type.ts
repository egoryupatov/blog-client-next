import { IUser } from "@/types/user.types";
import { IComment } from "@/types/comment.types";
import { ICategory } from "@/types/category.types";

export interface IPost {
  id: number;
  publishDate: Date;
  title: string;
  description: string;
  text: string;
  image: string;
  likes: number;
  user: IUser;
  comments: IComment[];
  category: ICategory;
}
