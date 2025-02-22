import { MetadataRoute } from 'next';
import { getAllCategoryList, getAllBlogList } from './_libs/microcms';

const buildUrl = (path?: string) => `https://techlogwalk.com${path ?? ''}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogContents = await getAllBlogList();
  const categoryContents = await getAllCategoryList();

  const blogUrls: MetadataRoute.Sitemap = blogContents.map((content) => ({
    url: buildUrl(`/blog/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (content) => ({
      url: buildUrl(`/blog/category/${content.id}`),
      lastModified: content.revisedAt,
    })
  );

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl('/contact'),
      lastModified: now,
    },
    {
      url: buildUrl('/blog'),
      lastModified: now,
    },
    ...blogUrls,
    ...categoryUrls,
  ];
}
