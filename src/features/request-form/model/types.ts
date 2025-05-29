// import { TRequestCategory, TRequestCategoryKey } from "@/entities/request";
import z from "zod";

// const categoryOptions = Object.keys(TRequestCategory) as TRequestCategoryKey[];

// const categoryOptions = Object.keys(TRequestCategory) as Array<
// keyof typeof TRequestCategory
// >;

export const FormBaseSchema = z.object({
  title: z.string().min(1, {
    message: "Поле обязательно для заполнения",
  }),
  description: z.string().min(1, {
    message: "Поле обязательно для заполнения",
  }),
  category: z.string().min(1, {
    message: "Поле обязательно для заполнения",
  }),
});

export type RequestBaseFormValues = z.infer<typeof FormBaseSchema>;

// export type RequestBaseFormValues = {
//   title: string;
//   description: string;
//   category: TRequestCategory;
// };
