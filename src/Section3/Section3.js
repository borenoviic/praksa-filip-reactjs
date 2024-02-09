import buchen_img from '../photos/buchen.jpg'
import './section3.scss'
import button from '../JSON_Source/button.json'

const Section3 = () => {

    return (
        <section className="section3">
            <div className="buchen">
                <div className="lista">
                    <div className="list1">
                        <h2>
                            Buchen Sie den <br /> Grillkurs jetzt
                        </h2>
                        <ul>
                            <li>professioneller Lehrer</li>
                            <li>ausgezeichneter Metzger</li>
                            <li>1 Tag</li>
                            <li>lernen Sie die Kunst des Grillens</li>
                        </ul>
                        <div className="dugmad1">
                            {button.filter(btn => btn.id === 3).map(btn => (
                                <button key={btn.id}>
                                    <p>{btn.text}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="dry-aged-img">
                    <img src={buchen_img} id="buchen-img" alt="img" />
                </div>
            </div>
        </section>
    );
}

export default Section3;