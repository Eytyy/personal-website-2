export default {
  name: "blockContent",
  type: "array",
  title: "Block Content",
  of: [
    { type: "block", title: "Block", styles: [], lists: [], marks: {} },
    { type: "figure", options: { hotspot: true } },
  ],
};
