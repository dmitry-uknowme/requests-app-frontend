import BaseLayout from "@/app/layout/base";
import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

const RequestsPage = () => {
  const navigate = useNavigate();
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
    ></BaseLayout>
  );
};

export default RequestsPage;
