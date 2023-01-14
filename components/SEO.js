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
            : `${siteMetadata.siteUrl}${router.asPath}`
        }
      />
    </Head>
  );
};

const PageSEO = ({ title, description }) => {
  return <CommonSEO title={title} description={description} ogType="website" />;
};
