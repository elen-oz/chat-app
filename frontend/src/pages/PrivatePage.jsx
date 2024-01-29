import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setChannels, setMessages } from '../redux/dataSlice';
import routes from '../routes';
import {
  Heading,
  Text,
  Box,
  Grid,
  GridItem,
  Container,
  List,
  ListItem,
} from '@chakra-ui/react';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));

  if (userId && userId.token) {
    console.log(`Authorized`);
    return { Authorization: `Bearer ${userId.token}` };
  }

  return {};
};

const PrivatePage = () => {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.data.channels);
  const messages = useSelector((state) => state.data.messages);

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
          dispatch(setChannels(data.channels));
          dispatch(setMessages(data.messages));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchContent();
  }, [dispatch]);

  return (
    <>
      <Container maxW='container.lg'>
        <Heading w='100%'>Chat</Heading>
        <Grid
          h='100%'
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(3, 1fr)'
          gap={2}
        >
          <GridItem rowSpan={3} colSpan={1} bg='tomato'>
            <Box>
              <Text>Channels:</Text>
              {channels.length > 0 && (
                <List>
                  {channels.map((channel) => (
                    <ListItem key={channel.id}>{channel.name}</ListItem>
                  ))}
                </List>
              )}
            </Box>
          </GridItem>
          <GridItem rowSpan={3} colSpan={2} bg='papayawhip'>
            <Box>
              <Text>Messages:</Text>
              {messages.length > 0 && (
                <List>
                  {messages.map((message) => (
                    <ListItem key={message.id}>{message.text}</ListItem>
                  ))}
                </List>
              )}
            </Box>
          </GridItem>

          <GridItem rowSpan={3} colSpan={2} bg='papayawhip'>
            <Box></Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default PrivatePage;
