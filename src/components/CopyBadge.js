import { Badge } from "react-bootstrap";

export default function CopyBadge({ children, content }) {
  function copyChildren() {
    let value = content ? content : "";
    if (Array.isArray(value)) value = value.join("");
    navigator.clipboard.writeText(value);
  }
  return (
    <Badge
      variant="primary"
      onClick={() => copyChildren()}
      className="mr-2"
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      {children}
    </Badge>
  );
}
