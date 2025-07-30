import AddContent from "../components/AddContent"
import Card from "../components/Card"
import Container from "../components/Container"
import Navbar from "../components/Navbar"

export default function Home() {
    return(
        <div>
            <Container>
                <Navbar />
                <Card />
            </Container>
        </div>
    )
}