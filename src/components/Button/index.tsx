import * as S from '../../style';
type buttonProps = {
    buttonName: string
};


export const Button = ({buttonName}: buttonProps) => {
    return (
        <S.registerButton>
            {buttonName}
        </S.registerButton>
    )
}