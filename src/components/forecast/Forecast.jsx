import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import './forecast.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    return (
        <div className='container'>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx} className='panel'>
                        <AccordionItemHeading className='panel'>
                            <AccordionItemButton className='panel'>
                                <div className='daily-item'>
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className='icon-small' />
                                    <label className='day'>{forecastDays[idx]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='panel'>
                            <div className="daily-details-grid">
                                <div className='card'>
                                    <div className="daily-details-grid-item">
                                        <label><span className='negrita'>Pressure:</span>{item.main.pressure}hP</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label><span className='negrita'>Humidity:</span>{item.main.humidity}%</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label><span className='negrita'>Clouds:</span>{item.clouds.all}%</label>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className="daily-details-grid-item">
                                        <label><span className='negrita'>Wind Speed:</span>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label><span className='negrita'>Sea Level:</span>{item.main.sea_level}m</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label><span className='negrita'>Feels Like:</span>{Math.round(item.main.feels_like)}°C</label>
                                    </div>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </div>
    )
}

export default Forecast