import { ReactElement } from "react";

export interface Modal {
  open: boolean;
  onClose: () => void;
  head: ReactElement;
  body: ReactElement;
  footer: ReactElement;
  className: string;
}
