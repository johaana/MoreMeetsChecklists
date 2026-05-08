
export type HomepageTestimonial = {
  name: string;
  title: string;
  quote: string;
  stars: number;
};

export const homepageTestimonials: HomepageTestimonial[] = [
  {
    name: "Sameer Verma",
    title: "General Manager, Boutique Hotel Group",
    quote: "Our housekeeping standards stopped depending on verbal follow-ups. When our HOD resigned, the operational routines stayed intact.",
    stars: 5,
  },
  {
    name: "Dr. Anjali Rao",
    title: "Director of Nursing, Multi-specialty Hospital",
    quote: "Audit preparation used to take days of manual checking. Now our nursing teams follow one clear system for daily safety and compliance routines.",
    stars: 5,
  },
  {
    name: "Vikram Mehra",
    title: "CEO, Multi-Unit Franchise Group",
    quote: "Before MoreMeets, maintaining the same standards across 12 branches meant constant follow-ups. Now every location runs on one shared operational system.",
    stars: 5,
  },
];
