import { editRequest, TRequest, TRequestCategory } from "@/entities/request";
import {
  RequestBaseForm,
  RequestBaseFormValues,
} from "@/features/request-form";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/ui/alert-dialog";
import { X as CloseIcon } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

interface RequestEditModalProps {
  currentRequest: TRequest;
  isOpened: boolean;
  onOpenedChange: (value: boolean) => void;
}

interface FormValues extends Omit<RequestBaseFormValues, "category"> {
  category: TRequestCategory;
}

const RequestEditModal: React.FC<RequestEditModalProps> = ({
  currentRequest,
  isOpened,
  onOpenedChange,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(
      editRequest({
        id: currentRequest.id,
        data: {
          ...data,
          category: data.category.toString() as TRequestCategory,
        },
      })
    );
    toast("Заявка отредактирована");
    setTimeout(() => onOpenedChange(false), 500);
  };

  return (
    <AlertDialog open={isOpened} onOpenChange={onOpenedChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex">
            <AlertDialogTitle className="flex-6">
              Редактирование заявки № {currentRequest?.id}
            </AlertDialogTitle>
            <div className="flex-1 items-end">
              {/* <Button asChild variant="ghost" onClick={() => onClose(false)}>
                <CloseIcon color="black" />
              </Button> */}
              <CloseIcon onClick={() => onOpenedChange(false)} />
            </div>
          </div>
        </AlertDialogHeader>
        <RequestBaseForm
          // @ts-expect-error Issue with schema resolver where enum as string
          onSubmit={handleSubmit}
          submitText="Сохранить"
          defaultValues={currentRequest}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RequestEditModal;
