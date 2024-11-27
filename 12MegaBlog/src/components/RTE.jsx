/*
Editor from tinymce is directly available to use, but because we are designing it as a saperate component we need to give the editor's reference in the form where we are using it.
Here we use Controller available in react hook form.It works similar to forwardRef. We need to give control as a parameter to the component which is passed in the form when calling this component.
The render prop of the Controller component is a function that determines how the controlled component should be rendered and what events it should handle. It takes an object containing various properties like field, fieldState, and formState, and returns the React element to render.
*/
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({
  name,
  control,
  label,
  defaultValue = "",
  handleEditorChange,
}) {

  return (
    <div className="relative w-full">
      {label && (
        <label className="block mb-2 text-2xl text-left font-medium text-gray-900 pl-1 ">
          {label}
        </label>
      )}

      <Controller
        name={name || "Info"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="263s4dveibo00wts3nnp3ttfuo25q8k44aqcpacrkpmuq6bp"
            initialValue={defaultValue}
            init={{
              initialValue: { defaultValue },
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(content, editor) => {
              handleEditorChange(content, editor);
              onChange(content);
            }}
          />
        )}
      />
    </div>
  );
}
