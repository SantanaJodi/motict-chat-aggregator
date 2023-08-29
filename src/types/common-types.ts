export interface GlobalResData<T> {
  data: T;
  message: string;
}

export interface PaginateRequestDTO {
  page: number;
  page_size: number;
}

export interface PaginateResponseDTO<T> {
  data: T;
  count: number;
  has_next: boolean;
  has_prev: boolean;
  next: string;
  prev: string;
}

export interface IDateRange {
  start?: Date | null;
  end?: Date | null;
}

export interface IPageServerProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
