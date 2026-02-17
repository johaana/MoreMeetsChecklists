export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  author: string;
  tags: string[];
  relatedPackId?: string;
  content: string;
  imageUrl?: string;
  imageHint?: string;
};

export const blogPosts: BlogPost[] = [
    {
      slug: 'if-your-best-employee-resigns-tomorrow',
      title: "The Day the Process Left With Him",
      publishedDate: "2026-02-16",
      author: "MoreMeets Editorial",
      tags: ["Operations", "Risk Management", "HR", "Institutional Memory"],
      description: "When Raj resigned after eight years, the business thought they were losing a person. They were actually losing the system itself.",
      imageUrl: "https://i.postimg.cc/QdPDF1XM/resignation1.jpg",
      imageHint: "office worker resignation",
      content: `
        <p class="lead text-xl font-medium text-foreground">When Raj resigned, nothing seemed wrong. He had been the operations manager for eight years. He knew the vendors. He handled inspections calmly. He always “just knew” what to check before audits.</p>
        
        <p>There was a 120-page SOP manual in the shared drive. Everyone believed the system was safe. But three months later, the first inspection happened without him. Two temperature logs were incomplete. A compliance file was outdated. A cleaning schedule had gaps. No one knew the specific escalation procedure he used to follow.</p>

        <div class="my-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img src="https://i.postimg.cc/pL7vmzPw/resignation2.webp" alt="The breakdown of tribal knowledge" class="w-full h-auto object-cover" />
          <div class="p-4 bg-secondary/10 text-xs italic text-muted-foreground text-center">
            Figure 1: The "Tribal Knowledge" Trap — When process discipline exists only in the mind of an individual.
          </div>
        </div>

        <h3 class="text-2xl font-bold mt-12 mb-6 font-headline text-primary">Personality is Not a System</h3>
        <p>The audit report wasn’t catastrophic — but it wasn’t clean either. And suddenly the leadership team realized something uncomfortable: <strong>The real process had lived inside Raj.</strong></p>
        
        <p>Across industries, turnover has remained elevated since 2022. Gallup continues to report disengagement levels that directly correlate with resignations. Most companies calculate the cost of replacing an employee (recruitment, onboarding), but few calculate the cost of losing <strong>operational knowledge.</strong></p>

        <div class="p-8 my-12 bg-primary/5 border border-primary/20 rounded-2xl space-y-4">
          <h4 class="text-lg font-bold text-primary">Secure Your Institutional Memory</h4>
          <p class="text-sm leading-relaxed">Don't let your standards leave with your staff. Capturing tribal knowledge into structured, executable frameworks is an insurance policy for your growth.</p>
          <div class="flex flex-wrap gap-4 pt-2">
            <a href="/library" class="text-xs font-black uppercase tracking-widest text-accent hover:underline flex items-center gap-2">
              Browse All Standards <ArrowRight class="w-3 h-3"/>
            </a>
            <a href="/packs/facility_management_blueprint" class="text-xs font-black uppercase tracking-widest text-accent hover:underline">
              Facility Mgmt Blueprint
            </a>
          </div>
        </div>

        <h3 class="text-2xl font-bold mt-12 mb-6 font-headline text-primary text-right">The Real Question</h3>
        <p class="text-right">If your most experienced employee resigns tomorrow — will your standards remain identical next month? Or will they drift? Operational fragility is optional. Structure is permanent.</p>
      `
    },
    {
      slug: 'the-25-million-temperature-lesson',
      title: "The $25 Million Lesson in a Missed Step",
      publishedDate: "2026-02-16",
      author: "MoreMeets Editorial",
      tags: ["Food Safety", "Restaurants", "Compliance", "F&B"],
      relatedPackId: "restaurants",
      description: "How a breakdown in consistent process execution cost one of the world's biggest brands $25 million.",
      imageUrl: "https://i.postimg.cc/NjLYGpvy/chipotle1.jpg",
      imageHint: "commercial kitchen inspection",
      content: `
        <p class="lead text-xl font-medium">In 2015, customers at several Chipotle locations began reporting illness. Within months, over 1,100 people were affected across multiple states. Stores were closed. Investigations began. The brand’s stock dropped significantly.</p>
        
        <p>In 2020, the company agreed to pay a $25 million federal fine related to food safety violations — one of the largest ever in a food safety case. The issue wasn’t lack of food safety knowledge. <strong>It was a breakdown in consistent process execution.</strong></p>

        <div class="my-12">
          <img src="https://i.postimg.cc/MpXxZdJf/chipotle2.png" alt="The cost of operational drift" class="rounded-3xl shadow-xl w-full h-auto" />
          <p class="mt-4 text-xs text-muted-foreground text-center italic">Documented Failure: When daily logs become "ticking exercises" rather than safety controls.</p>
        </div>

        <h3 class="text-2xl font-bold mt-12 mb-6 font-headline text-primary">How Outbreaks Really Begin</h3>
        <p>Food safety failures rarely start dramatically. They begin quietly: a temperature log skipped during a busy shift, a refrigeration check assumed complete, or a cleaning checklist signed without verification.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div class="space-y-4">
            <img src="https://i.postimg.cc/g2rdcNb6/chipotle3.jpg" alt="Kitchen safety check" class="rounded-xl shadow-md w-full h-auto" />
            <p class="text-[10px] text-muted-foreground uppercase font-black">Control Point: Temperature Verification</p>
          </div>
          <div class="space-y-4">
            <p class="text-sm italic border-l-4 border-primary pl-6 py-4 bg-secondary/5">"In food operations, even a small temperature deviation — just a few degrees — can accelerate bacterial growth. When daily logs are not assigned clear ownership, they become routine paperwork. And routine paperwork becomes complacency."</p>
          </div>
        </div>

        <div class="p-8 my-12 bg-authority-green/5 border border-authority-green/20 rounded-2xl">
          <h4 class="text-lg font-bold text-authority-green mb-2">Protect Your Food Operations</h4>
          <p class="text-sm mb-6">Implement HACCP-aligned daily controls that turn "good intentions" into verifiable, audit-ready actions.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/packs/restaurants" class="p-4 bg-background rounded-lg border hover:border-primary transition-all text-xs font-bold text-center uppercase tracking-tighter">Restaurant Ops Pack</a>
            <a href="/packs/food_manufacturing_ops" class="p-4 bg-background rounded-lg border hover:border-primary transition-all text-xs font-bold text-center uppercase tracking-tighter">Food Manufacturing Ops</a>
          </div>
        </div>

        <h3 class="text-2xl font-bold mt-12 mb-6 font-headline text-primary">Policy vs. Protection</h3>
        <p>Many restaurants have HACCP frameworks. But HACCP on paper is not protection. Protection comes from defined responsibility, daily discipline, escalation clarity, and evidence retention. Food safety is not about avoiding fines; it’s about preventing harm.</p>
      `
    },
    {
      slug: 'a-door-plug-at-16000-feet',
      title: "A Door Plug at 16,000 Feet: The Sacred Checklist",
      publishedDate: "2026-02-16",
      author: "MoreMeets Editorial",
      tags: ["Manufacturing", "Aviation", "Safety", "EHS"],
      relatedPackId: "manufacturing_operations_ehs_pack",
      description: "Aviation is the gold standard for operational discipline. What happens when those layers of verification weaken?",
      imageUrl: "https://i.postimg.cc/C5RcrmXp/boeing-door-plug.avif",
      imageHint: "aircraft manufacturing safety",
      content: `
        <p class="lead text-xl font-medium">In early 2024, Alaska Airlines Flight 1282 experienced a mid-air incident when a door plug detached from a Boeing 737 MAX 9 shortly after takeoff. The aircraft made an emergency landing. Passengers survived. The aviation world froze.</p>
        
        <p>Investigations pointed toward issues in assembly and verification processes. In aviation, checklists are sacred. And yet, when verification layers weaken, even highly regulated industries experience failure.</p>

        <div class="my-12 p-1 bg-white/5 rounded-3xl">
           <img src="https://i.postimg.cc/C5RcrmXp/boeing-door-plug.avif" alt="Boeing 737 MAX 9 door plug incident" class="rounded-[calc(1.5rem-4px)] w-full h-auto" />
        </div>

        <h3 class="text-2xl font-bold mt-12 mb-6 font-headline text-primary">The Logic of the 101st Time</h3>
        <p>Manufacturing plants skip routine inspections during busy periods. Retail stores bypass reconciliation checks during peak sales. The logic is always the same: <em>“We’ve done this a hundred times.”</em> But the hundred-and-first time is the one that matters.</p>
        
        <div class="my-12 p-8 border-y border-white/10 bg-alternate-background text-center">
          <p class="text-xl font-bold text-foreground">The Cost of Missing One Verification:</p>
          <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-6 text-xs font-black uppercase text-red-500 tracking-widest">
            <span>Fines</span> <span>Brand Erosion</span> <span>Regulatory Scrutiny</span> <span>Lawsuits</span> <span>Trust Loss</span>
          </div>
        </div>

        <h3 class="text-2xl font-bold mt-12 mb-6 font-headline text-primary text-center">Operational Resilience is Structural</h3>
        <p class="text-center max-w-2xl mx-auto">As operations grow more complex, the organizations that survive turbulence are not the smartest—they are the most systemized. Because memory is not a safeguard. Structure is.</p>

        <div class="mt-12 flex justify-center">
          <Button asChild size="lg" variant="accent" class="h-16 px-10">
            <a href="/packs/manufacturing_operations_ehs_pack">Deploy Manufacturing Standards <ArrowRight class="ml-2 w-5 h-5"/></a>
          </Button>
        </div>
      `
    },
    {
      slug: 'patient-safety-process-discipline',
      title: "Patient Safety Isn’t About Policy — It’s About Discipline",
      publishedDate: "2026-02-16",
      author: "MoreMeets Editorial",
      tags: ["Healthcare", "Patient Safety", "Clinical Quality", "SOPs"],
      relatedPackId: "healthcare_and_hospital_operations",
      description: "Hospitals don't lack policies. They lack execution consistency. A deep dive into clinical quality.",
      imageUrl: "https://i.postimg.cc/HkKmrXTf/patient-safety1.jpg",
      imageHint: "healthcare surgical team",
      content: `
        <p class="lead text-xl font-medium">Walk into any modern hospital and you’ll find a library of clinical policies. But if you look at the incident reports, the same 'never events' recur: medication errors, misidentified patients, and surgical site infections.</p>
        
        <p>The gap isn't in the <em>what</em> (the policy). It's in the <em>how</em> (the process discipline). In high-stakes environments, the difference between a successful outcome and a sentinel event is often a single, skipped verification step.</p>

        <div class="my-12">
          <img src="https://i.postimg.cc/7Zc450qj/patient-safety-2.webp" alt="Surgical safety checklist in use" class="rounded-2xl shadow-lg w-full h-auto" />
          <p class="mt-4 text-[10px] text-muted-foreground text-center uppercase font-black tracking-widest">Critical Layer: The Pre-Incision "Time Out"</p>
        </div>

        <h3 class="text-2xl font-bold mt-12 mb-6 font-headline text-primary">The 'Checklist Manifesto' in Action</h3>
        <p>Dr. Atul Gawande famously demonstrated that a simple 19-item checklist could reduce surgical deaths by nearly half. It wasn't that the surgeons didn't know their craft. It was that the complexity of modern medicine exceeds the capacity of the human brain to remember every step, every time, under pressure.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 items-center">
          <div>
            <p class="text-sm leading-relaxed text-secondary-text">One nurse double-checks. Another assumes. One supervisor escalates. Another postpones. When processes aren’t embedded structurally, outcomes depend on personality. <strong>And personality is not a system.</strong></p>
          </div>
          <img src="https://i.postimg.cc/rwbTDxqf/patient-safety3.jpg" alt="Clinical monitoring" class="rounded-xl shadow-md w-full h-auto opacity-80" />
        </div>

        <div class="p-8 my-12 bg-destructive/5 border border-destructive/20 rounded-2xl text-center">
          <h4 class="text-lg font-bold text-destructive mb-2 uppercase tracking-tighter">Enforce Clinical Excellence</h4>
          <p class="text-sm mb-6">Reduce clinical errors and enforce patient safety step-by-step with NABH/JCI aligned toolkits.</p>
          <Button asChild variant="destructive">
            <a href="/packs/healthcare_and_hospital_operations">View Healthcare Operations Pack</a>
          </Button>
        </div>
      `
    },
    {
      slug: 'hidden-roi-of-sops',
      title: "The Hidden ROI of SOPs — More Than Just Compliance",
      publishedDate: "2026-02-16",
      author: "MoreMeets Editorial",
      tags: ["Business Value", "ROI", "Efficiency", "COOs"],
      relatedPackId: "facility_management_blueprint",
      description: "Why structured operations are not a 'compliance tax', but a high-yield profit center.",
      imageUrl: "https://i.postimg.cc/qvYrNypS/ROI.png",
      imageHint: "corporate financial growth",
      content: `
        <p class="lead text-xl font-medium">Most executives view SOPs as a 'compliance tax'—something required by regulators, but otherwise a drain on time. This is a fundamental misunderstanding of operational leverage.</p>
        
        <p>Structured operations are not a cost. They are an asset that pays dividends in training speed, audit readiness, and risk reduction. Think about the frantic week before a major audit. The overtime, the stress, the hunting for files. A business running on MoreMeets™ is <em>always</em> audit-ready.</p>

        <div class="my-12 grid md:grid-cols-2 gap-4">
          <img src="https://i.postimg.cc/dVXFhrJN/sop-benefits-illustrated.png" alt="SOP ROI Metrics" class="rounded-xl border border-white/10" />
          <img src="https://i.postimg.cc/L8hR4NFV/cost-of-no-sops-comparison.png" alt="Cost of failure vs cost of systems" class="rounded-xl border border-white/10" />
        </div>

        <h3 class="text-2xl font-bold mt-12 mb-6 font-headline text-primary">Training as a Profit Center</h3>
        <p>When you hire a new manager, how long does it take for them to be 100% effective? Without structured SOPs, it's months of 'shadowing' and tribal knowledge transfer. With MoreMeets™ toolkits, that time is slashed by 60%. That is direct payroll ROI.</p>
        
        <div class="p-8 my-12 bg-accent/5 border border-accent/20 rounded-2xl space-y-4">
          <h4 class="text-lg font-bold text-accent">Invest in Operational Assets</h4>
          <p class="text-sm">Stop paying the "Memory Tax." Build a business that runs on standards, not constant supervision.</p>
          <div class="flex gap-4">
            <a href="/library" class="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-black uppercase text-[10px] tracking-widest shadow-xl">Explore the Library</a>
          </div>
        </div>
      `
    }
];