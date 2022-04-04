import {
	AutoComplete,
	AutoCompleteInput,
	AutoCompleteItem,
	AutoCompleteList,
	AutoCompleteGroup,
} from "@choc-ui/chakra-autocomplete";

import React from "react";
import { Avatar, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { Token } from "../pages";
import { TokenInfo } from "@solana/spl-token-registry";

export default function Search({
	tokenList,
	setChoice,
}: {
	tokenList: TokenInfo[];
	setChoice: any;
}) {
	// const people = [
	// 	{ name: "Dan Abramov", image: "https://bit.ly/dan-abramov" },
	// 	{ name: "Kent Dodds", image: "https://bit.ly/kent-c-dodds" },
	// 	{ name: "Segun Adebayo", image: "https://bit.ly/sage-adebayo" },
	// 	{ name: "Prosper Otemuyiwa", image: "https://bit.ly/prosper-baba" },
	// 	{ name: "Ryan Florence", image: "https://bit.ly/ryan-florence" },
	// ];

	return (
		<Flex
			w="full"
			h="4rem"
			pos="absolute"
			bg={useColorModeValue("gray.400", "gray.600")}
			p={30}
			justifyContent="center"
		>
			<AutoComplete rollNavigation>
				<AutoCompleteInput
					variant="filled"
					onChangeCapture={(e: any) => {
						if (e.target.value.length === 0) {
							setChoice();
						}
					}}
					placeholder="Search..."
					autoFocus
				/>
				<AutoCompleteList>
					{tokenList.map((token) => (
						<AutoCompleteItem
							key={`option-${token.address}`}
							value={token.name}
							onClickCapture={() => setChoice(token)}
							textTransform="capitalize"
							align="center"
						>
							<Avatar size="sm" name={token.name} src={token.logoURI} />
							<Text ml="4">
								{token.name}({token.symbol})
							</Text>
						</AutoCompleteItem>
					))}
				</AutoCompleteList>
			</AutoComplete>
		</Flex>
	);
}
