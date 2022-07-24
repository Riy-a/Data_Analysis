import { useMediaQuery } from "react-responsive";


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 415, maxWidth: 767 });
  return isMobile ? children : null;
};
const Iphone11 = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 391, maxWidth: 414 });
  return isMobile ? children : null;
};
const Iphone12pro = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 361, maxWidth: 390 });
  return isMobile ? children : null;
};
const Iphone12mini = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 360 });
  return isMobile ? children : null;
};

const ResponsiveResults = ({
  weather,
  feelsLike,
  country,
  place,
  weatherIcon,
}) => (
  <div>
    <Desktop>
      <div className="Desktop">
        <div className="weather-icon-and-title">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt="weather icon"
          />
          <h3>{weather}</h3>
        </div>
        <p>Feels like {feelsLike}°C</p>
        <i>
          <p>
            {place}, {country}
            
          </p>

          
        </i>
       
          
        
        
      </div>
      
    </Desktop>
    <Tablet>
      <div className="Tablet">
        <div className="weather-icon-and-title">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt="weather icon"
          />
          <h3>{weather}</h3>
        </div>
        <p>Feels like {feelsLike}°C</p>
        <i>
          <p>
            {place}, {country}
          </p>
        </i>
        
      </div>
    </Tablet>
    <Mobile>
      <div className="Mobile">
        <div className="weather-icon-and-title">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt="weather icon"
          />
          <h3>{weather}</h3>
        </div>
        <p>Feels like {feelsLike}°C</p>
        <i>
          <p>
            {place}, {country}
          </p>
        </i>
      </div>
      
    </Mobile>
    <Iphone11>
      <div className="Iphone11">
        <div className="weather-icon-and-title">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt="weather icon"
          />
          <h3>{weather}</h3>
        </div>
        <p>Feels like {feelsLike}°C</p>
        <i>
          <p>
            {place}, {country}
          </p>
        </i>
      </div>
    </Iphone11>
    <Iphone12pro>
      <div className="Iphone12pro">
        <div className="weather-icon-and-title">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt="weather icon"
          />
          <h3>{weather}</h3>
        </div>
        <p>Feels like {feelsLike}°C</p>
        <i>
          <p>
            {place}, {country}
          </p>
        </i>
      </div>
    </Iphone12pro>
    <Iphone12mini>
      <div className="Iphone12mini">
        <div className="weather-icon-and-title">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt="weather icon"
          />
          <h3>{weather}</h3>
        </div>
        <p>Feels like {feelsLike}°C</p>
        <i>
          <p>
            {place}, {country}
          </p>
        </i>
      </div>
    </Iphone12mini>
  </div>
);

export default ResponsiveResults;
