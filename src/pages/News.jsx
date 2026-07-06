import React from 'react'
import { ThemeContext } from '../CreateContext';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import NewsCards from '../components/NewsCards';

const News = () => {

    const [news, setnews] = useState([]);
    const [loading, setloading] = useState(true);

    async function fetchData() {
        try {
            setloading(true);
            
            // 1. Read the API key securely from Vite's environment variables
            const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
            console.log("apikey",apiKey)
            
            // 2. Use a template literal to insert the key into your fetch URL
            let data = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`);
            
            let res = await data.json();
            console.log(res)
            if(res.articles) {
                setnews(res.articles);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setloading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        console.log(news);
    }, [news])

    const { theme, settheme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen col-span-3 px-6 py-8 ${theme === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-black text-white'
            }`}>
            <div className="flex items-center gap-3 mb-10">
                <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill={`${theme === 'dark' ? 'white' : 'black'}`}><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm80-80h480v-80H240v80Zm0-160h160v-240H240v240Zm240 0h240v-80H480v80Zm0-160h240v-80H480v80ZM160-200v-560 560Z" /></svg>
                <h1 className="text-4xl font-extrabold">News</h1>
            </div>

            <div className='flex gap-16 flex-wrap justify-center items-center'>
                {
                    loading === true ? (
                        <div className="flex justify-center items-center min-h-[50vh]">
                            <div
                                className={`w-16 h-16 border-4 border-dashed rounded-full animate-spin ${theme === "dark"
                                        ? "border-white border-t-blue-500"
                                        : "border-gray-300 border-t-blue-600"
                                    }`}
                            ></div>
                            <span
                                className={`ml-4 text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"
                                    }`}
                            >
                                Loading News...
                            </span>
                        </div>
                    ) : (
                        news.length > 0 ? news.map((items, index) => {
                            return (
                                // Added a backup key using index in case items.id is missing/undefined from the API
                                <NewsCards key={items.id || index} content={`${items.content}`} description={`${items.description}`} image={`${items.image}`} title={items.title} />
                            )
                        }) : <div>empty</div>)
                }
            </div>
        </div>
    )
}

export default News