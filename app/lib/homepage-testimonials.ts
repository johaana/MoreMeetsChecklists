export type HomepageTestimonial = {
  name: string;
  title: string;
  quote: string;
  stars: number;
};

export const homepageTestimonials: HomepageTestimonial[] = [
  {
    name: "Vikram S.",
    title: "Owner, Boutique Restaurant Group",
    quote: "We stopped depending on verbal follow-ups. Every station finally had visibility, and I could see opening checks were done from my phone before I even arrived.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    title: "Operations Manager, Multi-Unit Retail",
    quote: "Standardizing execution across 12 branches seemed impossible until we deployed this. New staff followed the system from Day 1 without retraining.",
    stars: 5,
  },
  {
    name: "Anil K.",
    title: "Facility Director",
    quote: "Audit preparation used to be a week of panic. Now it's just a download of our daily logs. The accountability trail is finally permanent.",
    stars: 5,
  },
];
