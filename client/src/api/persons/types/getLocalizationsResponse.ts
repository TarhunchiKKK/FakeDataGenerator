import { AxiosResponse } from "axios";
import { ILocalePair } from "../../../types";

export type TGetLocalizationsResponse = AxiosResponse<ILocalePair[], void>;
