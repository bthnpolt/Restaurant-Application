import axios from "axios";

export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer -dqAbKxmnkbB0mefJT_-72U0-ZpisE_8nEplEfVVpJ8EWd3jfP_w2aihXTbLBB-SyMQR65568SFRzWPnuL5hhDtywtDk5qxiCoWuMAKpEP72kc9xK2vz1PVkxfXwZXYx',

    },

});