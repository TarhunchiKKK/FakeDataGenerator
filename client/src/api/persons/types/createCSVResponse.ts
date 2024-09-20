import { AxiosResponse } from "axios";
import { IPerson } from "../../../types";

export type TCreateCSVResponse = AxiosResponse<string, IPerson[]>;
