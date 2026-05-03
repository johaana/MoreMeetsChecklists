'use client';

import * as React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { handleDownload } from '@/lib/download';
import { allPacks } from '@/lib/packs/all_packs';
import { Download, KeyRound, Loader2, ShieldCheck, Database } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { verifyPassword } from './actions';
import { Badge } from '@/components/ui/badge';

export default function MasterAccessClient() {
    const [password, setPassword] = React.useState('');
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [error, setError] = React.useState('');
    const [isVerifying, setIsVerifying] = React.useState(false);
    const [downloadingPack, setDownloadingPack] = React.useState<string | null>(null);
    const { toast } = useToast();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsVerifying(true);
        setError('');
        const result = await verifyPassword({ password });
        if (result.success) {
            setIsAuthenticated(true);
        } else {
            setError('Incorrect master key.');
        }
        setIsVerifying(false);
    };

    const triggerDownload = (pack: PremiumPack) => {
        setDownloadingPack(pack.id);
        try {
            handleDownload(pack, 'pack');
             toast({ title: "Sovereign Master Generated", description: `Engine for "${pack.title}" is ready.` });
        } catch (err) {
             toast({ variant: "destructive", title: "Build Failed", description: `Could not build "${pack.title}".` });
        } finally {
            setTimeout(() => setDownloadingPack(null), 1000);
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-[60vh] px-4">
                <Card className="w-full max-w-sm border-primary/20 bg-black/40 backdrop-blur-md">
                    <CardHeader className="text-center">
                        <KeyRound className="w-10 h-10 text-primary mx-auto mb-4" />
                        <CardTitle className="text-xl font-headline uppercase italic">Admin Gate</CardTitle>
                        <CardDescription>Sovereign Library Access.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <Input type="password" placeholder="Enter master key" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-black/40 border-white/10" />
                            {error && <p className="text-xs text-red-500 font-bold uppercase tracking-widest text-center">{error}</p>}
                            <Button type="submit" className="w-full h-12 font-black uppercase italic" disabled={isVerifying} variant="accent">
                                {isVerifying ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Unlock Repository"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 p-8 rounded-[2rem] bg-primary/5 border border-primary/10">
                <div className="space-y-2">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Administrative Hub</Badge>
                    <h1 className="text-4xl font-black font-headline text-primary-text italic uppercase tracking-tighter">Sovereign Master Portal</h1>
                </div>
                <ShieldCheck className="w-12 h-12 text-primary opacity-50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPacks.filter(p => p.id !== 'master_access').map(pack => (
                    <Card key={pack.id} className="flex flex-col border-white/5 bg-black/40 hover:border-primary/30 transition-all shadow-2xl group overflow-hidden">
                        <CardHeader>
                            <Badge variant="outline" className="w-fit text-[8px] font-black uppercase tracking-widest mb-2">{pack.category}</Badge>
                            <CardTitle className="text-xl font-headline italic uppercase tracking-tighter text-primary-text group-hover:text-primary transition-colors">{pack.title}</CardTitle>
                        </CardHeader>
                        <CardFooter className="mt-auto pt-4 border-t border-white/5 bg-white/[0.02]">
                           <Button variant="ghost" className="w-full h-12 font-black uppercase italic text-xs tracking-widest hover:bg-primary hover:text-black transition-all" onClick={() => triggerDownload(pack)} disabled={downloadingPack === pack.id}>
                                {downloadingPack === pack.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                                Generate Master Engine
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
