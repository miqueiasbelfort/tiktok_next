import Header from "../Header"
import Sidebar from "../Sidebar"

import {Container, SideBarContainer, ContentContainer} from "./styles"

function Layout({children}) {
    return (
        <>
            <Header></Header>
            <Container>
                <SideBarContainer>
                    <Sidebar></Sidebar>
                </SideBarContainer>
                <ContentContainer>
                    {children}
                </ContentContainer>
            </Container>
        </>
    )
}
export default Layout