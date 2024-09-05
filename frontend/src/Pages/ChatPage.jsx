import React, { useEffect } from "react";
import apiRequest from "../Lib/apiRequest";

const ChatPage = () => {
  const fetchChats = async () => {
    const { data } = await apiRequest.get(`/chat`);
    console.log(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return <div>ChatPage</div>;
};

export default ChatPage;
