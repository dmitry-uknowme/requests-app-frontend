import React from "react";
import { TRequest, TRequestCategory, TRequestCategoryKey } from "../model";
import { formatDate } from "@/shared/lib";

interface RequestDetailCardProps {
  request: TRequest;
}

const RequestDetailCard: React.FC<RequestDetailCardProps> = ({ request }) => {
  const { id, title, description, category, created_at } = request;
  return (
    <div className="row flex flex-col nowrap item mb-5">
      <div className="flex mb-2">
        <p className="flex-1">Номер:</p>
        <p className="flex-4 font-bold">{id}</p>
      </div>
      <div className="flex mb-2">
        <p className="flex-1">Название:</p>
        <p className="flex-4 font-bold">{title}</p>
      </div>
      <div className="flex mb-2">
        <p className="flex-1">Описание:</p>
        <p className="flex-4 font-bold">{description}</p>
      </div>
      <div className="flex mb-2">
        <p className="flex-1">Категория:</p>
        <p className="flex-4 font-bold">
          {TRequestCategory[category as unknown as TRequestCategoryKey]}
        </p>
      </div>
      <div className="flex">
        <p className="flex-1">Дата создания:</p>
        <p className="flex-4 font-bold">{formatDate(created_at)}</p>
      </div>
    </div>
  );
};

export default RequestDetailCard;
