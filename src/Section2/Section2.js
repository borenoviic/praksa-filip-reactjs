import './section2.scss'
import slika1 from '../photos/prva.png'
import slika2 from '../photos/druga.png'
import slika3 from '../photos/treca.png'
import slika4 from '../photos/cetvrta.png'
import button from '../JSON_Source/button.json'
import '../Buttons/red_buttons.scss'

const Section2 = () => {

    return (
        <section className="section2">
            <div className="dry-aged">
                <div className="ostalo">
                    <div className="ostalo2">
                        <h2>
                            Dry aged
                        </h2>
                        <h3>
                            Alte Wutz, Dry Aged
                        </h3>
                        <p className='pp'>
                            Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore
                            magna 99
                            Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
                            Sprechen
                            Sie
                            deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit
                            Guten
                            Tag
                            mollit
                            anim Stuttgart. <br /><br /> id latine indoctum complectitur HugoClub Mate mea meliore denique
                            nominavi
                            id.
                            Ohrwurm expetenda nam an, his ei Reise euismod assentior.
                        </p>
                        <div className="dugmad">
                            {button.filter(btn => btn.id === 1 || btn.id === 2).map(btn => (
                                <button key={btn.id}>
                                    <p>{btn.text}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="dry-aged-img">
                    <div className="slike">
                        <img src={slika4} id="cetvrta" alt="img" />
                        <div className="slikee">
                            <img src={slika1} id="prva" alt="img" />
                            <img src={slika2} id="druga" alt="img" />
                            <img src={slika3} id="treca" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section2;