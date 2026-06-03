import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { premiumPacks } from '@/lib/premium-packs';
import { blogPosts } from '@/lib/blog-posts';
import { CheckSquare } from 'lucide-react';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const type = searchParams.get('type') || 'default';
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');

    // --- HOMEPAGE BRANDED CARD ---
    if (type === 'homepage') {
        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        backgroundImage: 'url(https://i.postimg.cc/NfGGj9nC/pexels-pavel-danilyuk-7519003.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '80px',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(31, 58, 52, 0.8)', // Deep brand green with opacity
                            display: 'flex',
                        }}
                    />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
                        <div style={{ 
                            fontSize: 68, 
                            fontWeight: 900, 
                            color: 'white', 
                            fontStyle: 'italic', 
                            lineHeight: 1.0,
                            maxWidth: '900px',
                            marginBottom: '50px',
                            letterSpacing: '-0.04em',
                            textTransform: 'uppercase'
                        }}>
                            WHERE SOPS MEET EXECUTION.
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            {[
                                'Industry-Specific SOP Systems',
                                'Daily Tasks',
                                'Built-In Instructions',
                                'Proof of Completion'
                            ].map((pillar) => (
                                <div key={pillar} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                                    <div style={{ 
                                        width: 28, 
                                        height: 28, 
                                        border: '4px solid #B89B5E', 
                                        borderRadius: '6px',
                                        backgroundColor: 'rgba(184, 155, 94, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <div style={{ width: 12, height: 12, backgroundColor: '#B89B5E', borderRadius: 2 }} />
                                    </div>
                                    <div style={{ fontSize: 34, fontWeight: 700, color: '#B89B5E', letterSpacing: '-0.01em' }}>
                                        {pillar}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ 
                        position: 'absolute', 
                        bottom: '60px', 
                        right: '80px', 
                        display: 'flex', 
                        alignItems: 'center',
                        zIndex: 10 
                    }}>
                        <div style={{ fontSize: 42, fontWeight: 800, color: 'white', letterSpacing: '-0.02em', fontStyle: 'italic', textTransform: 'uppercase' }}>
                            More<span style={{ color: '#B89B5E' }}>Meets™</span>
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    }

    let title = searchParams.get('title') || 'MoreMeets™';
    let description = searchParams.get('description') || 'The Professional Standard for Compliance & Operations Checklists.';

    try {
        if (type === 'pack' && id) {
            const item = premiumPacks.find(p => p.id === id);
            if (item) {
                title = item.title;
                description = item.description;
            }
        } else if (type === 'blog' && slug) {
            const item = blogPosts.find(b => b.slug === slug);
            if (item) {
                title = item.title;
                description = item.description;
            }
        }
    } catch (e) {
        console.error("Error finding item for OG image:", e);
    }
    
    if (title.length > 60) {
        title = title.substring(0, 57) + '...';
    }
    if (description.length > 120) {
        description = description.substring(0, 117) + '...';
    }

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    backgroundColor: 'hsl(212, 40%, 4%)',
                    color: 'white',
                    padding: '60px',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                     <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: 8,
                        backgroundColor: 'hsl(212, 88%, 13%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid hsl(38, 92%, 66%)'
                    }}>
                        <div style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>✓</div>
                    </div>
                    <div style={{ marginLeft: 20, fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em' }}>
                        MoreMeets™
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '90%' }}>
                        {title}
                    </div>
                     <p style={{ fontSize: 24, color: 'hsl(0, 0%, 80%)', maxWidth: '90%' }}>
                        {description}
                    </p>
                </div>

                 <div style={{ display: 'flex', alignSelf: 'flex-end', fontSize: 20, color: 'hsl(0, 0%, 70%)' }}>
                    moremeets.com
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
