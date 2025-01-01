import './Services.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'
import Footer from '../../components/Footer/Footer';

const Services = () => {
    return (
        <div className="Services"> 
        <div>
            <PageHeader title={'Service Details..'}/>
        </div>
        <div className="Servicedetails">
        <p>
            Email: 
            <br/>
            georgeth471@gmail.com
        </p>
        <img src={pinkflower} alt="pink flower image"></img>
        </div>
        <Footer/>
        </div>
      );   
}
export default Services;