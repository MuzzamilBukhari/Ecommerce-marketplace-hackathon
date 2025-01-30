import { CustomerData } from "./customerType";

export interface FormData extends CustomerData {
  paymentMethod: "cod" | "online-payment";
}
