import React from 'react';
import { BookOpen, CheckCircle, ShieldCheck, Zap } from "lucide-react";

export const philosophyCards = [
    { icon: <Zap className="w-8 h-8 text-accent"/>, title: "One-Time Purchase, Lifetime Value", children: "No subscriptions. No recurring fees. You buy a pack once and own it forever, including all future updates. We believe in empowering you, not trapping you in a billing cycle." },
    { icon: <BookOpen className="w-8 h-8 text-accent"/>, title: "Excel-Ready, Not SaaS-Locked", children: "We deliver our toolkits in universally accessible, fully editable Excel files. You have complete control to adapt them to your needs without being locked into proprietary software." },
    { icon: <ShieldCheck className="w-8 h-8 text-accent"/>, title: "Globally Compliant, Locally Relevant", children: "Every checklist is mapped to global standards like ISO, HACCP, and OSHA, but built with a practical understanding of the challenges real businesses face on the ground." },
    { icon: <CheckCircle className="w-8 h-8 text-accent"/>, title: "More Than Templates, They're Systems", children: "Free templates are generic. Our packs are comprehensive operational systems, including Trainer's Notes for on-the-job coaching, turning checklists into powerful training tools." }
];
