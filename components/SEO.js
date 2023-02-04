import Head from "next/head";
import siteMetaData from "@/data/siteMetaData";
import { useRouter } from "next/router";

const CommonSEO = ({ title, description, ogType, canonicalUrl }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta
        property="og:url"
        content={`${siteMetaData.siteUrl}${router.asPath}`}
      />
      <link
        rel="canonical"
        href={
          canonicalUrl
            ? canonicalUrl
            : `${siteMetaData.siteUrl}${router.asPath}`
        }
      />
    </Head>
  );
};

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = siteMetaData.siteUrl + siteMetaData.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
    />
  );
};

export const BlogSEO = ({
  authorDetails,
  title,
  summary,
  date,
  lastmod,
  url,
  images = [],
  canonicalUrl,
}) => {
  const router = useRouter();
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();

  let authorList;
  if (authorDetails) {
    authorList = authorDetails.map((author) => {
      return {
        "@type": "Person",
        name: author.name,
      };
    });
  } else {
    authorList = {
      "@type": "Person",
      name: siteMetadata.author,
    };
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    description: summary,
  };

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="article"
        canonicalUrl={canonicalUrl}
      />
      <Head>
        {date && (
          <meta property="article:published_time" content={publishedAt} />
        )}
        {lastmod && (
          <meta property="article:modified_time" content={modifiedAt} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  );
};
