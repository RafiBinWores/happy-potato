import { SITE } from "../../seo.config";

const abs = (u) => {
  if (!u) return undefined;
  try {
    return new URL(u).toString();
  } catch {
    return new URL(u.replace(/^\//, ""), SITE.baseUrl + "/").toString();
  }
};

const SEO = ({
  title,
  description,
  url,
  image,
  robots = "index, follow",
  ogImageWidth = SITE.defaultOgImageWidth,
  ogImageHeight = SITE.defaultOgImageHeight,
}) => {
  const full = title ? `${title} | ${SITE.name}` : SITE.name;
  const absUrl = url ? abs(url) : undefined;
  const absImg = abs(image) || abs(SITE.defaultImage);

  return (
    <>
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={robots} />
      {absUrl && <link rel="canonical" href={absUrl} />}

      <meta property="og:title" content={full} />
      {description && <meta property="og:description" content={description} />}
      {absUrl && <meta property="og:url" content={absUrl} />}
      {absImg && <meta property="og:image" content={absImg} />}
      {ogImageWidth && (
        <meta property="og:image:width" content={String(ogImageWidth)} />
      )}
      {ogImageHeight && (
        <meta property="og:image:height" content={String(ogImageHeight)} />
      )}

      <meta property="og:image:alt" content={`${SITE.name} logo`} />
      <meta name="twitter:image" content={absImg} />
    </>
  );
};

export default SEO;
