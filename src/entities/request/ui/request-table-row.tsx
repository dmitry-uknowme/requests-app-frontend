import React from "react";
import { TRequest, TRequestCategory, TRequestCategoryKey } from "../model";
import { Eye } from "lucide-react";
import { formatDate } from "@/shared/lib";

interface RequestTableRowProps {
  request: TRequest;
  onViewClick: (id: string) => void;
}

const RequestTableRow: React.FC<RequestTableRowProps> = ({
  request,
  onViewClick,
}) => {
  const { id, title, category, created_at } = request;
  return (
    <div className="row flex nowrap item border-b py-4">
      <div className="item flex-1">{title}</div>
      <div className="item flex-1">
        {TRequestCategory[category as unknown as TRequestCategoryKey]}
      </div>
      <div className="item flex-2">{formatDate(created_at)}</div>
      <div className="item flex-2">
        <Eye onClick={() => onViewClick(id)} />
      </div>
    </div>
  );
};

export default RequestTableRow;
