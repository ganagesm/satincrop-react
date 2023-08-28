const baseUrl = process.env.NODE_ENV === "production" 
? 'https://dev.triosource.com' 
: 'http://localhost:3000';

export default baseUrl;