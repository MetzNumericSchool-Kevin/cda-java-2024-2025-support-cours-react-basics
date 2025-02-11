import { CardImg } from "./CardImg"

// Version pour montrer comment faire de la composition

type Props = {
    children: React.ReactNode // Permet de faire de la composition de composant
    action: React.ReactNode[]
    title: string
    buttonTxt: string
}

export function Card(props: Props) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <CardImg />
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>
                    {props.children}
                </p>
                <div className="card-actions justify-end">
                    {props.action}
                </div>
            </div>
        </div>
    )
}