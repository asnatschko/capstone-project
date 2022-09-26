export default function Card({ content, isRead }) {
  if (isRead) {
    return <li>{content}</li>;
  } else {
    return <li>{content}</li>;
  }
}
