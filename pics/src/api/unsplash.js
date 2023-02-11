import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization : 'Client-ID Cwo8L2PBpDWDs2CPIc6TRX9q0HLxk7s3sKV1gmakvDo'
    }
})