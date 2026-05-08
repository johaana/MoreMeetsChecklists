
import React from 'react';
import { homepageTestimonials } from '@/lib/homepage-testimonials';
import { TestimonialCard } from '@/components/ui/testimonial-card';

export const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="w-full py-16 md:py-24 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-text uppercase italic tracking-tighter">Trusted by Leaders. Built for Real Teams.</h2>
                    <p className="text-secondary-text mt-4 text-base md:text-lg font-medium italic border-l-2 border-primary/20 pl-6 mx-auto">MoreMeets helps teams bring structure, visibility, and consistency into daily operations.</p>
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
