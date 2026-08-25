export function unsplash(id: string, width = 1400) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const photos = {
  teamMeeting: unsplash("photo-1600880292203-757bb62b4baf"),
  agencyWork: unsplash("photo-1553877522-43269d4ea984"),
  collaboration: unsplash("photo-1522071820081-009f0129c71c"),
  workshop: unsplash("photo-1552664730-d307ca884978"),
  metaAds: unsplash("photo-1611162617474-5b21e879e113"),
  googleAds: unsplash("photo-1460925895917-afdab827c52f"),
  amazonAds: unsplash("photo-1566576912321-d58ddd7a6088"),
  seo: unsplash("photo-1557838923-2985c318be48"),
  webDev: unsplash("photo-1498050108023-c5249f4df085"),
  email: unsplash("photo-1596526131083-e8c633c948d2"),
  shopify: unsplash("photo-1556742049-0cfed4f6a45d"),
  instagram: unsplash("photo-1611262588024-d12430b98920"),
  content: unsplash("photo-1454165804606-c3d57bc86b40"),
  analytics: unsplash("photo-1551288049-bebda4e38f71"),
  meeting: unsplash("photo-1542744173-8eaaec0eab77"),
};
