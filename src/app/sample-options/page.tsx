
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowLeft, Check, Download, Eye, FileText, AlertTriangle, Shield, HeartPulse } from 'lucide-react';
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
import { Badge } from '@/components/ui/badge';


const sampleScenario = {
  title: "Responding to a Medical Emergency in a Guest Room",
  description: "This high-stakes scenario shows how checklists for First Aid, Emergency Response, and Guest Communication work together to manage a critical incident, ensuring guest safety and limiting liability.",
  tasks: [
    { id: 'ER-001', description: "Upon notification, dispatch the on-duty manager and a certified first-aider to the guest's room immediately.", sourceChecklist: "Emergency Response Protocol", priority: 'High' as 'High' | 'Medium' | 'Low' },
    { id: 'FA-005', description: "Assess the patient's consciousness and breathing (ABC). Do not move the patient unless the scene is unsafe.", sourceChecklist: "First Aid Response", priority: 'High' as 'High' | 'Medium' | 'Low' },
    { id: 'SEC-012', description: "Have security clear a path for emergency medical services from the hotel entrance to the guest's room.", sourceChecklist: "Security Operations", priority: 'High' as 'High' | 'Medium' | 'Low' },
    { id: 'GC-007', description: "Log all actions and communications taken during the incident in the hotel's official incident report log.", sourceChecklist: "Guest Communication", priority: 'High' as 'High' | 'Medium' | 'Low' }
  ]
};

const sampleChecklists = [
    {
        title: "Kitchen Opening Checklist (HACCP)",
        icon: <FileText className="w-5 h-5 text-primary" />,
        tasks: [
            "Verify all food prep surfaces are sanitized.",
            "Check and log temperatures of all refrigerators and freezers.",
            "Ensure handwashing stations are fully stocked.",
        ]
    },
    {
        title: "Fire & Life Safety Audit",
        icon: <Shield className="w-5 h-5 text-primary" />,
        tasks: [
            "Physically walk all emergency exit routes to ensure they are unobstructed.",
            "Test emergency lighting and exit signs.",
            "Inspect fire extinguishers for charge, date, and accessibility."
        ]
    },
     {
        title: "Guest Room Preventive Maintenance",
        icon: <HeartPulse className="w-5 h-5 text-primary" />,
        tasks: [
            "Check for and clean HVAC filters.",
            "Test all electronic devices including TV, remote, and lamps.",
            "Inspect plumbing for any leaks in the bathroom."
        ]
    }
];


const OptionA = () => (
    <Card className="opacity-50">
        <CardHeader>
            <CardTitle>Option A: Direct Download Button</CardTitle>
            <CardDescription>Simple, but takes the user out of the purchase flow. Generally not recommended as it increases friction.</CardDescription>
        </CardHeader>
        <CardContent>
            <Button className="w-full" disabled>
                <Download className="mr-2 h-4 w-4" />
                Download Sample
            </Button>
        </CardContent>
    </Card>
);

const OptionB = () => (
    <Card className="border-2 border-accent shadow-lg">
        <CardHeader>
            <CardTitle>Option B: High-Stakes Scenario (Modal)</CardTitle>
            <CardDescription>Keeps the user on the page and uses a compelling, story-driven scenario to demonstrate the pack's value in solving critical problems. Highly recommended.</CardDescription>
        </CardHeader>
        <CardContent>
            <AlertDialog>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-2 text-sm">Button Style Options:</h4>
                        <div className="space-y-2">
                             <AlertDialogTrigger asChild>
                                <Button variant="outline" className="w-full">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Preview Scenario (Outline - Subtle)
                                </Button>
                            </AlertDialogTrigger>
                             <AlertDialogTrigger asChild>
                                <Button variant="secondary" className="w-full">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Preview Scenario (Secondary - Balanced)
                                </Button>
                            </AlertDialogTrigger>
                             <AlertDialogTrigger asChild>
                                <Button variant="accent" className="w-full">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Preview Scenario (Accent - High Visibility)
                                </Button>
                            </AlertDialogTrigger>
                        </div>
                    </div>
                </div>

                <AlertDialogContent className="max-w-4xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="font-headline flex items-center gap-3">
                            <AlertTriangle className="w-6 h-6 text-destructive" />
                            Scenario: {sampleScenario.title}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            {sampleScenario.description}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <ScrollArea className="max-h-[60vh] pr-6">
                        <div className="text-sm text-muted-foreground mt-2 mb-4">The full checklist pack contains dozens of such integrated protocols. This is just a sample of how they work together.</div>
                        <Table className="mt-4 border rounded-lg">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Critical Task</TableHead>
                                    <TableHead>Source Checklist</TableHead>
                                    <TableHead>Priority</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sampleScenario.tasks.map((task) => (
                                    <TableRow key={task.id}>
                                        <TableCell className="font-medium">{task.description}</TableCell>
                                        <TableCell className="text-muted-foreground">{task.sourceChecklist}</TableCell>
                                        <TableCell>
                                            <Badge variant={task.priority === 'High' ? 'destructive' : 'secondary'}>
                                                {task.priority}
                                            </Badge>
                                        </TableCell>
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
            <CardTitle>Option C: Inline Accordion Preview</CardTitle>
            <CardDescription>Shows a "taste" of several different checklists directly on the page. Good for showing the breadth of the pack's content without leaving the page.</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Here are a few sample tasks from three of the 50+ checklists included in this pack:</p>
            <Accordion type="single" collapsible className="w-full">
                {sampleChecklists.map((checklist, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>
                            <div className="flex items-center gap-3">
                                {checklist.icon}
                                <span className="text-left font-semibold">{checklist.title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                           <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
                                {checklist.tasks.map((task, taskIndex) => (
                                    <li key={taskIndex}>{task}</li>
                                ))}
                                <li className="font-semibold text-foreground/80">...and 12 more tasks.</li>
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </CardContent>
    </Card>
);

const OptionD = () => (
    <Card className="opacity-60">
        <CardHeader>
            <CardTitle>Option D: Tabbed Interface</CardTitle>
            <CardDescription>Organizes details into tabs. This can hide the sample content behind an extra click, which may reduce engagement.</CardDescription>
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
                        <li>50+ Comprehensive Checklists</li>
                        <li>Over 800 Actionable Tasks</li>
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
                         <li>...and 10 more tasks.</li>
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
                               Here are different ways we can showcase a sample of the checklist pack content to users before they purchase. The content has been updated to reflect more compelling, scenario-based samples.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <OptionB />
                            <OptionC />
                            <OptionD />
                            <OptionA />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
