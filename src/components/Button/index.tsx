type buttonProps = {
    buttonName: string
};


export const Button = ({buttonName}: buttonProps) => {
    return (
        <button>
            {buttonName}
        </button>
    )
}