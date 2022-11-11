import { Flex } from "@chakra-ui/react";
import { TokenInfo, TokenListProvider } from "@solana/spl-token-registry";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ListComp from "../components/ListComp";
import Search from "../components/Search";
import styles from "../styles/Home.module.css";
export declare type Token = {
	symbol: string;
	address: string;
	name: string;
	logoURI: string;
};
const Home: NextPage = () => {
	const [tokenlist, setTokenList] = useState<TokenInfo[]>([]);
	const [choice, setChoice] = useState<TokenInfo>();
	useEffect(() => {
		new TokenListProvider().resolve().then((tokens) => {
			const tokenList = tokens.filterByClusterSlug("mainnet-beta").getList();
			setTokenList(tokenList);
			// console.log(tokenList.find((token: Token) => token.symbol == "SRM"));
		});
	}, []);

	return (
		<Flex flexDir="column">
			<Search tokenList={tokenlist} setChoice={setChoice} />
			<ListComp
				choice={choice as TokenInfo}
				setChoice={setChoice}
				tokenlist={tokenlist}
			/>
		</Flex>
	);
};

export default Home;
