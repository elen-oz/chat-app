import { useEffect, useState } from 'react';
import axios from 'axios';
import routes from '../routes';
import { Flex, Text, Box, Heading } from '@chakra-ui/react';

const PrivatePage = () => {
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001',
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const { data } = await axiosInstance.get(routes.usersPath(), {
          headers: getAuthHeader(),
        });

        if (data && data.channels && data.messages) {
          setChannels(data.channels);
          setMessages(data.messages);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchContent();
  }, []);

  const getAuthHeader = () => {
    const userId = JSON.parse(localStorage.getItem('userId'));

    if (userId && userId.token) {
      console.log(`Authorized`);
      return { Authorization: `Bearer ${userId.token}` };
    }

    return {};
  };

  return (
    <Flex bg='gray.100' align='center' justify='center' h='100%'>
      <Text>Private Page 🤫</Text>
      <Heading>Chat</Heading>
      {channels.length > 0 && (
        <Box>
          <Text>Channels:</Text>
          {channels.map((channel) => (
            <Text key={channel.id}>{channel.name}</Text>
          ))}
        </Box>
      )}
      {messages.length > 0 && (
        <Box>
          <Text>Messages:</Text>
          {messages.map((message) => (
            <Text key={message.id}>{message.text}</Text>
          ))}
        </Box>
      )}
    </Flex>
  );
};

export default PrivatePage;
