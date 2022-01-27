import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js'

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI4MTk5MSwiZXhwIjoxOTU4ODU3OTkxfQ.hk-5XSuDo7tbR1VOFyzRG5Dn0wt7Sp2McXInQlsJeRQ";
const SUPABASE_URL = "https://wbjmnmieemlglmfxveph.supabase.co";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/*
fetch(`${SUPABASE_URL}/rest/v1/mensagens?select=*`, {
    headers: {
        'Content- Type': 'application/json',
        'apikey': supabaseAnonKey,
        'Authorrization': 'Bearer' + supabaseAnonKey,
    }
})

.then((res) => {
    return res.json();
})
.then((response) => {
    console.log(response);
});
*/

export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

    React.useEffect(() =>{
        supabaseClient
        .from('mensagens')
        .select('*')
        .order('id', { ascending: false})
        .then(({data}) => {
        console.log('Dados da consulta:', data);
        setListaDeMensagens(data)
        });
    }, []);

    // Sua lógica vai aqui

    // ./Sua lógica vai aqui

    /* Usuário

    // usuário aperta enter para enviar
    // tem que adicionar o texto na listagem 

    // Dev

    // usar o onChange, useState
    // lista de mensagens */

    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            // id: listaDeMensagens.length + 1,
            de: 'SuzanadosSantos',
            texto: novaMensagem,
        };

        supabaseClient
            .from('mensagens')
            .insert([
                // Tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase
                mensagem
            ])
            .then(({data}) => {
                console.log('Criando Mensagem: ', data);
                setListaDeMensagens([
                data[0],
                ...listaDeMensagens,
            ]);
        });

        setMensagem('');
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundImage: `url(https://lh4.googleusercontent.com/proxy/nDfq9RW2EEZQ_taG57WMkIzk62mfEc7OWIBzVq2GaIK8l0T-X5vNRGzSpdy5sLTXsEmhKSmb6ofuD26BHxSgGdxQvTiBjeFcRksrQ8_TuGRNSV76NjP4EHxxVP8AKuxltGhSBEcNJx6eq5WnOe88XKDdYqZ-OpEUCyeZRYryi8zB1ZRO77QaNL-sGlVl=w1200-h630-p-k-no-nu)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[100],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px', 
                        backgroundImage: "url(https://us.123rf.com/450wm/ankomando/ankomando1610/ankomando161000198/66674310-download-sign-load-icon-load-system-data-load-loading-bar-.jpg?ver=6)",
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: '30px', 
                        backgroundBlendMode: 'multiply',
                        backgroundPosition: 'top right'
                    }}
                >
                    <MessageList mensagens={listaDeMensagens}/>
                    {/* {listaDeMensagens.map((mensagemAtual) => {
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}:{mensagemAtual.texto}
                            </li>
                        )
                    })}*/}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                console.log(event);
                                const valor = event.target.value;
                                setMensagem(valor);
                            }}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    handleNovaMensagem(mensagem);
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200]
                            }}
                        /> 
                        <Button
                            onClick={() => handleNovaMensagem(mensagem)}
                            label='Enviar'
                            styleSheet={{
                                width: '20%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[500],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[100]
                            }}
                            onKeyPress={(event) => {
                                if (event.key === "Enviar") {
                                    event.preventDefault();

                                    handleNovaMensagem(mensagem);
                                }
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat - Digitando...
                </Text>
                <Button
                styleSheet={{
                    color: appConfig.theme.colors.neutrals[100],
                }}
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log(props.listaDeMensagens);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["900"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[300],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.de}.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[600],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>
                        {mensagem.texto}
                    </Text>
                );
            })}
        </Box>
    )
}