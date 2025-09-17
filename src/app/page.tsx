

'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Logo } from "@/components/icons";
import { premiumPacks, PremiumPack } from "@/lib/premium-packs";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/lib/testimonials";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { writeFile, utils, WorkSheet } from 'xlsx-js-style';


const heroImage = PlaceHolderImages.find(img => img.id === "showcase-emirates-palace");

const handleDownload = (pack: PremiumPack) => {
    const workbook = utils.book_new();

    const headerStyle = {
      font: { bold: true, color: { rgb: "FFFFFF" } },
      fill: { fgColor: { rgb: "0A2540" } }
    };
    
    const priorityColors: { [key:string]: {rgb: string} } = {
        'High': { rgb: "F8BBD0" },   // Light Pink
        'Medium': { rgb: "FFE0B2" }, // Light Orange
        'Low': { rgb: "C8E6C9" },    // Light Green
    };

    const riskLevelColors: { [key:string]: {rgb: string} } = {
        'High': { rgb: "FFAB91" },   // Light Red-Orange
        'Medium': { rgb: "FFE0B2" }, // Light Orange
        'Low': { rgb: "A5D6A7" },    // Muted Green
    };

    const applyStylesAndFilter = (ws: WorkSheet, data: any[][]) => {
        if(!data || data.length === 0) return;
        
        const range = utils.decode_range(ws['!ref']!);
        ws['!autofilter'] = { ref: utils.encode_range(range) };
        ws['!views'] = [{state: 'frozen', ySplit: 1}];

        const headers = data[0];
        const priorityColIndex = headers.indexOf('Priority');
        const riskLevelColIndex = headers.indexOf('Risk Level');

        for (let R = 1; R < data.length; ++R) {
            const row = data[R];
            
            if (priorityColIndex !== -1) {
                const priorityValue = row[priorityColIndex] as string;
                if (priorityColors[priorityValue]) {
                    const cellAddress = utils.encode_cell({r: R, c: priorityColIndex});
                    if (!ws[cellAddress]) ws[cellAddress] = { t: 's', v: priorityValue };
                    ws[cellAddress].s = { fill: { fgColor: priorityColors[priorityValue] } };
                }
            }
            if (riskLevelColIndex !== -1) {
                const riskLevelValue = row[riskLevelColIndex] as string;
                if (riskLevelColors[riskLevelValue]) {
                    const cellAddress = utils.encode_cell({r: R, c: riskLevelColIndex});
                    if (!ws[cellAddress]) ws[cellAddress] = { t: 's', v: riskLevelValue };
                    ws[cellAddress].s = { fill: { fgColor: riskLevelColors[riskLevelValue] } };
                }
            }
        }
    };

    // Master Sheet
    const masterHeaders = [
      'Checklist', 'Department', 'Frequency', 'Role Responsible', 
      'Task ID', 'Task', 'Priority', 'Risk Level', 'Proof / Evidence', 
      'Location / Site', 'Status'
    ];
    
    const masterSheetData = pack.checklists.flatMap(checklist => 
        checklist.tasks.map(task => [
            checklist.title,
            checklist.department,
            checklist.frequency,
            checklist.role,
            task.id,
            task.description,
            task.priority,
            task.riskLevel,
            task.proof,
            task.location,
            'Pending'
        ])
    );
    
    const masterDataWithHeader = [masterHeaders, ...masterSheetData];
    const masterWorksheet = utils.aoa_to_sheet(masterDataWithHeader.map((row, r_idx) => {
        return row.map((cell, c_idx) => {
            if (r_idx === 0) return { v: cell, t: 's', s: headerStyle };
            return cell;
        })
    }));
    
    applyStylesAndFilter(masterWorksheet, masterDataWithHeader);

    masterWorksheet['!cols'] = [
        { wch: 40 }, { wch: 20 }, { wch: 15 }, { wch: 20 }, { wch: 15 }, 
        { wch: 60 }, { wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 20 }, { wch: 15 },
    ];
    utils.book_append_sheet(workbook, masterWorksheet, "Master View");

    // Individual Checklists
    pack.checklists.forEach(checklist => {
        const checklistHeaders = [
          'Task ID', 'Task', 'Priority', 'Risk Level', 
          'Proof / Evidence', 'Status', 'Assigned To', 'Notes'
        ];
        
        const tasksForSheet = checklist.tasks.map(task => [
          task.id,
          task.description,
          task.priority,
          task.riskLevel,
          task.proof,
          'Pending',
          '',
          ''
        ]);

        const checklistDataWithHeader = [checklistHeaders, ...tasksForSheet];
        
        const worksheet = utils.aoa_to_sheet(checklistDataWithHeader.map((row, r_idx) => {
            return row.map((cell) => {
                if (r_idx === 0) return { v: cell, t: 's', s: headerStyle };
                return cell;
            })
        }));
        
        applyStylesAndFilter(worksheet, checklistDataWithHeader);
        
        worksheet['!cols'] = [
          { wch: 15 }, { wch: 50 }, { wch: 15 }, { wch: 15 }, 
          { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 30 }
        ];
        
        const sheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
        utils.book_append_sheet(workbook, worksheet, sheetName);
    });

    writeFile(workbook, `${pack.title.replace(/ /g, '_')}.xlsx`);
}


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link href="#packs" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Packages
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Why Us
            </Link>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#packs" prefetch={false}>
                    Get Started
                </Link>
            </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full relative">
            <div className="absolute inset-0 z-10 bg-black/50" />
             {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt="Luxury Hotel"
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="container px-4 md:px-6 relative z-20">
                <div className="flex flex-col items-center justify-center space-y-4 text-center min-h-[60vh] lg:min-h-[80vh]">
                <div className="space-y-4">
                    <Badge variant="outline" className="py-2 px-4 rounded-full text-sm font-semibold border-accent/50 text-accent-foreground bg-accent/20 backdrop-blur-sm">
                        Trusted by Professionals in 12+ Industries
                    </Badge>
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white drop-shadow-md">
                        The Professional Standard for Compliance & Operations Checklists
                    </h1>
                    <p className="max-w-[700px] text-white/90 md:text-xl/relaxed mx-auto drop-shadow-sm">
                        Meet More Standards & Compliance. Our professional-grade checklists help you meet and exceed standards, guarantee quality, and turn operational excellence into your competitive advantage.
                    </p>
                    <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-7 px-10">
                        <Link href="#packs">Browse Packages</Link>
                    </Button>
                </div>
                </div>
            </div>
        </section>

        <section id="packs" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Ready-to-Use, Downloadable Checklists
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Get instant access to expert-crafted operational playbooks. One-time purchase, lifetime access. Downloadable in PDF, Excel, and more.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {premiumPacks.map((pack) => (
                        <Card key={pack.id} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative border-2 border-transparent hover:border-primary">
                             {pack.mostPopular && (
                                <Badge className="absolute top-4 right-4 py-1 px-3 bg-accent text-accent-foreground font-bold z-10">
                                   <Star className="w-4 h-4 mr-2" /> Most Popular
                                </Badge>
                             )}
                            <CardHeader className="p-6">
                                <div className="flex items-start gap-4 mb-2">
                                    <div className="p-3 bg-primary/10 rounded-full border border-primary/20 shrink-0">
                                        {pack.icon}
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-headline">{pack.title}</CardTitle>
                                        <CardDescription className="mt-1">{pack.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-6 flex-1">
                                <p className="font-semibold text-sm mb-3 text-primary">WHAT'S INSIDE:</p>
                                <ul className="space-y-2 text-muted-foreground text-sm">
                                    {pack.sampleItems.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-4 w-4 mr-2 mt-1 shrink-0 text-primary/80"/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Accordion type="single" collapsible className="w-full mt-4">
                                  <AccordionItem value="item-1" className="border-b-0">
                                    <AccordionTrigger className="text-sm font-semibold hover:no-underline text-accent">View Full Checklist & Purchase</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="space-y-4 pt-4">
                                            <p className="font-semibold text-foreground">This pack includes the following checklists:</p>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-muted-foreground mt-2 text-sm space-y-1">
                                                {pack.checklists.map((checklist, index) => (
                                                    <li key={index}>{checklist.title}</li>
                                                ))}
                                            </ul>
                                            <div className="text-center pt-4">
                                                <p className="text-3xl font-bold text-primary whitespace-nowrap">
                                                    ${pack.priceUSD} / ₹{pack.priceINR}
                                                </p>
                                                <p className="text-xs text-muted-foreground">One-Time Purchase</p>
                                            </div>
                                            <Button size="lg" className="w-full font-bold bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => handleDownload(pack)}>
                                                Buy Now & Get Instant Access
                                            </Button>
                                        </div>
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>

                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Why Every Detail Matters
                    </h2>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <Card className="p-6 border-0 shadow-none bg-transparent">
                        <h3 className="text-xl font-bold font-headline mb-2">Prevent Costly Failures</h3>
                        <p className="text-muted-foreground">In business, one forgotten task—a missed permit, an uncalibrated machine, a security oversight—can lead to catastrophic financial loss and reputational damage.</p>
                    </Card>
                     <Card className="p-6 border-0 shadow-none bg-transparent">
                        <h3 className="text-xl font-bold font-headline mb-2">Standardize Excellence</h3>
                        <p className="text-muted-foreground">Our checklists are more than lists; they are expert-written Standard Operating Procedures (SOPs) that empower your team to perform flawlessly, every single time.</p>
                    </Card>
                     <Card className="p-6 border-0 shadow-none bg-transparent">
                        <h3 className="text-xl font-bold font-headline mb-2">Build Unshakeable Trust</h3>
                        <p className="text-muted-foreground">Whether it's a client, a customer, or a guest, demonstrating perfect execution and attention to detail is the ultimate way to build lasting trust and loyalty.</p>
                    </Card>
                </div>
            </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Loved by Professionals Worldwide
                    </h2>
                     <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Join over 5,000+ users who plan and operate with MoreMeets.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                         <Card key={testimonial.name} className="p-6 flex flex-col items-center text-center shadow-lg rounded-2xl">
                             <div className="mb-4 rounded-full overflow-hidden w-24 h-24">
                                {testimonial.imageId && (
                                    <Image
                                      src={PlaceHolderImages.find(img => img.id === testimonial.imageId)?.imageUrl || ''}
                                      alt={testimonial.name}
                                      width={100}
                                      height={100}
                                      className="object-cover"
                                      data-ai-hint={PlaceHolderImages.find(img => img.id === testimonial.imageId)?.imageHint || ''}
                                    />
                                )}
                             </div>
                            <CardContent className="p-0">
                                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>                            
                            </CardContent>
                             <CardFooter className="p-0 mt-4 flex-col">
                                 <p className="font-bold font-headline">{testimonial.name}</p>
                                 <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                             </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-16">
        <p className="text-xs text-muted-foreground">&copy; 2024 MoreMeets. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

    

    
