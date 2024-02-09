import group from '../photos/Group.png'
import nagrada1 from '../photos/nagrada1.png'
import nagrada2 from '../photos/nagrada2.png'
import nagrada3 from '../photos/nagrada3.png'
import nagrada4 from '../photos/nagrada4.png'
import './section9.scss'

const Section9 = () => {

    return (
        <section className="section9">
            <div className="group2">
                <hr className="levi-hr" />
                <img src={group} alt="img" />
                <hr className="desni-hr" />
            </div>
            <div className="allprices">
                <p className="ausgezeichneter">Auszeichnungen</p>
                <div className="prices">
                    <div className="prices1">
                        <div className="nagrada1">
                            <img src={nagrada1} alt="img" />
                            <p>Tollit argumentum genau Saepe lobortis</p>
                        </div>
                        <div className="nagrada2">
                            <img src={nagrada2} alt="img" />
                            <p>Schneewittchen <br /> denique</p>
                        </div>
                    </div>
                    <div className="prices2">
                        <div className="nagrada3">
                            <img src={nagrada3} alt="img" />
                            <p>Grimms Märchen <br /> expetenda</p>
                        </div>
                        <div className="nagrada4">
                            <img src={nagrada4} alt="img" />
                            <p>Mettwurst mei <br /> ullum gloriatur.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group3">
                <hr className="levi-hr" />
                <img src={group} alt="img" />
                <hr className="desni-hr" />
            </div>
        </section>
    );
}

export default Section9;