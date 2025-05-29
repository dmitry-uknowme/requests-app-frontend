import BaseLayout from "@/shared/ui/layout/base";
import { MainStoreState } from "@/app/store/main-store";
import { removeRequest, RequestDetailCard } from "@/entities/request";
import { Button, ButtonLoading } from "@/shared/ui/button";
import { RequestEditModal } from "@/widgets";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";

const RequestDetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isModalOpened, setIsModalOpened] = useState(false);

  const currentRequest = useSelector((state: MainStoreState) =>
    state.requestReducer.requests.find((r) => r.id === id)
  );

  const handleEditOpen = () => {
    setIsModalOpened(true);
  };

  const handleRemove = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/requests", { replace: true });
    dispatch(removeRequest({ id: id! }));
    // setTimeout(() => navigate("/requests", { replace: true }), 500);
    toast("Заявка удалена");
  };

  return (
    <BaseLayout
      title={
        currentRequest
          ? `Заявка ${currentRequest.title} (${id})`
          : `Заявка № ${id} не найдена`
      }
      actions={
        currentRequest ? (
          <>
            <Button onClick={handleEditOpen}>
              Редактировать <Edit />
            </Button>
            <ButtonLoading variant="destructive" onClick={handleRemove}>
              Удалить <Trash2 />
            </ButtonLoading>
          </>
        ) : null
      }
    >
      <div className="my-5">
        {currentRequest ? (
          <RequestDetailCard request={currentRequest} />
        ) : (
          <>
            Данные не найдены
            <Button asChild variant="link">
              <Link to="/requests">Перейти к списку заявок</Link>
            </Button>
          </>
        )}
        <RequestEditModal
          currentRequest={currentRequest!}
          isOpened={isModalOpened}
          onOpenedChange={() => setIsModalOpened(false)}
        />

        {/* <RequestBaseForm
          onSubmit={handleSubmit}
          submitText="Сохранить"
          defaultValues={currentRequest}
        /> */}
      </div>
    </BaseLayout>
  );
};

export default RequestDetailPage;
