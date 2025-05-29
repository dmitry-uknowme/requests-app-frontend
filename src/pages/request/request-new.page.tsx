import BaseLayout from "@/shared/ui/layout/base";
import { addRequest, TRequestCategory } from "@/entities/request";
import {
  RequestBaseForm,
  RequestBaseFormValues,
} from "@/features/request-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

interface FormValues extends Omit<RequestBaseFormValues, "category"> {
  category: TRequestCategory;
}

const RequestNewPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(
      addRequest({
        id: uuidv4(),
        created_at: new Date().getTime(),
        ...data,
      })
    );
    toast("Заявка создана");
    setTimeout(() => navigate("/requests", { replace: true }), 500);
  };
  return (
    <BaseLayout title="Новая заявка">
      <div className="my-5">
        <RequestBaseForm
          //@ts-expect-error Issue with schema resolver where enum as string
          onSubmit={handleSubmit}
          submitText="Добавить"
        />
      </div>
    </BaseLayout>
  );
};

export default RequestNewPage;
