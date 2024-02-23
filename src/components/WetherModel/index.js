import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = '33c92b0552e0eea71460739025382726';

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            fetchData();
        }
    };

    const getCurrentDate = () => {
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        const currentDate = new Date().toLocaleDateString('en-US', options);
        return currentDate;
    };

    return (
        <div className=" pl-12 bg-cover bg-center min-h-screen w-screen bg-gradient-to-br from-blue-500 to-purple-500 bImg">
            <div className="flex mb-4 gap-4">
                <div className="mr-2">
                    <label className="block text-sm font-bold text-white    ">
                        Latitude:
                    </label>
                    <input
                        className="w-full mt-1 p-2 border rounded-md"
                        type="text"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                    />
                </div>
                <div className="mr-2">
                    <label className="block text-sm font-bold text-white">
                        Longitude:
                    </label>
                    <input
                        className="w-full mt-1 p-2 border rounded-md"
                        type="text"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <button
                    className="font-bold text-[15px] text-blue bg-orange-500 text-white h-10 mt-6 rounded-md w-32"
                    onClick={fetchData}
                >
                    Get Weather
                </button>
            </div>

            <hr className=" border-t mt-6 border-gray-300" />
            <div className="flex gap-4 mt-8">
                <div className="flex-1 ">
                    {weatherData && (
                        <div className="mt-4">
                            <p className="font-bold text-[45px] text-white">
                                {weatherData.name}, {weatherData.sys.country}
                            </p>
                            <p className="font-bold text-[25px] text-white">{getCurrentDate()}</p>
                                <img
                                    className="mt-2"
                                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                    alt="Weather Icon"
                                />
                                <p className="font-bold text-[50px] text-white">{weatherData.main.temp}°C</p>
                                <p className="font-bold text-[25px] text-white">{weatherData.weather[0].description}</p>

                        </div>
                    )}
                </div>
                <div className="flex-1">
                    <div className="flex flex-col">

                        <div className="flex mb-4">
                            <div className="mr-2">
                                <label className="block text-sm font-bold text-gray-700">
                                    High:
                                </label>
                                <input
                                    className="w-full mt-1 p-2 border rounded-md"
                                    type="text"
                                    disabled
                                />
                            </div>
                            <div className="mr-2">
                                <label className="block text-sm font-bold text-gray-700">
                                    Wind:
                                </label>
                                <input
                                    className="w-full mt-1 p-2 border rounded-md"
                                    type="text"
                                    disabled
                                />
                            </div>
                            <div className="mr-2">
                                <label className="block text-sm font-bold text-gray-700">
                                    Sunrise:
                                </label>
                                <input
                                    className="w-full mt-1 p-2 border rounded-md"
                                    type="text"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-2">
                                <label className="block text-sm font-bold text-gray-700">
                                    Low:
                                </label>
                                <input
                                    className="w-full mt-1 p-2 border rounded-md"
                                    type="text"
                                    disabled
                                />
                            </div>
                            <div className="mr-2">
                                <label className="block text-sm font-bold text-gray-700">
                                    Rain:
                                </label>
                                <input
                                    className="w-full mt-1 p-2 border rounded-md"
                                    type="text"
                                    disabled
                                />
                            </div>
                            <div className="mr-2">
                                <label className="block text-sm font-bold text-gray-700">
                                    Sunset:
                                </label>
                                <input
                                    className="w-full mt-1 p-2 border rounded-md"
                                    type="text"
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
