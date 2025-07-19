import { useApiClient } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { View, Text, Alert } from "react-native";
const useCreatePost = () => {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const api = useApiClient();
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: async (postData: { content: string; imageUri?: string }) => {
      const formData = new FormData();

      if (postData.content) formData.append("content", postData.content);

      if (postData.imageUri) {
        const uriParts = postData.imageUri.split(".");
        const fileType = uriParts[uriParts.length - 1].toLowerCase();

        const mimeTypeMap: Record<string, string> = {
          png: "image/png",
          gif: "image/gif",
          webp: "image/webp",
        };

        const mimeType = mimeTypeMap[fileType] || "image/jpeg";

        formData.append("image", {
          uri: postData.imageUri,
          name: `image.${fileType}`,
          type: mimeType,
        } as any);
      }

      return api.post("/post", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      setContent("");
      setSelectedImage("");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      Alert.alert("Success", "Post created successfully");
    },
    onError: () => {
      Alert.alert("Error", "Failed to create post.Please try again");
    },
  });
};
export default useCreatePost;
