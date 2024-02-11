import styles from './app.module.css';
import OfferList from "../features/offerList";
import {mockApiResponse} from "../shared/constants";
import {formatApiResponse} from "../shared/utils";

function App() {
    const data = formatApiResponse(mockApiResponse);

    return (
        <div className={styles.root}>
            <OfferList data={data} apiResponse={mockApiResponse.services} />
        </div>
    );
}

export default App;
