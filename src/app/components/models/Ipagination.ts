import { Iproduct } from "./Iproduct";

export interface Ipagination {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: Iproduct[];
}
