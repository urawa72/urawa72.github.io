import React from 'react';
import { PostData } from '../interface';
import MarkdownRenderer from './MarkdownRenderer';

interface Props {
  postData: PostData;
}

const PostContent: React.VFC<Props> = ({ postData }) => {
  return <MarkdownRenderer>{postData.body}</MarkdownRenderer>;
};

export default PostContent;
