import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// topHeaderコンポーネントの作成
const TopHeader: FC = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<h2>title</h2>
			</Toolbar>
		</AppBar>
	);
};

export default TopHeader;
