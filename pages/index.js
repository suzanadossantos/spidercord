import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import appConfig from '../config.json';

function Titulo(props) {
    console.log(props.children);
    const Tag = props.tag || "h1";
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag}{
                    color: ${appConfig.theme.colors.neutrals['999']};
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}

//Componente React

// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
    //const username = 'SuzanadosSantos';
    const [username, setUsername] = React.useState('SuzanadosSantos');
    const roteamento = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[200],
                    backgroundImage: 'url(https://i.pinimg.com/originals/8b/a0/37/8ba037387688a27f3856b6ea12d6f63c.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[100],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (infosDoEvento){
                            infosDoEvento.preventDefault();
                            console.log("Alguém submeteu o form")
                            roteamento.push(`/chat?username=${username}`);
                            //window.location.href= '/chat';
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Welcome to New York!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[500] }}>
                            {appConfig.name}
                        </Text>

                        {/*<input 
                        type="text"
                        value={username}
                        onChange={function (event){
                            console.log('usuario digitou', event.target.value);
                            //Onde ta o valor?
                            const valor = event.target.value;
                            //Trocar o valor da variavel
                            //através do React
                            setUsername(valor);
                        }}
                    />*/}

                        <TextField 
                        value={username}
                         onChange={function (event){
                            console.log('usuario digitou', event.target.value);
                            //Onde ta o valor?
                            const valor = event.target.value;
                            //Trocar o valor da variavel
                            //através do React
                            setUsername(valor);
                        }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.neutrals[600],
                                    backgroundColor: appConfig.theme.colors.neutrals[700],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='login'
                            disabled={username.length < 3}
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["100"],
                                mainColor: appConfig.theme.colors.primary[400],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[900],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[100],
                            border: '3px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '20px',
                            }}
                            src={`https://github.com/${username}.png`}
                            alt="Photo"
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[999],
                                backgroundColor: appConfig.theme.colors.neutrals[100],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}