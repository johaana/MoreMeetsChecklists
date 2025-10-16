
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowLeft, Check, Download, Eye, FileText } from 'lucide-react';
import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const sampleScenario = {
  title: "Executing a Flawless 5-Star Guest Check-In",
  description: "This scenario shows how different departments work together to create a seamless guest arrival experience. Here are a few key tasks from different checklists that make it happen:",
  tasks: [
    { id: 'FO-CI-002', description: "Verify the guest's identity with a valid government-issued ID proof.", sourceChecklist: "Guest Check-In Process", priority: 'High' as 'High' | 'Medium' | 'Low' },
    { id: 'HK-DRC-018', description: "Perform final inspection of the room before leaving.", sourceChecklist: "Daily Room Cleaning", priority: 'High' as 'High' | 'Medium' | 'Low' },
    { id: 'FO-DO-010', description: "Prepare detailed shift handover notes for the next team, highlighting any pending issues.", sourceChecklist: "Reception Daily Operations", priority: 'High' as 'High' | 'Medium' | 'Low' },
    { id: 'SEC-CSM-001', description: "Check that all CCTV cameras are operational and recording.", sourceChecklist: "CCTV & Security Monitoring", priority: 'High' as 'High' | 'Medium' | 'Low' }
  ]
};

const sampleChecklists = [
    {
        title: "Guest Check-In Process",
        tasks: [
            "Verify the guest's identity with a valid government-issued ID proof.",
            "Confirm booking details and room preferences.",
            "Secure a pre-authorization on the guest's credit card."
        ]
    },
    {
        title: "Daily Room Cleaning",
        tasks: [
            "Replenish all guest amenities and towels.",
            "Sanitize all high-touch surfaces (remotes, handles, switches).",
            "Perform final inspection of the room before leaving."
        ]
    },
     {
        title: "CCTV & Security Monitoring",
        tasks: [
            "Check that all CCTV cameras are operational and recording.",
            "Review access logs for any unauthorized entry attempts.",
            "Report any suspicious activity to the security manager immediately."
        ]
    }
];


const OptionA = () => (
    <Card>
        <CardHeader>
            <CardTitle>Option A: Direct Download Button</CardTitle>
            <CardDescription>A simple button that initiates a download of a sample PDF or Excel file. It's direct, but takes the user out of the browser flow.</CardDescription>
        </CardHeader>
        <CardContent>
            <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Sample
            </Button>
        </CardContent>
    </Card>
);

const OptionB = () => (
    <Card>
        <CardHeader>
            <CardTitle>Option B: Modal Dialog Preview</CardTitle>
            <CardDescription>Keeps the user on the page by showing a preview in a pop-up dialog. This is the pattern currently used for the 'previewScenario'.</CardDescription>
        </CardHeader>
        <CardContent>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        See a Sample
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-4xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="font-headline">Scenario: {sampleScenario.title}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {sampleScenario.description}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <ScrollArea className="max-h-[60vh] pr-6">
                        <Table className="mt-4 border rounded-lg">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Task Description</TableHead>
                                    <TableHead>Source Checklist</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sampleScenario.tasks.map((task) => (
                                    <TableRow key={task.id}>
                                        <TableCell>{task.description}</TableCell>
                                        <TableCell className="text-muted-foreground">{task.sourceChecklist}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ScrollArea>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Close Preview</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </CardContent>
    </Card>
);

const OptionC = () => (
    <Card>
        <CardHeader>
            <CardTitle>Option C: Inline Accordion</CardTitle>
            <CardDescription>Integrates the sample content directly into the page within collapsible accordion items. Good for SEO, but can make the page longer.</CardDescription>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full">
                {sampleChecklists.map((checklist, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-primary" />
                                <span className="text-left">{checklist.title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                           <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
                                {checklist.tasks.map((task, taskIndex) => (
                                    <li key={taskIndex}>{task}</li>
                                ))}
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </CardContent>
    </Card>
);

const OptionD = () => (
    <Card>
        <CardHeader>
            <CardTitle>Option D: Tabbed Interface</CardTitle>
            <CardDescription>Organizes full details and sample content into separate tabs. Clean look, but requires an extra click to see the sample.</CardDescription>
        </CardHeader>
        <CardContent>
             <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="details">Full Details</TabsTrigger>
                    <TabsTrigger value="sample">View Sample</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="p-4 border rounded-md mt-2">
                    <p className="font-semibold">This pack contains:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                        <li>8 Comprehensive Checklists</li>
                        <li>Over 100 Actionable Tasks</li>
                        <li>Fully Editable Excel Format</li>
                        <li>Lifetime Updates</li>
                    </ul>
                </TabsContent>
                <TabsContent value="sample" className="p-4 border rounded-md mt-2">
                     <p className="font-semibold mb-2">Sample Tasks from "Guest Check-In":</p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Verify the guest's identity with a valid government-issued ID proof.</li>
                        <li>Confirm booking details and room preferences.</li>
                        <li>Secure a pre-authorization on the guest's credit card.</li>
                    </ul>
                </TabsContent>
            </Tabs>
        </CardContent>
    </Card>
);


export default function SampleOptionsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1 py-12">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                             <Button variant="ghost" asChild>
                                <Link href="/packs/hotels_and_resorts">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Pack Page
                                </Link>
                            </Button>
                        </div>
                        <div className="text-center mb-12">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
                                Sample/Preview UI Options
                            </h1>
                            <p className="mt-4 text-muted-foreground md:text-lg">
                                Here are different ways we can showcase a sample of the checklist pack content to users before they purchase.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <OptionA />
                            <OptionB />
                            <OptionC />
                            <OptionD />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
