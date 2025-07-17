import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCar, faFile, faWallet } from '@fortawesome/free-solid-svg-icons';

const articles = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faGasPump} />,
        name: "Choosing a Fuel Type",
        link: "https://www.weloop.org/en/fuel-guide-a-tool-to-choose-your-car/",
        description: "Choose your new car based on economic and environmental factor for various fuel types."
    },
    
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faCar} />,
        name: "Booking a Test Drive",
        link: "https://www.carwow.co.uk/blog/test-drive-checklist-guide-new-and-used-cars#gref",
        description: "A guide on how to book a test drive to make sure your new car is right for all your needs."
    },

    {
        id: 3,
        icon: <FontAwesomeIcon icon={faWallet} />,
        name: "Buying on Finance",
        link: "https://www.which.co.uk/reviews/new-and-used-cars/article/car-finance-explained-aOFAj9L8DMQv",
        description: "Explore various car finance options to determine which one suits you best."
    },

    {
        id: 4,
        icon: <FontAwesomeIcon icon={faFile} />,
        name: "Sorting the Paperwork",
        link: "https://www.calavankiawest.com/car-paperwork.htm",
        description: "Guide on how to organize the paperwork when buying a car."
    }
]

export default articles