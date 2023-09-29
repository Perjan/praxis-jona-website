(async () => {
    const sitemapUrl = 'https://appscreentime.com/sitemap.xml';
    console.log('⬆️  [Submit To Google] Submitting sitemap to Google Search Console...');
    const response = await fetch(
        `https://www.google.com/ping?sitemap=${sitemapUrl}`,
        {
            method: 'GET'
        }
    );
    
    console.log('✅ [Submit To Google] Response:', response.status, response.statusText);
})();