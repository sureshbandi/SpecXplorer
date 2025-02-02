import ReactMarkdown from "react-markdown";
import PropTypes from 'prop-types';

export default function MarkdownRenderer({ content }) {
  return (
    <div className="prose">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

MarkdownRenderer.propTypes ={
    content : PropTypes.any
}