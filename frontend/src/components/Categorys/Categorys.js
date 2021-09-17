import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
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
                    {ele.title}
                </div>
            )
          }) }
           
        
    </header>
    
	</div>
};

export default Categorys;
