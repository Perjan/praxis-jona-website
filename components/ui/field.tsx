import * as React from "react";

import { cn } from "@/lib/utils";

function FieldGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-5", className)} {...props} />;
}

function Field({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2 data-[invalid=true]:text-destructive", className)} {...props} />;
}

function FieldSet({ className, ...props }: React.FieldsetHTMLAttributes<HTMLFieldSetElement>) {
  return <fieldset className={cn("flex flex-col gap-3", className)} {...props} />;
}

function FieldLegend({ className, ...props }: React.HTMLAttributes<HTMLLegendElement>) {
  return <legend className={cn("text-base font-semibold text-foreground", className)} {...props} />;
}

const FieldLabel = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn("text-sm font-medium leading-none text-foreground", className)} {...props} />
  )
);
FieldLabel.displayName = "FieldLabel";

function FieldDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

function FieldError({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  if (!children) return null;
  return (
    <p className={cn("text-sm font-medium text-destructive", className)} {...props}>
      {children}
    </p>
  );
}

export { Field, FieldGroup, FieldLabel, FieldDescription, FieldError, FieldSet, FieldLegend };
