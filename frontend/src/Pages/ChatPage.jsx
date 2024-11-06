import React, { useEffect, useState } from "react";
import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
// import apiRequest from "../Lib/apiRequest";

const ChatPage = () => {
  // const [chats, setChats] = useState([]);

  // const fetchChats = async () => {
  //   const { data } = await apiRequest.get(`/chat`);
  //   setChats(data);
  // };
  // useEffect(() => {
  //   fetchChats();
  // }, []);
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
