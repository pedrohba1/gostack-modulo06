import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler'; // botões que se estilizam automaticamente independente da plataforma

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #fff;

    /* lembrando que não é possível estilizar outros componentes
        nem estilizar componentes usando aquela tag csss
     */
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#7159c1',
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #7159c1;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
`;
