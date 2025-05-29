import BaseLayout from "@/shared/ui/layout/base";
import { MainStoreState } from "@/app/store/main-store";
import { RequestTableRow } from "@/entities/request";
import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const RequestsPage = () => {
  const navigate = useNavigate();
  const requestList = useSelector(
    (state: MainStoreState) => state.requestReducer.requests
  );

  const navigateToDetailPage = (id: string) => navigate(`/requests/${id}`);

  return (
    <BaseLayout
      title="Список заявок"
      actions={
        <>
          <Button onClick={() => navigate("/requests/new")}>
            Добавить новую <Plus />
          </Button>
        </>
      }
    >
      <div className="my-5">
        {!requestList?.length ? (
          <>Не найдено заявок по вашему запросу</>
        ) : (
          requestList.map((request) => (
            <RequestTableRow
              key={request.id}
              request={request}
              onViewClick={navigateToDetailPage}
            />
          ))
        )}
      </div>
    </BaseLayout>
  );
};

export default RequestsPage;
