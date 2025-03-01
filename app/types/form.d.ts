import { ReactNode } from "react";

declare module "@/components/ui/form" {
  export interface FormItemProps {
    children?: ReactNode;
    className?: string;
  }

  export interface FormLabelProps {
    children?: ReactNode;
    className?: string;
  }

  export interface FormControlProps {
    children?: ReactNode;
    className?: string;
  }

  export const FormItem: React.ForwardRefExoticComponent<
    FormItemProps & React.RefAttributes<HTMLDivElement>
  >;

  export const FormLabel: React.ForwardRefExoticComponent<
    FormLabelProps & React.RefAttributes<HTMLLabelElement>
  >;

  export const FormControl: React.ForwardRefExoticComponent<
    FormControlProps & React.RefAttributes<HTMLDivElement>
  >;
} 