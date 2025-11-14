export default function Schema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RepoAI",
    description: "AI-powered GitHub repository summarizer",
    url: "https://getrepoai.vercel.app",
    applicationCategory: "UtilityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "250",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
