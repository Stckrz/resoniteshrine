import React, { useState, SetStateAction } from 'react';
import { ArticleModel } from '../../../models/articleModels';

interface ArticleFormProps {
	articleInfo: ArticleModel,
	setArticleInfo: React.Dispatch<SetStateAction<ArticleModel>>
}
const ArticleForm: React.FC<ArticleFormProps> = ({ articleInfo, setArticleInfo }) => {
	const [title, setTitle] = useState("")
	const [articleType, setArticleType] = useState("Article")
	const [summary, setSummary] = useState("")
	const [formShown, setFormShown] = useState(true);
	const [errorMessages, setErrorMessages] = useState<string[]>([]);

	const validArticleCheck = () => {
		const errorMessages = [];
		if (title === "") {
			errorMessages.push("Field must not be empty: 'Title'")
		}
		if (articleType === "") {
			errorMessages.push("Field must not be empty: 'ArticleType'")
		}
		if (summary === "") {
			errorMessages.push("Field must not be empty: 'Summary'")
		}

		if (errorMessages.length === 0) {
			articleInfoHandler()
		} else {
			setErrorMessages(errorMessages)
		}
	}

	const articleInfoHandler = () => {
		setArticleInfo({
			...articleInfo,
			title: title,
			articleType: articleType,
			summary: summary,
		})
		setFormShown(false)

	}
console.log(articleType)
	return (
		formShown
			? <div className="flex gap-2 flex-col justify-between w-11/12 md:w-2/3 border p-2">Article Info:
				<div>Title:</div>
				<input
					className={"ez-input"}
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<div>Article Type:</div>
				<input
					className={"ez-input"}
					value={articleType}
					onChange={e => setArticleType(e.target.value)}
				/>
				<div>Summary:</div>
				<textarea
					className={"ez-input resize-none"}
					value={summary}
					onChange={e => setSummary(e.target.value)}
				/>
				<div className="flex justify-between">
					<div>
						{errorMessages.length > 0 &&
							errorMessages.map((error, index) => {
								return (
									<div className="text-red-700" key={index}>{error}</div>
								)
							})
						}
					</div>
					<button className="ez-button" onClick={() => { validArticleCheck() }}>update</button>
				</div>
			</div>
			:
			<div className="flex gap-2 flex-col justify-between w-2/3 border p-2">Article Info:
				<button className={"ez-button"} onClick={() => { setFormShown(true) }}>Edit</button>
			</div>
	)
}

export default ArticleForm;
