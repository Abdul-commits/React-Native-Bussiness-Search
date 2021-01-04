import { useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {

    const[results,setResults] = useState([]);
    const[errormessage, setErrormsg] = useState('');
    
  
    const SearchApi = async(Searchterm)=> {
      try {
  const response = await yelp.get ('/search', {
    params: {
      limit: 50,
      term: Searchterm,
      location: 'san jose'
  
    }
  });
  setResults(response.data.businesses);
      } catch (error) {
  
        setErrormsg('something went wrong');
      }
    };
  
    // Call searchh Api 
    // when component is first rendered
  
    //SearchApi ('pasta');
    useEffect(() => {
      SearchApi('Restaurant');
  
    }, []);

    return[SearchApi, results,errormessage];

};