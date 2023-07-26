import './Post.css';
import { useParams } from 'react-router-dom';
import PostTemplate from 'components/PostTemplate';
import posts from 'json/posts.json';
import ReactMarkdown from 'react-markdown';

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  })

  if (!post) {
    return <h1>Post não encontrado</h1>
  }

  console.log(post)
  return (
    <PostTemplate
      fotoCapa={ `/assets/posts/${post.id}/capa.png` }
      titulo= { post.titulo }
    >
      <div className="post-markdown-container">
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
      
    </PostTemplate>
  )
}
