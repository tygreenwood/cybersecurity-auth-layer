export default function StyledButton(props) {
    return (
        <button {...props} className={"p-2 rounded-sm bg-sky-500 hover:bg-sky-700"}>{props.children}</button>
    )
}