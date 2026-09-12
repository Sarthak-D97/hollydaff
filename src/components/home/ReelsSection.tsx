import { reels } from "@/data/reels";
import { ReelCard } from "@/components/media/ReelCard";
import { SectionHeading, Accent } from "@/components/ui/SectionHeading";
import { ButtonExternal } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

export function ReelsSection() {
  return (
    <section className="relative overflow-hidden bg-cocoa-900 py-24 text-cream-100 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fbf6f0 1px, transparent 0)", backgroundSize: "22px 22px" }}
        aria-hidden
      />
      <div className="container-page relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="As seen on Instagram"
            title={
              <>
                Watch the <Accent className="text-petal-300">magic</Accent> happen
              </>
            }
            description={`Our reels have been watched ${site.stats.reelViews} times. Here's a peek at the making, the packing and the pieces you love.`}
          />
          <ButtonExternal href={site.instagram.url} variant="light">
            <InstagramIcon size={18} /> Follow @{site.instagram.handle}
          </ButtonExternal>
        </div>
      </div>
      <div className="no-scrollbar relative mt-12 overflow-x-auto pb-4">
        <ul className="flex w-max snap-x snap-mandatory gap-4 px-5 sm:gap-5 sm:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {reels.map((reel) => (
            <li key={reel.href} className="w-[15.5rem] shrink-0 snap-start sm:w-[17.5rem]">
              <ReelCard reel={reel} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
