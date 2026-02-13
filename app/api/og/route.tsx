import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { premiumPacks } from '@/lib/premium-packs';
import { blogPosts } from '@/lib/blog-posts';
import { CheckSquare } from 'lucide-react';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const type = searchParams.get('type') || 'default';
    let title = searchParams.get('title') || 'MoreMeets™';
    let description = searchParams.get('description') || 'The Professional Standard for Compliance & Operations Checklists.';
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');

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
                        <CheckSquare size={28} color="white" />
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