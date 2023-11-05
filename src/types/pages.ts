import { ReactNode } from "react";

export interface Page {
  title: string;
  path: string;
  element: React.FC;
}

export interface SocialMediaType {
  title: string;
  path: string;
  icon: ReactNode;
}
