import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BlogPostDetail } from '../components/BlogPostDetail';

interface BlogPostPageProps {
  handleNavClick: (id: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ handleNavClick }) => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [postId]);

  return (
    <BlogPostDetail
      postId={Number(postId)}
      onBack={() => navigate('/blog')}
      onNavClick={handleNavClick}
    />
  );
};