import { useState } from "react";

const actionToDo = {
	label: "",
	status: false,
}

const Todolist = () => {

	const [task, setTask] = useState(actionToDo)
	const [list, setList] = useState([])

	const handleChange = (event) => {
		setTask({
			...task,
			label: event.target.value
		})
	}

	const pressKeyboard = (event) => {
		if (event.code === "Enter" && task.label.trim() !== "") {
			setList([
				...list,
				task,
			])
		setTask({
			...task,
			label: "",
		})
		}
	}

	const toDelete = (id) => {
		const newTask = list.filter((item, index) => id !== index)
		setList(newTask);
	}

	return (
		<>
			<div className="container">
				<h1>todos</h1>
				<div className="screen">
					<form
						onSubmit={(event) => { event.preventDefault() }}>
						<input type="text" placeholder="What needs to be done?" value={task.label}
							onChange={handleChange}
							onKeyDown={pressKeyboard}
						/>
					</form>
					<ul>
						{list.map((item, index) => {
							return (
								<li key={index} className="delete-action"> 
								{ item.label }
									<span className="delete-btn" onClick={() => toDelete(index)}>⨉</span>
								</li>
							)
						})}
					</ul>
					<div className="count">
						<span>
						{
							`${list.length} item left`
						}
						</span>
					</div>
				</div>
				<div className="tab"></div>
				<div className="tabs"></div>
			</div>
		</>
	);
};

export default Todolist;