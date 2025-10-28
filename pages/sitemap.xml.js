const SITE_URL = 'https://custodiahealth.com'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${SITE_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${SITE_URL}/blog</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${SITE_URL}/healthcare-provider</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${SITE_URL}/pricing</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${SITE_URL}/research</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${SITE_URL}/download</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${SITE_URL}/how-to-put-type-2-diabetes-in-remission</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
      <url>
       <loc>${SITE_URL}/sign-up</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
      <url>
       <loc>${SITE_URL}/faq</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     ${posts
      .map((post) => {
        return `
       <url>
         <loc>${SITE_URL}/blog/${post.attributes.slug}</loc>
         <lastmod>${post.attributes.updatedAt}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>0.8</priority>
       </url>
     `
      })
      .join('')}
   </urlset>
 `
}

export async function getServerSideProps({ res }) {
  const response = await fetch('https://custodia-health-blog.herokuapp.com/api/articles?pagination[pageSize]=500&fields[0]=title&fields[1]=slug&fields[2]=updatedAt')
  const data = await response.json()
  const posts = data.data

  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function Sitemap() {
  return null
}