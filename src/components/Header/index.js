import {
    Container, 
    LogoContainer, 
    LogoIcon,
    Content, 
    Logo, OptionsContainer, 
    Icon, 
    Avatar
} from "./styles"

function Header(){
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <LogoIcon/>
                    <Logo></Logo>
                </LogoContainer>

                <OptionsContainer>
                    <Icon></Icon>
                    <Avatar></Avatar>
                </OptionsContainer>
            </Content>
        </Container>
    )
}
export default Header