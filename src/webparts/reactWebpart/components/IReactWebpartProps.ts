import { SPHttpClient } from "@microsoft/sp-http";

export interface IReactWebpartProps {
  description: string;
  spHttpClient: SPHttpClient;
  absoluteUrl: string;
}
