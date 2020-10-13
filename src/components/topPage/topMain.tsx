import React, { FC, useState } from "react";
import pencil from "../../assets/images/pencil.jpg";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

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

// 検索窓コンポーネント
const TopMain: FC = () => {
	const classes = useStyle();
	// const [値を保持する変数, 変数の値を変える関数] = useState(初期値);4
	const [keyword, setKeyword] = useState("");
	const history = useHistory();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(event.target.value);
	};

	// enter押下でurlを変更するロジック
	const handleSubmit = () => {
		history.push("/search/" + keyword);
	};

	return (
		<div className={classes.background}>
			<Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
				<IconButton type="submit">
					<SearchIcon />
				</IconButton>
				<InputBase
					className={classes.inputbase}
					placeholder="検索する文字列を入力してください"
					onChange={handleChange}
				/>
			</Paper>
		</div>
	);
};

export default TopMain;
