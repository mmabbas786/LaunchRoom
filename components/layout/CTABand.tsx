import { Button } from "@/components/ui/Button";

export function CTABand({
  heading,
  subtext,
  buttonText,
  buttonHref,
}: {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
}) {
  return (
    <section className="page-shell py-10 lg:py-12">
      <div className="panel-dark relative overflow-hidden px-6 py-12 text-center sm:px-8 lg:px-12 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(232,160,32,0.22),transparent_24%),radial-gradient(circle_at_85%_100%,rgba(255,255,255,0.06),transparent_18%)]" />
        <div className="relative">
          <p className="eyebrow eyebrow-invert mx-auto">Let&apos;s Connect</p>
          <h2 className="mx-auto mt-5 max-w-[12ch] text-[clamp(34px,4.2vw,58px)] leading-[1.04] text-text-primary">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.82] text-text-secondary">
            {subtext}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={buttonHref} className="min-w-[180px]">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
