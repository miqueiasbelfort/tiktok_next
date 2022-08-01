import {
    Container, 
    MenuItem,
    HomeIcon,
    PeopleIcon, 
    Following,
    FollowingHeader,
    InfoContainer,
    Links
} from "./styles"

import User from "../User"

function Sidebar(){
    return (
        <Container>
            <MenuItem active>
                <HomeIcon src="/images/homeIcon.svg"></HomeIcon>
                <span>Para você</span>
            </MenuItem>
            <MenuItem>
                <PeopleIcon src="/images/peopleIcon.svg"></PeopleIcon>
                <span>Seguindo</span>
            </MenuItem>
            <Following>
                <FollowingHeader>Suas principais contas</FollowingHeader>
                <User 
                    user={{
                        name: "Will Smith",
                        username: "willsmith",
                        avatar: "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1659463200&x-signature=XK5US0dPJLOG6m5F036L9KmkBb4%3D"
                    }}
                ></User>
            </Following>
            <InfoContainer>
                <Links margin>
                    <a>Inicio</a>
                    <a>Sobre</a>
                    <a>Sala de imprensa</a>
                    <a>Carreira</a>
                    <a>ByteDance</a>
                </Links>
                <Links>
                    <a>Ajuda</a>
                    <a>Segurança</a>
                </Links>
                <Links>
                    <a>Diretrizes da comunidade</a>
                    <a>Termos</a>
                </Links>
                <Links margin>
                    <a>Privacidade</a>
                </Links>
                <Links margin>
                    <a>@ 2022 tiktok</a>
                </Links>
            </InfoContainer>
        </Container>
    )   
}
export default Sidebar