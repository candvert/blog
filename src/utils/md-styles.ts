import { visit } from "unist-util-visit";
import type { Node } from "unist";
import type { Element, Properties } from "hast";

interface ExtendedProperties extends Properties {
  className?: string[];
}

export default function rehypeAddH2Class() {
  return (tree: Node) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "h1") {
        node.properties = node.properties || {};
        const props = node.properties as ExtendedProperties;
        props.className = props.className || [];
        props.className.push("text-lg py-2.5 md:text-2xl");
      } else if (node.tagName === "h2") {
        node.properties = node.properties || {};
        const props = node.properties as ExtendedProperties;
        props.className = props.className || [];
        props.className.push("text-lg py-2.5 md:text-2xl");
      } else if (node.tagName === "p") {
        node.properties = node.properties || {};
        const props = node.properties as ExtendedProperties;
        props.className = props.className || [];
        props.className.push("text-lg py-2.5 md:text-xl");
      } else if (node.tagName === "li") {
        node.properties = node.properties || {};
        const props = node.properties as ExtendedProperties;
        props.className = props.className || [];
        props.className.push("py-1.5 md:text-lg");
      } else if (node.tagName === "a") {
        node.properties = node.properties || {};
        const props = node.properties as ExtendedProperties;
        props.className = props.className || [];
        props.className.push("text-blue-600 text-lg");
      } else if (node.tagName === "img") {
        node.properties = node.properties || {};
        const props = node.properties as ExtendedProperties;
        props.className = props.className || [];
        props.className.push("py-2.5");
      }
    });
  };
}
