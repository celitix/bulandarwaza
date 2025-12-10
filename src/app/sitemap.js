export default function sitemap() {
  return [
    {
      url: 'https://bulanddarwaza.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://bulanddarwaza.com/about-bulanddarwaza',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
        {
      url: 'https://bulanddarwaza.com/nearby-places',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
    url: 'https://bulanddarwaza.com/getting-there',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
   {
    url: 'https://bulanddarwaza.com/directions',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
       url: 'https://bulanddarwaza.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
]
}

