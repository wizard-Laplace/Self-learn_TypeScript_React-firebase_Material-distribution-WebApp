import React, { FC } from "react";
import pencil from "../../assets/images/pencil.jpg";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

// 背景コンポーネントのの定義
const useStyle = makeStyles(() =>
	createStyles({
		background: {
			backgroundImage: `url(${pencil})`,
			backgroundSize: "cover",
			height: "100vh",
		},
		paper: {
			position: "relative",
			marginLeft: "auto",
			marginRight: "auto",
			top: "33%",
			width: "45%",
		},
		inputbase: {
			width: "80%",
		},
	})
);

const TopMain: FC = () => {
	const classes = useStyle();

	return (
		<div className={classes.background}>
			<Paper className={classes.paper}>
				<IconButton type="submit">
					<SearchIcon />
				</IconButton>
				<InputBase
					className={classes.inputbase}
					placeholder="検索する文字列を入力してください"
				/>
			</Paper>
		</div>
	);
};

export default TopMain;
