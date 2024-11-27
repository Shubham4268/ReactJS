import React, {useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, Button, RTE, Select } from "../index";
import { useForm } from "react-hook-form";
import postService from "../../appwrite/config";

function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  // If user is editing the post all the fields in the form should already be filled with previous values.
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState,
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      Info: post?.Info || "",
      status: post?.status || "active",
      featuredImage: post?.featuredImage || undefined,
    },
  });
  const { isDirty, isValid } = formState;
  const [exceedLimit, setExceedLimit] = useState(false);

  const   handleEditorChange = useCallback((content, editor) => {
    if (content.length > 1500) {
      setExceedLimit(true);
    } else {
      setExceedLimit(false);
    }
  }, []);
  // When the form  is submitted, if the post is being edited then user can upload the new image and the old image is deleted automatically.The post is updated with new image. The user is navigated to the post where user can update the post title,content or status.
  const submit = async (data) => {
    if (post) {
      var fileId = post.featuredImage
      const file = data.image[0]
        ? await postService.uploadFiles(data.image[0])
        : null;
      if (file) {
        fileId = file.$id
      }
      const dbPost = await postService.updatePost(post.$id, {
        ...data,
        featuredImage: fileId,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
      // If the post is being made for the first time, first the image is uploaded, then new post will created according to the data collected using the form, here the userId is taken from the userdata that is stored in the store while logging in. Then user is navigated to new post page.
    } else {
      const file = data.image[0]
        ? await postService.uploadFiles(data.image[0])
        : null;
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await postService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  /*the slug is updated in the useEffect hook Whenever the title field changes,
  watch: This is a function provided by the useForm hook from React Hook Form. It allows you to subscribe to changes in form values. watch is used inside a useEffect hook to watch for changes in the title field. Whenever the title field changes, the provided callback function is executed, which updates the value of the slug field based on the transformation logic defined in the slugTransform function.
  In react useEffect, we can return a callback that can stop a method from running again & again 
  setValue: This function is provided by the useForm hook from React Hook Form. It allows you to dynamically set the value of a form field. In the code, setValue is used to update the value of the slug field based on the transformation logic defined in the slugTransform function.*/

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name == "title") {
        setValue("slug", slugTransform(value.title));
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <form className="flex flex-wrap my-8 justify-around border border-black rounded-3xl backdrop-blur-sm pt-8 " onSubmit={handleSubmit(submit)}>
      <div className="w-1/2 px-2">
        <Input
          label="Title: "
          placeholder="Enter the Title of your Blog"
          className="mb-4"
          {...register("title", { required: true })}
        />
        {/* /*the slug is updated in the Input component, This is done when the user inputs text directly into the slug field. The onInput event handler updates the slug value based on the transformation logic defined in the slugTransform function. */}
        <Input
          label="Slug: "
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value)),
              { shouldValidate: true };
          }}
        />
        {/* getValues: This function is also provided by the useForm hook. It returns an object containing the current values of all the form fields. In the code, getValues("content") is used to retrieve the default values for the content field, which is then passed as defaultValues to the RTE component. */}
        
        <RTE
          label="Info: "
          name="Info"
          control={control}
          defaultValues={getValues("Info")}
          handleEditorChange={handleEditorChange}
        />{exceedLimit && (
          <p className="text-red-600  pb-4 absolute top-56 left-52 ">
            Character limit exceeded (1500 characters)
          </p>
        )}
        
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image: "
          type="file"
          className="mb-4"
          {...register("image", { required: !post })}
          accept="image/jpg, image/jpeg, image/png, image/gif,"
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={postService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status:"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          disabled={!isValid || !isDirty || exceedLimit}
          type="submit"
          bgcolor={
            post
              ? !isValid || !isDirty
                ? "bg-green-600"
                : "bg-green-600 hover:bg-green-700"
              : undefined
          }
          className="w-full mt-5"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
