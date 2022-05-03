import React, { useState, useEffect } from "react";
import { getTodos, createTodo, updateTodo } from "./api";

//include images into your bundle

//create your first component
const Home = () => {
	const [toDoInput, setToDoInput] = useState("");
	const [taskArray, setTaskArray] = useState([]);

	let toDoTasks = taskArray.map((task, index) => {
		return (
			<div className="list" key={task}>
				{task}{" "}
				<div className="button">
					<button
						className="deletebutton"
						onClick={() => removeTask(index)}>
						<i class="fa-solid fa-trash-can"></i>
					</button>
				</div>
			</div>
		);
	});
	let removeTask = (i) => {
		let filteredNumber = taskArray.filter((task, index) => i != index);
		setTaskArray(filteredNumber);
	};

	useEffect(() => {
		const fn = async () => {
			const apiTodos = await getTodos();
			setTaskArray(apiTodos.map((x) => x.label));
		};
		fn();
	}, []);
	useEffect(() => {
		const fn = async () => {
			await updateTodo(taskArray.map((x) => ({ label: x, done: false })));
		};
		fn();
	}, [taskArray]);
	return (
		<div>
			<div className="body">
				<div>
					<h1>To-Do List!!!</h1>
				</div>
				<div>
					<input
						type="text"
						onChange={(e) => setToDoInput(e.target.value)}
						value={toDoInput}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								setTaskArray([...taskArray, toDoInput]);
								setToDoInput("");
							}
						}}
						placeholder="Add To-Do!!!"
					/>

					<ul>{toDoTasks}</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
