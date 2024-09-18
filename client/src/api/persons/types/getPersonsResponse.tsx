import { AxiosResponse } from "axios";
import { IPerson } from "../../../interfaces";
import { TGetPersonsQueryArgs } from "./getPersonsQueryArgs";

export type TGetPersonsResponse = AxiosResponse<IPerson[], TGetPersonsQueryArgs>;
