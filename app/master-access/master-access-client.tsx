'use client';

import * as React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { handleDownload } from '@/lib/download';
import { allPacks } from '@/lib/packs/all_packs';
import { Download, KeyRound, Loader2 } from 'lucide-react';
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
            setError('Incorrect password. Please try again.');
        }
        setIsVerifying(false);
    };

    const triggerDownload = (pack: PremiumPack) => {
        setDownloadingPack(pack.id);
        try {
            handleDownload(pack, 'pack');
             toast({
                title: "Download Started",
                description: `Your download for "${pack.title}" has started.`,
            });
        } catch (err) {
             toast({
                variant: "destructive",
                title: "Download Failed",
                description: `Could not download "${pack.title}". Please try again.`,
            });
        } finally {
            setTimeout(() => setDownloadingPack(null), 1000);
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary"><KeyRound className="w-5 h-5"/> Admin Access</CardTitle>
                        <CardDescription>Enter the master password to access all operational toolkits.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <Input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <p className="text-sm text-destructive font-medium">{error}</p>}
                            <Button type="submit" className="w-full" disabled={isVerifying} variant="accent">
                                {isVerifying && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Unlock Master Access
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }
    
    const validPacks = allPacks.filter(p => p.id !== 'master_access' && p.checklists.length > 0 && !(p.checklists.length === 1 && p.checklists[0].title.includes("Placeholder")));

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                <div>
                    <h1 className="text-3xl font-bold font-headline text-primary">Master Download Portal</h1>
                    <p className="text-muted-foreground mt-1">Direct access to the entire MoreMeets™ library.</p>
                </div>
                <Badge variant="outline" className="w-fit h-fit">Authenticated Session</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {validPacks.map(pack => (
                    <Card key={pack.id} className="flex flex-col border-2 border-transparent hover:border-primary/20 transition-all shadow-sm hover:shadow-md">
                        <CardHeader>
                            <CardTitle className="text-lg">{pack.title}</CardTitle>
                            <CardDescription>{pack.category}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-xs space-y-1 text-muted-foreground">
                                <p>{pack.checklists.length} Checklists</p>
                                <p>{pack.checklists.reduce((acc, c) => acc + c.tasks.length, 0)} Professional Tasks</p>
                            </div>
                        </CardContent>
                        <CardContent className="pt-0">
                           <Button 
                                variant="secondary"
                                className="w-full font-bold" 
                                onClick={() => triggerDownload(pack)}
                                disabled={downloadingPack === pack.id}
                            >
                                {downloadingPack === pack.id ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <Download className="mr-2 h-4 w-4" />
                                )}
                                Download .xlsx
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}