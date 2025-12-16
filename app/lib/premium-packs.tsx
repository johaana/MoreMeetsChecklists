
import React from "react";
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link as LinkIcon, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Package, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, SprayCan, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, Film, AnchorIcon, Clapperboard, MonitorPlay, Tv, Library, BriefcaseBusiness, ShieldCheck, Handshake, Route, CalendarDays, ClipboardList, HelpingHand, Map, DramaIcon, UserRound, Sparkles, Scale, Code, Video, Zap, ScanFace, HandPlatter, Cog, Scissors, Eye, Fish, Cloud, Theater, Search, TrendingUp, ClipboardCheck, UserPlus, Coins, Mail } from "lucide-react";

export type Checklist = {
    title: string;
    department: string;
    frequency: string;
    role: string;
    summary: string;
    icon: React.ElementType;
    tasks: {
        id: string;
        description: string;
        priority: 'High' | 'Medium' | 'Low';
        riskLevel: 'High' | 'Medium' | 'Low';
        consequence: string;
        proof: string;
        location: string;
        frequency?: string;
        department?: string;
        role?: string;
    }[];
};

export type PreviewScenario = {
    title: string;
    description: string;
    tasks: {
        id: string;
        description: string;
        sourceChecklist: string;
        priority: 'High' | 'Medium' | 'Low';
    }[];
};


export type PremiumPack = {
    id: string;
    title: string;
    priceINR: number;
    priceUSD?: number;
    competitorPriceUSD?: number;
    paymentId: string;
    lemonSqueezyUrl?: string;
    listId?: number; // Brevo List ID
    category: "Hospitality" | "Corporate & Tech" | "Retail" | "Healthcare" | "Education" | "Industrial & Transport" | "Entertainment & Events" | "Social Cause" | "Real Estate" | "Compliance" | "Wellness & Beauty" | "Agriculture" | "Specialized Production" | "Food & Beverage" | "Franchise";
    description: string;
    icon: React.ElementType;
    badgeText?: string;
    badgeVariant?: "default" | "secondary" | "destructive" | "outline" | "accent";
    sampleItems: { text: string; icon: React.ReactElement; }[];
    whoIsItFor: string[];
    previewScenario?: PreviewScenario;
    checklists: Checklist[];
    globalStandards?: {
        title: string;
        standards: { name: string; description: string; }[];
    };
    bestseller?: boolean;
}

export const premiumPacks: PremiumPack[] = [
    {
        id: 'animal_shelter_pack',
        title: "Animal Shelter Operations Pack",
        priceINR: 0,
        priceUSD: 0,
        paymentId: '',
        lemonSqueezyUrl: '',
        listId: 7,
        category: "Social Cause",
        description: "A comprehensive toolkit for animal shelters and NGOs to ensure animal welfare, disease prevention, and operational efficiency.",
        icon: PawPrint,
        badgeText: "Free Download",
        badgeVariant: "accent",
        whoIsItFor: ["Animal Shelter Managers", "NGO Founders", "Veterinarians", "Volunteer Coordinators"],
        sampleItems: [
            { text: "Prevent disease outbreaks with rigorous cleaning, disinfection, and quarantine protocols.", icon: <Sparkles /> },
            { text: "Ensure every animal's health with checklists for daily feeding, medication administration, and health monitoring.", icon: <Stethoscope /> },
            { text: "Manage your population responsibly with SOPs for intake, vaccination, and spay/neuter programs.", icon: <Syringe /> },
            { text: "Create a safe environment for animals and people with protocols for temperament testing and safe handling.", icon: <Users /> },
            { text: "Increase adoptions with a structured process for counseling, home checks, and post-adoption follow-up.", icon: <Home /> },
            { text: "Streamline your operations with checklists for volunteer management, inventory, and fundraising events.", icon: <ClipboardList /> }
        ],
        checklists: []
    },
];
