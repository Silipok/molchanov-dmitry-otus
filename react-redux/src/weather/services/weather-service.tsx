
class WeatherService {
    async getWeather(city: string='Moscow', country: string='RU') {
        let answer = {
            weather: {
                temperature: 0,
                pressure: 0,
                humidity: 0
            },
            city: '',
            country: '',
            hasError: false,
        };

        let req: any = await fetch(`http://api.weatherstack.com/current?
                                             access_key=a25d02243d99d0a48f0f55bc8b1d564f&
                                             query=${city},${country}&
                                             unit=m`);
        if (req.status !== 200) {
            return answer = {...answer, hasError: true}
        } else {
            req = await req.json();
            console.log(req);
            if (req) {
                return answer = {
                    weather: {
                        temperature: req.current.temperature,
                        pressure: req.current.pressure,
                        humidity: req.current.humidity
                    },
                    city: req.location.name,
                    country: req.location.country,
                    hasError: false
                }
            } else {
                return answer = {...answer, hasError: true}
            }
        }
    }
}
export {WeatherService}