import './section7.scss'
import button from '../JSON_Source/button.json'
import '../Buttons/white_buttons.scss'

const Section7 = () => {

    return (
        <section className="section7">
            <div className="rellax">
                <div className="rellax2">
                    <p className="pp">Fleischversand</p>
                    <div className="dugmad1">
                        {button.filter(btn => btn.id === 5).map(btn => (
                            <button key={btn.id}>
                                <p className="ppp">{btn.text}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section7;