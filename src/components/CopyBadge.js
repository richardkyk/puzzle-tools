import { Badge } from "react-bootstrap";
import { useString } from "../contexts/StringContext";

export default function CopyBadge({ children, content }) {
  const { setString } = useString();
  function copyChildren() {
    let value = content ? content : "";
    if (Array.isArray(value)) value = value.join("");
    navigator.clipboard.writeText(value);
    if (typeof value === "string") setString(value);
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
