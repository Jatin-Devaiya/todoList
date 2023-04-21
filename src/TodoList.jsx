import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const ToDoList = (props) => {
    return (
        <>

            <li>{props.text}</li>

            <button className="btn btn-danger"
                onClick={() => {
                    props.onSelect(props.id)
                }}
            >-</button>
        </>
    )
}
export default ToDoList;