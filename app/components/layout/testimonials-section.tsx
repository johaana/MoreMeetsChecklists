import React from 'react';
import { homepageTestimonials } from '@/lib/homepage-testimonials';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { Badge } from '@/components/ui/badge';

export const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="w-full py-16 md:py-24 bg-zinc-50 border-t border-zinc-100">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic bg-white shadow-sm mb-4">SOCIAL PROOF</Badge>
                    <h2 className="text-3xl md:text-4xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter">OPERATIONAL FEEDBACK</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {homepageTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            stars={testimonial.stars}
                            quote={testimonial.quote}
                            name={testimonial.name}
                            title={testimonial.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
