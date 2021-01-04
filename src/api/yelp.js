import axios from 'axios';

export default axios.create({

baseURL: 'https://api.yelp.com/v3/businesses',

headers: {

    Authorization : 
    'Bearer i1mvqfFCZb1OrvxepKBGZhf-4ScjbKJ9VDKcJN8XxJ7eNIQN1jxDe0CKX0luUKAWQM8ylbJPvMIxez1cygFoxBHv4o6oogvsI80FLoj0WxinbOk2KsQtZfnIBirGX3Yx'
}

});
