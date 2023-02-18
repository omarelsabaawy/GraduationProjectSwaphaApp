import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { AddIcon } from '@chakra-ui/icons';
// import { ChatState } from '../Context/ChatProvider';
// import GroupChatModal from './GroupChatModal';
// import ChatLoading from './ChatLoading';
// import { getSender } from '../config/ChatLogics';

function Messages() {
  //     const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  //   const [loggedUser, setLoggedUser] = useState();

  //   const fetchChats = async () => {
  //     try {
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${user.Token}`
  //         }
  //       }
  //       const { data } = await axios.get("/api/chat", config);
  //       console.log(data);
  //       setChats(data);
  //     } catch (error) {
  //       // Handle error
  //     }
  //   }

  //   useEffect(() => {
  //     setLoggedUser(JSON.parse(localStorage.getItem('userInfo')));
  //     fetchChats();
  //   }, []);

  return (
    <div style={{ height: '500px' }}>
      <Card
        style={{
          //   display: selectedChat ? 'none' : 'flex',
          display: 'flex',
          width: '100%', maxWidth: '31%'
        }}
      >
        <Card.Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'white'
          }}
        >
          <span style={{ fontSize: '28px', fontFamily: 'Work sans' }}>My Chats</span>
          {/* <GroupChatModal> */}
          <Button variant="primary" style={{ fontSize: '17px' }}>
            {/* <AddIcon /> */}
            New Group Chat
          </Button>
          {/* </GroupChatModal> */}
        </Card.Header>
        <Card.Body style={{ background: '#F8F8F8', height: '100%', overflowY: 'hidden' }}>
          <ListGroup>
            <ListGroupItem>
              hamada
            </ListGroupItem>
            <hr />
            <ListGroupItem>
              hamada
            </ListGroupItem>
            <hr />
            <ListGroupItem>
              hamada
            </ListGroupItem>
          </ListGroup>
          {/* {chats ? (
            <ListGroup>
              {chats.map((chat) => (
                <ListGroup.Item
                  key={chat._id}
                  onClick={() => setSelectedChat(chat)}
                  active={selectedChat === chat}
                  style={{ cursor: 'pointer' }}
                >
                  {chat.isGroupChat ? (
                    chat.chatName
                  ) : (
                    getSender(loggedUser, chat.users)
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <ChatLoading />
          )} */}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Messages