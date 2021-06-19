import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { PostData } from '../../interface';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import PostContent from '../../components/PostContent';

interface Props {
  postData: PostData;
}

const Post: React.VFC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>dummy</title>
      </Head>
      <article>
        <PostContent postData={postData} />
      </article>
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
