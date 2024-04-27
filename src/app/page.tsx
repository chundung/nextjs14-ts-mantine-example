import Image from "next/image";
import Link from 'next/link';
import { Button, Flex } from '@mantine/core';

export default function Home() {
  return (
  <>
  <Flex align='center' justify='center'>
      <Button component={Link} href="/double-header">
      Next link button
    </Button>
    </Flex>
    </>
  );
}
