import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
function App() {
    return (
        <BrowserRouter>
            <Layout></Layout>
        </BrowserRouter>
    );
}
{
    /* <Routes>
                <Route
                    loader={(props) => {
                        return <div>
                            <div className="container">
                                <Header {...props} />
                                <div className="main">
                                    <Routepages></Routepages>
                                </div>
                            </div>
                            <Footer {...props} />
                        </div>;
                    }}
                ></Route>
            </Routes> */
}
export default App;
