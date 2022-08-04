import {

    Container,
    IconsContainer,
    Icon,
    BoxContainer,
    BoxHeader,
    ItenContainer,

} from "./style"

function Suggestions(){
    return(
        <Container>

        <IconsContainer>
            <Icon src=""></Icon>
            <Icon src=""></Icon>
            <Icon src=""></Icon>
        </IconsContainer>

        <BoxContainer>
            <BoxHeader>
                <span>Contas sugeridas</span>
            </BoxHeader>
            <ItenContainer>
                {people.map((person, index) => (
                    <Item>
                        <User user={person}></User>
                        <Button fontSize={14} outlined>Seguir</Button>
                    </Item>
                ))}
            </ItenContainer>
        </BoxContainer>

        <BoxContainer>
            <BoxContainer>
                <span>Descobrir</span>
            </BoxContainer>
            <ItenContainer>

            {itens.map((item, index) => (
                    <Item>
                        <User user={item}></User>
                        <Button fontSize={14} outlined>Seguir</Button>
                    </Item>
            ))}

            </ItenContainer>
        </BoxContainer>


        </Container>
    )
}