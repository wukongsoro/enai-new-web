import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2, Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import { notFound } from "next/navigation";
import ShareButtons from "./ShareButtons";

// This would typically come from a CMS or database
const blogPosts = [
  {
    title: "ENAI's AI Agents Generate 50% More Qualified Leads",
    description: "How our AI BDR agents transform sales development processes, generating 50% more qualified leads and saving 70% on outbound costs.",
    date: "Jan 15, 2025",
    type: "Case Study",
    slug: "enai-ai-agents-generate-50-more-qualified-leads",
    author: "ENAI Team",
    readTime: "3 min read",
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
    author: "ENAI Team",
    readTime: "5 min read",
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
    author: "ENAI Team",
    readTime: "4 min read",
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
    author: "ENAI Team",
    readTime: "7 min read",
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
    author: "ENAI Team",
    readTime: "4 min read",
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
    author: "ENAI Team",
    readTime: "6 min read",
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

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-like content renderer
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
            {line.replace('# ', '')}
          </h1>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-3">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-2">
            {line.replace('### ', '')}
          </h3>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 mb-1 ml-4">
            {line.replace('- ', '')}
          </li>
        );
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={index} className="text-gray-700 mb-4 font-semibold">
            {line.replace(/\*\*/g, '')}
          </p>
        );
      }
      if (line.trim() === '') {
        return null;
      }
      if (line.includes('http')) {
        // Handle links
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = line.split(linkRegex);
        return (
          <p key={index} className="text-gray-700 mb-4">
            {parts.map((part, i) => {
              if (i % 3 === 1) {
                return (
                  <a
                    key={i}
                    href={parts[i + 1]}
                    className="text-orange-600 hover:text-orange-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {part}
                  </a>
                );
              }
              if (i % 3 === 2) return null;
              return part;
            })}
          </p>
        );
      }
      return (
        <p key={index} className="text-gray-700 mb-4 leading-relaxed">
          {line}
        </p>
      );
    }).filter(Boolean);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-[152px] font-sans">
        {/* Back to Blog Button */}
        <div className="max-w-4xl mx-auto px-6 pt-6">
          <Button variant="ghost" className="mb-6" asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Title and Date */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {post.type}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-gray-600 text-lg mb-8">{post.date}</p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-6 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-orange-600 text-4xl font-bold">ENAI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Author and Share Info */}
        <section className="px-6 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>

              {/* Share Buttons */}
              <ShareButtons title={post.title} slug={post.slug} description={post.description} />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 pb-8">
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </article>

        {/* Share Section */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <div className="text-center">
            <p className="text-gray-600 mb-4">Share this post</p>
            <ShareButtons title={post.title} slug={post.slug} description={post.description} />
          </div>
        </section>

        {/* Related Posts */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related articles</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                      <div className="text-orange-600 text-xl font-bold">ENAI</div>
                    </div>
                    <div className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {relatedPost.type}
                      </Badge>
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.description}
                      </p>
                      <p className="text-gray-500 text-xs mt-2">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hire our Digital Workers
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Automate every step of your outreach process, from finding and researching prospects to personalizing messages and booking meetings.
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/demo">Book a Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
