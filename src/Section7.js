import './css/section7.css'
import button from './button.json'
import './css/white_buttons.css'

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