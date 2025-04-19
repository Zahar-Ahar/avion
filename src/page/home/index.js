import Header from "../../components/header";
import Menu from "../../components/menu";
import Banner from "../../feature/banner";
import OurBrandDiff from "../../feature/ourBrandDiff";
import NewCeramics from "../../feature/newCeramics";

export default function Home() {
    return (
        <div className="container">
            <div className={'home'}>
                <Header/>
                <Menu/>
                <Banner/>
                <OurBrandDiff/>
                <NewCeramics/>
            </div>
        </div>
    )
}