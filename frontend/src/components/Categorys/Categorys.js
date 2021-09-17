import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
import './Categorys.css';
import Footer from '../Footer/Footer';
import { useHistory  } from "react-router";
const Categorys = () => {

    const history = useHistory();

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

      const ShowCategorys = ( title,id ) => {
          history.push(`/category/${title}/${id}`);
      }

	return <div className="container">
        <h4>Collections</h4>
        <div className="categorysection">
           {allcategory&&
          allcategory.map((ele)=>{
            return (
                <div onClick={()=>ShowCategorys(ele.title , ele._id)} className="categoryMain">
                    <img src={ele.img}/>
                    <h2>{ele.title}</h2>
                </div>
            )
          }) }
	</div>
    <Footer/>
    </div>
};

export default Categorys;
