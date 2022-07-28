import Image from "next/image"
import {
    Container, 
    LogoContainer, 
    LogoIcon,
    Content, 
    Logo, 
    OptionsContainer, 
    Icon, 
    Avatar
} from "./styles"

function Header(){
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
                    <Logo src="/images/logo.svg"></Logo>
                </LogoContainer>

                <OptionsContainer>
                    <Icon src="/images/uploadicon.svg"></Icon>
                    <Avatar>
                        <Image 
                            src="/images/me(1).jpg" 
                            alt="User"
                            width="40px"
                            height="40px"
                        />
                    </Avatar>
                </OptionsContainer>
            </Content>
        </Container>
    )
}
export default Header