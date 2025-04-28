import Banner from "../../feature/banner";
import OurBrandDiff from "../../feature/ourBrandDiff";
import NewCeramics from "../../feature/newCeramics";
import OurPopularProducts from "../../feature/ourPopularProducts";
import Registration from "../../feature/registration";
import OurProducts from '../../data/products-dummyimage-37.json'

export default function Home() {
    return (
        <div className="container">
            <div className={'home'}>
                <Banner/>
                <OurBrandDiff/>
                <NewCeramics/>
                <OurPopularProducts OurProducts={OurProducts}/>
                <Registration/>
            </div>
        </div>
    )
}