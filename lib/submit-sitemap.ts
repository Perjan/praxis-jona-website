
(async () => {
    const sitemapUrl = 'https://moneycoach.ai/sitemap.xml';
    console.log('⬆️ [Submit To Google] Submitting sitemap to Google Search Console...');
    const response = await fetch(
        `https://www.google.com/ping?sitemap=${sitemapUrl}`,
        {
            method: 'GET'
        }
    );
    
    console.log('✅ [Submit To Google] Response:', response.status, response.statusText);
})();