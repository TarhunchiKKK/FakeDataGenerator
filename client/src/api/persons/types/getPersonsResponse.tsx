import { AxiosResponse } from "axios";
import { IPerson } from "../../../types";
import { TGetPersonsQueryArgs } from "./getPersonsQueryArgs";

export type TGetPersonsResponse = AxiosResponse<IPerson[], TGetPersonsQueryArgs>;
