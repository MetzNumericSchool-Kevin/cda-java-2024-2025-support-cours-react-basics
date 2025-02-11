import { PrimaryButton } from "../Button/PrimaryButton";

type Props = {
    title: string
    description: string
    buttonTxt: string
}

export function CardBody(props: Props) {
    return (
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.description}</p>
            <div className="card-actions justify-end">
                <PrimaryButton txt={props.buttonTxt} />
            </div>
        </div>
    )
}