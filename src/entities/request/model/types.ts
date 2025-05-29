// import type { Reducer } from "@reduxjs/toolkit";

export enum TRequestCategory {
  DEFAULT = "По умолчанию",
  TECH_ERROR = "Техническая ошибка",
  BILLING = "Проблема с оплатой",
  FEATURE_REQUEST = "Запрос новой функции",
  BUG_REPORT = "Сообщение об ошибке",
  CONTENT_ISSUE = "Проблема с контентом",
  PERFORMANCE = "Проблема с производительностью",
  ACCESS_ISSUE = "Проблема с доступом",
  OTHER = "Другое",
}

export type TRequestCategoryKey = keyof typeof TRequestCategory;

export type TRequest = {
  id: string;
  title: string;
  description: string;
  created_at: number;
  // category: string;
  category: TRequestCategory;
};

// export type TRequestReducerStore = {
//   requestReducer: TRequestReducerState;
// };

// export type TRequestReducerStore = ReturnType<
//   Reducer<{
//     request: TRequestReducerState;
//   }>
// >;

export type TSetRequestsPayload = TRequest[];
export type TAddRequestPayload = TRequest;
export type TEditRequestPayload = {
  id: string;
  data: Partial<TRequest>;
};
export type TRemoveRequestPayload = {
  id: string;
};
export type TFilterRequestsPayload = {
  id: string;
};
