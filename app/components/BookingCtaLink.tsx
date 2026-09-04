import type { ComponentProps } from "react";
import Link from "next/link";

type BookingCtaLinkProps = ComponentProps<typeof Link> & {
  placement: string;
};

export default function BookingCtaLink({ placement, ...props }: BookingCtaLinkProps) {
  return (
    <Link
      {...props}
      data-booking-cta="doctolib"
      data-booking-placement={placement}
    />
  );
}
