"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const [userPosts, setUserPosts] = useState([]);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPost();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page.`}
      data={userPosts}
    />
  );
};

export default UserProfile;
