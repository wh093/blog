import { PostHeading } from '../PostHeading';
import { PostModel } from '@/models/post/post-model';
import { PostDate } from '../PostDate';

type PostSummaryPros = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  post: PostModel;
  createdAt: string;
  title: string;
  excerpt: string;
};

export async function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryPros) {
  return (
    <div className='flex flex-col gap-4 sm:justify-center'>
      <PostDate dateTime={createdAt} />

      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
