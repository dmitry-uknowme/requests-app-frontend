import { ButtonLoading } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/shared/ui/textarea";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { TRequestCategory } from "@/entities/request";
import { FormBaseSchema } from "../model";
import type { RequestBaseFormValues } from "../model";

interface RequestBaseFormProps {
  defaultValues?: Partial<RequestBaseFormValues>;
  onSubmit: (data: RequestBaseFormValues) => Promise<void> | void;
  submitText?: string;
  isEdit?: boolean;
}

const RequestBaseForm: React.FC<RequestBaseFormProps> = ({
  defaultValues = {},
  onSubmit,
  submitText = "Создать",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormBaseSchema),
    defaultValues: {
      title: defaultValues?.title || "",
      description: defaultValues?.description || "",
      category: defaultValues?.category || "DEFAULT",
    },
  });

  const handleSubmit = async (data: RequestBaseFormValues) => {
    setIsLoading(true);
    await onSubmit(data);
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        /* // @ts-expect-error Issue with schema resolver where enum as string */
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название заявки</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <Select
                {...field}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {(
                    Object.keys(TRequestCategory) as Array<
                      keyof typeof TRequestCategory
                    >
                  ).map((key) => (
                    <SelectItem key={key} value={key}>
                      {TRequestCategory[key]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonLoading type="submit" isLoading={isLoading}>
          {submitText}
        </ButtonLoading>
      </form>
    </Form>
  );
};

export default RequestBaseForm;
