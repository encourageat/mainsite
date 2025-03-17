import './Training.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'
import Footer from '../../components/Footer/Footer'

const Training = () => {
    return (
        <div className="Training"> 
        <div>
            <PageHeader title={'Training Details..'}/>
        </div>      
        <div className="Trainingdetails">
        <p>
        <h2>Course Details</h2> <h2>Identity and Access Management with main focus on Keycloak</h2>
       Part -1  <br/>
       Pre-requisite: none <br/>
       <br/>Topics:
        <br/>What is IAM?<br/>Single Sign-On(SSO)<br/>
        Encryption, Hashing and Encoding, <br/>
        SAML 2, OAuth 2 and OpenID Connect in detail <br/>
        JWT Token, Digital Signature. <br/>
        Encryption, Hashing and Encoding. <br/>
        4 A's of IAM<br/>
        Multifactor authentication <br/>Conditional authentication <br/>
        Practical Session
        <br/>
        Fee for Part 1 - INR 4500 (in India). Developed nations US $ 80
        <br/> <br/>
        Part -2  <br/>
        Pre-requisite: Knowledge of Java programming in addition to Part 1 participation<br/><br/> For more details, time slots and to enrole please contact in the mail id encourageat@gmail.com
        </p>
        <img src={pinkflower} alt="pink flower image"></img>
        </div>
        <Footer/>
        </div>
      );    
}
export default Training;