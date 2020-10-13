import { Pages } from "@material-ui/icons";
import React, { Component, FC } from "react";
import TopHeader from "../components/topPage/topHeader";
import ImageItemList from "../components/resultPage/resultImageList";

// 検索結果(result)コンポーネント
const ResultPage: FC = () => {
	return (
		<div>
			<TopHeader />
			<ImageItemList />
		</div>
	);
};

export default ResultPage;
