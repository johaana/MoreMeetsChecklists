
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
    quote: "The Sovereign v11.9 engine turned our housekeeping from a guessing game into a verifiable data stream. When my HOD resigned, the system stayed. It's the ultimate operational insurance.",
    stars: 5,
  },
  {
    name: "Dr. Anjali Rao",
    title: "Director of Nursing, Multi-specialty Hospital",
    quote: "Clinical audit-readiness used to take weeks of prep. With MoreMeets, we are in a state of permanent compliance. The technical protocols for high-alert drugs are absolute zero-fail infrastructure.",
    stars: 5,
  },
  {
    name: "Rajesh Kumar",
    title: "Plant Head, Industrial Manufacturing Unit",
    quote: "We replaced our paper logs with the Sovereign Excel engine. The visibility into LOTO and machine readiness across shifts is surgical. It has drastically reduced our near-miss incidents.",
    stars: 5,
  },
];
