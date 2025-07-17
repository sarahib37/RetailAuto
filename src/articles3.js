import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCar, faCreditCard, faUserSecret } from '@fortawesome/free-solid-svg-icons';

const articles = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faCar} />,
        name: "Preparing your Car",
        link: "https://www.cars.com/articles/how-should-i-prep-my-car-for-sale-to-a-dealer-1420680466320/",
        description: "Various things to do to prepare your car for it to sell quickly."
    },
    
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faNewspaper} />,
        name: "Creating an Advert",
        link: "https://www.autoflip.com.au/blog/how-to-write-perfect-car-listing",
        description: "A guide on how to write killer car adverts that would generate quick sales."
    },

    {
        id: 3,
        icon: <FontAwesomeIcon icon={faCreditCard} />,
        name: "Accepting Payment",
        link: "https://www.driveo.com/blog/safe-payment/",
        description: "Safe ways to accept car payment and remain secure."
    },

    {
        id: 4,
        icon: <FontAwesomeIcon icon={faUserSecret} />,
        name: "Avoiding Frauds",
        link: "https://news.motors.co.uk/car-scams-and-frauds-tips-and-information-to-avoid-them/",
        description: "Guide on how to prevent being a victim of fraudulent activities during car sale."
    }
]

export default articles