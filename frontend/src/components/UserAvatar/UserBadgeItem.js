import { CloseIcon} from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react'

const UserBadgeItem = ({user, handleFunction}) => {
  return (
    <Button
        px={2}
        borderRadius="lg"
        m={1}
        mb={2}
        variant="solid"
        fontSize={12}
        colorScheme="purple"
        cursor="pointer"
        onClick={handleFunction}
    >
        {user.name}
        <CloseIcon pl={1} />
    </Button>
  )
};

export default UserBadgeItem;