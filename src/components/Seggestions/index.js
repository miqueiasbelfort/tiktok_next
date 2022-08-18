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
            <Icon src="/images/fecebookIcon.svg"></Icon>
            <Icon src="/images/pinterestIcon.svg"></Icon>
            <Icon src="/images/twitterIcon.svg"></Icon>
        </IconsContainer>

        <BoxContainer>
            <BoxHeader>
                <span>Contas sugeridas</span>
            </BoxHeader>
            <ItenContainer>
                {people.map((person, index) => (
                    <Item>
                        <User key={index} user={person}></User>
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
                        <RecomendedCard key={index} recomended={item}/>
                        <ArrowIcon></ArrowIcon>
                    </Item>
            ))}

            </ItenContainer>
        </BoxContainer>
            
        <DownloadImage src="/images/appstore.png"></DownloadImage>
        <DownloadImage src="/images/playstore.png"></DownloadImage>
        <DownloadImage src="/images/amazon.png"></DownloadImage>

        </Container>
    )
}
export default Suggestions