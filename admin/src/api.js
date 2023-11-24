const api_key = () => {
    // const api = "https://localhost:5000/api";
    const api = process.env.REACT_APP_API_KEY;
    return api;
}

export default  api_key;