import './section8.scss'
import '../Buttons/red_buttons.scss'
import button from '../JSON_Source/button.json'
import genus from '../photos/genussnetzlogo.png'

const Section8 = () => {

    return (
        <section className="section8">
            <div className="metzgerei">
                <div className="logotext">
                    <div className="logo">
                        <img src={genus} alt="img" />
                    </div>
                    <div className="text">
                        <div className="butoni">
                            <p className="metz-text">Metzgerei Brath ist Mitglied  im Genussnetzwerk</p>
                            <br />
                            {button.filter(btn => btn.id === 6).map(btn => (
                                <button key={btn.id}>
                                    <p>{btn.text}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section8;