"use client";

import { Share2, Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  title: string;
  slug: string;
  description: string;
}

export default function ShareButtons({ title, slug, description }: ShareButtonsProps) {
  const url = typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : `/blog/${slug}`;

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        className="h-8 px-3 text-gray-600 hover:text-gray-900"
        onClick={copyToClipboard}
      >
        <Link2 className="w-4 h-4 mr-1" />
        Copy link
      </Button>

      <a
        href={shareUrls.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
      >
        <Twitter className="w-4 h-4" />
      </a>

      <a
        href={shareUrls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
      >
        <Linkedin className="w-4 h-4" />
      </a>

      <a
        href={shareUrls.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
      >
        <Facebook className="w-4 h-4" />
      </a>
    </div>
  );
}
