import './css/red_buttons.css'

const RedButtons = (props) => {
    const buttons = props.buttons;

    return (
        <div className="buttons">
            <button>
                {buttons.map((dugme) => (
                    <p key={dugme.id}>{dugme.body}</p>
                ))}
            </button>
        </div>
    );
}

export default RedButtons;