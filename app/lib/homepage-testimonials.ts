
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
    quote: "Our housekeeping operations stopped depending on verbal follow-ups. When my HOD resigned, the system stayed. It's the ultimate operational insurance.",
    stars: 5,
  },
  {
    name: "Dr. Anjali Rao",
    title: "Director of Nursing, Multi-specialty Hospital",
    quote: "Clinical audit-readiness used to take weeks of prep. With MoreMeets, we are in a state of permanent compliance. The technical protocols for medication safety are absolute essential infrastructure.",
    stars: 5,
  },
  {
    name: "Rajesh Kumar",
    title: "Plant Head, Industrial Manufacturing Unit",
    quote: "We replaced our paper logs with the operational Excel engine. The visibility into shift readiness is now surgical. It has drastically reduced our near-miss incidents and manual chasing.",
    stars: 5,
  },
];
