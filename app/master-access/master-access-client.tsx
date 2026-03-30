
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
            setError('Incorrect password. Access denied.');
        }
        setIsVerifying(false);
    };

    const triggerDownload = (pack: PremiumPack) => {
        setDownloadingPack(pack.id);
        try {
            // Ensure we use the latest Sovereign v5.8 engine logic
            handleDownload(pack, 'pack');
             toast({
                title: "Download Initiated",
                description: `Sovereign v5.8 Engine for "${pack.title}" is generating.`,
            });
        } catch (err) {
             toast({
                variant: "destructive",
                title: "Generation Failed",
                description: `Could not build "${pack.title}".`,
            });
        } finally {
            setTimeout(() => setDownloadingPack(null), 1000);
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
                <Card className="w-full max-w-sm border-primary/20 bg-black/40 backdrop-blur-md">
                    <CardHeader className="text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <KeyRound className="w-6 h-6 text-primary"/>
                        </div>
                        <CardTitle className="text-xl font-headline uppercase italic">Admin Gate</CardTitle>
                        <CardDescription>Master Access to the Sovereign Engine Library.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <Input
                                type="password"
                                placeholder="Enter master key"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-black/40 border-white/10"
                            />
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
    
    // Filter out the master access pack itself and ensure packs have content
    const validPacks = allPacks.filter(p => p.id !== 'master_access' && p.checklists && p.checklists.length > 0);

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 p-8 rounded-[2rem] bg-primary/5 border border-primary/10">
                <div className="space-y-2">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Administrative Command</Badge>
                    <h1 className="text-4xl font-black font-headline text-primary-text italic uppercase tracking-tighter">Master Download Portal</h1>
                    <p className="text-secondary-text font-medium italic border-l-2 border-primary/20 pl-6">Direct secure access to all Sovereign v5.8 Multi-Branch Operating Systems.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                        <p className="text-[10px] font-black uppercase text-white/20 tracking-widest">Session Status</p>
                        <p className="text-xs font-bold text-primary italic">ENCRYPTED & ACTIVE</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {validPacks.map(pack => (
                    <Card key={pack.id} className="flex flex-col border-white/5 bg-black/40 hover:border-primary/30 transition-all shadow-2xl group overflow-hidden">
                        <CardHeader className="pb-4">
                            <div className="flex justify-between items-start mb-4">
                                <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest text-white/40">{pack.category}</Badge>
                                <Database className="w-4 h-4 text-primary/40" />
                            </div>
                            <CardTitle className="text-xl font-headline italic uppercase tracking-tighter text-primary-text group-hover:text-primary transition-colors">{pack.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-4">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                                    <p className="text-xl font-black text-primary-text">{pack.checklists.length}</p>
                                    <p className="text-[8px] uppercase font-black tracking-widest text-white/20">Modules</p>
                                </div>
                                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                                    <p className="text-xl font-black text-primary-text">{pack.checklists.reduce((acc, c) => acc + c.tasks.length, 0)}</p>
                                    <p className="text-[8px] uppercase font-black tracking-widest text-white/20">Control Points</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-4 border-t border-white/5 bg-white/[0.02]">
                           <Button 
                                variant="ghost"
                                className="w-full h-12 font-black uppercase italic text-xs tracking-widest hover:bg-primary hover:text-black transition-all" 
                                onClick={() => triggerDownload(pack)}
                                disabled={downloadingPack === pack.id}
                            >
                                {downloadingPack === pack.id ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <Download className="mr-2 h-4 w-4" />
                                )}
                                Generate Sovereign v5.8
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
