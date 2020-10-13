import React, { FC, useState, useEffect } from "react";
import firebase from "../../firebase";
import { TileData } from "../../types/types";
import { useParams, useHistory } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			display: "flex",
			flexWrap: "wrap",
			width: "80%",
			textAlign: "center",
			marginTop: "2%",
		},
		tileImage: {
			height: "218px",
			width: "218px",
		},
	})
);

// コンポーネント
const ImageItemList: FC = () => {
	const [data, setData] = useState<TileData[]>([]);
	const { keyword } = useParams();
	const classes = useStyles();
	const history = useHistory();
	// 非同期ストリーム
	const getData = async (searchWord: string | undefined) => {
		const db = firebase.firestore();
		const tileDataRef = db.collection("tileData");
		const searchedData = tileDataRef.where(
			"keyword",
			"array-contains",
			searchWord
		);
		const snapShot = await searchedData.get();
		const temporaryData: object[] = [];

		snapShot.docs.map((doc) => {
			temporaryData.push(doc.data());
		});

		setData(temporaryData as TileData[]);
	};

	// ループ防止にuseEffectを使用
	useEffect(() => {
		getData(keyword);
	}, []);
	return (
		<div className={classes.root}>
			{data.map((tile) => (
				<div>
					<Button onClick={() => history.push("/download/" + tile.title)}>
						<img
							className={classes.tileImage}
							src={tile.image}
							alt={tile.title}
						/>
					</Button>
					<h3>{tile.title}</h3>
				</div>
			))}
		</div>
	);
};

export default ImageItemList;
