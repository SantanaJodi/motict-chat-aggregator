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
