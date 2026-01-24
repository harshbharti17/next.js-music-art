'use client'
import { cn } from '@/utils/cn'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function MusicSchoolTestimonials() {
  const musicSchoolTestimonials = [
    {
      quote:
        'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
      name: 'Alex Johnson',
      title: 'Guitar Student',
    },
    {
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: 'Samantha Lee',
      title: 'Piano Student',
    },
    {
      quote:
        "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Michael Chen',
      title: 'Vocal Student',
    },
    {
      quote:
        'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
      name: 'Emily Taylor',
      title: 'Violin Student',
    },
    {
      quote:
        'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
      name: 'Chris Morales',
      title: 'Music Production Student',
    },
  ];


  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: `
          linear-gradient(to right, #e4e4e7 1px, transparent 1px),
          linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)
        `,
        }}
      />

      {/* Grid background (dark mode override) */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: `
          linear-gradient(to right, #262626 1px, transparent 1px),
          linear-gradient(to bottom, #262626 1px, transparent 1px)
        `,
        }}
      />

      {/* Radial fade overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, transparent 20%, black)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, transparent 20%, black)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-8xl">
            <InfiniteMovingCards items={musicSchoolTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );

}

export default MusicSchoolTestimonials