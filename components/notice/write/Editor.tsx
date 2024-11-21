"use client";

import dynamic from "next/dynamic";

const Toast = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  { ssr: false }
);

const Editor = () => {
  return (
    <Toast
      height="100%"
      hideModeSwitch={true}
      initialEditType="wysiwyg"
      toolbarItems={[
        ["heading", "bold"],
        ["ul", "ol"],
        ["code", "codeblock"],
      ]}
    />
  );
};

export default Editor;
