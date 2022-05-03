export async function getTodos() {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/ilorlando10"
	);
	const payload = await response.json();
	return payload;
}

export async function createTodo() {
	await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/ilorlando10",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([]),
		}
	);
}
export async function updateTodo(taskArray) {
	await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/ilorlando10",
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(taskArray),
		}
	);
}
export async function deleteTodo() {
	await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/ilorlando10",
		{
			method: "DELETE",
		}
	);
}
