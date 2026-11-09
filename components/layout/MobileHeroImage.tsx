import Image from "next/image";

export default function MobileHeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative pt-20 md:hidden" data-mobile-hero-image>
      <Image src={src} alt={alt} width={1672} height={941} sizes="100vw" priority className="h-auto w-full" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#062f3d]" />
    </div>
  );
}
