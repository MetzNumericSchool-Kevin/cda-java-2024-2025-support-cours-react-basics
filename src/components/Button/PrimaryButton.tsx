type Props = {
    txt: string
    onButtonClicked?: () => void // ? défini une propriété d'un objet comme non obligatoire (sa valeur sera undefined)
}

export function PrimaryButton(props: Props) {
    // const button = document.querySelector('#button')
    // button?.addEventListener('click', () => {
    //     console.log('bouton cliqué')
    // })

    return (
        <button className="btn btn-primary" onClick={props.onButtonClicked}>
            {props.txt}
        </button>
    )
}