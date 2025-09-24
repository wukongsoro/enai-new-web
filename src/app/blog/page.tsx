import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  type: string;
  slug: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "ENAI's AI Agents Generate 50% More Qualified Leads",
    description: "How our AI BDR agents transform sales development processes, generating 50% more qualified leads and saving 70% on outbound costs.",
    date: "Jan 15, 2025",
    type: "Case Study",
    slug: "enai-ai-agents-generate-50-more-qualified-leads",
    content: `# ENAI's AI Agents Generate 50% More Qualified Leads

## The Challenge
Sales development teams struggle with manual prospecting, inconsistent follow-up, and low conversion rates. Despite having qualified SDRs, teams can't scale their outbound efforts effectively.

## Our Solution
We implemented ENAI's ProspectorAI and OutreachAI agents to automate lead generation and engagement processes.

## The Results
- **50% increase in SQLs** generated per SDR
- **70% reduction** in prospecting time
- **3x higher** meeting booking rate
- **$2.3M additional pipeline** created in 90 days

## Key Features Used
- Real-time lead scoring and prioritization
- Personalized multi-channel outreach
- Automated follow-up sequences
- CRM integration for seamless handoffs

This case study demonstrates how AI BDR agents can transform traditional sales development operations.`
  },
  {
    title: "The AI BDR Playbook: Scale Outbound Without Hiring",
    description: "Learn how to leverage AI BDR agents to scale your outbound sales efforts without increasing headcount or costs.",
    date: "Dec 20, 2024",
    type: "Guide",
    slug: "ai-bdr-playbook-scale-outbound-without-hiring",
    content: `# The AI BDR Playbook: Scale Outbound Without Hiring

## Introduction
In today's competitive B2B landscape, scaling outbound sales efforts is crucial for growth. However, hiring and training new BDRs can be costly and time-consuming. AI BDR agents offer a compelling alternative.

## Benefits of AI BDR Agents

### 1. 24/7 Availability
AI agents never sleep, ensuring leads are contacted immediately when they're most engaged.

### 2. Consistent Performance
Eliminate human error and fatigue with automated, standardized processes.

### 3. Scalability
Scale from 100 to 10,000 prospects without hiring additional staff.

### 4. Cost Efficiency
Reduce cost per lead by up to 80% compared to human BDRs.

## Implementation Strategy

### Step 1: Define Your Ideal Customer Profile
- Industry verticals
- Company size
- Job titles
- Pain points

### Step 2: Set Up Lead Scoring
Use behavioral signals to prioritize high-intent prospects.

### Step 3: Craft Personalized Messaging
Create dynamic messaging that adapts to prospect context.

### Step 4: Establish Multi-Channel Cadence
Combine email, LinkedIn, and phone outreach for maximum impact.

## Measuring Success

Track these key metrics:
- Response rates
- Meeting booking rates
- Cost per meeting
- Pipeline velocity

## Getting Started

Ready to scale your outbound efforts? [Book a demo](https://www.enai.ai/demo) to see how our AI BDR agents can transform your sales development process.`
  },
  {
    title: "ENAI Cuts Prospecting Time by 70% with AI Automation",
    description: "Discover how ENAI's AI automation reduces prospecting workload by 70% while increasing lead quality and conversion rates.",
    date: "Nov 10, 2024",
    type: "Case Study",
    slug: "enai-cuts-prospecting-time-70-ai-automation",
    content: `# ENAI Cuts Prospecting Time by 70% with AI Automation

## The Problem
Sales teams spend 80% of their time on manual prospecting and data entry, leaving little time for actual selling and relationship building.

## The Solution
ENAI's QualifierAI agent automated lead qualification and enrichment, while ProspectorAI handled initial outreach and follow-up.

## The Impact

### Time Savings
- **70% reduction** in prospecting time
- SDRs now focus on high-value activities
- **2 hours daily** freed up per team member

### Quality Improvements
- **40% increase** in lead qualification accuracy
- **60% improvement** in meeting show-up rates
- Better lead-to-customer conversion

### Revenue Growth
- **25% increase** in monthly recurring revenue
- **$1.8M additional** pipeline created
- Faster sales cycle completion

## Key Technologies
- Real-time lead scoring algorithms
- Automated data enrichment
- Multi-channel engagement tracking
- CRM synchronization

This implementation showcases how AI can transform not just efficiency, but also the quality and effectiveness of sales development efforts.`
  },
  {
    title: "AI Sales Automation: The Complete 2025 Guide",
    description: "Everything you need to know about AI sales automation tools, from basic email automation to advanced AI SDR agents.",
    date: "Oct 15, 2024",
    type: "Guide",
    slug: "ai-sales-automation-complete-2025-guide",
    content: `# AI Sales Automation: The Complete 2025 Guide

## What is AI Sales Automation?

AI sales automation uses artificial intelligence to streamline and optimize sales processes. From lead generation to deal closing, AI can handle repetitive tasks, provide insights, and even engage with prospects autonomously.

## Key Components

### 1. Lead Generation
AI tools can identify and qualify leads based on behavioral data, firmographics, and intent signals.

### 2. Outreach Automation
Personalized, multi-channel communication that adapts based on prospect responses.

### 3. Lead Scoring and Routing
Intelligent prioritization and automatic assignment of leads to the right sales reps.

### 4. Predictive Analytics
Forecasting deal probabilities and identifying at-risk opportunities.

## Benefits

- **Increased Productivity**: Automate 70-80% of routine sales tasks
- **Improved Conversion Rates**: Personalized, timely outreach
- **Better Lead Quality**: AI-driven qualification and scoring
- **Scalability**: Handle more prospects without adding headcount

## Popular Tools

1. **ENAI ProspectorAI**: Autonomous lead generation and outreach
2. **HubSpot Sales Hub**: CRM-integrated automation
3. **Outreach**: Enterprise-grade sequence management
4. **Salesforce Einstein**: AI-powered CRM insights

## Implementation Tips

1. Start with a pilot program
2. Ensure data quality
3. Train your AI models with historical data
4. Monitor and optimize performance regularly

## The Future of AI Sales Automation

As AI technology advances, we can expect:
- More sophisticated natural language processing
- Advanced predictive modeling
- Seamless integration across all sales tools
- Increased focus on relationship building over transaction processing

Ready to automate your sales process? [Schedule a demo](https://www.enai.ai/demo) to see how ENAI can transform your sales operations.`
  },
  {
    title: "From Manual to Automated: ENAI's Journey",
    description: "How ENAI evolved from traditional sales automation to AI-powered autonomous sales agents.",
    date: "Sep 5, 2024",
    type: "Company News",
    slug: "manual-to-automated-enai-journey",
    content: `# From Manual to Automated: ENAI's Journey

## Our Beginning
Founded in 2023, ENAI started with a simple mission: to eliminate repetitive sales tasks through automation.

## The Evolution

### Phase 1: Basic Automation (2023)
- Email sequence automation
- Basic lead scoring
- Simple CRM integrations

### Phase 2: AI-Assisted Sales (2024)
- Predictive lead scoring
- Personalized messaging
- Automated follow-ups

### Phase 3: Autonomous AI Agents (2025)
- Fully autonomous SDRs
- Real-time decision making
- Multi-channel orchestration

## Key Milestones

- **January 2024**: Launched first AI BDR agent
- **June 2024**: 1000+ customers milestone
- **December 2024**: Series A funding announcement
- **2025**: Global expansion and new product launches

## Our Vision
To create a world where every sales team has an AI co-pilot that handles the mundane while humans focus on strategic relationship building.

## Join Our Journey
We're always looking for talented individuals to join our mission. [View open positions](https://www.enai.ai/careers).`
  },
  {
    title: "The ROI of AI BDR Agents: Real Numbers",
    description: "Concrete data showing the financial impact of implementing AI BDR agents in your sales organization.",
    date: "Aug 1, 2024",
    type: "Analysis",
    slug: "roi-ai-bdr-agents-real-numbers",
    content: `# The ROI of AI BDR Agents: Real Numbers

## Cost-Benefit Analysis

### Traditional BDR Costs
- Average salary: $60,000/year
- Benefits and overhead: $20,000/year
- Training and onboarding: $10,000
- Total first-year cost: $90,000

### AI BDR Agent Costs
- Subscription: $50,000/year
- Implementation: $5,000
- Total first-year cost: $55,000

**Savings: $35,000 in Year 1**

## Productivity Gains

### Performance Metrics
- **Leads contacted per day**: Human BDR (50) vs AI (500)
- **Response rate**: 5% vs 15%
- **Meeting booking rate**: 10% vs 25%

### Revenue Impact
Assuming $100K average deal size and 20% win rate:
- Human BDR: $100,000 annual revenue contribution
- AI BDR: $750,000 annual revenue contribution

**Additional revenue: $650,000/year**

## Break-Even Analysis
- Initial investment payback: 2-3 months
- ROI: 500-800% in first year
- Long-term savings: 60-70% reduction in sales development costs

## Quality Improvements
- Lead qualification accuracy: +40%
- Meeting show-up rates: +50%
- Sales cycle length: -25%

## Conclusion
AI BDR agents don't just reduce costs—they dramatically improve sales effectiveness and scale. The ROI is clear and compelling for forward-thinking sales organizations.

[Calculate your potential ROI](https://www.enai.ai/roi-calculator).`
  }
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-[152px]">
        {/* Featured Article Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Featured Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/GxhEHFrWMAAIwCy.jpeg"
                    alt="ENAI Blog Featured Image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Featured Content */}
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  {blogPosts[0].type}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {blogPosts[0].title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {blogPosts[0].description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{blogPosts[0].date}</span>
                </div>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Insights, case studies, and guides to help you scale your sales with AI.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(1).map((post, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.type}</Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 line-clamp-3 mb-4">
                      {post.description}
                    </CardDescription>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
