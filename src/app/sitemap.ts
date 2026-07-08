import { MetadataRoute } from 'next'
import { getPostModifiedDate, getPublishedBlogPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.flash4kiptv.vip'
  const siteLaunch = new Date('2026-01-15')

  const staticPages = [
    {
      url: baseUrl,
      lastModified: siteLaunch,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: siteLaunch,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: siteLaunch,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: siteLaunch,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLaunch,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  const blogPages = getPublishedBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: getPostModifiedDate(post),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}
