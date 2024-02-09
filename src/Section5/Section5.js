import './section5.scss'
import group from '../photos/Group.png'
import rind from '../photos/rind.png'
import schwein from '../photos/schwein.png'
import hahnchen from '../photos/hahnchen.png'
import wurstchen from '../photos/wurstchen.png'

const Section5 = () => {
    return (
        <section className="section5">
            <div className="group">
                <hr className="levi-hr" />
                <img src={group} alt="img" />
                <hr className="desni-hr" />
            </div>
            <div className="photos">
                <div className="photos1">
                    <img src={rind} alt="img" className="schwein" />
                    <img src={schwein} alt="img" />
                </div>
                <div className="photos2">
                    <img src={hahnchen} alt="img" className="wurstchen" />
                    <img src={wurstchen} alt="img" />
                </div>
            </div>
        </section>
    );
}

export default Section5;