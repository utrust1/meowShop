import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
import './Categorys.css';
import Footer from '../Footer/Footer';
const Categorys = () => {

    const [allcategory, setAllcategory] = useState()
    useEffect(() => {
        axios
          .get(`http://localhost:5000/category/cat`)
          .then((res) => {
            setAllcategory(res.data.result);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

	return <div className="container">
	   <header>
           {allcategory&&
          allcategory.map((ele)=>{

            return (
                <div>
                    <p>{ele.title}</p>
                    <p>{ele.description}</p>
                    <img src={ele.img}/>
                </div>
            )
          }) }
           
        
    </header>
    <Footer/>
	</div>
};

export default Categorys;
