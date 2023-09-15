import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts"
import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({postData}) {

    return <>
    <Head>
      <title>{postData?.title}</title>
    </Head>
      <ul>
          <li>title: {postData?.title}</li>
          <li>id: {postData?.id}</li>
          <li>date: {postData?.date}</li>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </ul>
    </>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}