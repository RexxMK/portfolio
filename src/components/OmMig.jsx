import parse from "html-react-parser";

export default function OmMig({ post }) {
  return (
    <div>
      <p>{parse(post.content.rendered)}</p>
    </div>
  );
}
