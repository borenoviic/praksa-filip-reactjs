const WhiteButtons = (props) => {
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

export default WhiteButtons;