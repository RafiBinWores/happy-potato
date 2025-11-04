import { SITE } from "../../seo.config";

const abs = (u) => {
  try { return new URL(u).toString(); }
  catch { return new URL(u.replace(/^\//, ""), SITE.baseUrl + "/").toString(); }
};

const RootSEO = () => {
const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: abs(SITE.defaultImage),
  };

  return (
    <>
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={abs(SITE.defaultImage)} />
      <meta property="og:image:width" content={SITE.defaultOgImageWidth} />
      <meta property="og:image:height" content={SITE.defaultOgImageHeight} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={abs(SITE.defaultImage)} />

      <script type="application/ld+json">{JSON.stringify(org)}</script>
    </>
  );
};

export default RootSEO;
