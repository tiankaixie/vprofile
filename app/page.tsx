'use client'
import {Flex, Text, Spacer, Grid, GridItem, Box} from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <Flex bgColor={'black'} h={'2rem'} w={'100%'} p={1}>
                <Text as={'b'} color={'white'}>Tiankai Xie</Text>
                <Spacer/>
                <Text as={'b'} color={'white'}>Blog</Text>
                <Spacer/>
                <Text as={'b'} color={'white'}>CV</Text>
                <Spacer/>
                <Text as={'b'} color={'white'}>Publications</Text>
            </Flex>
            <Grid
                templateColumns={'repeat(12,1fr)'}
            >
                <GridItem colSpan={4}>
                    <Image src={'/profile.jpeg'} alt={
                        'profile'

                    }
                           width={'700'}
                           height={'200'}
                    />
                </GridItem>

                <GridItem colSpan={5} px={2}>
                    <Box pb={6}>
                        <Text as={'b'}>PROFESSIONAL SUMMARY</Text>
                        <Text>Ph.D. candidate in computer science with research interests including Interpretable
                            Machine Learning, Visual Analytics, and Human-computer Interaction. Possessing professional
                            expertise in Artificial Intelligence and proficiency in full-stack data pipeline design and
                            development. Dedicated to addressing machine learning vulnerabilities through innovative
                            solutions that enhance the interpretability and robustness of machine learning
                            models.</Text>
                    </Box>
                    <Box pb={6}>
                        <Text as={'b'}>EDUCATION</Text>
                        <Text>Arizona State University, Computer Science, Ph.D., Present</Text>
                        <Text>Stevens Institute of Technology, Computer Science, M.S., 2017</Text>
                        <Text>Beijing Forestry University, Computer Science, B.S., 2015</Text>
                    </Box>


                    <Box pb={6}>
                        <Text as={'b'}>PROFESSIONAL EXPERIENCE</Text>
                        <Text>Graduate Research Associate, VADER Lab, SCAI, Arizona State University, Tempe, AZ, 2018 - Present</Text>
                        <Text>Data Scientist, Intern, Epsilon Data Management, LLC, Chicago, IL,  May - Aug 2021</Text>
                        <Text>Co-founder, Robotgyms Inc., San Mateo, CA, 2017 - 2018</Text>
                    </Box>
                </GridItem>

                <GridItem colSpan={3}>

                </GridItem>

            </Grid
            >
        </>
    )
}
