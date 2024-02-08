import './css/section4.css'
import button from './button.json'
import './css/red_buttons.css'

const Section4 = () => {
    
    return (
        <section className="section4">
            <div className="handwerk">
                <h2>
                    Das Handwerk
                </h2>
                <h4>
                    alles über unsere Hausgemachte Produkte
                </h4>
                <p>
                    Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99
                    Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie
                    deutsch aliquip ex ea commodo consequat. <br /><br /> Wiener Schnitzel aute irure dolor in Guten Tag mollit
                    anim
                    Stuttgart. <br /><br /> id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id.
                    Ohrwurm
                    expetenda
                    nam an, his ei Reise euismod assentior
                </p>
                <div className="dugmad">
                    {button.filter(btn => btn.id === 4).map(btn => (
                        <button key={btn.id}>
                            <p>{btn.text}</p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section4;