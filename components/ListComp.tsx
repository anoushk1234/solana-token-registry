import React from "react";
import {
	chakra,
	Flex,
	useColorModeValue,
	Button,
	useBreakpointValue,
	Stack,
	SimpleGrid,
} from "@chakra-ui/react";
import { TokenInfo } from "@solana/spl-token-registry";

export default function ListComp({
	choice,
	setChoice,
	tokenlist,
}: {
	choice: TokenInfo;
	setChoice: any;
	tokenlist: TokenInfo[];
}) {
	// const data = [
	// 	{ name: "Segun Adebayo", email: "sage@chakra.com" },
	// 	{ name: "Josef Nikolas", email: "Josef@mail.com" },
	// 	{ name: "Lazar Nikolov", email: "Lazar@mail.com" },
	// 	{ name: "Abraham", email: "abraham@anu.com" },
	// ];;

	return (
		<Flex
			w="full"
			bg="blue.800"
			p={25}
			alignItems="center"
			justifyContent="center"
		>
			<Stack
				mt="5rem"
				direction={{ base: "column", md: "column" }}
				w="full"
				bg={{ md: "blue.900" }}
				shadow="lg"
			>
				<SimpleGrid
					spacingY={3}
					columns={{ base: 1, md: 3 }}
					w={{ base: 120, md: "full" }}
					textTransform="uppercase"
					color={"white"}
					py={{ base: 1, md: 4 }}
					px={{ base: 2, md: 10 }}
					fontSize="md"
					fontWeight="hairline"
				>
					<span>Name</span>
					<span>Symbol</span>
					<span>Address</span>
				</SimpleGrid>
				{!choice ? (
					tokenlist.map((token: TokenInfo) => {
						return (
							<Flex
								direction={{ base: "row", md: "column" }}
								key={token.address}
							>
								<SimpleGrid
									spacingY={3}
									columns={{ base: 1, md: 3 }}
									w="full"
									py={2}
									color="white"
									px={10}
									fontWeight="hairline"
								>
									<span>{token.name}</span>
									<chakra.span
										textOverflow="ellipsis"
										overflow="hidden"
										whiteSpace="nowrap"
									>
										{token.symbol}
									</chakra.span>
									<chakra.span textOverflow="ellipsis" isTruncated={false}>
										{token.address}
									</chakra.span>
								</SimpleGrid>
							</Flex>
						);
					})
				) : (
					<Flex direction={{ base: "row", md: "column" }}>
						{console.log("here", choice)}
						<SimpleGrid
							spacingY={3}
							columns={{ base: 1, md: 3 }}
							w="full"
							py={2}
							color="white"
							px={10}
							fontWeight="hairline"
						>
							<span>{choice.name}</span>
							<chakra.span
								textOverflow="ellipsis"
								overflow="hidden"
								whiteSpace="nowrap"
							>
								{choice.symbol}
							</chakra.span>
							<chakra.span textOverflow="ellipsis" isTruncated={false}>
								{choice.address}
							</chakra.span>
						</SimpleGrid>
					</Flex>
				)}
			</Stack>
		</Flex>
	);
}
