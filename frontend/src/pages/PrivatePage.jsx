import { useEffect, useState } from 'react';
import axios from 'axios';
import routes from '../routes';
import { Flex, Text } from '@chakra-ui/react';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));

  if (userId && userId.token) {
    console.log(`Authorized`);
    return { Authorization: `Bearer ${userId.token}` };
  }

  return {};
};

const PrivatePage = () => {
  const [content, setContent] = useState('');
  useEffect(() => {
    const fetchContent = async () => {
      const { data } = await axios.get(routes.usersPath(), {
        headers: getAuthHeader(),
      });
    };

    fetchContent();
  }, []);

  return (
    <Flex bg='gray.100' align='center' justify='center' h='100%'>
      <Text>Private Page 🤫</Text>
      {content && <Text>{content}</Text>}
    </Flex>
  );
};
export default PrivatePage;
