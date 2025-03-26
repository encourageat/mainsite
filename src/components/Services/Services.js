import './Services.css'
import NavBar from '../../components/NavBar/NavBar'
//import Footer from '../../components/Footer/Footer'
import freelanceImage from '../../img/freelance-development.jpg'
import teaching from '../../img/teaching.jpg'
import consulting from '../../img/consulting.jpg'
import PageHeader from '../../components/PageHeader/PageHeader'

const Services = () => {
    return (
        <div> 
        <header>
            <NavBar></NavBar>
            <PageHeader title={'Services..'}/>
        </header>
        <div className="container">
        <section style={{ 
            backgroundImage: `url(${freelanceImage})`
            }}>
            <div className="card">
                <h2>Freelance Development</h2>
                <p>Offering software development services in Java, Identity & Access Management, and cloud solutions. Providing high-quality, scalable applications tailored to client needs.</p>
            </div>
        </section>
        <section style={{ 
            backgroundImage: `url('${consulting}')` 
            }}>
            <div className="card">
                <h2>Consulting</h2>
                <p>Helping businesses optimize their IT strategy, implement IAM solutions, and improve security infrastructure with expert guidance.</p>
            </div>
        </section>

        <section style={{ 
            backgroundImage: `url('${teaching}')` 
            }}>    
            <div className="card">
                <h2>Training</h2>
                <p>Providing online training sessions on IAM, Java, and software development best practices, tailored for professionals and organizations.</p>
            </div>
        </section>
        </div>     
        </div>
      );    
}
export default Services;
