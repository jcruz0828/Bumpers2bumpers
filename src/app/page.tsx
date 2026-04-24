import { BeforeAfter } from "@/components/before-after/BeforeAfter";
import { Book } from "@/components/book/Book";
import { FAQ } from "@/components/faq/FAQ";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/hero/Hero";
import { HowItWorks } from "@/components/process/HowItWorks";
import { Marquee } from "@/components/marquee/Marquee";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { Services } from "@/components/services/Services";
import { Since1998 } from "@/components/since/Since1998";
import { SocialProof } from "@/components/ui/SocialProof";
import { StickyBookCTA } from "@/components/ui/StickyBookCTA";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { USP } from "@/components/usp/USP";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <StickyBookCTA />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Marquee />
        <Services />
        <BeforeAfter />
        <Since1998 />
        <USP />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Book />
      </main>
    </>
  );
}
