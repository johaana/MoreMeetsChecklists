export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  protocol?: string;
  relatedPackId?: string;
  content: string;
  imageUrl?: string;
};

export const blogPosts: BlogPost[] = [
    {
      slug: 'what-monsoon-really-breaks-first',
      title: "What Monsoon Really Breaks First",
      publishedDate: "2025-03-01",
      author: "MoreMeets Editorial",
      tags: ["Facilities & MEP"],
      protocol: "Preventative Maintenance",
      relatedPackId: "facility_management_blueprint",
      description: "A forensic reconstruction of operational failure in heavy rain. Discover why monsoon breaks assumptions, not infrastructure.",
      imageUrl: "https://i.postimg.cc/CKgkhg9S/facilities-management1.png",
      content: `
        <section>
          <p class="lead font-black text-xl md:text-2xl text-primary mb-12 italic leading-relaxed">
            At 6:12 a.m., someone sent the first photo. A dark patch near the service entrance. Nothing urgent yet. Just water collecting where it shouldn’t.
          </p>
          
          <p>By 6:40, the kitchen had lifted dry stock off the lower racks. By 7:10, engineering had been called twice. By 8:00, the lobby had that smell — damp fabric, wet cardboard, something quietly going wrong.</p>
          
          <p>And by 10:30, everyone was saying the same thing: <em>“The rain is too much today.”</em> It almost never is.</p>

          <blockquote>
            "Monsoon doesn’t usually break buildings. It breaks assumptions."
          </blockquote>

          <h2>1. The Assumption Trap</h2>
          <p>The assumption that drains are clear. That the pump will start. That waterproofing still holds. That someone checked. That someone remembered.</p>
          
          <p>Hotels didn’t lose control because of rain. They lost it because basement checks weren’t done two days earlier. Restaurants didn’t struggle because deliveries stopped. They struggled because no one planned what happens <em>when</em> they stop.</p>
          
          <h2>2. Operational Audit</h2>
          <p>The best-run operations look almost boring in heavy rain. Drains cleared in advance. Backup tested under load. Stock moved early. Roles defined by shift. Escalations already assigned. No urgency. Just readiness.</p>

          <blockquote>
            "Monsoon is not a weather event. It is an operational audit."
          </blockquote>
          
          <p>Because when water starts entering the building, you are no longer preparing. You are already late. Did your team prepare — or just hope they’d remember?</p>
        </section>
      `
    },
    {
      slug: 'real-cost-of-one-person-calling-sick',
      title: "The Real Cost of One Person Calling in Sick",
      publishedDate: "2025-02-28",
      author: "MoreMeets Editorial",
      tags: ["Franchise & Leadership"],
      protocol: "Institutional Memory",
      relatedPackId: "franchise_operations_pack",
      description: "Exposing the hidden liability of memory-heavy operations. Why flu season breaks businesses that rely on heroes.",
      imageUrl: "https://i.postimg.cc/FK43r4w5/franchise-2.jpg",
      content: `
        <section>
          <p class="lead font-black text-xl md:text-2xl text-primary mb-12 italic leading-relaxed">
            The message usually comes early. Short. Apologetic. Familiar. “Not feeling well today. Won’t be able to come in.”
          </p>
          
          <p>Most teams absorb it. Someone covers. Someone adjusts. Someone says, <em>we’ll manage.</em> And for a few hours, they do. That is what makes flu season deceptive. The problem is not the absence. It is what disappears with it.</p>

          <blockquote>
            "They are not roles. They are memory carriers."
          </blockquote>

          <h2>1. Second-Order Failures</h2>
          <p>The supervisor who catches small misses. The chef who knows what gets skipped under pressure. These are memory carriers. When they vanish, sanitisation checks get rushed. Handoffs get thinner. Decisions slow down. Errors go unnoticed longer.</p>
          
          <p>Flu season doesn’t break teams. It exposes how much of the business was never systemised. Because a stable team can hide weak structure. Until it loses one person. And then another.</p>
          
          <h2>2. Operational Maturity</h2>
          <p>The teams that hold quality through illness are not the healthiest. They are the least dependent. Tasks are visible. Ownership is clear. Handoffs are defined. Substitutions are possible. Nothing critical disappears with one person. That is operational maturity.</p>
        </section>
      `
    },
    {
      slug: 'why-busy-nights-break-good-businesses',
      title: "Why Busy Nights Break Good Businesses",
      publishedDate: "2025-02-27",
      author: "MoreMeets Editorial",
      tags: ["Restaurant & F&B"],
      protocol: "Peak Performance",
      relatedPackId: "restaurants",
      description: "An immersive story on the pressure of peak season. Why coordination fails first and how systems remove variability.",
      imageUrl: "https://i.postimg.cc/cJSwxSPg/Restaurant-Standard-Operating-Procedures.png",
      content: `
        <section>
          <p class="lead font-black text-xl md:text-2xl text-primary mb-12 italic leading-relaxed">
            By 8:17 p.m., table 14 had been waiting 26 minutes. The bar had run out of clean glassware. One ticket had vanished somewhere between the POS and the pass.
          </p>
          
          <p>From the outside, it looked like a great night. Full house. Waitlist. Energy high. Inside, the margin for error was gone. This is what peak season actually does. It doesn’t create chaos. It removes recovery time.</p>

          <blockquote>
            "Peak performance is not about speed. It is about removing variability."
          </blockquote>

          <h2>1. The Compression Trap</h2>
          <p>On a normal night, small mistakes are invisible. A delay gets absorbed. On a busy night, the same mistake multiplies. A missed step becomes a visible failure. You just ran out of time to fix it. The pressure is not volume. It is compression.</p>
          
          <h2>2. Removing Variability</h2>
          <p>The best-run operations don’t “handle” peak season. They reduce what can go wrong before it starts. Menus get tighter. Prep gets simpler. Roles get clearer. Decisions get faster. Because in peak season, coordination breaks first.</p>
        </section>
      `
    },
    {
      slug: 'first-school-day-mistake-at-the-gate',
      title: "The First School-Day Mistake Usually Happens at the Gate",
      publishedDate: "2025-02-26",
      author: "MoreMeets Editorial",
      tags: ["School Operations"],
      protocol: "Perimeter Trust",
      relatedPackId: "school_operations_pack",
      description: "A deconstruction of trust and perimeter safety. Why arrival and dispersal shape parent perception.",
      imageUrl: "https://i.postimg.cc/GthjcC8T/school-safety.webp",
      content: `
        <section>
          <p class="lead font-black text-xl md:text-2xl text-primary mb-12 italic leading-relaxed">
            The first mistake of the school year rarely happens in a classroom. It happens outside. At the gate where two buses arrive too close together.
          </p>
          
          <p>Nothing dramatic. Just small misses in places most people don’t think of as “critical.” Until they are. Underneath the normalcy of the first week, everything is slightly unstable. Routes change. New students adjust. Parents are anxious.</p>

          <blockquote>
            "Schools are often judged not by teaching in the first week. But by how smoothly everything else works."
          </blockquote>

          <h2>1. The Fragility of Trust</h2>
          <p>A missed handoff becomes a worried parent. A delay becomes frustration. In this environment, small operational gaps become visible faster. Not because the school failed. Because trust is fragile early.</p>
          
          <h2>2. Operational Academic Systems</h2>
          <p>Arrival. Movement. Communication. Dispersal. These are not academic systems. They are operational ones. The schools that feel “in control” early are not doing anything dramatic. They are just reducing uncertainty. Clear processes. Visible ownership. Less dependence on memory.</p>
        </section>
      `
    },
    {
      slug: 'what-patients-notice-before-doctor',
      title: "What Patients Notice Before a Doctor Walks In",
      publishedDate: "2025-02-25",
      author: "MoreMeets Editorial",
      tags: ["Hospital & Clinical"],
      protocol: "Operational Confidence",
      relatedPackId: "healthcare_and_hospital_operations",
      description: "Healthcare editorial on building trust through operations. Why patient confidence is won or lost at the entrance.",
      imageUrl: "https://i.postimg.cc/rpkxVk7c/Hospital-Levels-of-Care.jpg",
      content: `
        <section>
          <p class="lead font-black text-xl md:text-2xl text-primary mb-12 italic leading-relaxed">
            Patients don’t begin judging a hospital when they meet the doctor. They begin much earlier. At the entrance. At the desk. In the way things move — or don’t.
          </p>
          
          <p>A slow registration. A missing file. A confused instruction. None of this is clinical. But it shapes everything that follows. Because before patients evaluate care, they evaluate control.</p>

          <blockquote>
            "To a patient, uncertainty is the real risk. And operations is what removes it."
          </blockquote>

          <h2>1. The Evaluation of Control</h2>
          <p>Does this place feel organised? Does it feel like someone is in charge? Healthcare systems often focus heavily on clinical excellence. But patient confidence is built operationally. In flow. In clarity. In coordination.</p>
          
          <h2>2. The Consistent Environment</h2>
          <p>A delayed consultation feels longer. A small error feels bigger. Not because the care is poor. Because the system around it feels unstable. The most trusted healthcare environments are not the most advanced. They are the most consistent. Processes are smooth. Handoffs are invisible.</p>
        </section>
      `
    },
    {
      slug: 'hospitality-training-forgetting-curve',
      title: "Hospitality Training Retention: Why Hotels Need Structured SOP Sheets",
      publishedDate: "2026-02-21",
      updatedAt: "2025-02-24",
      author: "MoreMeets Editorial",
      tags: ["Hotel & Resort Operations"],
      protocol: "Institutional Memory",
      relatedPackId: "hotels_and_resorts",
      description: "A technical debrief on the Ebbinghaus Forgetting Curve in hospitality. Why verbal training leads to 70% knowledge loss. Discover how Excel SOPs prevent operational drift.",
      imageUrl: "https://i.postimg.cc/cJSwxSP4/housekeeping-hotel-1.avif",
      content: `
        <section>
          <div class="bg-primary/10 border-l-4 border-primary p-6 mb-12 rounded-r-xl">
            <p class="text-primary font-black uppercase tracking-widest text-[10px] mb-2">Forensic Analysis: Cognitive Decay</p>
            <p class="text-secondary-text text-sm italic">"The greatest operational risk isn't a lack of effort: it is the predictable biological failure of human memory."</p>
          </div>
          
          <p class="lead font-black text-xl md:text-2xl text-primary mb-12 italic leading-relaxed">
            You spend weeks training a new housekeeper or front-desk agent. By next Tuesday, they’ve already forgotten 70% of it. This isn't a performance issue: it's an infrastructure failure.
          </p>
          
          <h2>1. The Science: The Ebbinghaus Forgetting Curve</h2>
          <p>Psychologist Hermann Ebbinghaus’ research into the <strong>Forgetting Curve</strong> demonstrates that without structured reinforcement, memory retention drops sharply within 24 to 48 hours. In the high-interruption environment of a hotel, this decay is accelerated. When instructions are purely verbal, they are effectively "expired" the moment the manager leaves the floor.</p>
          
          <p>The brain is optimized to prune information it doesn't use immediately. In hospitality, where a staff member is bombarded with guest requests, phone calls, and system alerts, the "pruning" happens faster. Without a physical anchor (a structured SOP sheet), training is a sunk cost.</p>
        </section>

        <section class="my-16">
          <h3 class="text-primary-text font-black uppercase tracking-tighter italic mb-6">The "Verbal Standard" Trap</h3>
          <p>Most boutique operations run on what we call the <em>Verbal Standard</em>. A manager explains a task, the employee nods, and the manager assumes the system is active. In reality, you haven't built a system: you've shared a suggestion. Without an <strong>Excel-based SOP sheet</strong> that acts as a permanent reference, your standards will inevitably drift.</p>
          
          <div class="grid md:grid-cols-2 gap-8 my-16">
            <div class="p-8 bg-white/[0.02] border border-white/10 rounded-2xl">
                <h4 class="font-black uppercase text-red-500 mb-4">Verbal Suggestion</h4>
                <ul class="space-y-3 text-sm italic opacity-70">
                    <li>Decays within 48 hours</li>
                    <li>Open to individual interpretation</li>
                    <li>Zero audit trail for liability</li>
                    <li>Dependent on manager presence</li>
                </ul>
            </div>
            <div class="p-8 bg-primary/5 border border-primary/20 rounded-2xl">
                <h4 class="font-black uppercase text-primary mb-4">Structural Memory</h4>
                <ul class="space-y-3 text-sm font-bold text-primary-text">
                    <li>Permanent physical reference</li>
                    <li>Binary 'Done/Not Done' check</li>
                    <li>Verifiable timestamped evidence</li>
                    <li>Independent of the trainer</li>
                </ul>
            </div>
          </div>

          <blockquote class="my-16">
            "Verbal instructions are suggestions that expire. Only documented protocols are infrastructure."
          </blockquote>
        </section>

        <section class="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2rem] my-16">
          <h2 class="text-red-500 !mt-0">The Financial Impact: The Guesswork Tax</h2>
          <p>When training fades, "Guesswork" fills the gap. This leads to what we call <strong>The Guesswork Tax</strong>: a recurring cost manifesting as:</p>
          <ul class="grid md:grid-cols-2 gap-6 mt-8">
            <li class="flex items-start gap-3">
              <span class="text-red-500 font-black">01.</span>
              <span><strong>ADR Erosion:</strong> Inconsistency forces managers to offer discounts to appease dissatisfied guests.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-500 font-black">02.</span>
              <span><strong>Managerial Chasing:</strong> Senior staff spend 40% of their time re-explaining tasks instead of driving revenue.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-500 font-black">03.</span>
              <span><strong>Review Penalty:</strong> One 'drifted' standard in sanitation can drop a 5-star review to 3 stars instantly.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-500 font-black">04.</span>
              <span><strong>Onboarding Debt:</strong> New hires take 3x longer to reach peak efficiency without a structured reference.</span>
            </li>
          </ul>
        </section>

        <h2>2. Resolution: Moving from Memory to Infrastructure</h2>
        <section>
          <p>The solution is not more training: it is better <strong>Infrastructure</strong>. A structured, downloadable Excel checklist removes the burden of memory. It turns a "learned behavior" into a "verifiable task." When a staff member has a physical sheet that mandates a binary 'Check' for specific control points, execution becomes predictable.</p>
          <p>By moving from verbal orientation to <strong>Structured SOP Infrastructure</strong>, you neutralize the Forgetting Curve and ensure that your operational standard remains a permanent reality every single shift.</p>
        </section>
      `
    },
    {
      slug: 'hotel-emergency-cognitive-overload',
      title: "Cognitive Overload in Hotels: Why Staff Freeze During Emergencies",
      publishedDate: "2026-02-22",
      updatedAt: "2025-02-24",
      author: "MoreMeets Editorial",
      tags: ["Hotel & Resort Operations"],
      protocol: "Life Safety",
      relatedPackId: "hotels_and_resorts",
      description: "Forensic analysis of the 'Amygdala Hijack' in hospitality. Why even high-performing staff fail during crises. Why physical systems are the only cure.",
      imageUrl: "https://i.postimg.cc/ZqSpbSXJ/Create-SOP-for-hotel-maintenance.webp",
      content: `
        <section>
          <p class="lead font-black text-xl md:text-2xl text-primary mb-12 italic leading-relaxed">
            When the fire alarm rings at 3 AM or a guest collapses in the lobby, your staff’s IQ effectively drops by 30 points. This is the physiological reality of Cognitive Overload.
          </p>
          
          <p>Human working memory is designed to hold 4-7 items at a time. In a crisis, the <strong>Amygdala Hijack</strong> occurs: the brain's logical pre-frontal cortex shuts down to prioritize survival. In this state, "common sense" and "previous training" become inaccessible. The brain enters a loop of confusion unless it is provided with an external, binary guide.</p>
        </section>

        <h2>1. The "First 5 Minutes" Framework</h2>
        <p>In high-stakes environments like aviation or surgery, professionals do not rely on memory. They rely on the <strong>Emergency Checklist</strong>. In hospitality, the first 5 minutes of an incident determine the legal and financial outcome. If your night manager has to "try and remember" the escalation chain, they have already failed.</p>
        
        <h3>Minute-by-Minute Breakdown of a System Failure</h3>
        <ul class="space-y-4 my-8">
          <li class="border-l-2 border-red-500 pl-4"><strong>Minute 01:</strong> Panic sets in. Adrenaline floods the system. The staff member tries to remember the emergency number.</li>
          <li class="border-l-2 border-red-500 pl-4"><strong>Minute 03:</strong> Conflicting priorities. Should they call the GM or the paramedics first? Should they clear the lobby or stay with the guest?</li>
          <li class="border-l-2 border-red-500 pl-4"><strong>Minute 05:</strong> Total saturation. No documentation is being kept. Evidence is lost. Liability is increasing.</li>
        </ul>

        <blockquote class="my-16">
          "In a crisis, you do not rise to the level of your goals. You fall to the level of your systems."
        </blockquote>

        <section class="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2rem] my-16">
          <h2 class="text-primary !mt-0">Infrastructure vs. Instinct</h2>
          <div class="grid md:grid-cols-2 gap-12 mt-8">
            <div class="space-y-4 border-r border-white/5 pr-6">
              <h4 class="font-black uppercase text-red-500">The Instinct Model</h4>
              <p class="text-sm text-secondary-text">Staff relies on "common sense" and memory of orientation. Result: Decision paralysis, incorrect notifications, and increased liability.</p>
            </div>
            <div class="space-y-4">
              <h4 class="font-black uppercase text-authority-green">The Infrastructure Model</h4>
              <p class="text-sm text-secondary-text">Staff follows a <strong>Binary SOP Sheet</strong>. Result: Action replaces confusion. Escalation is immediate. Documentation is automatic.</p>
            </div>
          </div>
        </section>

        <h2>2. Final Assessment</h2>
        <section>
          <p>Your team isn't incompetent: they are human. Protect your guests and your legal standing by removing the variable of 'Memory' from your emergency response. Build systems that work when the brain doesn't.</p>
        </section>
      `
    },
    {
      slug: 'dangers-of-running-hotels-on-whatsapp',
      title: "Hotels Running on WhatsApp: The Dangers of Chat-Based Operations",
      publishedDate: "2026-02-23",
      updatedAt: "2025-02-24",
      author: "MoreMeets Editorial",
      tags: ["Hotel & Resort Operations"],
      protocol: "Audit Readiness",
      relatedPackId: "hotels_and_resorts",
      description: "WhatsApp is a communication tool, not an operating system. Discover why relying on chat for hotel operations creates massive hidden liabilities.",
      imageUrl: "https://i.postimg.cc/cJSwxSP4/housekeeping-hotel-1.avif",
      content: `
        <section>
          <p class="lead font-black text-xl md:text-2xl text-primary mb-12 italic leading-relaxed">
            WhatsApp is the world’s most popular hotel operating system. It is also the most dangerous.
          </p>
          
          <p>While chat is efficient for quick updates, it is a graveyard for <strong>Operational Memory</strong>. Instructions are buried in hundreds of messages, there is no verifiable audit trail for compliance, and when a manager leaves, your 'system' leaves with their phone.</p>
        </section>

        <h2>1. The "Seen Receipt" Liability</h2>
        <p>Just because an employee 'saw' a message doesn't mean they've followed the standard. WhatsApp lacks the <strong>binary accountability</strong> of a structured checklist. You cannot audit a group chat for ISO or HACCP compliance. You cannot prove to an inspector that a fridge temperature was checked because 'it's somewhere in the chat history.'</p>
        
        <h3>Communication vs. Documentation</h3>
        <p>In a professional audit, "I told them on WhatsApp" is zero defense. Inspectors require <strong>timestamped, role-based logs</strong> that prove a specific control point was verified. WhatsApp is a stream of consciousness: a professional operation requires a structure of record.</p>

        <blockquote class="my-16">
          "Chat is for noise. SOPs are for signal. If your business depends on a scrolling feed to maintain standards, you aren't running a system: you're running a conversation."
        </blockquote>

        <section class="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2rem] my-16">
          <h2 class="text-red-500 !mt-0">Operational Debt Categories</h2>
          <ul class="space-y-6 mt-8">
            <li class="flex items-start gap-4">
              <div class="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1"><span class="text-red-500 text-xs font-black">!</span></div>
              <div><strong>Legal Risk:</strong> Inability to produce a time-stamped log of safety checks during a liability claim.</div>
            </li>
            <li class="flex items-start gap-4">
              <div class="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1"><span class="text-red-500 text-xs font-black">!</span></div>
              <div><strong>Information Entropy:</strong> Critical instructions are lost as they get pushed "up" the feed by casual conversation.</div>
            </li>
            <li class="flex items-start gap-4">
              <div class="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1"><span class="text-red-500 text-xs font-black">!</span></div>
              <div><strong>Resignation Shock:</strong> When a key person leaves, the "how-to" history of the operation vanishes with their personal device.</div>
            </li>
          </ul>
        </section>

        <h2>2. The Excel Backbone</h2>
        <section>
          <p>Excel-based SOPs provide what WhatsApp cannot: <strong>Permanent, Searchable, and Auditable Structure.</strong> They create a fixed record of what was supposed to happen versus what actually happened. This is the difference between 'guessing' if a task was done and 'knowing' it was.</p>
        </section>
      `
    },
    {
      slug: 'kfc-chicken-shortage-supply-chain-risk',
      title: "KFC Logistics Collapse: A Forensic Analysis of Supply Chain SPOFs",
      publishedDate: "2026-02-20",
      updatedAt: "2025-02-24",
      author: "MoreMeets Editorial",
      tags: ["Industrial & Transport"],
      protocol: "Supply Chain Risk",
      relatedPackId: "facility_management_blueprint",
      description: "Deconstructing the 2018 KFC logistics failure. How a single point of failure (SPOF) paralyzed 900 restaurants.",
      imageUrl: "https://i.postimg.cc/tgjWqj8Y/Back-of-House-BOH-Operations-restaurant.png",
      content: `
        <p>In February 2018, 900 KFC outlets closed. Not because of a lack of customers, but because of a failure in logistics architecture.</p>
        <p>The \"Great Chicken Crisis\" was a failure of <strong>Centralized Risk</strong>. KFC switched distribution to a single, automated hub. When the software glitched, there was no redundant infrastructure. No Plan B.</p>
      `
    },
    {
      slug: 'hidden-roi-of-sops',
      title: "The Financial ROI of SOPs: Asset Valuation & Operational Efficiency",
      publishedDate: "2026-02-19",
      updatedAt: "2025-02-24",
      author: "MoreMeets Editorial",
      tags: ["Corporate & Tech"],
      protocol: "Asset Valuation",
      relatedPackId: "franchise_operations_pack",
      description: "Why structured operations are revenue multipliers. A financial study on how SOPs increase enterprise value.",
      imageUrl: "https://i.postimg.cc/FK43r4w5/franchise-2.jpg",
      content: `
        <p>Most founders see SOPs as compliance. CFOs see them as overhead. But structured operations are <strong>Revenue Multipliers</strong>. Chaos has a measurable, compounding cost.</p>
        <p>Investors value predictable systems, not heroic individuals. When you sell a business, you aren't selling people: you are selling a recurring profit engine that works regardless of who is in the room.</p>
      `
    }
];