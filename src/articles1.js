import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faShield, faCoins, faClipboard } from '@fortawesome/free-solid-svg-icons';

const articles = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
        name: "What's it worth",
        link: "https://www.nerdwallet.com/article/loans/auto-loans/whats-my-car-worth",
        description: "Various tools to help you estimate your car values."
    },
    
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faShield} />,
        name: "Security advice",
        link: "https://www.hdfcergo.com/blogs/car-insurance/safety-tips-to-follow-when-selling-your-car",
        description: "Various safety tips to follow when selling your car to safeguard your security."
    },

    {
        id: 3,
        icon: <FontAwesomeIcon icon={faCoins} />,
        name: "Car Finance & Loans",
        link: "https://www.marketwatch.com/guides/car-loans/how-to-sell-a-car-with-a-loan/",
        description: "Guide on how to sell your car with a loan whether your vehicle have a positive or negative equity."
    },

    {
        id: 4,
        icon: <FontAwesomeIcon icon={faClipboard} />,
        name: "Check a Car's History",
        link: "https://www.forbes.com/advisor/car-insurance/vehicle-history/",
        description: "Guide on how to check a car's history and spot red flags."
    }
]

export default articles