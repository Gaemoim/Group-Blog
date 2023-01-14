import { PageSEO } from "@/components/SEO";
import siteMetaData from "@/data/siteMetaData";

export default function Home({ posts }) {
  return (
    <>
      <PageSEO
        title={siteMetaData.title}
        description={siteMetaData.description}
      />
    </>
  );
}
