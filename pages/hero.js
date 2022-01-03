
import {
    chakra,
    Box,
    useColorModeValue,
    Flex,
    SimpleGrid,
    GridItem,
    VisuallyHidden,
    Input,
    Button,
    Stack,
    Icon,
    Image,
    Spacer,
} from "@chakra-ui/react";


const KuttyHero = () => {
    const Feature = (props) => (
        <Flex alignItems="center" color={useColorModeValue(null, "white")} spacing={{ base: 2, md: 8 }} mb={3} fontSize="xs">
            <Icon
                boxSize={4}
                mr={1}
                color="green.600"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                ></path>
            </Icon>
            {props.children}
        </Flex>
    );
    return (
        <Box px={4} py={32} mx="auto">
            <Box
                w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                textAlign={{ base: "left", md: "center" }}
                mx="auto"
            >
                <Stack direction='row' justifyContent={{ base: "start", md: "center" }}>
                    <Image
                        boxSize='100px'
                        objectFit='cover'
                        src='/media/youtube.png'
                        alt='Youtube'
                    />
                    <Image
                        boxSize='100px'
                        objectFit='cover'
                        src='/media/arrow.png'
                        alt='Arrow'
                    />
                    <Image boxSize='100px' src='/media/apple.jpeg' alt='Apple music' />
                </Stack>

                <br />
                <chakra.h2
                    mb={3}
                    fontSize={{ base: "4xl", md: "5xl" }}
                    fontWeight={{ base: "bold", md: "extrabold" }}
                    color={useColorModeValue("gray.900", "gray.100")}
                    lineHeight="shorter"
                >
                    A secure, faster way to convert your favourite music videos to MP3
                </chakra.h2>
                <chakra.p
                    mb={6}
                    fontSize={{ base: "lg", md: "xl" }}
                    color="gray.500"
                    lineHeight="base"
                >
                    You can use this application to convert your youtube videos to MP3 files and download.
                </chakra.p>
                <SimpleGrid
                    as="form"
                    w={{ base: "full", md: 7 / 12 }}
                    columns={{ base: 1, lg: 6 }}
                    spacing={3}
                    pt={1}
                    mx="auto"
                    mb={8}
                >
                    <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
                        <VisuallyHidden>Your Email</VisuallyHidden>
                        <Input
                            mt={0}
                            size="lg"
                            type="email"
                            placeholder="Enter youtube URL."
                            required="true"

                        />
                    </GridItem>
                    <Button
                        as={GridItem}
                        w="full"
                        variant="solid"
                        colSpan={{ base: "auto", lg: 2 }}
                        size="lg"
                        type="submit"
                        // colorScheme="brand"
                        cursor="pointer"
                    >
                        Convert Video
                    </Button>
                </SimpleGrid>
                <Stack
                    display="flex"
                    direction={{ base: "column", md: "row" }}
                    justifyContent={{ base: "start", md: "center" }}
                    mb={3}
                    spacing={{ base: 2, md: 8 }}
                    fontSize="xs"
                    color="gray.600"
                >
                    <Feature>No credit card required</Feature>
                    <Feature>14 days free</Feature>
                    <Feature>Cancel anytime</Feature>
                </Stack>
            </Box>
        </Box>
    );
};

export default KuttyHero;
