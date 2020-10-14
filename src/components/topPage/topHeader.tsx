import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// topHeaderコンポーネントの作成
const TopHeader: FC = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<h2>犬、動物、車、普通の車と検索すると画像表示ページへ遷移する</h2>
			</Toolbar>
		</AppBar>
	);
};

export default TopHeader;
